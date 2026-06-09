# Quickstart: Senior iOS Engineer Portfolio Website

**Feature**: `001-ios-engineer-portfolio`  
**Date**: 2026-06-09

## Prerequisites

- Node.js 20 LTS or later
- npm 10+
- Git

## Initial Setup

```bash
# From repository root
npx create-next-app@15 . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"

# Install theme support
npm install next-themes
```

## Project Configuration

1. Set `output: 'export'` in `next.config.ts` (see [architecture.md](./architecture.md))
2. Copy type contracts from [contracts/content-schema.ts](./contracts/content-schema.ts) to `lib/types.ts`
3. Create `content/site.ts` with portfolio data
4. Set environment variables in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_BASE_PATH=
```

For GitHub project pages (`username.github.io/repo-name`):

```env
NEXT_PUBLIC_BASE_PATH=/repo-name
```

## Development

```bash
npm run dev
# Open http://localhost:3000
```

> Note: `next dev` does not use static export. Test production build locally before deploy.

## Production Build

```bash
npm run build
# Output: out/

# Serve locally
npx serve out
```

## Content Updates

1. Edit `content/site.ts`
2. Place CV at `public/cv.pdf` (or update `profile.cvUrl`)
3. Run `npm run build` to verify
4. Commit and push — CI deploys to GitHub Pages

## Required Content Checklist

- [ ] Profile: name, role, intro, email, CV, GitHub, LinkedIn URLs
- [ ] About: summary, technologies[], industries[]
- [ ] Experience: Sngular, AvioBook, Grupo ABU entries
- [ ] Projects: SwiftUI Architecture Showcase (published) + upcoming placeholder
- [ ] Articles: at least one Medium link
- [ ] `public/og-image.png` (1200×630)
- [ ] `public/cv.pdf` (if not external CV URL)

## Quality Verification

```bash
npm run lint
npm run build

# Lighthouse (with serve running)
npx lighthouse http://localhost:3000 --only-categories=performance,accessibility,seo
```

**Targets**: Performance, Accessibility, SEO ≥ 90 (per SC-004).

## GitHub Pages Deploy

Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          NEXT_PUBLIC_SITE_URL: https://<username>.github.io/<repo>
          NEXT_PUBLIC_BASE_PATH: /<repo>
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Enable GitHub Pages → Source: **GitHub Actions** in repository settings.

## Key Documentation

| Document | Purpose |
|----------|---------|
| [spec.md](./spec.md) | User requirements |
| [requirements.md](./requirements.md) | Technical requirements |
| [architecture.md](./architecture.md) | System design |
| [data-model.md](./data-model.md) | Content entities |
| [contracts/](./contracts/) | Type and UI contracts |
| [plan.md](./plan.md) | Implementation plan |

## Next Step

Run `/speckit-tasks` to generate `tasks.md` with dependency-ordered implementation tasks.
