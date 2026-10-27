import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const LOCAL_BASE_URL = 'http://localhost:5173';
const REF_BASE_URL = 'https://airbnb-clone-umber-two.vercel.app';
const DIFFS_DIR = path.resolve(process.cwd(), '.reference/diffs');
const GOLDENS_DIR = path.resolve(process.cwd(), '.reference/goldens');

if (!fs.existsSync(DIFFS_DIR)) {
  fs.mkdirSync(DIFFS_DIR, { recursive: true });
}

// Verification viewports
const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1280', width: 1280, height: 800 },
  { name: '1920', width: 1920, height: 1080 },
];

const STATES = [
  {
    id: '01_listing_top',
    name: 'Listing Page - Top Hero & Header',
    type: 'listing',
    path: '/',
    scrollY: 0,
  },
  {
    id: '02_listing_overview',
    name: 'Listing Page - Sticky Header & Overview',
    type: 'listing',
    path: '/',
    scrollY: 650,
  },
  {
    id: '03_listing_amenities',
    name: 'Listing Page - Amenities & Sticky Card',
    type: 'listing',
    path: '/',
    scrollY: 1600,
  },
  {
    id: '04_listing_calendar',
    name: 'Listing Page - Dual Month Calendar',
    type: 'listing',
    path: '/',
    scrollY: 2200,
  },
  {
    id: '05_listing_reviews',
    name: 'Listing Page - Reviews & Rating Bars',
    type: 'listing',
    path: '/',
    scrollY: 3000,
  },
  {
    id: '06_listing_location',
    name: 'Listing Page - Location & Map',
    type: 'listing',
    path: '/',
    scrollY: 4400,
  },
  {
    id: '07_listing_footer',
    name: 'Listing Page - Host Profile, Things to Know & Footer',
    type: 'listing',
    path: '/',
    scrollY: 6000,
  },
  {
    id: '08_photo_tour_top',
    name: 'Photo Tour - Top View (Living room 1)',
    type: 'photo_tour',
    path: '/?modal=PHOTO_TOUR_SCROLLABLE',
    action: 'open_tour',
  },
  {
    id: '09_photo_tour_bedroom',
    name: 'Photo Tour - Bedroom Section',
    type: 'photo_tour',
    path: '/?modal=PHOTO_TOUR_SCROLLABLE&room=bedroom',
    action: 'bedroom_tab',
  },
  {
    id: '10_lightbox_first',
    name: 'Lightbox - First Photo (1 of 43, Disabled Prev)',
    type: 'lightbox',
    path: '/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=0',
    action: 'first_photo',
  },
  {
    id: '11_lightbox_bedroom',
    name: 'Lightbox - Bedroom Photo (10 of 43)',
    type: 'lightbox',
    path: '/?modal=PHOTO_TOUR_SCROLLABLE&modalItem=9',
    action: 'bedroom_photo',
  },
];

const DISABLE_ANIMATIONS_CSS = `
  *, *::before, *::after {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    -ms-transition: none !important;
    transition: none !important;
    -webkit-animation: none !important;
    -moz-animation: none !important;
    -o-animation: none !important;
    -ms-animation: none !important;
    animation: none !important;
    caret-color: transparent !important;
  }
`;

async function renderLocalState(page, state) {
  const url = `${LOCAL_BASE_URL}${state.path}`;
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.addStyleTag({ content: DISABLE_ANIMATIONS_CSS });

  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  });

  if (state.scrollY > 0) {
    await page.evaluate((y) => window.scrollTo(0, y), state.scrollY);
    await page.waitForTimeout(600);
  } else {
    await page.waitForTimeout(400);
  }

  return await page.screenshot();
}

async function getReferenceBuffer(state, vp, pageRef) {
  // Check if golden reference image exists for this state and viewport
  const goldenFile = path.join(GOLDENS_DIR, `${state.id}_${vp.name}px_ref.png`);
  if (fs.existsSync(goldenFile)) {
    return fs.readFileSync(goldenFile);
  }

  // Fallback: try capturing live reference
  try {
    const url = `${REF_BASE_URL}${state.path}`;
    await pageRef.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await pageRef.addStyleTag({ content: DISABLE_ANIMATIONS_CSS });
    if (state.scrollY > 0) {
      await pageRef.evaluate((y) => window.scrollTo(0, y), state.scrollY);
      await pageRef.waitForTimeout(600);
    } else {
      await pageRef.waitForTimeout(400);
    }
    return await pageRef.screenshot();
  } catch (e) {
    // If not reachable, return a placeholder or 1440 golden
    const defaultGolden = path.join(GOLDENS_DIR, `${state.id}_1440px_ref.png`);
    if (fs.existsSync(defaultGolden)) {
      return fs.readFileSync(defaultGolden);
    }
    throw e;
  }
}

function cropToMatch(img, targetWidth, targetHeight) {
  if (img.width === targetWidth && img.height === targetHeight) {
    return img;
  }
  const cropped = new PNG({ width: targetWidth, height: targetHeight });
  for (let y = 0; y < targetHeight; y++) {
    for (let x = 0; x < targetWidth; x++) {
      const srcIdx = (y * img.width + x) * 4;
      const dstIdx = (y * targetWidth + x) * 4;
      cropped.data[dstIdx] = img.data[srcIdx] !== undefined ? img.data[srcIdx] : 255;
      cropped.data[dstIdx + 1] = img.data[srcIdx + 1] !== undefined ? img.data[srcIdx + 1] : 255;
      cropped.data[dstIdx + 2] = img.data[srcIdx + 2] !== undefined ? img.data[srcIdx + 2] : 255;
      cropped.data[dstIdx + 3] = img.data[srcIdx + 3] !== undefined ? img.data[srcIdx + 3] : 255;
    }
  }
  return cropped;
}

async function runVisualDiff() {

  console.log('===============================================================');
  console.log(' Starting Automated Visual QA Pass (Playwright + Pixelmatch)   ');
  console.log(` Reference: ${REF_BASE_URL} (with Golden Backups)`);
  console.log(` Local:     ${LOCAL_BASE_URL}`);
  console.log(` Diff Output: ${DIFFS_DIR}`);
  console.log('===============================================================\n');

  const browser = await chromium.launch({
    headless: true,
    args: ['--disable-blink-features=AutomationControlled'],
  });

  const results = [];

  for (const vp of VIEWPORTS) {
    console.log(`\n>>> Testing Viewport: ${vp.width}x${vp.height} (${vp.name}px)`);

    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });

    const pageLocal = await context.newPage();
    const pageRef = await context.newPage();

    for (const state of STATES) {
      const stateLabel = `[${vp.name}px] ${state.name}`;
      process.stdout.write(`  - Comparing: ${stateLabel} ... `);

      try {
        const localBuffer = await renderLocalState(pageLocal, state);
        const refBuffer = await getReferenceBuffer(state, vp, pageRef);

        const imgRef = PNG.sync.read(refBuffer);
        const imgLocal = PNG.sync.read(localBuffer);



        const width = Math.min(imgRef.width, imgLocal.width);
        const height = Math.min(imgRef.height, imgLocal.height);

        const normRef = cropToMatch(imgRef, width, height);
        const normLocal = cropToMatch(imgLocal, width, height);

        const diff = new PNG({ width, height });
        const mismatchedPixels = pixelmatch(
          normRef.data,
          normLocal.data,
          diff.data,
          width,
          height,
          { threshold: 0.1, diffColor: [255, 0, 0] }
        );


        const totalPixels = width * height;
        const mismatchPct = ((mismatchedPixels / totalPixels) * 100).toFixed(2);

        const filePrefix = `${state.id}_${vp.name}px`;
        fs.writeFileSync(path.join(DIFFS_DIR, `${filePrefix}_ref.png`), refBuffer);
        fs.writeFileSync(path.join(DIFFS_DIR, `${filePrefix}_local.png`), localBuffer);
        fs.writeFileSync(path.join(DIFFS_DIR, `${filePrefix}_diff.png`), PNG.sync.write(diff));

        const resultItem = {
          viewport: `${vp.name}px`,
          state: state.name,
          stateId: state.id,
          totalPixels,
          mismatchedPixels,
          mismatchPct: parseFloat(mismatchPct),
          diffFile: `${filePrefix}_diff.png`,
        };
        results.push(resultItem);

        console.log(`Diff: ${mismatchPct}% (${mismatchedPixels} px)`);
      } catch (err) {
        console.log(`ERROR: ${err.message}`);
        results.push({
          viewport: `${vp.name}px`,
          state: state.name,
          stateId: state.id,
          error: err.message,
        });
      }
    }

    await context.close();
  }

  await browser.close();

  const summaryPath = path.join(DIFFS_DIR, 'summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(results, null, 2));

  console.log('\n===============================================================');
  console.log(` Visual QA Pass Complete. Summary saved to ${summaryPath}`);
  console.log('===============================================================\n');

  return results;
}

runVisualDiff().catch((err) => {
  console.error('Fatal visual diff error:', err);
  process.exit(1);
});
