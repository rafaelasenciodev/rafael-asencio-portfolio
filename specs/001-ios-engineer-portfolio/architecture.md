# Architecture: Senior iOS Engineer Portfolio Website

**Feature**: `001-ios-engineer-portfolio`  
**Date**: 2026-06-09

## System Context

```text
┌─────────────┐     HTTPS      ┌──────────────────┐
│   Visitor   │ ──────────────▶│  GitHub Pages    │
│  (Browser)  │◀────────────── │  (Static CDN)    │
└─────────────┘   HTML/CSS/JS  └────────┬─────────┘
                                         │
                              ┌──────────▼──────────┐
                              │  out/ (artifact)  │
                              │  built by CI      │
                              └──────────┬────────┘
                                         │
                              ┌──────────▼────────┐
                              │  Next.js Build    │
                              │  (static export)  │
                              └──────────┬────────┘
                                         │
                              ┌──────────▼────────┐
                              │  content/*.ts     │
                              │  components/*.tsx │
                              └───────────────────┘
```

**External dependencies** (outbound links only): GitHub, LinkedIn, Medium, CV host.

No backend services, databases, or authenticated APIs in v1.

---

## Architectural Style

- **Pattern**: Static Site Generation (SSG) — single-page application rendered at build time.
- **Rendering**: Server Components by default; Client Components only for theme toggle and interactive nav (mobile menu if needed).
- **Data flow**: Unidirectional — `content/` → page components → static HTML.
- **State**: Theme preference in `localStorage` (client-only); no global app state library.

---

## Layer Diagram

```text
┌─────────────────────────────────────────────────────────┐
│ Presentation Layer                                      │
│  app/layout.tsx, app/page.tsx                           │
│  components/sections/{Hero,About,Experience,...}.tsx    │
│  components/layout/{Header,Footer,ThemeToggle}.tsx      │
│  components/ui/{Button,Link,SectionHeading}.tsx         │
├─────────────────────────────────────────────────────────┤
│ Content Layer                                           │
│  content/site.ts (aggregate SiteContent)                │
│  content/navigation.ts                                  │
├─────────────────────────────────────────────────────────┤
│ Domain Layer                                            │
│  lib/types.ts (Profile, ExperienceEntry, Project, ...)  │
│  lib/validators.ts (optional URL/email checks)          │
├─────────────────────────────────────────────────────────┤
│ Infrastructure Layer                                    │
│  next.config.ts (export, basePath, images)              │
│  tailwind.config.ts, postcss.config.mjs                 │
│  .github/workflows/deploy.yml                           │
└─────────────────────────────────────────────────────────┘
```

---

## Component Architecture

### Page Composition (`app/page.tsx`)

Single route assembling section components in scroll order:

```text
<Header />
<main>
  <Hero />
  <About />
  <Experience />
  <Projects />
  <Articles />
  <Contact />
</main>
<Footer />
```

Each section:
- Receives typed props from `content/site.ts`
- Exposes `id` matching navigation anchor
- Uses shared `Section` wrapper for consistent padding/max-width

### Layout (`app/layout.tsx`)

Responsibilities:
- Root HTML shell (`lang="en"`)
- Global metadata (SEO)
- Font loading (system stack or single web font)
- `ThemeProvider` wrapper (client boundary)
- Global styles import

---

## Content Architecture

```typescript
// content/site.ts
import type { SiteContent } from '@/lib/types';

export const siteContent: SiteContent = {
  profile: { /* ... */ },
  about: { /* ... */ },
  experience: [ /* Sngular, AvioBook, Grupo ABU */ ],
  projects: [ /* SwiftUI Architecture Showcase, upcoming */ ],
  articles: [ /* Medium links */ ],
};
```

Content updates = edit TS file → `npm run build` → CI deploy.

---

## Theming Architecture

```text
System preference (prefers-color-scheme)
        │
        ▼
  next-themes Provider
        │
   ┌────┴────┐
   ▼         ▼
 light     dark
   │         │
   └────┬────┘
        ▼
 Tailwind dark: variants
 CSS variables (--background, --foreground, ...)
```

**Design tokens** (CSS custom properties in `globals.css`):
- `--background`, `--foreground`
- `--muted`, `--accent`
- `--border`

---

## Build & Deploy Pipeline

```text
git push → main
    │
    ▼
GitHub Actions: build job
    │  npm ci
    │  npm run build  →  out/
    ▼
GitHub Actions: deploy job
    │  upload out/ to Pages
    ▼
Live site (CDN)
```

### `next.config.ts` key settings

```typescript
const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true, // GitHub Pages compatibility
};
```

---

## SEO Architecture

| Artifact | Mechanism |
|----------|-----------|
| `<title>`, `<meta description>` | `export const metadata` in `layout.tsx` |
| OG/Twitter tags | `metadata.openGraph`, `metadata.twitter` |
| `sitemap.xml` | `app/sitemap.ts` static generation |
| `robots.txt` | `app/robots.ts` |
| Structured data | Optional `JSON-LD` Person schema in layout |

---

## Security Considerations

- Static site: no server-side attack surface
- External links: `rel="noopener noreferrer"`
- No user input collection in v1 (no XSS vectors from forms)
- Dependencies pinned in `package-lock.json`; periodic audit via `npm audit`

---

## Scalability & Evolution

| Future need | Extension path |
|-------------|----------------|
| Blog on-site | Add MDX route `/blog/[slug]` |
| Analytics | Inject privacy-friendly script (Plausible/Umami) |
| i18n | `next-intl` with static locale routes |
| More projects | Extend `content/site.ts` projects array |
| Custom domain | GitHub Pages DNS + `CNAME` |

---

## Key Architectural Decisions

| Decision | Rationale |
|----------|-----------|
| Single page vs. multi-route | All sections visible via scroll; simpler nav for portfolio |
| TS content vs. CMS | Infrequent updates; type safety; zero runtime cost |
| Static export vs. SSR | GitHub Pages constraint; no server needed |
| Minimal client JS | Performance and simplicity per spec |
