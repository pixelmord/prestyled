# [bejamas init] Monorepo-with-component-docs template: manifests are incomplete — install/build fail after switching packageManager from bun to pnpm

> **Environment**
> - OS: macOS (Apple Silicon, case-insensitive APFS)
> - Node 24 · **pnpm 12.3.4** — scaffolded with `bejamas@latest init` (bejamas 0.4.1, 2026-09-10), template option: **monorepo with component docs**, then **packageManager switched from bun to pnpm** (edited `packageManager`, added `pnpm-workspace.yaml`)
> - Docs generation: `bejamas@canary` (tag `0.0.0-canary.0e69934`)

## Summary

After scaffolding the monorepo-with-component-docs template and switching to pnpm, the workspace neither installs nor builds. Four manifest defects, all in the same family — the template's manifests appear tuned to bun's behavior (root `package.json` keeps a `workspaces` field; bare `*` specifiers; cross-workspace imports that resolve via bun's hoisting). Under pnpm's isolated linker, undeclared = unresolvable:

| # | File | Defect | Failure |
|---|------|--------|---------|
| 1 | `packages/ui/package.json` | `"@repo/eslint-config": "*"`, `"@repo/typescript-config": "*"` — bare specifiers instead of `workspace:*` | `pnpm i` → `GET registry.npmjs.org/@repo%2Feslint-config: 404` |
| 2 | `apps/docs/package.json` | missing `@fontsource/inter` + `@fontsource-variable/inter` — the theme's injected CSS imports them (`@fontsource/inter/400.css` etc. from `virtual:starlight/user-css` and the theme stylesheet) | `astro build`/`dev` → `Rolldown failed to resolve import "@fontsource/inter/400.css"` |
| 3 | `apps/docs/package.json` | missing `@lucide/astro` — `docs:build` generates MDX whose **executable** imports pull icons directly (`import { BadgeCheckIcon, XIcon } from '@lucide/astro'` in `badge.mdx`, `button.mdx`) | after `docs:build`: `Cannot find module '@lucide/astro' imported from .../badge.mdx` |
| 4 | `apps/web/package.json` | missing `@repo/ui` — `apps/web/src/layouts/Layout.astro` does `import "@repo/ui/globals.css"` | `astro build` → `Rolldown failed to resolve import "@repo/ui/globals.css"` |

(`apps/docs` correctly declares `"@repo/ui": "workspace:*"`, so the intended convention is visible in the template itself.)

## Reproduce

```
bejamas@latest init          # choose "monorepo with component docs"
# switch packageManager bun -> pnpm, add pnpm-workspace.yaml
pnpm i                       # fails on defect 1 (if the theme install error doesn't hit first — see related issue)
# after working around 1:
pnpm --filter docs build:fast   # defect 2
npx bejamas@canary docs:build && pnpm --filter docs build:fast   # defect 3
pnpm --filter web build         # defect 4
```

## Expected

If pnpm is a supported option for this template, every workspace package declares everything it (or its generated code) imports, and workspace-internal deps use the `workspace:` protocol. If bun is the only supported packageManager, `init` should say so explicitly — but note defect 2 also bites bun users of the theme's font CSS unless their docs app happens to declare the fontsource packages.

## Workaround we used

```
# packages/ui
"@repo/eslint-config": "workspace:*", "@repo/typescript-config": "workspace:*"
# apps/docs
pnpm --filter docs add @fontsource/inter @fontsource-variable/inter @lucide/astro
# apps/web
pnpm --filter web add "@repo/ui@workspace:*"
```

---

**Part of a series filed for one setup**: #139 · #140 (this) · #141 · #142
