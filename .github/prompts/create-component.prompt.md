---
name: "Create Component"
description: "Scaffold one new component in src/components with typed props, token-derived Tailwind classes, and the correct Server or Client Component boundary."
agent: "agent"
argument-hint: "Component name, target folder (landing|portfolio|shared), and the design values it needs"
tools: [read, edit, search]
---

Create exactly one component.

Inputs to expect: the component name, its target folder (`src/components/ui/` for a shared primitive, or `src/features/<feature>/components/` for a feature-local component), the file path to write, and the design values for that component — colors, type, spacing, radius.

If the design values are not supplied, ask for them. Do not derive them from a screenshot or from what "looks right".

Steps:

1. Read `src/app/globals.css` and map each supplied value to an existing token. List any value with no token before writing code.
2. Read one existing component in the same folder to match local conventions.
3. Write the file: kebab-case name, PascalCase default export, one component per file.
4. Type props with a named interface. Extend native elements with `React.ComponentProps<"element">` and spread the rest.
5. Use Tailwind utilities only. For a value with no token, use an arbitrary utility such as `gap-[18px]` and state which value you used.
6. Default to a Server Component. Add `'use client'` only for state, an event handler, a ref, or a client-only hook — and say in one line why.
7. Compose conditional classes with `cn()`. A static class list needs no `cn()`.
8. Accessibility: icon-only controls get `aria-label`, decorative icons get `aria-hidden="true"`, heading level is chosen by the surrounding page, not by visual size.
9. Place the component inside the owning feature's `components/` if only that feature uses it. If both features need it, put it in `src/components/ui/`. Never import across feature folders.

Do not create sibling components, do not edit a route file, and do not refactor unrelated files. If the component cannot compile without touching another file, say what blocked it.

Return: the file path written, the prop interface, the token values consumed, and the output of `npx tsc --noEmit` run from `next-app/`.