# [starlight-theme-bejamas] 0.2.0 (and canary) published with a `workspace:*` dependency — uninstallable from the public registry

> **Environment**
> - OS: macOS (Apple Silicon, case-insensitive APFS)
> - Package manager: pnpm 12.3.4 — but this issue is **package-manager-agnostic** (broken manifest content on npm)
> - Scaffolded with `bejamas@latest init` (bejamas 0.4.1, 2026-09-10), template option: **monorepo with component docs**, packageManager switched from bun to pnpm afterwards
> - Theme version: `starlight-theme-bejamas@0.2.0` (npm `latest`, published 2026-04-01); canary tag `0.0.0-canary.0e69934`

## Summary

`starlight-theme-bejamas@0.2.0` ships a raw pnpm workspace-protocol specifier in its published `dependencies`:

```
$ npm view starlight-theme-bejamas@0.2.0 dependencies
{
  '@lucide/astro': '^0.545.0',
  '@fontsource/inter': '^5.2.8',
  '@bejamas/semantic-icons': 'workspace:*',   <-- leaked
  '@fontsource-variable/inter': '^5.2.8',
  '@expressive-code/plugin-line-numbers': '^0.41.3'
}
```

`@bejamas/semantic-icons` does not exist on the public registry:

```
$ npm view @bejamas/semantic-icons
npm error code E404
```

The `workspace:` protocol must be rewritten to a concrete version at publish time (e.g. by publishing with `pnpm publish`). The current canary is also affected — it depends on `'@bejamas/semantic-icons': '0.1.0'`, which 404s publicly (presumably private-registry-only), so there is currently **no installable release, stable or canary**.

## Reproduce

```
$ pnpm add starlight-theme-bejamas
Error: Failed to resolve dependency: In <importer>: "@bejamas/semantic-icons@workspace:*"
is in the dependencies but no package named "@bejamas/semantic-icons" is present in the workspace
```

Note the error is attributed to the *importer*, not to the theme — from the consumer side nothing in their own tree references the package at all, which makes this very hard to debug. The only import site in the 0.2.0 tarball is one client script:

```js
// src/overrides/ThemeProvider.astro
import { syncSemanticIconsInRoot } from "@bejamas/semantic-icons/browser";
```

## Expected

Published manifests never contain `workspace:*`. Either the dependency is rewritten at publish, the icons package is published publicly, or the dependency is dropped/inlined.

## Suggested fix

- Publish via `pnpm publish` (rewrites workspace protocol), or add a publish-time CI guard that fails if any `workspace:` specifier survives into the artifact.
- Consider `npm deprecate starlight-theme-bejamas@0.2.0` with a pointer to the fixed release so consumers get a signal instead of a resolver error.

## Workaround we used

Pinned the last clean stable: `starlight-theme-bejamas@^0.1.18` (its config schema already supports the `nav` and `components` options the init template passes) and added `@fontsource/inter` + `@fontsource-variable/inter` to the docs app (the theme's injected CSS imports them — details in the related init-template issue).

---

**Part of a series filed for one setup** (`bejamas@latest init` → monorepo-with-component-docs template, packageManager switched from bun to pnpm, macOS Apple Silicon, Node 24, pnpm 12.3.4): #139 (this) · #140 · #141 · #142
