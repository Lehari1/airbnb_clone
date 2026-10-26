# Airbnb Listing Page Clone

A desktop-only, pixel-perfect clone of an Airbnb listing page built for the Playpower Labs take-home assessment.

## 📌 Project Overview

This project is a high-fidelity implementation of an Airbnb property listing page, recreating every visual nuance, interaction, and transition from the single source of truth reference.

- **Reference URL:** [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app)
- **Target Viewports:** 1440px (primary), 1280px, 1920px (Desktop-only; mobile view excluded per specification)
- **Three Core Views:**
  1. **Listing Page:** Full property details, sticky reservation panel, amenities, reviews, host info, location map.
  2. **Photo Tour Overlay:** Modal gallery opened via "Show all photos" or any hero image tile.
  3. **Lightbox Single-Photo Viewer:** Focused photo modal with prev/next navigation, image counter, and keyboard controls (ArrowLeft, ArrowRight, Escape).

---

## 🛠 Tech Stack

- **Framework:** React + TypeScript (strict mode)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS Modules (scoped, clean, semantic)
- **Icons:** Original inline SVGs
- **Data:** Typed local JSON/TypeScript mock data (pure client-side)
- **Deployment:** Vercel (SPA routing configured via `vercel.json`)

---

## 🛡 Originality & Academic Integrity

This codebase is 100% written from scratch adhering to strict originality standards:
- **Zero code copying:** No HTML markup, class names, CSS rules, or component structures are copied or reverse-engineered from source files or devtools elements.
- **Visual-only observation:** All measurements are obtained strictly through rendered visual inspection and computed styles.
- **Custom architecture:** Components, hooks, styles, and data schemas are designed independently.
- **Originality Log:** Maintained in [`docs/originality-log.md`](docs/originality-log.md).

---

## 📂 Repository Structure

```text
├── docs/
│   └── originality-log.md       # Inspection logs & originality declaration
├── .reference/                  # Reference screenshots and visual audits (git-ignored)
├── AGENTS.md                    # Operational constraints & phase governance
├── PROMPTS.md                   # Full audit trail of user prompts
├── README.md                    # Project documentation
└── .gitignore                   # Git exclusion rules
```

---

## 🚦 Workflow Process

Development follows a strict four-phase methodology:
1. **Reconnaissance (Recon):** Visual measurement, computed styling audit, asset cataloging.
2. **Planning:** Architecture design, component decomposition, design token system.
3. **Build:** Incremental component development with continuous commit hygiene.
4. **Design QA:** Multi-viewport pixel audit (1440px, 1280px, 1920px) and interaction testing.
