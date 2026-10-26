# Airbnb Listing Clone — Project Rules & Guidelines (AGENTS.md)

This project is a desktop-only, pixel-perfect clone of an Airbnb listing page created for a take-home assessment (Playpower Labs).
This document is the governing guide and must be re-read at the start of every phase.

---

## 1. Project Reference & Target Scope

- **Single Source of Truth Reference**: `https://airbnb-clone-umber-two.vercel.app`
- **Views to Implement**:
  1. **Listing Page**: Main listing presentation with header, hero image grid, listing details, host info, amenities, reviews, map/location, sticky reservation card, etc.
  2. **Photo Tour Overlay**: Full photo collection overlay/modal triggered via "Show all photos" or any hero image click.
  3. **Lightbox Single-Photo Viewer**: Dedicated full-screen single-photo modal with previous/next controls, photo counter, and keyboard navigation (Left/Right arrow keys, Escape).
- **Target Viewport**:
  - Primary target: **1440px** wide
  - Verification target viewports: **1280px** and **1920px**
  - **No mobile layout** (desktop-only).

---

## 2. Originality Rules (Anti-Plagiarism Enforcement)

A plagiarism detector will be executed against this submission. Lift-and-shift code will result in a lower score or disqualification.

1. **Observe, Never Copy**:
   - Use browser interaction strictly to inspect the **RENDERED** page: screenshots, visual measurements, and computed style values (dimensions, colors, typography, spacing, timings).
   - **DO NOT** open view-source, the Sources panel, the Network tab, JavaScript bundles, or source maps.
   - **DO NOT** copy HTML markup, class names, CSS rules, or component architecture from the Elements panel.
   - **DO NOT** save the page locally, `curl`/`wget` files, or use scrapers/cloners.
2. **Write Everything from Scratch**:
   - Write original component names, file hierarchy, CSS module class names, custom hooks, documentation, and variable names.
   - If any structure begins mirroring the reference's internal DOM structure or class naming conventions, immediately stop and refactor.
3. **Independent Stack & Styling**:
   - Select stack and styling structure independently: React + TypeScript (strict mode) + Vite with CSS Modules.
   - Do not infer, duplicate, or mirror the reference's framework-specific internals.
4. **Data & Assets Isolation**:
   - Text content and public image URLs may be reused as **DATA ONLY** inside a custom, strongly typed local TypeScript data structure.
   - Icons must be drawn as original, clean inline SVG components.
5. **Originality Log**:
   - Maintain `docs/originality-log.md` with timestamps documenting:
     - Specific visual measurements, screenshots, and computed values observed.
     - Formal confirmation that no source code, markup, or internal styles were scraped or copied.

---

## 3. Git Rules

1. **Local Repository Only**:
   - Work strictly within a local Git repository.
   - Never create or push to a public GitHub repository.
   - If a remote repository is required, it must be strictly **PRIVATE**, and explicit user confirmation must be obtained first.
2. **Commit Hygiene**:
   - Commit small and often using standard Conventional Commits (`feat:`, `fix:`, `style:`, `docs:`, `chore:`).
   - Exactly one logical change per commit to maintain a clean, auditable history demonstrating genuine incremental development.
3. **Strict Ignore Policy**:
   - Maintain `.gitignore` covering `node_modules`, `dist`, `.env*`, `.vercel`, `.reference/`, and OS metadata files.
   - Never commit tokens, credentials, or private configuration.
4. **Reference Isolation**:
   - All reference screenshots, layout notes, and raw measurement logs stay inside `.reference/` (git-ignored) and must be omitted from final delivery archives.

---

## 4. Deployment Rules

1. **Vercel Deployment**:
   - Deploy using the Vercel CLI from the local project root (or private repository import). No public repositories.
2. **Production Safeguards**:
   - Disable production source maps (`build.sourcemap: false` in Vite configuration).
   - Provide `vercel.json` with an SPA rewrite rule (`"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`) ensuring overlay states and deep links survive browser refresh.
3. **Equivalence Validation**:
   - Rigorously test and verify the deployed URL to ensure visual rendering and interactive behavior match the local dev environment identically.

---

## 5. General Rules & Engineering Standards

- **Visual & Behavioral Fidelity**:
  - Match layout, spacing, typography, colors, iconography, assets, hover states, scroll triggers, modal animations, keyboard navigation, focus management, and accessibility.
- **Clean & Complete**:
  - Deliver clean, robust code without over-engineering. Do not add superfluous features absent from the reference.
- **Technical Stack**:
  - React (latest stable)
  - TypeScript (strict mode enabled)
  - Vite (fast build system)
  - CSS Modules (modular, scoped vanilla CSS styling)
  - Pure typed local data file (no backend service)
- **Workflow Phases**:
  1. **Reconnaissance (Recon)**: Visual capture, rendered computed style audit, asset & data cataloging.
  2. **Planning**: Architecture diagram, component breakdown, state model, design tokens.
  3. **Build**: Incremental component development, styling, modal overlays, interaction hooks.
  4. **Design QA**: Side-by-side visual diffing at 1440px / 1280px / 1920px, keyboard & interaction audit.
  - Present phase boundary artifacts and await user approval before advancing.
- **Prompt Log**:
  - Append every user prompt to `PROMPTS.md`.
- **Pre-phase Protocol**:
  - Re-read `AGENTS.md` before starting each phase.
