# Zyvora Design System

Zyvora is a bold, confident marketing-operations platform: campaigns, attribution analytics, and automation in one workspace, for teams that "ship fast and never guess." This design system was built from two source assets:

- `uploads/zyvora-logo-lavender.png` — the wordmark (serif, lavender/purple).
- `uploads/cabinet-grotesk/` — the Cabinet Grotesk type family, weights Thin through Black.

No codebase, Figma file, or existing product screens were provided — company description, industry ("Software / marketing solutions"), target products (marketing website, web app dashboard, mobile app, presentation deck), tone ("Bold & confident"), and the expanded color direction were gathered by asking the user directly. Everything below — palette, components, and the three UI kits — is an original system authored for Zyvora from that brief, not a recreation of an existing product. If Zyvora has real product screens, a Figma file, or a codebase, attach them and this system should be reconciled against that ground truth.

## Content fundamentals

- **Voice**: direct, confident, verb-first. Headlines are short declarative sentences ("Marketing that moves at your speed," "Ship with confidence") — no hedging, no questions as headlines.
- **Person**: speaks to "you"/"your team" in body copy; first-person plural ("we") only in testimonials/quotes attributed to customers.
- **Casing**: sentence case everywhere (headlines, buttons, nav) — never Title Case, never ALL CAPS except tiny eyebrow labels/badges (e.g. "NOW WITH REAL-TIME ATTRIBUTION"), which use uppercase + wide letter-spacing as a deliberate contrast to the otherwise plain-case type.
- **Numbers do the talking**: prefer a concrete stat ("4.6× revenue growth," "cut turnaround from weeks to days") over adjectives.
- **No emoji** anywhere in product or marketing copy — the brand's confidence comes from typography and color, not decoration.
- **CTAs** are action + outcome, not generic: "Start free trial," "Talk to sales," not "Submit."

## Visual foundations

- **Color**: a saturated purple (`--purple-500`) is the primary brand color and sole accent for interactive elements (links, primary buttons, focus rings). A warm clay/terracotta (`--clay-500`) is the secondary accent, used sparingly for a single emphasized action or highlight (e.g. an "Accent" button, closing slide backgrounds) — never alongside purple in the same component. Neutrals are warm: cream surfaces (`--cream-50/100/200`) instead of cold gray, and a purple-tinted ink scale (`--ink-*`) for text and dark sections instead of true black/gray. Max two background colors per composition (cream app background + one deep ink or brand-color section for contrast, e.g. hero testimonials).
- **Type**: Cabinet Grotesk for everything — display headlines at weight 800/900 with tight/negative letter-spacing (`--tracking-tighter`, -0.035em) for a confident, condensed feel; body copy at 400/500/600. No serif, no second typeface. The logo's serif wordmark is a fixed asset, not a live typeface — never re-set the brand name in a serif font in UI.
- **Spacing**: 4px base scale (4/8/12/16/20/24/32/40/48/64/80/96/128). Generous whitespace on marketing pages (96–140px section padding); tighter, denser spacing in dashboard/app UI (16–32px).
- **Backgrounds**: flat color only — no gradients, no photography, no hand-drawn illustration, no repeating textures/patterns. Bold color blocking (e.g. a full-bleed purple or clay section) stands in for imagery.
- **Radius**: `--radius-sm` (6px) for inputs/small chips, `--radius-md` (10px) for buttons/cards default, `--radius-lg` (16px) for large cards/dialogs, `--radius-full` for pills/switches/avatars.
- **Shadows**: subtle and cool-neutral (`--shadow-sm/md/lg`), used only on card-like surfaces (dashboard cards, dialogs, toasts) — never on buttons at rest. A `--shadow-glow` (soft purple ring) replaces a border-color change for focus states.
- **Borders**: 1px hairlines in `--border-default` for dividers/table rows/outlined inputs; `--border-strong` for outlined "secondary" buttons.
- **Hover / press states**: hover darkens the fill one step (`--brand-primary` → `--brand-primary-hover`) and lifts the element 1–2px (`translateY`); no opacity fades, no scale-down. Press states are not separately modeled beyond the darker hover fill — kept intentionally simple/snappy, matching the "bold & confident" brief.
- **Motion**: fast and purposeful — 120–200ms with a standard ease-out curve (`--ease-out`, `--ease-standard`). No bounce, no springy overshoot, no long fades. Used for hover lifts, dialog/toast entrances, switch thumb travel.
- **Transparency/blur**: only on the modal overlay (`--surface-overlay` + backdrop blur) — never used decoratively elsewhere.
- **Cards**: white surface, 1px hairline border, `radius-lg`, small-to-medium shadow; `interactive` cards lift and deepen shadow on hover. No colored left-border accent strip (an anti-pattern for this brand).

## Iconography

No icon set was provided with the brand assets. Component close/chevron/dot glyphs are drawn as plain SVG paths inline (checkmarks, chevrons, ×) since they're structural, not a decorative icon system. For actual pictorial icons in the UI kits (nav, feature icons, stat glyphs), this system uses **Lucide** via CDN (`unpkg.com/lucide`) as a substitute icon system — flagged here because it is not a Zyvora-provided asset. Stroke-based, 1.5–2px weight, no fill, matching the geometric/grotesk character of Cabinet Grotesk. No emoji, no Unicode-symbol icons (aside from the plain `×` close glyph and `▾`/`›` structural marks, which are typographic, not iconographic). If Zyvora has its own icon set, swap the Lucide CDN reference for it.

## Fonts

Cabinet Grotesk (Thin/Extralight/Light/Regular/Medium/Bold/Extrabold/Black) was provided as `.otf` and is fully installed via `@font-face` in `tokens/fonts.css`. `--font-mono` currently falls back to system monospace stacks ('SF Mono' / Roboto Mono) — no mono font file was provided. If Zyvora uses a specific mono face for code/data, upload it and it will be wired in.

## Index

- `styles.css` — root stylesheet, `@import`s everything in `tokens/`.
- `tokens/colors.css`, `typography.css`, `spacing.css`, `fonts.css` — CSS custom properties + webfont declarations.
- `assets/logo.png`, `assets/fonts/` — brand mark and Cabinet Grotesk binaries.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
- `components/core/` — Button, IconButton, Card, Badge, Tag.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/feedback/` — Dialog, Toast, Tooltip.
- `components/navigation/` — Tabs.
- `ui_kits/marketing/` — marketing homepage (hero, features, pricing, testimonial).
- `ui_kits/webapp/` — dashboard (overview, campaigns table, audiences, settings) with sidebar nav.
- `ui_kits/mobile/` — mobile app (home feed, campaign detail, insights, profile) with tab bar.
- `templates/pitch-deck/` — 16:9 slide deck template (title, agenda, stat, comparison, quote, closing slides).
- `SKILL.md` — portable skill file for use in Claude Code / other agent contexts.

### Intentional additions
No source defined a component inventory (brand-guidelines-only run), so a standard primitive set was authored: Button, IconButton, Card, Badge, Tag, Input, Select, Checkbox, Radio, Switch, Dialog, Toast, Tooltip, Tabs — sized to what the three UI kits actually needed.
