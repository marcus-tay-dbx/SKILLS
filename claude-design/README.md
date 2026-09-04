# Databricks Design System

A brand & design system for creating on-brand Databricks presentations, marketing surfaces, and product mocks. Built from the official **Databricks Corporate Slide Template** and the full set of Databricks product brand icons & lockups.

---

## Company / product context

**Databricks** is the Data + AI company behind the **Data Intelligence Platform** (formerly "Lakehouse Platform") — a unified platform built on open standards that brings together data engineering, data warehousing, streaming, governance, BI, and AI/ML on one architecture. The brand voice is confident, technical-but-human, and oriented around helping data teams "do more with their data."

This system represents the Databricks **corporate / brand** layer (presentations, identity, product naming) plus the large family of **product sub-brands**, each with its own colored icon + lockup. Products represented in the supplied assets include:

- **Platform & data:** Lakehouse, Lakebase, Unity Catalog, Delta Sharing, Delta Lake, Databricks SQL, Photon, Marketplace, Clean Rooms, Data Streaming
- **Lakeflow family:** Lakeflow, Lakeflow Connect, Lakeflow Jobs, Lakeflow Pipelines, Lakeflow Designer, Lakebridge
- **AI / analytics:** Mosaic AI, Agent Bricks, Genie, Genie Code, AI/BI, AI/BI Dashboards, Notebooks, Apps
- **Open source & research:** Unity Catalog (OSS), MLflow, Databricks Mosaic Research

### Sources provided
- `uploads/_Databricks Corporate Slide Template (MAKE A COPY) (2).pptx` — 98-slide official corporate template (the primary source of truth for type, color, layout, and tone). Brand Design Team, "Last updated Sep 2021."
- ~355 brand SVGs: product **icons** (`*-icon-full-color*.svg`), **lockups** (`*-lockup-full-color*.svg`, plus `-white`, `-container`, `-no-db`, `-navy-alt` variants), **brand illustrations** (`illustration-nodal-*.svg`), and OSS/research logos (MLflow, Unity Catalog OSS, Mosaic Research).
- All copied into `assets/brand/`.

> No external Figma or codebase was provided. This system is reverse-engineered from the PPTX (theme XML, slide layouts, color & font guidance slides) and the official brand asset SVGs. The PPTX itself confirmed the type system ("DM Sans … our new brand font"; "DM Mono … for code snippets"), the 8-multiple sizing scale, the 12-column grid, and the brand color palette.

---

## CONTENT FUNDAMENTALS

How Databricks writes, per the template's own guidance and copy samples.

- **Voice:** Confident, plain-spoken, and helpful — like a knowledgeable colleague, not a salesperson. The template literally coaches its users: *"Less is more,"* *"Don't cram too much content onto your slides,"* *"Keep it on brand,"* *"Keep it orderly."*
- **Person:** Addresses the reader directly as **"you" / "your"** ("Your starting point for great presentation designs," "Your content goes here," "Your subtitle here"). First-person plural **"we / our"** is used for the company ("our new brand font," "our slide decks," "our defined brand color palette").
- **Casing:** **Sentence case** for headlines, titles, and buttons — *not* Title Case. ("Presentation best practices," "Font selection," "Two-column content," "Card-based content slides.") ALL-CAPS is reserved for tiny eyebrow labels and is tracked out.
- **Tone:** Pragmatic and instructional. Short imperative section headers ("Keep it on brand") paired with an explanatory sentence. Encourages restraint and consistency.
- **Punctuation:** Real curly quotes and apostrophes ('  '  " "). Sentences end cleanly; minimal exclamation (occasional, friendly: "whatever else you like!").
- **Numbers / sizing language:** Concrete and rule-based ("stick to multiples of 8, with the exceptions of 12 and 20," "12 column grid").
- **Emoji:** **Not used.** The brand expresses energy through color and the dotted/nodal illustration motif, never emoji.
- **Product naming:** Products carry distinct names + colored icons (Genie, Mosaic AI, Lakeflow, Unity Catalog). Lockups pair the product name with the Databricks mark; "no-db" variants drop the Databricks mark when context already establishes it.
- **Vibe:** Modern enterprise-technical with warmth. Serious about data, but the warm "Oat" backgrounds, coral accent, and playful dotted illustrations keep it from feeling cold or corporate-blue.

---

## VISUAL FOUNDATIONS

- **Color:** A warm, distinctive palette anchored by **Navy `#1B3139`** (primary dark/ink) and the iconic **Lava `#FF3621`** orange-red, with a softer **Coral `#FF5F46`** used widely across slides and product icons. Backgrounds are warm off-whites — **Oat Light `#F9F7F4`** (the default "warm-gray" slide background) and **Oat Medium `#EEEDE9`**. Body text is a warm near-black `#3A3838`, not pure black. A broad secondary/data-viz set (slate `#618794`, green `#00A972`, amber `#FFAB00`, maroon `#98102A`, teal, blue `#4359FF`) plus matching light tints supports charts. **Pure blue/purple SaaS gradients are NOT part of the brand** — warmth + orange is the signature.
- **Type:** **DM Sans** is the brand font for everything (headlines → body). **DM Mono** for code/snippets. **Barlow** appears for some large display moments (legacy template usage). Sizes follow **multiples of 8** with 12 and 20 as in-betweens: 12 / 16 / 20 / 24 / 32 / 40 / 56 / 64. Headlines are sentence-case, tight leading, slightly negative tracking; body is 16px at relaxed leading.
- **Spacing & grid:** **12-column grid** on a 16:9 (13.33"×7.5") canvas. Everything aligns to an **8px base rhythm**. Generous margins; content is encouraged to breathe ("less is more").
- **Backgrounds:** Predominantly **solid warm Oat or white** — no photographic hero backgrounds in the core template. Visual interest comes from the **nodal/dotted illustrations** (network-of-dots line art) and full-color product icons, not textures or gradients. Dark sections use solid Navy.
- **Illustration motif:** A signature **"nodal" style** — clusters of small dots connected by thin lines forming abstract networks/shapes (`illustration-nodal-*.svg`), in coral/navy/multi-color and gray variants. This dotted-network language echoes the Databricks logo mark and represents connected data.
- **Animation:** The source is a static deck — no motion is defined. For digital surfaces, keep motion **minimal and functional**: short (~150–250ms) ease-out fades/slides, no bounces or playful spring. Restraint matches the "less is more" ethos.
- **Hover states:** Subtle. Buttons darken slightly (Lava → deeper red) or shift to a navy fill; links underline / shift to Lava. Cards lift with a slightly stronger soft shadow. Avoid large scale jumps.
- **Press states:** Brief, small (~0.98 scale or a one-step-darker fill). No dramatic depression.
- **Borders:** Thin, warm hairlines (`#E4E2DD` on oat, `#EEEDE9`/`#C4CCD6` for UI). 1px. Used sparingly — separation usually comes from background tone or shadow rather than heavy borders.
- **Shadows:** Soft, warm, low-spread, tinted with navy (not neutral gray). The template explicitly ships a "card element [with] the correct drop shadow settings already applied" — cards are the main elevated object. See `--shadow-sm/md/lg`.
- **Corner radii:** **Restrained.** Cards and buttons use small-to-medium rounding (4–12px). The brand is not bubbly; icons sit in squ0val "container" shapes (a superellipse-ish rounded square) when boxed.
- **Cards:** White (or oat) fill, small radius (8–12px), soft navy-tinted drop shadow, minimal or no border. The hero reusable object of the system — used for 3-up columns, quadrants, left/right feature cards, full-width diagram holders.
- **Transparency / blur:** Not a core part of the brand. Solid fills dominate. Light tints (the *-tint colors) provide softness instead of opacity tricks.
- **Imagery vibe:** Where photography is used it skews warm and human; but the core identity leans on **flat vector illustration + bright product icons** rather than photos.

---

## ICONOGRAPHY

See the dedicated section below and `assets/brand/`. Summary:

- **Product icons** are bespoke, multi-tone, full-color SVGs (512×512) — each Databricks product has its own icon built from the coral/peach/navy palette and the brand's geometric-dot language. These are **brand assets, not a UI icon font** — always use the supplied SVGs, never redraw them.
- **Lockups** combine a product icon + wordmark, in many variants: `full-color`, `full-color-white` (for dark bg), `-container` (boxed), `-no-db` (without the Databricks mark), `-navy-alt`. Pick by background and context.
- **Brand illustrations:** the `illustration-nodal-*` dotted-network vector set — the brand's primary decorative/explanatory imagery.
- **UI / functional icons:** The template uses simple line/solid concept icons (the "High Level / Industry / Platform / Feature" icon sheets). For product UI mocks where a matching glyph isn't supplied, substitute a clean, geometric open-source set — **Lucide** (1.5–2px stroke) is the closest match to Databricks' simple, even-weight line icons. **Flag any such substitution.**
- **Emoji / unicode icons:** Not used in the brand.

---

## VISUAL FOUNDATIONS QUICK REFERENCE

| Token | Value |
|---|---|
| Primary dark / ink | Navy `#1B3139`, body text `#3A3838` |
| Primary accent | Lava `#FF3621`, Coral `#FF5F46` |
| Backgrounds | Oat Light `#F9F7F4`, Oat Medium `#EEEDE9`, White |
| Brand font | DM Sans (DM Mono for code, Barlow for display) |
| Type scale | 12 · 16 · 20 · 24 · 32 · 40 · 56 · 64 |
| Grid | 12 columns, 8px base, 16:9 canvas |
| Radii | 4 / 8 / 12px (restrained) |
| Shadows | soft, navy-tinted, low-spread |

---

## DATA VISUALIZATION

The official corporate template treats charts as **guidance only** — its "Chart design" slide just instructs you to use *Insert > Chart* and recolor to the brand palette; there is no reusable chart object. Tables and timelines, however, are real, styled objects. This system fills the gap with **drop-in, on-brand data-viz components** (lightweight inline SVG/CSS — no chart libraries, fully editable):

- **Charts** — grouped column and line/area, rendered as inline SVG. Categorical series use the brand order: Coral `#FF5F46` → Navy-700 `#1B5162` → Green `#00A972` → Amber `#FFAB00` → Slate `#618794`. Lava `#FF3621` for single-series emphasis. Warm `#E4E2DD` gridlines, DM Mono axis labels.
- **Donut** — proportion/spend splits using the same series order, with a centered total.
- **KPI stat blocks** — white card, navy number, green/maroon delta with ▲/▼.
- **Data table** — matches the template + PoC deck exactly: **Coral `#FF5F46` header** (white text), body rows **banded white / `#F3F3F3`**, DM Sans labels, DM Mono right-aligned numerals, first column emphasized navy.
- **Gantt / timeline** — quarterly track with colored milestone bars.

These appear as deck slides (`slides/slide-charts.html`, `-kpi-dashboard`, `-data-table`, `-timeline`) and as Design System cards. Source styling extracted from the PoC Template (`Table samples`, slide 22) and the corporate template (`Table samples` slide 41, `Chart design` slide 12, `Timeline style three` slide 44).

---

## EXECUTIVE EVENTS LAYER

Sourced from the **Databricks Executive Events** brand template (`[BRAND TEMPLATE] Databricks-Executive-Events.pptx`). Same DM Sans + brand palette as the corporate deck, but adds a premium, darker event aesthetic. Folded into this system:

- **Deeper dark `--db-ink-deep: #0B2026`** — the Executive Events background color (darker than navy `#1B3139`). Use for event covers, dividers, and quote slides.
- **Line-art event backgrounds** (`assets/brand/exec/exec-bg-*.png`) — full-bleed 2048×1068 backdrops on `#0B2026` with subtle darker motifs: **arcs**, **chevrons**, **bricks outline**, **grid**. Drop white text on top. (See the "Event backgrounds" brand card.)
- **Quote background** (`exec-bg-quote.png`) — bordered frame with corner quote marks, for power-statement slides.
- **Event-title treatment** — Databricks white logo + widely letter-spaced (`.18em`) uppercase event name, with a coral accent word (`.event-title` / `.event-kicker` classes). See the "Event cover" slide.
- **Three timeline styles** — horizontal milestones (`.tl1`), vertical journey (`.tl2`), and the quarterly gantt (`.gantt-*`), matching the template's "Timeline style one/two/three."
- **Reference event lockups** (`event-lockup-*.png`) — examples of real event wordmarks (CIO Forum, Executive Roundtable, Executive Forum) for reference.

---

## AI DAYS LAYER

Sourced from the **Databricks AI Days 2026** brand deck. Same DM Sans + palette; adds two bold, distinctive title treatments now folded in:

- **Industry title slides** (`assets/brand/aidays/industry-*.png`) — a striking signature look: a **black-and-white duotone photo composited over a coral circle on black**, one per vertical: **Public Sector, Healthcare & Life Sciences, Media & Entertainment, Financial Services, Manufacturing, Retail**. White logo + coral industry eyebrow + large white title sit on the dark left side (`.slide.industry`, with a left-to-right scrim for text legibility). Swap the `background-image` to change vertical. See the "Industry title backgrounds" brand card + "Industry title" slide.
- **Bold lava-red title** (`assets/brand/aidays/bg-pattern-red-*.png`) — a full **Lava `#FF3621`** field with subtle darker geometric brand-pattern shapes (circles, quarter-circles, sparkles). White title + author/date. Great high-energy opener (`.slide.lava`). See the "Bold title" slide.
- **Author / date metadata pattern** — title slides carry `Author Name · Date` beneath the headline.
- **Animated brand motifs** (`assets/brand/aidays/motif-*-anim.gif`) — the geometric brand shapes in motion: stacked half-circles (38 frames) and a morphing circle (72 frames), transparent. Use as motion accents on covers/dividers for digital (non-print) surfaces. See the "Animated brand motifs" card.
- **Extra duotone imagery** — `industry-data-teams.png` (developer/data-team duotone) extends the vertical set; `imagery-data-center.png` is a high-res server-room shot for tech backgrounds.

---

## STRATEGY / CONSULTING LAYER

Structural conventions borrowed from top strategy decks (the *thinking patterns*, rendered entirely in Databricks' brand skin — never MBB's visual identity). These make a data-heavy deck land with executives:

- **Action titles** — the headline is a full-sentence takeaway with a coral kicker above and a coral-tipped rule below (`.action-kicker` / `.action-title` / `.action-rule`). Write the "so what" ("Cost per workload falls 59%…"), not the topic ("Results").
- **Executive summary** — 3–5 numbered takeaways (`.exsum`) up front so an exec gets the whole story in under a minute.
- **Insight callout** — a navy "So what" box (`.insight`) beside an exhibit that forces a conclusion.
- **Source / footnote line** — small italic `Source: …` bottom-left with superscript markers (`.source-line` / `.fnote`) for credibility.
- **2×2 matrix** — labeled value/effort quadrants (`.mtx`), coral "do/strategic" quadrant, plotted dots.
- **Waterfall (cost bridge)** — floating-bar SVG walking a start value to an end value; decrements in coral, totals in navy/lava.
- **Harvey balls** — ◔◑◕● capability ratings (`.hb`) in a comparison table with the Databricks column highlighted.

Slides: `slide-executive-summary`, `slide-action-title`, `slide-2x2-matrix`, `slide-waterfall`, `slide-comparison`. Reusable primitives are also Design System cards (Action title, Insight callout, Harvey balls).

> Deliberately **not** adopted: MBB color/type identity, dense text-walls, or any proprietary template — those would fight Databricks' "less is more" brand.

---

## REFERENCE ARCHITECTURE LAYER

Sourced from the **Databricks Reference Architecture Slides** deck. The reusable value isn't the deck's 261 embedded images (mostly one-off, third-party diagram fragments) — it's **proven layout templates** so a reference-architecture slide can be built from a correct starting point, plus a small curated icon set.

- **Reference-architecture layout** (`.lh` / `.lh-platform` / `.lh-panel` / `.lh-flow`) — a faithful rebuild of the canonical Databricks lakehouse reference architecture (from the source deck's detailed technical slides): a **Data Sources** rail → central navy **Databricks platform** holding a *Machine Learning & GenAI* panel and a *Data Engineering* panel with the inline **Bronze → Spark ETL → Silver → Spark ETL → Gold** medallion flow, a Unity Catalog governance strip, → a **Serve & Consume** (BI/SQL, Power BI, Genie, apps) panel, with coral flow arrows between columns. See `slide-reference-architecture`. There is also a simpler `.arch` swim-lane primitive for lighter diagrams.
- **Lakehouse blueprint** (`slide-lakehouse-blueprint`, classes `.adia` / `.ad-card` / `.ad-stage` / `.ad-mlchip`) — a faithful rebuild of the full "Azure Databricks Lakehouse Architecture" exhibit: Batch + Streaming sources → Ingestion (Ingest / Copy Into / Auto Loader / Structured Streaming) → stacked **Machine Learning** (MLflow Develop/Manage/Deploy) and **Data Engineering** (Bronze/Silver/Gold) panels → Data Warehousing → right-hand consumers (Data Apps, BI, Consumers), over a full-width **Lakehouse Platform** strip (Governance / Orchestration / CI-CD / Observability / Multi-cloud). Teal section heads, chevron connectors.
- **Azure flow example** (`slide-azure-flow-example`) — the staged "Ingest / Store / Prep and Train / Serve" flow with a left source rail (sensors, logs, media, files, apps) and dotted lane separators. Cloud specifics adapted to **Azure** (Event Hubs/IoT Hub/Kafka, Data Factory, ADLS Gen2 + Delta, AKS, Cosmos/Azure SQL, Synapse, Power BI).

> Source-type glyphs on these two slides use minimal inline monoline icons (Lucide-style) — flagged as a substitution since the brand has no dedicated source-icon set.
- **Medallion architecture** (`.medallion` / `.med` bronze/silver/gold) — the signature Databricks Bronze → Silver → Gold refinement pattern with metallic rings, mono sub-tags, and a "why it works" insight. See `slide-medallion`.
- **Curated architecture icons** (`assets/brand/arch/`) — **Azure-only** among cloud providers (the target customer is an Azure shop): `azure.png`, `azure-sql.png`, `power-bi.png`, plus `delta-lake.png` and a generic `cloud.png`. AWS/GCP icons were deliberately **not** imported. For diagram nodes, prefer this system's Databricks product SVGs (`assets/brand/*-icon-full-color.svg`); use the cloud icons only for non-Databricks source/consume nodes.

> Third-party service logos (Kafka, Tableau, Power BI, Azure, etc.) are other companies' trademarks — included only as minimal diagram references, not as Databricks brand assets.

---

## Index / manifest

Root files:
- **`README.md`** — this file: context, content + visual foundations, iconography, manifest.
- **`colors_and_type.css`** — all color, type, spacing, radius, and shadow CSS variables + semantic type classes. Import this in any artifact.
- **`SKILL.md`** — Agent-Skill front-matter so this system is usable as a downloadable skill.

Folders:
- **`templates/`** — pickable starting-point decks a consumer copies. Each `<slug>/index.html` is self-contained (loads `./ds-base.js` + `./deck-stage.js`) with `@template` metadata on line 1: **`corporate/`** (cover, agenda, sections, content, cards, statement, stats, closing), **`executive-events/`** (dark event cover + quote), **`strategy-consulting/`** (action-title deck: exec summary, charts, KPIs, 2×2, waterfall, comparison), **`reference-architecture/`** (Azure lakehouse diagrams + medallion).
- **`assets/partners/`** — third-party / co-brand partner logos (e.g. Walgreens: wordmark, W mark, "Buy at Walgreens.com" button) for customer-story and partner slides. Transparent PNGs.
- **`assets/brand/`** — all ~355 brand SVGs: product icons, lockups (all variants), nodal illustrations, OSS/research logos.
- **`preview/`** — Design-System tab cards (colors, type, spacing, components, brand).
- **`slides/`** — sample presentation slides recreating the corporate template layouts (title, section, content, power statement, cards, etc.).
- **`ui_kits/website/`** — Databricks.com-style marketing-site recreation (React/JSX components + `index.html`). See `ui_kits/website/README.md`.

---

## Caveats
- **Official Databricks logo is now included** in `assets/brand/` — horizontal lockup (`databricks-logo-full-color.svg`, `-white`, `-navy`, `-black`, `-white-mono`), stacked lockup (`databricks-logo-stacked-*`), and the standalone bricks symbol (`databricks-symbol-color/white/navy.svg`). Used in the website nav/footer and the deck cover/closing. Full-color on light, white on dark/navy.
- The PPTX theme colors that drive the brand live in **theme3** (the active brand theme); theme1/theme2 are default Office/Google boilerplate and were ignored.
- Fonts: **DM Sans** and **DM Mono** are **self-hosted** from `fonts/` (uploaded `.ttf`s). **Barlow** (display accent) loads from Google Fonts.
