# WR2 Design Wiki — LLM Wiki Schema

## What is this?

A persistent, compounding knowledge base for WR2 (WarRock 2: Mavericks) game design.
Built using the [Karpathy LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) pattern.

- **Raw sources** are immutable — Google Docs exports, meeting notes, Discord discussions
- **The wiki** is LLM-generated markdown — summaries, entity pages, cross-references
- **This file** is the schema — conventions, structure, workflows

## Architecture

```
WR2-Design-Wiki/
├── raw/                    ← Immutable source documents (txt/md exports)
│   ├── gdoc-identity.txt
│   ├── gdoc-core-loop.txt
│   └── ...
├── wiki/                   ← LLM-maintained markdown wiki
│   ├── index.md            ← Master index with all pages + one-line summaries
│   ├── overview/           ← Game identity, differentiation, core loop
│   ├── gameplay/           ← Modes, phases, cooperation, spawning
│   ├── character/          ← Actions, stats, classes, progression
│   ├── vehicle/            ← Vehicle types, specs, controls, parts
│   ├── weapon/             ← Gun systems, categories, ammo, customization
│   ├── combat-tools/       ← Grenades, mines, drones, special equipment
│   ├── ui/                 ← UI structure, HUD, controls
│   ├── economy/            ← Economy, farming, progression
│   ├── level-design/       ← Level design principles, terrain, individual levels
│   ├── data-tables/        ← Reference data tables
│   └── sources/            ← Per-source summary pages
├── CLAUDE.md               ← This file (schema + conventions)
└── log.md                  ← Chronological change log
```

## Page Format

Every wiki page uses this template:

```markdown
---
title: Page Title
category: overview|gameplay|character|vehicle|weapon|combat-tools|ui|economy|level-design|data-tables
source: gdoc-filename.txt (or multiple)
last_updated: YYYY-MM-DD
status: draft|reviewed|approved
---

# Page Title

Content here. Use markdown tables, bullet lists, headings.

## Cross-References

- Related: [[other-page]]
```

## Conventions

- **Language**: Korean (primary), matching the source documents
- **File naming**: kebab-case (`core-loop.md`, `gun-categories.md`)
- **Cross-references**: Use relative links `[코어 루프](../overview/core-loop.md)`
- **Tables**: Preserve data tables from source documents as markdown tables
- **Status tracking**: `draft` = auto-generated, `reviewed` = human checked, `approved` = finalized
- **No fabrication**: Only include information from raw sources. Mark gaps as `[TBD]`

## Operations

### Ingest

1. Export Google Doc as txt → save to `raw/`
2. Read source, extract key information
3. Create or update relevant wiki pages
4. Update `wiki/index.md`
5. Append entry to `log.md`
6. A single source may touch multiple wiki pages

### Query

1. Read `wiki/index.md` to find relevant pages
2. Read those pages
3. Synthesize answer with citations to wiki pages
4. If answer is valuable, file it as a new wiki page

### Lint

Check for:
- Pages referenced in index but missing
- Contradictions between pages
- Pages with no inbound links (orphans)
- Important concepts mentioned but lacking their own page
- `[TBD]` markers that could be filled from existing sources

## Source Documents

Google Docs from ifrete's design folder:
https://drive.google.com/drive/folders/1VC0ckwv2WYQR_HxrDvFjU4UD0Nc_WGnl

Index document:
https://docs.google.com/document/d/1z6b5oNtGSl2hXv0JGdJJySzBNxda6Zd82tKnbGtibR4

## Game Context

- **Title**: WarRock 2: Mavericks (WR2)
- **Genre**: PvPvE Vehicle Extraction Shooter
- **Platform**: PC (Steam Early Access)
- **Engine**: Unreal Engine 5.3 (migrating to 5.7)
- **Map**: 6km x 6km desert
- **Squad**: 1-4 players
- **Core**: Vehicle combat + extraction loop + class-based infantry
