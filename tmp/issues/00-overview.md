# bejamas/ui issue reports — filed upstream

Date: 2026-09-10 · Filed as GitHub user `pixelmord` against https://github.com/bejamas/ui

## Setup context (included in every report)

`bejamas@latest init` (bejamas 0.4.1) → template option **"monorepo with component docs"** → **packageManager switched from bun to pnpm** (edited `packageManager`, added `pnpm-workspace.yaml`) · macOS Apple Silicon (case-insensitive APFS) · Node 24 · pnpm 12.3.4 · docs generation via `bejamas@canary` (tag `0.0.0-canary.0e69934`) · theme `starlight-theme-bejamas@0.2.0`.

## Filed issues (cross-linked as one series)

| Issue | Title | Local file |
|---|---|---|
| [bejamas/ui#139](https://github.com/bejamas/ui/issues/139) | [starlight-theme-bejamas] 0.2.0 (and canary) published with a `workspace:*` dependency — uninstallable | `01-theme-publishes-workspace-protocol-dep.md` |
| [bejamas/ui#140](https://github.com/bejamas/ui/issues/140) | [bejamas init] monorepo-with-component-docs: manifests incomplete — install/build fail after switching from bun to pnpm | `02-init-template-manifests-incomplete-pnpm.md` |
| [bejamas/ui#141](https://github.com/bejamas/ui/issues/141) | [bejamas add] `add -a` corrupts a scaffolded workspace: layout collision, malformed index.ts, unrewritten aliases, undeclared deps | `03-add-corrupts-scaffolded-workspace.md` |
| [bejamas/ui#142](https://github.com/bejamas/ui/issues/142) | [bejamas docs:build] assumes full component set; inconsistent import groupings across regenerations | `04-docs-build-generator-assumptions.md` |

Original granular findings were combined: 02–04 → #140, 05–07 → #141 (see git history of this folder / session notes if the granular versions are needed).

## Local workarounds applied (this repo)

| Symptom | Workaround |
|---|---|
| Theme uninstallable (#139) | Pinned `starlight-theme-bejamas@^0.1.18` |
| Missing font CSS deps (#140) | `pnpm --filter docs add @fontsource/inter @fontsource-variable/inter` |
| Missing icon dep (#140) | `pnpm --filter docs add @lucide/astro` |
| Missing web→ui dep (#140) | `pnpm --filter web add "@repo/ui@workspace:*"` |
| Bare `*` specifiers (#140) | Rewrote to `workspace:*` in `packages/ui/package.json` |
| Missing checkbox component (#142) | `pnpm --filter @repo/ui exec bejamas add checkbox -y` |
| pnpm 12 build-script gate | `allowBuilds: {esbuild, msw, sharp}` in `pnpm-workspace.yaml` (pnpm 12 key; `onlyBuiltDependencies` is ignored) |
| Flat/nested collision (#141) | Moved flat `Button.astro` (registry version) over `button/Button.astro`; deleted duplicate flat `Input.astro` |
| Mangled index.ts (#141) | Regenerated the 7 files: one `export { default as X } from "./X.astro";` per local part |
| `@repo/lib/*` (#141) | Rewrote to `@repo/ui/lib/*` (target files already existed in `src/lib/`) |
| `@data-slot/*` undeclared (#141) | Added all 14 missing packages to `packages/ui` |

Verification state: `pnpm i` clean; `docs build:fast` → 45 pages; `web build` clean; dev server serves all component pages 200.
