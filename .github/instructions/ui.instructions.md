---
description: "Use when building or styling UI — Tailwind utility conventions, design-token usage, Server versus Client Component decisions, responsive breakpoints, and accessibility requirements."
name: "UI Rules"
applyTo: "**/src/**/*.tsx"
---

# UI Rules

Applies to every component in the app, whether it lives in `components/ui/` or inside a feature folder. The token, RSC, and accessibility rules here are binding; they exist because a slicing project fails quietly when one component carries a guessed value.

## Tokens before classes

- Read every color, font size, line height, spacing step, radius, border width, and shadow from `src/app/globals.css`. That file is the only token source.
- Never write a raw hex or px value in a class (`bg-[#1a1a1a]`, `text-[15px]`) unless the Figma value has no scale equivalent. When it does not, use an arbitrary utility (`gap-[18px]`) and record the measurement.
- Never add a token that no component uses, and never rename an existing token to match a Figma style name.
- Same value, same class. If two components need 24px of gap, both use `gap-6`, not `gap-6` in one and `gap-[24px]` in the other.

## Composition

- A section component composes smaller components. If a section file grows a local copy of a button or card, extract it to `src/components/ui/`.
- Shared primitives live in `src/components/ui/`. Anything a feature needs internally stays inside `features/<name>/components/`.
- A feature never imports from another feature. Shared code moves down to `components/ui/` or `lib/`.
- Do not use `forwardRef`; React 19 accepts `ref` as a prop.
- Do not add `style={{}}` for values that a class can express.

## Server versus Client Components

- Start every component as a Server Component. Add `'use client'` only after establishing that the component needs state, an event handler, a ref, or a client-only hook.
- The directive is the first line of the file, before imports.
- Never place `'use client'` on `page.tsx` or `layout.tsx`. Isolate the interactive fragment as its own leaf and import it.
- A Client Component cannot await data. Fetch in the Server Component and pass the result down as props.
- Pass server-rendered markup into a Client Component through `children`, not by importing the Server Component inside it.

## Layout and spacing

- Flexbox and grid for layout. No absolute positioning except for genuine overlays (badges, tooltips, decorative layers).
- Spacing comes from the token scale via `gap` and `padding`. Do not simulate spacing with margins on children.
- Sections own their vertical rhythm with `py`; a child does not add spacing to separate itself from a sibling.
- Constrain content with a shared max-width wrapper rather than repeating width classes per section.

## Responsive

- Mobile-first. Base utilities target the smallest measured frame; add `sm:`, `md:`, and `lg:` upward.
- Breakpoint values come from the design's mobile and tablet frames, not from Tailwind defaults. If Figma disagrees with a default, encode the Figma value in `globals.css`.
- Layouts must remain usable at 320px. Test long words, long headings, and images without fixed aspect ratios.

## Accessibility

- One `h1` per page, and heading levels never skip.
- Interactive elements are real `button` or `a`. A `div` with `onClick` is not acceptable.
- Icon-only controls need an `aria-label`; decorative icons get `aria-hidden="true"`.
- Visible focus ring on every focusable element via `focus-visible:`.
- Images carry meaningful `alt` text, or `alt=""` when decorative. Never omit the attribute.
- Text and background pairs drawn from the tokens must meet WCAG AA (4.5:1 body, 3:1 large text).
- Do not convey state through color alone; pair it with text or an icon.

## Composition

- A section component composes smaller components. If a section file grows a local copy of a button or card, extract it to `src/components/ui/`.
- Anything used by both features belongs in `src/components/ui/`. A feature-local component stays inside that feature.
- A feature never imports from another feature's folder. Shared code moves down, never sideways.
- Do not use `forwardRef`; React 19 accepts `ref` as a prop.
- Do not add `style={{}}` for values that a class can express.

## Images

- `next/image` for every raster and SVG image, with the width and height matching the asset's intrinsic dimensions.
- Assets live in `next-app/public/` and are referenced from the site root (`/figma/hero.svg`).
- Set a container aspect ratio for images whose source dimensions vary, so layout does not shift on load.