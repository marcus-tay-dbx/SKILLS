---
name: claude-design
description: Generate well-branded Databricks presentations in HTML, PDF, or Google Slides. Contains design guidelines, brand assets, colors, type, fonts, brand icons, sample slides, and templates. Always invoke before any visual output task.
user-invocable: true
---

Read `README.md` first, then follow the instructions below.

## Output formats

When invoked, ask the user which output format they want (or infer from context):

1. **HTML** — Static HTML file using `colors_and_type.css` tokens, `assets/brand/` SVGs, and `slides/deck-stage.js` for navigation.
2. **PDF** — Generate HTML first, then export with headless Chrome.
3. **Google Slides** — Use the Slides API. Route through `/google-auth` (CLI path). ALL layout rules below are MANDATORY.

## Brand rules

- Sentence case headlines (never Title Case). No emoji.
- Warm Oat backgrounds with Navy + Lava/Coral accents (never blue/purple gradients).
- Dotted nodal illustration motif. Restrained corner radii.
- Font: **Barlow** for all Google Slides text; DM Sans / DM Mono / Barlow in HTML.

---

## Google Slides Generation — MANDATORY layout system

These rules are REQUIRED. Violating them produces text overflow, overlapping elements, and clipped content.

### Canvas constants

```python
W, H     = 10.0, 5.625   # slide width x height in inches (16:9)
ML, MR   = 0.35, 0.35    # left / right margins
MT       = 0.30           # top margin
CW       = W - ML - MR   # content width = 9.3"
FOOTER_Y = H - 0.28       # footer y = 5.345"
EMU      = 914400         # 1 inch in EMU
```

### Colour palette

```python
NAVY  = {"red":0.106,"green":0.192,"blue":0.216}
RED   = {"red":1.0,  "green":0.212,"blue":0.125}
CORAL = {"red":1.0,  "green":0.373,"blue":0.275}
OAT   = {"red":0.976,"green":0.969,"blue":0.957}
WHITE = {"red":1.0,  "green":1.0,  "blue":1.0}
LINE  = {"red":0.878,"green":0.871,"blue":0.851}
```

### Primitives — copy verbatim, never modify

```python
def pt(v): return {"magnitude": v, "unit": "PT"}
def em(v): return {"magnitude": int(v * 914400), "unit": "EMU"}
def rgb(c): return {"rgbColor": c}
AL = {"L":"START","R":"END","C":"CENTER"}

def box(sid, nm, x, y, w, h, fill, outline_col=None, outline_w=None):
    o = f"{sid}_{nm}"
    props = {"shapeBackgroundFill": {"solidFill": {"color": rgb(fill)}}}
    if outline_col and outline_w:
        props["outline"] = {"outlineFill": {"solidFill": {"color": rgb(outline_col)}},
                            "weight": pt(outline_w)}
        flds = "shapeBackgroundFill,outline"
    else:
        props["outline"] = {"propertyState": "NOT_RENDERED"}
        flds = "shapeBackgroundFill,outline"
    return [
        {"createShape": {"objectId": o, "shapeType": "RECTANGLE",
            "elementProperties": {"pageObjectId": sid,
                "size": {"width": em(w), "height": em(h)},
                "transform": {"scaleX":1,"scaleY":1,
                    "translateX": int(x*914400), "translateY": int(y*914400), "unit":"EMU"}}}},
        {"updateShapeProperties": {"objectId": o,
            "shapeProperties": props, "fields": flds}}]

def txt(sid, nm, x, y, w, h, text, fs=12, bold=False, italic=False,
        color=None, align="L", bg=None):
    """Text boxes always have outline=NOT_RENDERED. Use box() for bordered shapes."""
    o = f"{sid}_{nm}"
    sp = {"outline": {"propertyState": "NOT_RENDERED"}}
    if bg: sp["shapeBackgroundFill"] = {"solidFill": {"color": rgb(bg)}}
    flds = "outline" + (",shapeBackgroundFill" if bg else "")
    style = {"bold":bold,"italic":italic,"fontSize":pt(fs),"fontFamily":"Barlow"}
    if color: style["foregroundColor"] = {"opaqueColor": {"rgbColor": color}}
    a = AL.get(align.upper(), "START")
    return [
        {"createShape": {"objectId": o, "shapeType": "TEXT_BOX",
            "elementProperties": {"pageObjectId": sid,
                "size": {"width": em(w), "height": em(h)},
                "transform": {"scaleX":1,"scaleY":1,
                    "translateX": int(x*914400), "translateY": int(y*914400), "unit":"EMU"}}}},
        {"updateShapeProperties": {"objectId": o,
            "shapeProperties": sp, "fields": flds}},
        {"insertText": {"objectId": o, "text": text, "insertionIndex": 0}},
        {"updateTextStyle": {"objectId": o, "textRange": {"type": "ALL"},
            "style": style, "fields": "bold,italic,fontSize,fontFamily,foregroundColor"}},
        {"updateParagraphStyle": {"objectId": o, "textRange": {"type": "ALL"},
            "style": {"alignment": a, "spaceAbove": pt(0), "spaceBelow": pt(0)},
            "fields": "alignment,spaceAbove,spaceBelow"}}]
```

---

### RULE 1 — Adaptive title sizing

Never hardcode a font size for action-titles. Always calculate:

```python
def title_metrics(text):
    """(font_pt, box_height_inches). Box height always allows full wrapping."""
    n = len(text)
    if n <= 44:  return 24, 0.52
    if n <= 58:  return 22, 0.58
    if n <= 72:  return 20, 0.68
    if n <= 86:  return 18, 0.78
    if n <= 100: return 16, 0.86
    return 14, 0.92

def content_y(title_h):
    """y where body content starts — always BELOW the full header block."""
    return MT + 0.28 + 0.04 + title_h + 0.06 + 0.04
    # = top_margin + kicker_height + gap + title + gap + rule
```

---

### RULE 2 — Header block layout

```
y = MT (0.30")        : kicker eyebrow (h=0.24", fs=9, bold, color=RED)
y = MT + 0.28         : title text box (w=TITLE_W, h=title_h)
y = title_y + title_h + 0.04  : accent bar (w=0.52", h=0.036", fill=RED)
y = same              : rule line (w=CW, h=0.015", fill=LINE)
y = content_y(title_h): BODY CONTENT STARTS HERE
```

**When a callout sits alongside the title (SPLIT ZONE pattern):**

```python
TITLE_W = CW * 0.595        # ≈ 5.54" — left zone for title
CF_X    = ML + TITLE_W + 0.18   # callout starts at ≈ 6.07"
CF_W    = CW - TITLE_W - 0.18  # callout width ≈ 3.58"
# Callout occupies the SAME y band as the header (kicker_y to kicker_y + CF_H)
CF_H    = 0.24 + 0.04 + title_h  # matches full header band height
```

NEVER place a callout below the title or at the same y but overlapping x. Always use the split-zone so title and callout occupy different x ranges at the same y.

---

### RULE 3 — Content bounding box

Every element MUST satisfy:
```
x_start >= ML (0.35")       x_end   <= W - MR (9.65")
y_start >= content_y(th)    y_end   <= FOOTER_Y - 0.06 (5.285")
```

Available content height:
```python
AVAIL_H = FOOTER_Y - 0.06 - cy   # where cy = content_y(title_h)
```

---

### RULE 4 — Text height estimation (prevent overflow)

```python
def text_h(text, font_pt, box_w_inches, min_h=0.24):
    """Minimum box height to display text without clipping."""
    chars_per_line = box_w_inches * 72 / font_pt * 0.58
    lines = max(1, -(-len(text) // max(1, int(chars_per_line))))
    return max(min_h, lines * (font_pt * 1.35 / 72) + 0.10)
```

Use for: pre-condition boxes, callout bodies, description text boxes. Always size the box to the text, not the other way.

---

### RULE 5 — Table height (prevent mid-slide cut)

**With a bottom bar below the table:**
```python
BBAR_H   = 0.32    # bottom bar height
BBAR_GAP = 0.06    # gap above bottom bar
bbar_y   = FOOTER_Y - 0.06 - BBAR_H   # bottom bar y
table_h  = bbar_y - BBAR_GAP - cy      # table fills space above bar
```

**Without a bottom bar:**
```python
table_h = FOOTER_Y - 0.06 - cy
```

Always verify `table_h > 1.0` (a table needs at least 1 inch to show header + rows).

---

### RULE 6 — Phase list slides (WK1/WK2/WK3/WK4)

```python
# 1. Reserve deliverable area at bottom
DELIV_H   = 0.50
DELIV_Y   = FOOTER_Y - 0.08 - DELIV_H   # deliverable cards y

# 2. Pre-condition note (calculated height)
PRE_H     = text_h(pre_text, 9, CW - 0.18)
PRE_Y     = cy

# 3. Phase rows fill the space between note and deliverables
PHASE_TOP = PRE_Y + PRE_H + 0.12
PHASE_BTM = DELIV_Y - 0.10
PHASE_H   = (PHASE_BTM - PHASE_TOP) / num_phases

# 4. Per-phase layout
#   wk_label   : y_phase + 0.04, h=0.26, fs=11, bold, color=RED
#   phase_name : y_phase + 0.02, h=0.30, fs=12, bold, color=NAVY
#   description: y_phase + 0.34, h = PHASE_H - 0.44 (must fit all text)
#   divider    : y_phase + PHASE_H - 0.018 (AFTER all text, not overlapping)

# VALIDATE: PHASE_H - 0.44 >= text_h(desc, 9, CW - 0.70)
# If description overflows: shorten text until it fits
```

---

### RULE 7 — API correctness

- Alignment: `"START"` not `"LEFT"` · `"END"` not `"RIGHT"` · `"CENTER"` is correct
- NEVER put `"alpha"` or `"a"` inside `rgbColor` — this causes a 400 error
- Always send in batches of 50 via batchUpdate
- Object IDs: use `f"{slide_id}_{element_name}"` (e.g., `"sl_08_title"`, `"sl_08_table"`)

---

### RULE 8 — Pre-send validation checklist

Before sending ANY batch, verify:
- [ ] Every x is in `[ML, W-MR]` = `[0.35, 9.65]`
- [ ] Every y is in `[0, H-0.10]` = `[0, 5.525]`
- [ ] All text boxes: `outline = NOT_RENDERED`
- [ ] No two elements occupy overlapping x/y ranges (unless intentional layering)
- [ ] table_h > 1.0" for all tables
- [ ] Phase description boxes: height >= text_h(desc, fs, w)
- [ ] Footer at FOOTER_Y on every slide
- [ ] Header callouts: use split-zone, never overlap title y-range

---

### RULE 9 — Post-build thumbnail check

After building, download thumbnails for:
1. Cover slide
2. The most complex content slide (most elements)
3. Any table slide
4. Any phase-list slide

Verify: no text overflow, no clipped elements, footer visible, table shows all rows. Fix any issue before declaring done.

---

## Common patterns summary

| Pattern | When to use | Key rule |
|---|---|---|
| Standard content | Bullets, cards, insight boxes | RULE 1 + 2 + 3 |
| Split header + callout | Title + "Critical Finding" box | RULE 2 split-zone |
| Table + gate rule | Feature gate, comparison matrix | RULE 5 with bottom bar |
| Phase list | WK1–WK4, step timeline | RULE 6 |
| Dark exsum (numbered) | 3-step frameworks, asks | RULE 3, rows = AVAIL_H/n |
