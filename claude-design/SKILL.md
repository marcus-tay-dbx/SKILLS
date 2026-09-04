---
name: claude-design
description: Generate well-branded Databricks presentations and interfaces in HTML, PDF, or Google Slides. Contains design guidelines, brand assets, colors, type, fonts, brand icons, sample slides, and templates. Invoke before any visual output task.
user-invocable: true
---

Read `README.md` and explore the files in this skill before generating any output.

## Output formats

When invoked, ask the user which output format they want (or infer from context):

1. **HTML** (default) — Create a static HTML file using `colors_and_type.css` tokens, `assets/brand/` SVGs, and `slides/deck-stage.js` for navigation. Viewable in browser, navigable with arrow keys.
2. **PDF** — Generate HTML first, then export using headless Chrome: `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --no-sandbox --print-to-pdf="OUTPUT.pdf" --print-to-pdf-no-header --no-pdf-header-footer --run-all-compositor-stages-before-draw "FILE_URL"`
3. **Google Slides** — Use the `fe-google-tools/google-slides` skill to create a native Google Slides presentation. Route through `/google-auth` first (CLI path recommended). Build slides using the Slides API batch update approach — create shapes, text boxes, and backgrounds programmatically. IMPORTANT: use `"START"` not `"LEFT"` for paragraph alignment; never put `alpha` inside `rgbColor`; always validate with `gslides_builder.py validate`.

## Key starting points

- `colors_and_type.css` — all CSS variables (Navy `#1B3139`, Lava `#FF3621`, Coral `#FF5F46`, Oat backgrounds; DM Sans / DM Mono / Barlow; spacing, radii, shadows)
- `assets/brand/` — ~370 brand SVGs: product icons, lockups, nodal illustrations, OSS/research logos
- `slides/` — sample deck (`index.html`) + per-layout slide files + `deck-stage.js` navigation component
- `templates/` — corporate, executive-events, strategy-consulting, reference-architecture starter decks

## Brand rules

Sentence case headlines. Warm Oat backgrounds with Navy + Lava/Coral accents (never blue/purple gradients). Dotted nodal illustration motif. Restrained corner radii. Soft navy-tinted shadows. Type sizes on multiples of 8.

## Google Slides specifics

- Canvas: 10" × 5.625" (914400 EMU per inch)
- Font: Barlow (all slides)
- Alignment values: `START` (not `LEFT`), `END` (not `RIGHT`), `CENTER`
- Never put `"a"` or `"alpha"` inside `rgbColor` — put `alpha` on the parent `solidFill` instead
- Send requests in batches of 50 via batchUpdate
- Run `gslides_builder.py validate` after building
