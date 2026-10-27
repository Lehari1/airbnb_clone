# Prompt History

This document logs all user prompts received throughout the assessment lifecycle.

---

### Prompt 1 — Project Initialization & Skeleton Setup
**Timestamp:** 2026-10-26T23:20:19+05:30

```text
You are my senior front-end engineer and design-QA partner. We are building a
pixel-perfect, desktop-only clone of an Airbnb listing page for a take-home
assessment (Playpower Labs).
Reference (single source of truth): https://airbnb-clone-umber-two.vercel.app
Three views: (1) Listing Page, (2) Photo Tour overlay (opened via "Show all
photos" or any hero image), (3) Lightbox single-photo viewer with prev/next
arrows and keyboard Left/Right.
Target viewport: 1440px wide (also verify 1280 and 1920). No mobile layout.
ORIGINALITY RULES (a plagiarism detector will be run; lift-and-shift means
lower score or disqualification)
1. Observe, never copy. Use the browser only to look at the RENDERED page:
screenshots, visual measurements, and computed style values (sizes, colours,
spacing, timings). Do NOT open view-source, the Sources panel, the Network
tab, JS bundles or source maps. Do NOT copy markup, class names, CSS rules or
component structure from the Elements panel. Do not save the page, curl/wget
it, or use any scraper or "website cloner" tool.
2. Write everything from scratch: my own component names, file structure,
class names, CSS, hooks, comments and variable names. If anything starts to
mirror the reference's DOM structure or naming, stop and restructure.
3. Choose the stack and styling approach independently. Do not try to infer
or mirror the reference's framework.
4. Text content and image URLs may be reused as DATA only, in my own typed
data file. Icons are redrawn as my own inline SVG components.
5. Keep docs/originality-log.md: what was observed (screenshots,
measurements), and a statement that no source was copied.
GIT RULES
1. Initialise a LOCAL git repo. Never create or push to a public GitHub
repository. If a remote is ever needed it must be PRIVATE, and you must ask
me first.
2. Commit small and often with conventional messages
(feat/fix/style/docs/chore), one logical change per commit, so history shows
real incremental work.
3. Add a .gitignore: node_modules, dist, .env*, .vercel, .reference/, OS
files. Never commit secrets or tokens.
4. Reference screenshots and measurements stay in .reference/ (git-ignored)
and out of the final zip.
DEPLOYMENT RULES
1. Deploy to Vercel with the Vercel CLI from the local project (or a private
repo import). No public repo.
2. Production source maps off (build.sourcemap: false). Add vercel.json with
an SPA rewrite so overlay deep links survive refresh.
3. Verify the deployed URL behaves identically to local.
GENERAL RULES
- Match visuals AND behaviour: layout, spacing, typography, colours, icons,
assets, hover/scroll animations, transitions, keyboard navigation, focus
management, accessibility.
- Clean and complete beats over-engineered. Add no feature the reference
lacks.
- Stack: React + TypeScript (strict) + Vite, with CSS Modules. No backend;
typed local data file.
- Process: recon, plan, build, QA, in that order. Show artifacts at each
phase boundary and wait for my approval.
- Append every prompt to PROMPTS.md.
- Re-read AGENTS.md at the start of every phase.
Confirm you understand. Then create the skeleton: git init, .gitignore,
README.md, AGENTS.md (containing ALL rules above), PROMPTS.md,
docs/originality-log.md. Write no app code yet.
```

---

### Prompt 2 — Reconnaissance: Interaction Matrix Specification
**Timestamp:** 2026-10-26T23:29:03+05:30

```text
Continue observing the reference. Produce docs/reference-spec.md section
"Interaction Matrix".
For each interactive element on the Listing Page, record:
- Default, hover, active, focus-visible and disabled states (what changes:
colour, scale, shadow, underline, opacity, cursor).
- Transition property, duration and easing (estimate from observation and
computed transition values).
- Hero images: hover effect, click behaviour.
- "Show all photos" button: hover/press states.
- Share and Save actions: behaviour on click.
- Sticky header / sticky reservation card: when and how they appear or stick.
- Scroll-triggered animations (reveals, parallax, header changes) with
trigger offsets.
- Reservation card and calendar interactions.
Present as a table: Element | Trigger | Effect | Duration | Easing | Notes
```

---

### Prompt 3 — Reconnaissance: Photo Tour Deep Specification & Screenshot Audit
**Timestamp:** 2026-10-27T00:18:45+05:30

```text
Open the Photo Tour by clicking "Show all photos" and also by clicking each
hero image. Observe only.
Document in docs/reference-spec.md section "Photo Tour":
1. Opening animation (fade/slide/scale), duration, easing, backdrop, and
closing animation.
2. Layout: top thumbnail category bar (labels, thumbnail size, spacing,
active state), room sections (heading, subtitle/amenities line, image grid
pattern and gaps), close/back button position.
3. Behaviour: clicking a thumbnail tab (smooth scroll? offset?), active tab
changes while scrolling (trigger thresholds), sticky bar behaviour, body
scroll lock.
4. Which image opens when each hero image is clicked (does the Photo Tour
scroll to that image or section?).
5. Keyboard: Tab order, Escape, focus on open, focus return on close.
6. Per-section image list with captions and grid layout for each photo group.
7. Screenshots of every state in screenshots/photo-tour/.
```

---

### Prompt 4 — Continuation of Photo Tour Reconnaissance
**Timestamp:** 2026-10-27T11:53:41+05:30

```text
continue where u have left in the previous prompt
```

---

### Prompt 5 — Reconnaissance: Lightbox Specification & Full Accessibility Summary
**Timestamp:** 2026-10-27T12:12:04+05:30

```text
Open a photo from the Photo Tour to reach the Lightbox. Observe only.
Document in docs/reference-spec.md section "Lightbox":
1. Open/close animation (e.g. fade or zoom from the clicked photo), duration, 
easing.
2. Image sizing rules (max width/height, object-fit, centering, backdrop 
colour).
3. Prev/next arrow buttons: position, size, hover/focus states, disabled 
state at first/last image, wrap-around or not.
4. Transition when switching images (slide, crossfade, none), duration, 
easing.
5. Keyboard: Left/Right, Escape, Tab behaviour, focus trap, focus return 
target on close.
6. Counter or caption presence, click-on-backdrop behaviour, scroll lock.
7. ARIA roles and labels you can observe in the accessibility tree (dialog 
role, aria-modal, button labels, image alt text).
8. prefers-reduced-motion behaviour if observable.
Then add a final "Accessibility Summary" covering all three views
```

---

### Prompt 6 — Planning: Implementation Plan & Architecture Specification
**Timestamp:** 2026-10-27T12:20:22+05:30

```text
Using docs/reference-spec.md, write docs/implementation-plan.md and show it 
as an artifact for approval. Do not write app code.
Include:
1. Folder structure and component tree (Header, Hero grid, Summary, 
Amenities, Reviews, Location, ReservationCard, PhotoTour, Lightbox, shared 
primitives and icon components).
2. Design tokens file (colours, typography, spacing, radii, shadows, 
transitions) derived from the spec.
3. Data model (TypeScript types and a local data file for listing, photos by 
category, amenities, reviews, host).
4. Overlay state strategy: Photo Tour and Lightbox as URL-driven state (hash 
or query) so back button closes them and they are deep-linkable. State which 
image/index the Lightbox opens at.
5. Animation approach (CSS transitions on transform/opacity, easing curves, 
reduced-motion fallback).
6. Accessibility plan: focus trap hook, focus restoration, scroll-lock hook, 
keyboard handlers, ARIA attributes, visible focus styles.
7. Performance plan: lazy loading, reserved aspect ratios, preloading 
adjacent lightbox images.
8. Build order and a definition of done per view.
Ask me to approve before proceeding.
```

---

### Prompt 7 — Build: Foundation Scaffolding, Tokens, Primitives, Hooks & Data
**Timestamp:** 2026-10-27T12:34:42+05:30

```text
Plan approved. Scaffold the project: Vite + React + TypeScript (strict mode), 
CSS Modules, ESLint, Prettier.
Implement:
1. vite.config with build.sourcemap = false, and vercel.json with an SPA 
rewrite.
2. Global styles, font loading (matching the font identified in the spec), 
and the design-tokens file as CSS custom properties from the spec.
3. Shared primitives: Button, IconButton, Divider, Avatar, Rating, and an 
Icon set of my own inline SVG components.
4. Reusable hooks: useScrollLock, useFocusTrap, useEscapeKey, 
useReducedMotion.
5. The typed data file populated from the spec (listing, photos, amenities, 
reviews).
No `any`. Small, focused components. Run lint and type-check and fix 
everything. Make a git commit for each logical step. Summarise what was 
created.
```

---

### Prompt 8 — Build: Top of Listing Page (Header, Title, Hero Bento Grid, Summary & Guest Favourite Card)
**Timestamp:** 2026-10-27T13:32:37+05:30

```text
Build the top of the Listing Page to match the reference at 1440px: 
header/nav, title row with Share and Save actions, the 5-image hero grid with 
"Show all photos" button, and the property summary row ("Entire serviced 
apartment in Candolim, India", guests/bedrooms/bed/bathroom line, rating or 
favourite card).
Match exact spacing, typography, colours, radii and hover states from 
docs/reference-spec.md. Hero images and the button must open the Photo Tour 
(wire to the overlay state, even if the overlay is not built yet).
After building, take a screenshot at 1440x900 and compare it with the 
reference screenshot. List differences and fix them before reporting.
```

---

### Prompt 9 — Build: Remaining Listing Page Sections & Sticky Reservation Card
**Timestamp:** 2026-10-27T14:39:38+05:30

```text
Build the remaining Listing Page sections in order: host and highlights, 
description, sleeping arrangements, amenities (with "show all" behaviour if 
the reference has it), calendar/availability, reviews, location/map, host 
profile, things to know, footer, and the reservation card including its 
sticky behaviour.
Follow docs/reference-spec.md exactly, including scroll-triggered effects and 
hover/focus states. Use semantic landmarks and a correct heading hierarchy.
After each two sections, screenshot and compare with the reference at the 
same scroll position. Fix differences before continuing.
```

---

### Prompt 10 — Build: Photo Tour Overlay (View 2)
**Timestamp:** 2026-10-27T16:41:12+05:30

```text
Build the Photo Tour overlay to match the reference:
- Open and close animations with the recorded duration and easing.
- Top thumbnail category bar with active state tracking while scrolling 
(IntersectionObserver), smooth scroll on tab click with the correct offset.
- Room sections with headings, subtitle lines and the exact image grid 
patterns and gaps.
- Close button, body scroll lock, role="dialog", aria-modal, aria-label.
- Focus moves into the dialog on open, is trapped, Escape closes, and focus 
returns to the trigger.
- Opening from a specific hero image scrolls to or highlights the right 
section, exactly as the reference does.
- Clicking any photo opens the Lightbox at that photo.
Verify with screenshots and a keyboard-only run-through
```


