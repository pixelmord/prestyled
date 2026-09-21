# Prestyled

A component and component theming showcase and documentation site — component library, live showcase, and docs in one pnpm + Turborepo monorepo.

**Live showcase:** https://pixelmord.de/prestyled/

## Project structure

```
apps/
  web/    # Component & theming showcase (Astro, deployed to GitHub Pages)
  docs/   # Documentation site (Astro + Starlight)
packages/
  ui/                # @repo/ui — Astro component library (shadcn-style, Tailwind CSS v4)
  eslint-config/     # Shared ESLint configurations
  typescript-config/ # Shared tsconfig presets
```

Components in `@repo/ui` live under `packages/ui/src/components/` and are exported per-component (`@repo/ui/components/*`), with global theme tokens in `@repo/ui/styles/globals.css`. Both apps consume the library via workspace protocol (`workspace:*`).

## Requirements

- Node.js >= 22.12
- pnpm (enabled via `packageManager` field / Corepack)

## Getting started

```sh
pnpm install
```

## Development

Run all apps and packages in dev mode:

```sh
pnpm dev
```

Or target a specific app with a [Turborepo filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```sh
pnpm exec turbo dev --filter=web    # showcase
pnpm exec turbo dev --filter=docs   # documentation site
```

## Build

```sh
pnpm build        # build all apps/packages
pnpm build:fast   # skip doc-content generation where supported
```

Build a single app:

```sh
pnpm exec turbo build --filter=web
```

## Lint, type check & format

```sh
pnpm lint         # ESLint across the workspace
pnpm check-types  # TypeScript project checks
pnpm format       # Prettier (with the Astro plugin)
```

## Deployment

The showcase (`apps/web`) is deployed to **GitHub Pages** via [GitHub Actions](.github/workflows/deploy.yml) on every push to `main`.

- Site URL: `https://pixelmord.de/prestyled/` (see `site`/`base` in `apps/web/astro.config.mjs`)
- The workflow builds with `pnpm --filter web build` and deploys the `apps/web/dist` artifact
