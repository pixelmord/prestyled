# [bejamas add] `add -a` corrupts a scaffolded workspace: layout collision, malformed index.ts, unrewritten aliases, undeclared deps

> **Environment**
> - OS: macOS (Apple Silicon, **case-insensitive APFS** — relevant to defect 1)
> - Node 24 · pnpm 12.3.4 — scaffolded with `bejamas@latest init` (bejamas 0.4.1, 2026-09-10), template option: **monorepo with component docs**, packageManager switched from bun to pnpm afterwards
> - Command: `bejamas add -a -y` in `packages/ui` over the init-scaffolded component set
> - Docs generation: `bejamas@canary` (tag `0.0.0-canary.0e69934`)

## Summary

Three related defects in `add`/`add -a` output, all of which break the build (each was verified independently):

### 1. Flat vs nested component layout collision (macOS trap)

The template uses the nested convention (`src/components/<name>/<Name>.astro` + `index.ts`, package exports `"./components/*": "./src/components/*.astro"`). `add -a` wrote two components as **flat PascalCase files** alongside it:

```
src/components/Button.astro   (6443 B, registry version — new)
src/components/Input.astro    (byte-identical duplicate of input/Input.astro)
button/Button.astro           (5434 B, template version — untouched without --overwrite)
```

On a case-insensitive filesystem, `@repo/ui/components/button` resolves through the exports pattern to the flat `Button.astro` (implicit default export only) instead of `button/index.ts`. Every consumer does **named** imports (`import { Button } from "@repo/ui/components/button"` — the theme's virtual module, generated MDX), so at render time:

```
[ERROR] Unable to render Button because it is undefined!
```

On case-sensitive Linux this silently falls back to `button/index.ts` and **works** — it will not reproduce in typical CI.

### 2. Malformed `index.ts` — stray cross-component re-export, own parts not exported

Seven components got an `index.ts` whose only content is one re-export pointing at a file from a *sibling* component, while their own `.astro` parts are exported nowhere:

```
button-group/index.ts   -> export { default as Separator } from "./Separator.astro";   # lives in ../separator/
combobox/index.ts       -> export { default as Textarea }  from "./Textarea.astro";   # lives in ../textarea/
dropdown-menu/index.ts  -> export { default as Button }    from "./Button.astro";     # lives in ../button/
field/index.ts          -> export { default as Separator } from "./Separator.astro";
input-group/index.ts    -> export { default as Textarea }  from "./Textarea.astro";
item/index.ts           -> export { default as Separator } from "./Separator.astro";  # item/ has its own ItemSeparator.astro!
popover/index.ts        -> export { default as Button }    from "./Button.astro";     # popover/ has 8 unexported parts
```

Build failure: `[UNRESOLVED_IMPORT] Could not resolve './Separator.astro' in .../item/index.ts`. Looks like the index generator derived its export list from demo imports rather than the directory's files. The scaffolded components (e.g. `select/index.ts`) show the intended convention: one named re-export per local `.astro` part.

### 3. Unrewritten alias + undeclared runtime deps

- `components.json` declares `"lib": "@repo/ui/lib"` and the CLI wrote `src/lib/toggle-shared.ts` / `src/lib/toggle-group-controller.ts`, but three emitted files still import the raw registry specifier `@repo/lib/*` → `Rolldown failed to resolve import "@repo/lib/toggle-shared"`. Affected: `toggle/Toggle.astro`, `toggle-group/ToggleGroupItem.astro`, `toggle-group/ToggleGroup.astro`.
- 14 `@data-slot/*` headless packages are imported by client scripts (`import { createPopover } from "@data-slot/popover"` etc.) but never added to `package.json` (the template only declares `@data-slot/select`): `accordion, collapsible, combobox, dialog, dropdown-menu, hover-card, navigation-menu, popover, radio-group, slider, switch, tabs, toggle, tooltip` → guaranteed build failures since client scripts are bundled at build time.

## Reproduce

```
bejamas@latest init               # monorepo with component docs
pnpm --filter @repo/ui exec bejamas add -a -y
ls packages/ui/src/components/*.astro                 # defect 1: flat Button.astro / Input.astro
cat packages/ui/src/components/item/index.ts          # defect 2
grep -rn "@repo/lib" packages/ui/src                  # defect 3a
pnpm --filter docs build:fast                         # defects 2/3 break the build
```

## Expected

- One canonical layout; on collision with an existing component either skip entirely or replace the complete file set — never emit a parallel flat file. Post-add validation: no flat `*.astro` leftovers when the nested convention is in use.
- `index.ts` generated from the directory's actual files.
- Alias rewriting applies to all emitted specifiers; `add` updates `package.json` for every npm package the emitted files import.

## Workaround we used

Moved the flat `Button.astro` over `button/Button.astro` (kept the newer registry version), deleted the duplicate flat `Input.astro`; regenerated the 7 `index.ts` files (one `export { default as <Part> } from "./<Part>.astro";` per local part); `sed 's|@repo/lib/|@repo/ui/lib/|g'`; added the 14 `@data-slot/*` deps. Build and dev server fully green afterwards.

---

**Part of a series filed for one setup**: #139 · #140 · #141 (this) · #142
