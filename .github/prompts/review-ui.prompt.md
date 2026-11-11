---
name: "Review UI"
description: "Audit a page or component for accessibility, responsive behaviour, token compliance, component boundaries, and consistency with the design."
agent: "agent"
argument-hint: "File or route to review"
tools: [read, search]
---

Review the supplied file or route. Read related components and the token file when needed to judge correctness.

Check, in this order:

1. **Token compliance** — every color, size, spacing, radius, and shadow traces to `src/app/globals.css`. Flag any raw hex or px literal, and any arbitrary utility whose value is not recorded from the design.
2. **Client boundary** — `'use client'` appears only where state, handlers, refs, or client-only hooks require it. Flag directives on `page.tsx` or `layout.tsx`, and directives that could be pushed lower.
3. **Component boundaries** — feature-local components stay inside `src/features/<name>/components/`; anything reused across features lives in `src/components/ui/`. Flag cross-feature imports and duplicated primitives.
4. **Accessibility** — one `h1` per page, ordered headings, real `button`/`a` elements, `aria-label` on icon-only controls, `aria-hidden` on decorative icons, visible `focus-visible` ring, `alt` on every image. Report colour pairs that look below WCAG AA.
5. **Responsive behaviour** — base styles target the smallest frame, breakpoints layer upward, layout survives 320px, long text and variable image dimensions are handled.
6. **Type safety** — no `any`, no `@ts-ignore`, props typed with a named interface, route params awaited.

Report only actionable findings. For each: file and line, the problem, its impact, and the specific fix. Order findings by severity — broken behaviour first, then accessibility, then consistency, then style.

Do not edit files. Do not run the dev server. If a finding depends on the rendered result rather than the source, say so and name the check that would confirm it.

If you find nothing in a category, say so briefly rather than padding the report.