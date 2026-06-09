# Research: Senior iOS Engineer Portfolio Website

**Feature**: `001-ios-engineer-portfolio`  
**Date**: 2026-06-09

## R1 — Static Site Framework

**Decision**: Next.js 15 (App Router) with `output: 'export'` for fully static HTML/CSS/JS generation.

**Rationale**: Next.js 15 provides built-in TypeScript support, file-based routing, Metadata API for SEO, and first-class static export. A single-page portfolio maps cleanly to one primary route with section components. Static export eliminates server runtime requirements and aligns with GitHub Pages hosting.

**Alternatives considered**:
- **Astro**: Excellent for content sites, but team preference and original brief specify Next.js.
- **Vite + React**: Lighter bundle, but requires manual SEO and routing setup.
- **Plain HTML/CSS**: Simplest, but harder to maintain typed content and component reuse at scale.

---

## R2 — Styling System

**Decision**: Tailwind CSS v4 (or v3 per project init) with CSS custom properties for theme tokens (light/dark).

**Rationale**: Utility-first CSS enables rapid mobile-first layouts, consistent spacing/typography, and minimal custom CSS. Dark mode via `class` strategy (`dark:` variants) with `prefers-color-scheme` as initial state and optional manual toggle.

**Alternatives considered**:
- **CSS Modules**: More boilerplate for a small site.
- **Styled Components**: Runtime cost conflicts with performance goals.

---

## R3 — GitHub Pages Deployment

**Decision**: Deploy `out/` directory via GitHub Actions (`peaceiris/actions-gh-pages` or official `actions/upload-pages-artifact` + `actions/deploy-pages`). Configure `basePath` only if hosting under a project subdirectory (e.g., `username.github.io/repo-name`); use root path for user/organization pages (`username.github.io`).

**Rationale**: GitHub Actions automates build-on-push. Static export produces an `out/` folder compatible with Pages. `basePath`/`assetPrefix` must match the repository URL structure to avoid broken assets.

**Alternatives considered**:
- **Manual upload**: Error-prone, no CI.
- **Vercel/Netlify**: Simpler deploy but user explicitly requested GitHub Pages compatibility.

---

## R4 — Content Management Strategy

**Decision**: TypeScript content modules under `content/` (or `data/`) exporting typed constants. No CMS, no markdown pipeline in v1.

**Rationale**: Portfolio content changes infrequently. Typed TS files give compile-time validation, zero runtime parsing cost, and easy refactoring. Content updates require a commit and redeploy — acceptable for a personal portfolio.

**Alternatives considered**:
- **MDX**: Useful for articles, but articles link externally to Medium in v1.
- **JSON files**: Less type-safe without schema validation layer.

---

## R5 — Dark Mode Implementation

**Decision**: `next-themes` with `attribute="class"`, defaulting to system preference, with a minimal toggle in the header/footer.

**Rationale**: Respects `prefers-color-scheme` on first visit, persists user choice in `localStorage`, and works with Tailwind `dark:` variants. No flash of wrong theme when combined with a blocking inline script in `layout.tsx`.

**Alternatives considered**:
- **CSS-only `prefers-color-scheme`**: No manual override.
- **Custom hook**: Reinvents `next-themes` behavior.

---

## R6 — SEO & Social Preview

**Decision**: Next.js `metadata` export in `app/layout.tsx` with Open Graph and Twitter card fields. Add `sitemap.ts` and `robots.ts` as static route handlers (compatible with static export in Next.js 15).

**Rationale**: Metadata API is the canonical Next.js approach. Static sitemap/robots improve discoverability without a backend.

**Alternatives considered**:
- **Manual `<head>` tags**: Harder to maintain across pages.
- **react-helmet**: Unnecessary with App Router metadata.

---

## R7 — Performance & Accessibility

**Decision**: No animation libraries. Use semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`), skip links, focus-visible styles, and `next/image` with `unoptimized: true` in static export config (or native `<img>` for simplicity). Target Lighthouse scores ≥ 90.

**Rationale**: Spec mandates fast loading and no heavy animations. Semantic structure satisfies accessibility requirements without ARIA overuse.

**Alternatives considered**:
- **Framer Motion**: Rejected per spec (heavy animations).
- **Lazy-loaded sections**: Minimal benefit for a single-page site with modest content.

---

## R8 — Testing Strategy

**Decision**: ESLint + TypeScript strict mode for static analysis. Optional Playwright smoke test for section visibility and link presence. No unit test framework required for v1 given static content site scope.

**Rationale**: Primary risks are broken links, layout regressions, and type errors in content. Smoke tests cover critical user journeys cheaply.

**Alternatives considered**:
- **Jest + RTL**: Overhead for mostly presentational components.
- **Visual regression**: Unnecessary for minimalist design.

---

## R9 — External Links Behavior

**Decision**: External links (`target="_blank"`) with `rel="noopener noreferrer"` for GitHub, LinkedIn, Medium, and CV. CV opens in new tab if hosted externally; downloads if served from `/public/cv.pdf`.

**Rationale**: Preserves portfolio tab per FR-013 while following security best practices for `target="_blank"`.

**Alternatives considered**:
- **Same-tab navigation**: Loses portfolio context for recruiters comparing profiles.
