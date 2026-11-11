# Project Guidelines

A Figma-to-code slicing project. One Next.js app in `next-app/`, organised by feature: a Landing Page at `/` and a Portfolio at `/portfolio`. Both features share one design-token layer and one shared UI layer.

## Architecture

- The app root is `next-app/`. All npm commands run from there, not from the repository root.
- The codebase is **feature-based**, not type-based. Feature code lives in `src/features/landing-page/` and `src/features/portfolio/` — never scattered across top-level `components/` folders.
- Each feature owns its own `components/`, `data/`, and `types.ts`, and exposes a single public entry point at `features/<name>/index.ts`. Cross-feature imports go through that barrel only; never reach into another feature's internals.
- `src/components/ui/` holds primitives shared by both features: `Button`, `Badge`, `Card`, `Container`, `IconWell`, `StatusPill`.
- `src/app/` owns routing only. It composes features; it does not contain markup or styles of its own.
- Routes: `src/app/page.tsx` serves `/` and renders the landing feature; `src/app/portfolio/page.tsx` serves `/portfolio` and renders the portfolio feature.
- `src/app/globals.css` is the single source of truth for design tokens, declared in a Tailwind v4 `@theme inline` block mapping Figma values onto Tailwind utilities.
- Shared helpers and cross-feature types live in `src/lib/`.
- Never fork the token layer per feature. A new value goes into `globals.css` with a comment naming the source Figma node.

## Feature ownership

- A feature folder is self-contained. `features/landing-page/` may import from `components/ui/` and `lib/`, and from its own internals. It may not import from `features/portfolio/`.
- Common code moves down to `components/ui/` or `lib/`, never sideways between features.
- `src/app/**` may import a feature barrel. A feature may not import from `src/app/`.
- Route-level files (`page`, `layout`, `loading`, `error`, `not-found`, `route`) exist only in `src/app/`.
- `src/app/layout.tsx` is the only root layout. It loads the fonts and imports `globals.css`.

## Design tokens are extracted, never guessed

- Every color, font size, line height, spacing step, radius, border width, and shadow must trace to a value read from the Figma file.
- Do not invent a hex code, a padding value, or a font size. If a value is missing from the extracted token set, stop and ask instead of approximating.
- When a Figma measurement has no matching scale step, use a Tailwind arbitrary utility (for example `w-[347px]`) rather than rounding to the nearest scale value. Arbitrary utilities are still classes and are allowed; inline `style` attributes are not.

## Code Style

- TypeScript strict mode. `any`, `@ts-ignore`, and `@ts-expect-error` are prohibited. Model a genuinely unknown value as `unknown` and narrow it.
- Type props with a named interface, or extend a DOM element with `React.ComponentProps<"button">` and spread the rest.
- Tailwind utility classes only. No `style={{}}`, no CSS modules, no styled-components.
- Compose conditional class names with `cn` from `src/lib/utils.ts`.
- Components are small and single-purpose. A section component composes smaller components; it does not reimplement them.
- File names are kebab-case (`hero-section.tsx`); component names are PascalCase (`HeroSection`).

## React Server Components

- Every component is a Server Component by default.
- Add `'use client'` only when a component needs state, an event handler, a ref, or a client-only hook such as `useEffect`.
- Push the directive as deep as possible. Never place it on `page.tsx` or `layout.tsx`; isolate the interactive fragment into its own leaf component and import that.
- Because the baseline is Tailwind v4 + React 19: no `forwardRef`. Accept `ref` as a normal prop.

## Images and media

- Use `next/image` for all raster and SVG imagery, with the width and height matching the asset's intrinsic dimensions.
- Static assets live in `next-app/public/` and are referenced from the site root (`/figma/hero.svg`).
- Decorative icons are marked `aria-hidden="true"`; icon-only controls require an `aria-label`.

## Accessibility baseline

- One `h1` per page; heading levels are ordered and never skipped.
- Interactive elements are real `button` or `a` elements, never clickable `div`s.
- Every focusable element shows a visible focus ring (`focus-visible:`).
- Text and UI color pairs drawn from the tokens must meet WCAG AA contrast.

## Responsiveness

- Mobile-first. Base utilities target the smallest measured frame; layer `sm:`, `md:`, and `lg:` upward.
- Breakpoint values come from the mobile and tablet frames in the design file. Where a Figma breakpoint disagrees with a Tailwind default, follow Figma and encode it in `globals.css`.
- Layouts must stay usable from 320px width upward.

## Build and Test

Run every command from `next-app/`:

- `npm run dev` — dev server (Turbopack).
- `npx tsc --noEmit` — type-check. Zero errors required.
- `npm run lint` — lint. Must be clean.
- `npm run build` — production build. This is the check that catches illegal server/client boundary imports.

Stop the dev server before running `npm run build` — both share `.next`, and building underneath a live dev server corrupts its module graph.

## Conventions

- Use `copilot-instructions.md` only. Do not add an `AGENTS.md` alongside it; if the scaffolder generates one, delete it.
- Prefer extending an existing `src/components/ui/` primitive over writing a new one.
- Anchor links and navigation targets resolve to a real route or section id.
- Delete unused imports and unused components. Dead code is not kept "for later".
- Progress and decisions are logged in the root `step-by-step.md`, not in scattered notes.