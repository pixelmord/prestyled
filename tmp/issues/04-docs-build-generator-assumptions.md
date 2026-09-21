# [bejamas docs:build] Generator assumes full component set and emits inconsistent import groupings across regenerations

> **Environment**
> - OS: macOS (Apple Silicon)
> - Node 24 · pnpm 12.3.4 — scaffolded with `bejamas@latest init` (bejamas 0.4.1, 2026-09-10), template option: **monorepo with component docs**, packageManager switched from bun to pnpm afterwards
> - Generator: `bejamas@canary` (`docs:build`), canary tag `0.0.0-canary.0e69934` at time of testing
> - Component set at generation time: the init-scaffolded subset (badge, button, label, select) — later all components via `add -a`

## Summary

Three observations from regenerating component docs. Since the MDX is regenerated on every `dev:docs`/`build:docs` run, hand-edits are futile — the generator's assumptions have to hold on their own.

### 1. Demos assume components the workspace doesn't have yet

With only the scaffolded subset installed, generated `label.mdx` contains an **executable** import of a component that was never added:

```mdx
import { Checkbox } from '@repo/ui/components/checkbox';
```

`astro dev`/`build` fails until the user discovers they must run `bejamas add checkbox`. Either the generator should filter demos to importable components, or emit a clear log line ("label.mdx demos require: checkbox — run `bejamas add checkbox`") instead of leaving users with a module-resolution error.

### 2. Import groupings differ between regenerations

One generation of `spinner.mdx` imported the InputGroup family from the `input` specifier:

```mdx
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupTextarea }
  from "@repo/ui/components/input";
```

The next regeneration (minutes later, same component set) imported from `input-group` directly. The former grouping only works if `input/index.ts` re-exports the InputGroup family — which the CLI's own component layout doesn't produce (see the related `add` issue). Whichever grouping is canonical, `docs:build` and `add` need to agree on it.

### 3. Minor: registry name leaks into example code

Code-fence examples reference `@bejamas/ui/components/...` — the publishing monorepo's package name — instead of the consumer's alias from `components.json` (`@repo/ui/...`). Inert (fences aren't executed) but confusing in copy-pasted examples.

## Reproduce

```
bejamas@latest init                                  # monorepo with component docs
npx bejamas@canary docs:build
grep -n "checkbox" apps/docs/src/content/docs/components/label.mdx
npx bejamas@canary docs:build                        # regenerate; diff import groupings
```

## Expected

Generated docs import only what resolves in the target workspace, with stable groupings across runs, and examples use the configured aliases.

---

**Part of a series filed for one setup**: #139 · #140 · #141 · #142 (this)
