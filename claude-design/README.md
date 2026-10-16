# claude-design

A Claude Code plugin that generates well-branded Databricks presentations in HTML, PDF, or Google Slides.

Bundles the `design` skill, which contains Databricks design guidelines, brand assets (SVG icons), colors, type tokens, fonts (Barlow / DM Sans / DM Mono), sample slides, and templates.

## Install

```
/plugin marketplace add marcus-tay-dbx/SKILLS
/plugin install claude-design@marcus-tay-skills
```

## Use

Once installed, the skill is invoked as:

```
/claude-design:design
```

It is also auto-discovered by Claude before any visual output / presentation task.

## What's inside

```
claude-design/
├── .claude-plugin/plugin.json
└── skills/
    └── design/
        ├── SKILL.md              # Skill instructions (name: design)
        ├── README.md             # Design system documentation (read first)
        ├── colors_and_type.css   # Color + type tokens
        ├── _ds_bundle.js
        ├── assets/brand/         # Brand SVG icons & lockups
        ├── fonts/                # Barlow, DM Sans, DM Mono
        ├── slides/               # Sample slides + deck-stage navigation
        └── templates/            # Starter templates
```
