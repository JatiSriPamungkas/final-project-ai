---
description: "Use when writing or editing any TypeScript or TSX file — enforces strict typing, clean module structure, naming, and error-handling standards."
name: "Code Quality"
applyTo: "**/*.{ts,tsx}"
---

# Code Quality

Narrows the project-wide rules in `.github/copilot-instructions.md` to file-level specifics. Where the two disagree, the project-wide file wins.

## Strict typing

- `strict` is enabled. Do not weaken it or add a local override.
- Prohibited without exception: `any`, `@ts-ignore`, `@ts-expect-error`, and `as unknown as T` double casts used to silence the checker.
- A genuinely dynamic value is typed `unknown` and narrowed once, at the boundary, with a type guard. Narrowing does not get scattered through the tree.
- Use `satisfies` instead of a type annotation when the literal's inference is useful.
- Model variants as discriminated unions, not as optional booleans (`isPrimary`, `isLarge`).
- Type route params explicitly. Under Next.js 15, `params` and `searchParams` are Promises and must be awaited:
  `const { slug } = await params;` with `params: Promise<{ slug: string }>`.

## Props

- Declare props with a named `interface` or `type` above the component. Do not inline the type at the parameter position for anything reused.
- Extending a native element: `React.ComponentProps<"button">`, then spread the rest. Do not redeclare `onClick`, `disabled`, `type`, or `children`.
- `children` is `React.ReactNode`; a single element is `React.ReactElement`. Never `React.ReactNode[]`.
- Never concatenate `className` by hand. Route it through `cn()`.
- Export prop types and shared data shapes from `src/lib/types.ts` when more than one component needs them.

## Modules and files

- One exported component per file, PascalCase, matching the file name in kebab-case.
- Small private subcomponents may share a file only when they are not reused and the file stays under roughly 150 lines.
- Import via the `@/*` alias. Relative chains that climb more than one level (`../../`) are not allowed.
- Import order: external packages, then `@/` modules, then relative siblings, each group separated by a blank line.
- No barrel files (`index.ts` re-exporting a folder). They hide the real dependency and defeat tree-shaking.

## Naming

- Components: `PascalCase`. Hooks: `useCamelCase`. Functions and variables: `camelCase`. Types, interfaces, and enums: `PascalCase`. Module-level constants: `UPPER_SNAKE_CASE`.
- Booleans read as predicates: `isOpen`, `hasError`, `canSubmit`.
- Event handler props are `onX`; their implementations are `handleX`. Do not pass `setState` directly into a handler prop.
- A name must describe intent, not shape. `projects` beats `data`; `isSubmitting` beats `loading`.

## Functions and control flow

- Early returns over nested conditionals. A function should not exceed three levels of indentation.
- No module-level mutable state. No side effects at import time.
- Derive values during render. Do not use `useEffect` for derived state, and do not sync props into state.
- Async functions handle their own failures. Do not let a rejected promise surface as an unhandled rejection.

## Errors

- Never swallow an error in an empty `catch`. Either handle it, or rethrow with context.
- Distinguish expected states from failures. An empty project list is a valid state, not an error.
- User-facing messages do not leak stack traces, internal paths, or raw error objects.

## Verification before finishing a file

- No unresolved type errors reported by the editor.
- No unused imports, props, or variables; no commented-out blocks.
- If the file is a Client Component, confirm a Server Component alternative does not exist.