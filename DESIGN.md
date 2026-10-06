---
version: 0.1
name: Dave's Portfolio — Dither
description: A minimalist, ink-on-near-white personal site and blog modeled on Vercel's Geist restraint. One near-black ink carries every heading, CTA and border; Geist Sans sets tightly-tracked display type and Geist Mono labels technical eyebrows. The single decorative system is the Dither Field — a 1-bit ordered-dither layer that sits over the whole page and over every image, which the cursor disturbs like a gust of air, pushing the dots outward in a radius before they spring back home.

colors:
  primary: "#171717"
  on-primary: "#ffffff"
  ink: "#171717"
  body: "#4d4d4d"
  mute: "#8f8f8f"
  faint: "#a1a1a1"
  hairline: "#ebebeb"
  hairline-soft: "#f2f2f2"
  canvas: "#fafafa"
  canvas-elevated: "#ffffff"
  link: "#0070f3"
  link-deep: "#0761d1"
  link-soft: "#d3e5ff"
  error: "#ee0000"
  warning: "#f5a623"
  dither-ink: "#171717"

colors-dark:
  primary: "#ededed"
  on-primary: "#0a0a0a"
  ink: "#ededed"
  body: "#b4b4b4"
  mute: "#8f8f8f"
  faint: "#6b6b6b"
  hairline: "#1f1f1f"
  hairline-soft: "#141414"
  canvas: "#000000"
  canvas-elevated: "#0f0f0f"
  link: "#3291ff"
  link-deep: "#52a8ff"
  link-soft: "#0a2a52"
  error: "#ff4444"
  warning: "#f5a623"
  dither-ink: "#ededed"

typography:
  display-xl:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 48px
    fontWeight: 600
    lineHeight: 48px
    letterSpacing: -2.4px
  heading-lg:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 32px
    fontWeight: 600
    lineHeight: 40px
    letterSpacing: -1.28px
  heading-md:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
    letterSpacing: -0.4px
  label-sm:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: -0.28px
  mono-eyebrow:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0
    textTransform: uppercase
  body-lg:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
  prose:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 17px
    fontWeight: 400
    lineHeight: 28px
  button-lg:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 20px
  button-md:
    fontFamily: Geist, Arial, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  code:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px

rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 16px
  pill: 100px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 64px
  4xl: 96px
  section: 128px

dither:
  matrix: bayer-8x8
  cell: 12px           # one dither cell = 12 CSS px; dot is drawn at the cell center
  dot: 1.5px           # dot size in CSS px (scaled by devicePixelRatio)
  overlay-opacity: 0.26
  density-edge: 1      # fraction of cells lit at the left and right edges
  density-center: 0.35 # ... and at the center of x
  fade-curve: 5        # density = center + (edge - center) * d^5, d = |x - mid| / (width / 2)
  air-radius: 190px
  air-strength: 2.9
  air-idle: 0.35
  air-velocity-gain: 0.6
  spring: 0.16         # pull back toward home position per frame
  damping: 0.86        # velocity retained per frame
  max-displacement: 72px
  dpr-cap: 2

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-link:
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    height: 40px
    padding: "0px 14px"
  button-secondary:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    height: 40px
    padding: "0px 14px"
  button-ghost-sm:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    height: 32px
    padding: "0px 8px"
  button-icon-circular:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    rounded: "{rounded.full}"
    size: 36px
  tag:
    backgroundColor: "{colors.hairline-soft}"
    textColor: "{colors.body}"
    typography: "{typography.mono-eyebrow}"
    rounded: "{rounded.sm}"
    padding: "2px {spacing.xs}"
  text-input:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  card:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  project-card:
    extends: "{components.card}"
    media: dithered-image
    mediaRatio: 16/10
  experience-row:
    textColor: "{colors.ink}"
    metaColor: "{colors.mute}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-md}"
    padding: "{spacing.lg} 0px"
  post-row:
    textColor: "{colors.ink}"
    metaColor: "{colors.mute}"
    borderColor: "{colors.hairline}"
    typography: "{typography.body-lg}"
    padding: "{spacing.md} 0px"
  article:
    textColor: "{colors.body}"
    headingColor: "{colors.ink}"
    typography: "{typography.prose}"
    maxWidth: 680px
  code-block:
    backgroundColor: "{colors.canvas-elevated}"
    textColor: "{colors.ink}"
    borderColor: "{colors.hairline}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section} {spacing.lg} {spacing.4xl}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.mute}"
    typography: "{typography.body-md}"
    borderColor: "{colors.hairline}"
    padding: "{spacing.3xl} {spacing.lg}"
---

## Overview

This site is an exercise in subtraction, borrowed from Vercel's Geist system. A near-white sheet (`{colors.canvas}` — #fafafa) carries near-black ink (`{colors.ink}` — #171717), and almost nothing else competes. Headings, body copy, the primary button and every 1px border come from one ink-and-grey ladder. There is no color chrome.

Where Vercel spends its one flourish on a mesh gradient, this site spends it on the **Dither Field**: a 1-bit ordered-dither texture laid over the entire page and baked into every image. It is quiet at rest — a fine grain, like newsprint. When the cursor moves, it acts like **air**: the dots within a radius are blown outward, away from the pointer, and spring back to their grid once it passes. Photographs and project screenshots are themselves rendered as dither, so the same gust scatters their "data" to the sides and the picture re-forms behind it.

Everything else is calm on purpose, so the effect is the one thing that moves.

**Key characteristics**
- Ink (`{colors.ink}`) on canvas (`{colors.canvas}`); a grey text ladder of ink → body → mute → faint.
- The Dither Field is the only decorative system: a page-wide grain overlay plus dithered media, both disturbed by the pointer like air.
- Geist Sans 600 with tight negative tracking for display; Geist Mono uppercase eyebrows for section labels, dates and tags.
- Hairline-bordered white cards; depth is a 1px border, never heavy shadow.
- Black pill (`{components.button-primary}`) for the one main CTA per view; 6px squares for small chrome.
- Light and dark themes, both monochrome.

## Colors

### Ink & surfaces
- **Ink** (`{colors.ink}` — #171717): headings, primary CTA fill, logo, high-emphasis text, and the dither dots (`{colors.dither-ink}`).
- **Canvas** (`{colors.canvas}` — #fafafa): page background.
- **Elevated** (`{colors.canvas-elevated}` — #ffffff): cards, inputs, code blocks.
- **Hairline-soft** (`{colors.hairline-soft}` — #f2f2f2): tag fills, inset wells.

### Text ladder
- **Ink** #171717 → **Body** #4d4d4d (paragraphs, nav) → **Mute** #8f8f8f (dates, metadata, captions) → **Faint** #a1a1a1 (placeholders, disabled).
- Never pure black (#000) for text.

### Borders
- **Hairline** (`{colors.hairline}` — #ebebeb): every card, input, divider and list row.

### Accent
- **Link** (`{colors.link}` — #0070f3): inline links inside blog prose and the focus ring only. Never a fill.
- **Error / warning**: form validation only.

### Dark theme
`colors-dark` mirrors every token: a #000000 canvas with #ededed ink, and the dither dots in light ink. The toggle at the top of the header cycles System → Light → Dark. System is the default and follows the device setting live. A Light or Dark choice is saved in `localStorage` (`theme`); System removes it. An inline script in the root layout sets `data-theme` (the choice) and the `.dark` class (the shown theme) on `<html>` before the first paint.

## Typography

**Geist Sans** for everything, **Geist Mono** for code, eyebrows, dates and tags. No third face. Load both through `next/font` (the `geist` package) so there's no layout shift. Fallbacks: Inter / JetBrains Mono.

| Token | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | 48px | 600 | 48px | -2.4px | Hero name / page titles (scales to 36px under 640px) |
| `heading-lg` | 32px | 600 | 40px | -1.28px | Section headings, article H1 |
| `heading-md` | 20px | 600 | 28px | -0.4px | Card titles, article H2 |
| `label-sm` | 14px | 500 | 20px | -0.28px | Company / role names, strong labels |
| `mono-eyebrow` | 12px | 500 | 16px | 0, uppercase | Section eyebrows, dates, tags |
| `body-lg` | 16px | 400 | 24px | 0 | Lead paragraphs, post titles in lists |
| `body-md` | 14px | 400 | 20px | 0 | Default UI text |
| `body-sm` | 12px | 400 | 16px | 0 | Captions, footnotes |
| `prose` | 17px | 400 | 28px | 0 | Blog article body |
| `code` | 14px | 400 | 20px | 0 | Code blocks, inline code |

**Principles**
- The bigger the heading, the tighter the tracking. Body stays neutral.
- Weights are 400 / 500 / 600 only. No light, no black, no italic in UI (italic is allowed inside blog prose for emphasis).
- Every section opens with a mono eyebrow (`01 — EXPERIENCE`, `02 — PROJECTS`, …) above its heading.

## Layout

### Spacing
4px base: 4 · 8 · 12 · 16 · 24 · 32 · 40 · 64 · 96 · 128. Card interiors use 24–32px; sections are separated by 96–128px.

### Container
- Single centered column, `max-width: 768px`, side gutter 24px (16px under 640px). A personal site reads better narrow than a 1200px marketing grid.
- Blog articles narrow further to 680px for line length.
- Project grid is 2-up from 768px, 1-up below.

### Page structure
**Home** — nav → hero (name, one-line role, short intro, CTA pills) → Experience → Projects → Writing (latest 3 posts) → Contact → footer.
**/blog** — eyebrow + title → list of `post-row`s, newest first.
**/blog/[slug]** — back link → title, date, reading time, tags → `article` → prev/next.

### Breakpoints
| Name | Width | Changes |
|---|---|---|
| Mobile | < 640px | Single column, display type 36px, nav links collapse into a menu button, CTA pills full width |
| Tablet | ≥ 640px | 2-up project grid begins at 768px |
| Desktop | ≥ 1024px | Container stays 768px; extra width is canvas (and dither) |

Touch targets are at least 40px tall.

## The Dither Field

The signature effect. It has two parts that share one renderer and one "air" simulation.

### 1. Page grain (overlay)
- One fixed, full-viewport `<canvas>` above all content: `position: fixed; inset: 0; pointer-events: none; z-index: 50`.
- The viewport is divided into `{dither.cell}` (12px) cells. Each cell has a threshold from an 8×8 Bayer matrix. The horizontal gradient below is compared against it; cells that pass draw a `{dither.dot}` (1.5px) dot in `{colors.dither-ink}`.
- The grain is an ordered-dither gradient across x: every cell lit at the left and right edges, 35% at the center (`density = 0.35 + 0.65 · d^5`, where d is the distance from the center as a share of half the width). The steep curve keeps the middle of the screen at the lighter density and builds the grain up near the edges. It depends on x only, so it is the same for every y.
- Overall opacity `{dither.overlay-opacity}` (0.26). It must read as texture, never as noise over text: body copy has to keep at least WCAG AA contrast with the grain on.

### 2. Dithered media
- Every photo and project screenshot is shown through the dither, not as a normal `<img>`. The image is sampled at cell resolution, converted to luminance, and thresholded with the same Bayer matrix to 1-bit (`{dither.image-levels}` = 2): ink dot or nothing.
- Each lit cell becomes a particle with a **home position**. That makes the image itself something the air can push.
- The real `<img>` stays in the DOM, visually hidden, for accessibility, SEO and no-JS. Alt text is required.

### 3. Air (pointer interaction)
Each frame, every particle (grain dots near the pointer, plus media dots) is updated:

```
d      = particle.pos - pointer
dist   = |d|
if dist < R:
  falloff = (1 - dist / R)^2
  gust    = strength * (1 + velocityGain * |pointerVelocity|)
  particle.vel += normalize(d) * falloff * gust
particle.vel += (particle.home - particle.pos) * spring
particle.vel *= damping
particle.pos += particle.vel
clamp |particle.pos - particle.home| to maxDisplacement
```

- `R` = `{dither.air-radius}` (190px). Force is strictly **radial and outward**, so the dots part around the cursor like air, leaving a clear circle where the content underneath is fully crisp.
- Faster pointer movement = stronger gust (`{dither.air-velocity-gain}`). A still pointer slowly lets dots settle back to the edge of the radius.
- Spring `0.16` and damping `0.86` give a soft, slightly bouncy return — no snapping.
- Pointer leaving the window: all particles relax home.
- Touch: dragging acts as the pointer; a tap sends a single radial puff from the tap point.

### Implementation rules
- Client-only component (`"use client"`), rendered once in the root layout for the overlay; media uses a `<DitherImage>` component with its own canvas sharing the same pointer state.
- Prefer **WebGL** (instanced points, simulation in a shader or typed arrays); fall back to Canvas 2D. Use typed arrays, not objects per particle.
- Only simulate particles within `R + maxDisplacement` of the pointer; everything else stays at home and is drawn from a cached layer.
- Cap `devicePixelRatio` at 2. Pause the loop when the tab is hidden and when nothing is moving. Budget: under 4ms per frame on a mid-range laptop.
- Redraw on resize and on theme change (dot color follows `{colors.dither-ink}`).
- `prefers-reduced-motion: reduce` → grain and dithered images render statically, with no air simulation.
- No JS / WebGL failure → plain images and no grain. The site must be fully usable without the effect.

## Elevation & depth

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | 1px `{colors.hairline}`, no shadow | Cards, inputs, rows, dividers |
| 1 — Whisper | Hairline + `0 1px 1px rgba(0,0,0,0.04)` | Card hover |
| 2 — Floating | `0 2px 2px rgba(0,0,0,0.04), 0 8px 16px -4px rgba(0,0,0,0.08)` | Mobile menu, toasts |

The Dither Field is the only atmospheric element. No glows, no gradients.

## Shapes

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Dividers, full-bleed bands |
| `sm` | 6px | Inputs, small buttons, tags |
| `md` | 12px | Cards, code blocks, dithered media |
| `lg` | 16px | Large panels |
| `pill` | 100px | Primary / secondary CTA |
| `full` | 9999px | Icon buttons, avatar, nav link hit areas |

## Components

### Navigation
- **`nav-bar`**: sticky, canvas background with `backdrop-filter: blur(8px)` at 80% opacity, bottom hairline. Left: wordmark "Dave" in `label-sm`. Right: nav links (Work, Projects, Blog, Contact) and a theme toggle (`button-icon-circular`).
- **`nav-link`**: body-grey, turns ink on hover; the active page is ink with weight 500.

### Buttons
- **`button-primary`**: black pill, 40px tall. One per view at most ("Get in touch").
- **`button-secondary`**: white pill with hairline ("Read the blog", "Résumé").
- **`button-ghost-sm`**: 6px square for small chrome (copy code, back link).
- **`button-icon-circular`**: 36px circle for social icons and the theme toggle.
- Hover: primary goes to 90% opacity; secondary and ghost get the `hairline-soft` fill. Active: `scale(0.98)`. Focus: 2px `{colors.link}` ring, 2px offset.

### Content
- **`experience-row`**: a row with the company + role (`label-sm`, ink), dates on the right (`mono-eyebrow`, mute), one or two lines of summary (`body-md`, body) and optional tags. Rows are separated by hairlines, with no card chrome.
- **`project-card`**: a `card` with dithered media on top (16:10, `rounded.md`), then title (`heading-md`), a one-line description (`body-md`, body) and tags. The whole card is the link; hover lifts to Level 1 and the arrow icon nudges 2px right.
- **`post-row`**: title (`body-lg`, ink) with the date on the right (`mono-eyebrow`, mute); the title gets an underline on hover. Hairline between rows.
- **`tag`**: mono, uppercase, `hairline-soft` fill, 6px radius.
- **`article`**: the blog body (rendered from MDX). `prose` type, 680px max width, H2/H3 in ink with tight tracking, `{colors.link}` underlined links, `code-block` for fenced code, images dithered by default (a frontmatter flag can opt out).

### Forms
- **`text-input`**: white, hairline, 6px radius, 40px tall; textarea min 120px. Label above in `label-sm`. Focus: border goes ink plus the link focus ring. Errors use `{colors.error}` text below the field.
- Contact submit uses `button-primary`. Success is an inline message, not a toast.

### Footer
- **`footer`**: top hairline, mute text. Left: "© 2026 David Lazaro Fernandez". Right: GitHub, LinkedIn, X and email as `button-icon-circular`.

## Motion
- UI transitions: 150ms `ease-out` for color, opacity and transform. Nothing longer than 300ms.
- Section content fades up 8px on first view (once, IntersectionObserver), staggered 40ms. Disabled under reduced motion.
- The Dither Field is the only continuous motion on the page.

## Tailwind mapping

Tailwind v4, CSS-first. Tokens live in `src/app/globals.css` under `@theme`, with dark values swapped via a `.dark` class on `<html>` (set before paint to avoid a flash).

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-ink: #171717;
  --color-body: #4d4d4d;
  --color-mute: #8f8f8f;
  --color-faint: #a1a1a1;
  --color-hairline: #ebebeb;
  --color-hairline-soft: #f2f2f2;
  --color-canvas: #fafafa;
  --color-elevated: #ffffff;
  --color-link: #0070f3;
  --color-error: #ee0000;

  --font-sans: var(--font-geist-sans), Arial, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-pill: 100px;

  --text-display: 48px;  --text-display--line-height: 48px;  --text-display--letter-spacing: -2.4px;  --text-display--font-weight: 600;
  --text-heading: 32px;  --text-heading--line-height: 40px;  --text-heading--letter-spacing: -1.28px; --text-heading--font-weight: 600;
  --text-title: 20px;    --text-title--line-height: 28px;    --text-title--letter-spacing: -0.4px;    --text-title--font-weight: 600;
  --text-prose: 17px;    --text-prose--line-height: 28px;
}
```

Usage conventions:
- Use tokens (`bg-canvas`, `text-ink`, `border-hairline`, `rounded-md`, `text-display`), never raw hex values in components.
- Spacing uses Tailwind's default 4px scale, which matches the token scale (`p-6` = 24px, `py-32` = 128px).
- Components are small React components that compose Tailwind classes; no CSS modules and no component library.
- Use `clsx` for conditional classes. No `@apply` except for the `article` prose styles.

## Do's and Don'ts

### Do
- Let ink on canvas do the work, and let the Dither Field be the only flourish.
- Open each section with a mono eyebrow, then a tight 600-weight heading.
- Show every photo and screenshot through the dither, with a hidden real `<img>` and alt text.
- Keep text readable with the grain on, and keep the air radius clear so content under the cursor is crisp.
- Respect `prefers-reduced-motion` and make the site work with no JS.

### Don't
- Don't add color fills, gradients or a second decorative effect.
- Don't let the grain sit dense enough over text to hurt contrast.
- Don't animate anything else continuously.
- Don't mix button shapes within one context (pills for CTAs, 6px squares for chrome).
- Don't use pure #000 for text or heavy shadows anywhere.
