---
name: component-audit
description: "Audit React components in this Next.js project for accessibility gaps, token violations, misplaced client boundaries, and component-boundary mistakes. Use when a review is needed of a component that was just built, when checking a page before handover, or when a slice looks subtly wrong but the cause is unclear."
argument-hint: "Path or route to audit"
---

# Component Audit

Run a repeatable quality check over a component, a section, or a whole route. The goal is to catch the defects that survive a visual glance: a guessed hex, a `'use client'` that should not exist, an unlabelled icon button, a heading level that skips.

## When to Use

- A component or page was just written and needs checking before it is considered done.
- A slice looks right but behaves wrong — layout shifts, focus traps, unreadable text.
- Preparing a page for handover and needing a consistent pass over both routes.

Not for reviewing logic or data flow in server code, and not a substitute for the build check.

## Inputs

- The file path or route to audit.
- Read access to `next-app/src/`. For layout and contrast questions, the Figma node.

## Procedure

Run the checks in this order — a token violation is cheaper to fix than an accessibility defect that reaches a user.

### 1. Token compliance

1. Read `src/app/globals.css` and list the available tokens.
2. Search the target files for `#` hex literals, arbitrary utilities (`[...]`), and `style=`.
3. For each hit, decide: is it a design value with no scale equivalent (acceptable, must be recorded), or a value that an existing token already covers (a defect)?
4. Confirm no component redeclares a value that a sibling already expresses with a token class.

### 2. Client boundaries

5. List every file with `'use client'`.
6. For each, confirm it needs state, an event handler, a ref, or a client-only hook. A file that only renders markup is a defect.
7. Confirm no `page.tsx` or `layout.tsx` carries the directive.
8. Check whether a directive could move down to a smaller leaf.

### 3. Component boundaries

9. Confirm no file in `src/features/landing-page/` imports from `src/features/portfolio/`, or the reverse.
10. Look for duplicated markup across the two features that should be promoted to `src/components/ui/`.
11. Confirm no file outside `src/app/` exports a route-level name (`page`, `layout`, `loading`, `error`, `not-found`, `route`).
12. Confirm `src/app/**` contains composition only — no markup beyond a thin wrapper, no styles of its own.

### 4. Accessibility

12. One `h1` per page. Heading levels ordered with no skips.
13. Every interactive element is a `button`, `a`, or a real form control.
14. Every icon-only control has an `aria-label`; every decorative icon has `aria-hidden="true"`.
15. Every image has `alt`, empty when decorative.
16. Focusable elements have a `focus-visible:` style.
17. Check the text/background token pairs in use against WCAG AA: 4.5:1 body text, 3:1 large text and UI boundaries.

### 5. Responsive

18. Base utilities target the smallest frame; breakpoints layer upward.
19. Long headings, long single words, and missing image dimensions do not break the layout.
20. The layout remains usable at 320px.

### 6. Type safety

21. No `any`, `@ts-ignore`, or `@ts-expect-error`.
22. Props typed with a named interface.
23. Route params awaited.

## Reporting

Group findings by severity:

1. **Broken** — behaviour or accessibility failure.
2. **Accessibility** — labels, contrast, focus, semantics.
3. **Consistency** — token drift, duplicated primitives, boundary errors.
4. **Style** — naming, ordering, dead code.

For each finding: file, line, problem, impact, fix. If a category is clean, say so in one line. Do not pad the report.

## Verification

After fixes, report the output of these commands, run from `next-app/`:

- `npx tsc --noEmit`
- `npm run lint`
- `npm run build`

A clean build is required — it is the check that catches an illegal client-boundary import that TypeScript alone will not.

## Reference

- `.github/copilot-instructions.md` — project rules
- `.github/instructions/ui.instructions.md` — component and token rules
- `.github/instructions/code-quality.instructions.md` — typing and module rules
- `.github/prompts/review-ui.prompt.md` — the conversational version of this audit