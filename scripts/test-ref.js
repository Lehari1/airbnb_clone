import { chromium } from 'playwright';

async function test() {
  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
    args: ['--disable-blink-features=AutomationControlled'],
  });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();
  await page.goto('https://airbnb-clone-umber-two.vercel.app/', { waitUntil: 'networkidle' });

  console.log('Title:', await page.title());
  console.log('Body snippet:', (await page.innerText('body')).slice(0, 300));


  const showAllBtn = await page.$('button:has-text("Show all photos")');
  if (showAllBtn) {
    console.log('Clicking Show all photos...');
    await showAllBtn.click();
    await page.waitForTimeout(1000);
    const content1 = await page.content();
    console.log('Content after 1s contains Photo tour:', content1.includes('Photo tour'));
    console.log('Content after 1s contains Loading:', content1.includes('Loading...'));
    await page.waitForTimeout(2000);
    const content2 = await page.content();
    console.log('Content after 3s contains Photo tour:', content2.includes('Photo tour'));
    console.log('Content after 3s contains Loading:', content2.includes('Loading...'));
  }
  await browser.close();
}

test().catch(console.error);
