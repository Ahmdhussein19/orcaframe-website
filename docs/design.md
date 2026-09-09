---
name: OrcaFrame Web
description: Operate-mode product UI — cool blue action on a light gray shell
colors:
  shell: "#F5F5F5"
  foreground: "#1A1A1A"
  muted-foreground: "#6B6B6B"
  chrome: "#FFFFFF"
  elevated: "#FFFFFF"
  recessed: "#F0F0F0"
  secondary: "#EBEBEB"
  secondary-foreground: "#2A2A2A"
  accent-wash: "#EEF4FF"
  border: "#E5E5E5"
  primary: "#1B72FF"
  primary-foreground: "#FFFFFF"
  destructive: "oklch(0.55 0.22 25)"
  success: "oklch(0.52 0.13 155)"
  warning: "oklch(0.55 0.14 75)"
  info: "oklch(0.52 0.16 240)"
  chart-1: "#1B72FF"
  chart-2: "#00A5A6"
  chart-3: "#D79628"
  chart-4: "#975AC0"
  chart-5: "#1C985A"
typography:
  sans:
    fontFamily: "Reddit Sans, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.5
  heading:
    fontFamily: "Reddit Sans, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.025em"
  display:
    fontFamily: "Reddit Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  page-title:
    fontFamily: "Reddit Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  section-title:
    fontFamily: "Reddit Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Reddit Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Reddit Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
  micro-label:
    fontFamily: "Reddit Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.05em"
    textTransform: "uppercase"
  metric:
    fontFamily: "Reddit Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    letterSpacing: "-0.025em"
    fontFeature: "tnum"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
rounded:
  sm: "calc(0.25rem - 4px)"
  md: "calc(0.25rem - 2px)"
  lg: "0.25rem"
  xl: "calc(0.25rem + 4px)"
  2xl: "calc(0.25rem * 1.8)"
  3xl: "calc(0.25rem * 2.2)"
  4xl: "calc(0.25rem * 2.6)"
spacing:
  page-x: "1rem"
  page-x-md: "1.5rem"
  page-y: "1.5rem"
  page-y-md: "2rem"
  card: "1rem"
  card-sm: "0.75rem"
  control-h: "2.25rem"
  section-gap: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.lg}"
  badge-destructive:
    backgroundColor: "color-mix(in oklch, {colors.destructive} 10%, transparent)"
    textColor: "{colors.destructive}"
  badge-success:
    backgroundColor: "color-mix(in oklch, {colors.success} 10%, transparent)"
    textColor: "{colors.success}"
  badge-warning:
    backgroundColor: "color-mix(in oklch, {colors.warning} 10%, transparent)"
    textColor: "{colors.warning}"
---

# Design System

## Overview

OrcaFrame web is an **Operate** surface: scanability and task clarity outrank expression. Default appearance is **light**: page shell `#F5F5F5`, elevated cards `#FFFFFF`, brand blue (`#1B72FF`) for action only. Neutrals are true gray to match the shell.

Source of truth for applied tokens: `apps/web/src/app/globals.css` (`:root` / `.dark` + `@theme inline`). Fonts load in `apps/web/src/app/layout.tsx`.

## Colors

### Layer stack

| Layer | Token | Value | Use |
|---|---|---|---|
| 0 Shell | `--background` | `#F5F5F5` | Page canvas. Cards sit on top of this. |
| 0 Text | `--foreground` | `#1A1A1A` | Primary copy, headings, icons at rest. |
| 1 Chrome | `--sidebar`, header | `#FFFFFF` | Header and chrome — same as elevated cards. |
| 2 Elevated | `--card`, `--popover` | `#FFFFFF` | Cards, menus, dialogs. Separation from shell is fill contrast; keep a soft border. |
| 3 Recessed | `--muted`, `--secondary` | `#F0F0F0` / `#EBEBEB` | Hover fills, inactive chips, inset wells on white surfaces. |
| 4 Selection | `--accent` | `#EEF4FF` | Selected rows, active nav wash — never a filled CTA. |
| 5 Action | `--primary` | `#1B72FF` | Primary buttons, focus ring, text links, key metrics. |
| Edge | `--border`, `--input` | `#E5E5E5` | Dividers and control outlines on white and shell. |
| Focus | `--ring` | `#1B72FF` | Keyboard focus rings only. |

### Semantic roles

| Role | Token | Meaning | Pattern |
|---|---|---|---|
| Error | `--destructive` | Failed, critical, delete | `text-destructive` + `bg-destructive/10` + `border-destructive/40` |
| Success | `--success` | Healthy, complete, stable | same `/10` + `/40` pattern |
| Warning | `--warning` | Needs attention, watch | same pattern — never reuse chart colors for status |
| Info | `--info` | Neutral notice, tip | same pattern; prefer primary only when the notice is actionable |

Do not encode status with chart tokens or raw Tailwind emerald/amber classes.

### Data visualization

Charts render on white cards. Axis/label text `#737373`, axis lines `#E5E5E5`, no gridlines. Series: `--chart-1`…`--chart-5` (blue, teal, amber, violet, green). Prefer labels alongside color.

### Dosage (Operate / restrained)

- **Primary owns ~10% of colored UI**: CTAs, focus, current selection indicator, important links.
- **Neutrals own the rest** of structure and reading.
- **Semantics appear only when state is real**.
- Dark theme (`.dark`) remains available but is not the default. Dark shell `#181A1B`, cards `#121415`.

### Contrast notes

- Body text on shell/cards ≥ 4.5:1 (`#1A1A1A`, `#6B6B6B`).
- White on `#1B72FF` is ~4.3:1 — fine for medium+ button labels ≥14px.

## Typography

**Family:** Reddit Sans (local TTFs) → `ui-sans-serif, system-ui, sans-serif`. One family for UI and headings; `--font-heading` aliases `--font-sans`. Body is antialiased (`antialiased` on `body`).

**Weights shipped:** 400 Regular, 600 SemiBold, 700 Bold. Prefer **600** for headings and metrics; reserve **700** for rare emphasis.

**CSS / Tailwind hooks**

| Hook | Source | Use |
|---|---|---|
| `--font-sans` | `next/font/local` → `redditSans.variable` | Default UI (`font-sans` on `html` / `body`) |
| `--font-heading` | `var(--font-sans)` in `:root` | Page/section titles (`font-heading`) |
| `font-mono` | system mono stack | IDs, codes, compact timestamps |
| `tabular-nums` | OpenType `tnum` | KPIs, tables, drill chips |

### Type scale (applied roles)

| Role | Classes | Size | Weight | Tracking | When |
|---|---|---|---|---|---|
| Display | `font-heading text-4xl md:text-6xl font-semibold tracking-tight` | 2.25rem → 3.75rem | 600 | tight | Landing / marketing hero only |
| Page title | `font-heading text-2xl md:text-3xl font-semibold tracking-tight` | 1.5rem → 1.875rem | 600 | tight | App route `h1` |
| Section title | `font-heading text-lg font-semibold tracking-tight` | 1.125rem | 600 | tight | Card / panel `h2` |
| Card title | `font-heading text-sm font-medium` | 0.875rem | 500 | default | Dense card headers |
| Body | `text-sm leading-relaxed` | 0.875rem | 400 | default | Supporting copy, forms |
| UI control | `text-sm` | 0.875rem | 400–500 | default | Buttons, inputs, nav |
| Meta / caption | `text-xs text-muted-foreground` | 0.75rem | 400–500 | default | Hints, timestamps, secondary lines |
| Micro label | `text-[11px] font-medium uppercase tracking-wide text-muted-foreground` | 11px | 500 | wide | Filter labels, field eyebrows |
| Metric / KPI | `font-heading font-semibold tracking-tight tabular-nums text-2xl` (or `text-[1.75rem]`) | ~1.5–1.75rem | 600 | tight | Dashboard numbers |
| Code / id | `font-mono text-xs` or `text-[10px]` / `text-[11px]` | 10–12px | 400 | default | Tokens, row ids, SQL scraps |

**Reading color:** primary copy `text-foreground` (`#1A1A1A`); secondary `text-muted-foreground` (`#6B6B6B`). Never put muted gray on a colored wash — use the solid semantic / primary token.

**Selection:** `::selection` uses `color-mix(in oklch, var(--primary) 28%, transparent)` on foreground text.

## CSS primitives

Canonical custom properties live on `:root` / `.dark`. Tailwind v4 maps them in `@theme inline` as `--color-*`, `--radius-*`, `--font-*`. Prefer token utilities (`bg-background`, `text-primary`, `rounded-lg`, `border-border`) over raw hex in components.

### Color tokens (`:root`)

```css
--background: #f5f5f5;
--foreground: #1a1a1a;

--sidebar: #ffffff;
--sidebar-foreground: #1a1a1a;
--sidebar-primary: #1b72ff;
--sidebar-primary-foreground: #ffffff;
--sidebar-accent: #eef4ff;
--sidebar-accent-foreground: #1a1a1a;
--sidebar-border: #e5e5e5;
--sidebar-ring: #1b72ff;

--card: #ffffff;
--card-foreground: #1a1a1a;
--popover: #ffffff;
--popover-foreground: #1a1a1a;

--muted: #f0f0f0;
--muted-foreground: #6b6b6b;
--secondary: #ebebeb;
--secondary-foreground: #2a2a2a;

--accent: #eef4ff;
--accent-foreground: #1a1a1a;

--primary: #1b72ff;
--primary-foreground: #ffffff;

--border: #e5e5e5;
--input: #e5e5e5;
--ring: #1b72ff;

--destructive: oklch(0.55 0.22 25);
--success: oklch(0.52 0.13 155);
--warning: oklch(0.55 0.14 75);
--info: oklch(0.52 0.16 240);

--chart-1: #1b72ff;
--chart-2: #00a5a6;
--chart-3: #d79628;
--chart-4: #975ac0;
--chart-5: #1c985a;
```

### Shape tokens

```css
--radius: 0.25rem; /* base — tight Operate corners */
--radius-sm: calc(var(--radius) - 4px);
--radius-md: calc(var(--radius) - 2px);
--radius-lg: var(--radius);
--radius-xl: calc(var(--radius) + 4px);
--radius-2xl: calc(var(--radius) * 1.8);
--radius-3xl: calc(var(--radius) * 2.2);
--radius-4xl: calc(var(--radius) * 2.6);
```

Cards (`[data-slot="card"]`) force `border-radius: var(--radius)`. Default control / chip radius in UI is `rounded-lg` / `rounded-md` on that same base.

### Font tokens

```css
--font-sans: /* set by next/font local Reddit Sans */;
--font-heading: var(--font-sans);
```

### Layout rhythm (applied, not CSS vars)

| Primitive | Value | Tailwind / pattern |
|---|---|---|
| Content max width | 80rem | `max-w-7xl` |
| Page padding X | 1rem / 1.5rem | `px-4 md:px-6` |
| Page padding Y | 1.5rem / 2rem | `py-6 md:py-8` |
| Card spacing | 1rem (sm: 0.75rem) | `[--card-spacing:--spacing(4)]` / `data-[size=sm]:--spacing(3)` |
| Control height | 2.25rem | `h-9` |
| Header gap | 0.75–1rem | `gap-3 md:gap-4` |
| Bento grid | 12-col from `md`/`lg` | `.dashboard-bento-grid`, `.dashboard-fleet-bento` |

### Motion primitives (dashboard Operate densify)

```css
--dash-ease: cubic-bezier(0.22, 1, 0.36, 1);
/* section enter ~220ms; drill strip ~180ms; chip ~160ms; stagger 40ms × --section-i */
```

Honor `prefers-reduced-motion: reduce` (transitions off, opacity/transform reset). Soft KPI lift: `box-shadow: 0 1px 0 color-mix(in oklch, var(--foreground) 6%, transparent)` on `.dashboard-kpi-hero`.

### Dark theme (`.dark`) — summary

Shell `#181A1B`, cards `#121415`, primary `oklch(0.7 0.18 260.4)`, borders `oklch(1 0 0 / 10%)`. Semantics and charts shift to higher-L oklch variants; same token names.

## Do's and Don'ts

**Do**

- Keep light shell `#F5F5F5` / cards `#FFFFFF`, and dark shell `#181A1B` / cards `#121415`.
- Use `bg-primary text-primary-foreground` for the strongest action on a view.
- Use `bg-accent` / `bg-muted` for selection and hover — not primary fills.
- Pair every semantic color with a label or icon.
- Set headings with `font-heading` + `tracking-tight`; metrics with `tabular-nums`.
- Reach for CSS variables / Tailwind theme tokens from this file — not one-off hex.

**Don't**

- Paint the shell white (loses card lift) or tint it with primary washes.
- Use chart colors for badges, CTAs, or status.
- Spend primary blue on decorative icons or idle chrome.
- Put gray text on a colored wash — use the solid semantic token.
- Introduce a second display font or Inter/Geist defaults — Reddit Sans is the product face.
- Soften radius beyond the `--radius: 0.25rem` scale for product chrome (chat bubbles may use larger radii intentionally).
