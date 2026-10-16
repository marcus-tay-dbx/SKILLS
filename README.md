# SKILLS — Marcus Tay's Claude Code plugin marketplace

This repo is a self-hosted [Claude Code plugin marketplace](https://code.claude.com/docs/en/plugins).

## Install the marketplace

```
/plugin marketplace add marcus-tay-dbx/SKILLS
```

## Available plugins

| Plugin | Description | Install |
|--------|-------------|---------|
| `claude-design` | Generate well-branded Databricks presentations (HTML / PDF / Google Slides) with brand assets, colors, type, fonts, sample slides, and templates. | `/plugin install claude-design@marcus-tay-skills` |

After installing `claude-design`, invoke the skill with `/claude-design:design` (it is also auto-discovered before visual/presentation tasks).

## Updating

When a plugin changes, bump its `version` in `claude-design/.claude-plugin/plugin.json`. Users pick up the new version on their next marketplace refresh:

```
/plugin marketplace update marcus-tay-skills
```

## Structure

```
.
├── .claude-plugin/
│   └── marketplace.json          # Marketplace manifest (lists plugins)
└── claude-design/                # Plugin
    ├── .claude-plugin/
    │   └── plugin.json
    ├── README.md
    └── skills/
        └── design/               # The "design" skill
            ├── SKILL.md
            └── ...                # assets, fonts, slides, templates, css
```
