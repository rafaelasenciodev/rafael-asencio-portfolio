# Implementation Plan: Senior iOS Engineer Portfolio Website

**Branch**: `001-ios-engineer-portfolio` | **Date**: 2026-06-09 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-ios-engineer-portfolio/spec.md`

## Summary

Build a single-page, statically exported portfolio website for a Senior iOS Engineer using **Next.js 15**, **TypeScript**, and **Tailwind CSS**. The site presents six content sections (Hero, About, Experience, Projects, Articles, Contact) with minimalist design, dark mode, mobile-first responsiveness, and SEO metadata. Content lives in typed TypeScript modules. Deployment targets **GitHub Pages** via GitHub Actions CI.

## Technical Context

**Language/Version**: TypeScript 5.x (strict), Node.js 20 LTS  
**Primary Dependencies**: Next.js 15, React 19, Tailwind CSS, next-themes  
**Storage**: N/A — static TypeScript content modules (`content/site.ts`)  
**Testing**: ESLint, TypeScript compiler, optional Playwright smoke tests  
**Target Platform**: Static web (GitHub Pages CDN); browsers: evergreen + mobile Safari  
**Project Type**: Web application (static single-page site)  
**Performance Goals**: LCP < 2.5s, Lighthouse Performance ≥ 90, homepage readable within 3s on 4G  
**Constraints**: `output: 'export'`, no server runtime, no animation libraries, English content  
**Scale/Scope**: 1 page, 6 sections, ~3 employers, ~2–5 projects, ~3–10 articles

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Status | Notes |
|------|--------|-------|
| Constitution ratified | ⚠️ SKIP | `.specify/memory/constitution.md` is template placeholder — applying spec-driven defaults |
| Simplicity (YAGNI) | ✅ PASS | Single page, no CMS, no backend, no state library |
| Static-first | ✅ PASS | Aligns with FR-011 and GitHub Pages constraint |
| Testability | ✅ PASS | Typed content + smoke tests for critical paths |
| Performance budget | ✅ PASS | No heavy JS; static export |

**Post-design re-check**: All gates pass. No complexity tracking entries required.

## Project Structure

### Documentation (this feature)

```text
specs/001-ios-engineer-portfolio/
├── plan.md              # This file
├── research.md          # Phase 0 — technology decisions
├── data-model.md        # Phase 1 — content entities
├── requirements.md      # Technical requirements
├── architecture.md      # System architecture
├── quickstart.md        # Dev setup & deploy guide
├── contracts/           # Type, UI, and SEO contracts
│   ├── content-schema.ts
│   ├── ui-sections.md
│   └── seo-metadata.md
├── checklists/
│   └── requirements.md
└── tasks.md             # Phase 2 — /speckit-tasks (not yet created)
```

### Source Code (repository root)

```text
app/
├── layout.tsx           # Root layout, metadata, theme provider
├── page.tsx             # Single-page section composition
├── globals.css          # Tailwind + CSS variables (light/dark)
├── sitemap.ts
└── robots.ts

components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── SkipLink.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Articles.tsx
│   └── Contact.tsx
└── ui/
    ├── Section.tsx
    ├── Tag.tsx
    ├── ExternalLink.tsx
    └── ProjectCard.tsx

content/
├── site.ts              # SiteContent aggregate
└── navigation.ts        # NavAnchor[]

lib/
├── types.ts             # Mirrors contracts/content-schema.ts
└── utils.ts             # cn(), date formatting

public/
├── cv.pdf
├── og-image.png
└── favicon.ico

.github/
└── workflows/
    └── deploy.yml

next.config.ts
tailwind.config.ts
tsconfig.json
package.json
```

**Structure Decision**: Single Next.js App Router project at repository root. No monorepo, no backend. Section components map 1:1 to spec sections. Content separated from presentation for maintainability.

## Complexity Tracking

> No violations requiring justification.

## Phase 0: Research — Complete

All technical unknowns resolved in [research.md](./research.md):

- Next.js 15 static export pattern
- Tailwind + dark mode via next-themes
- GitHub Pages CI/CD with basePath
- TypeScript content modules
- SEO via Metadata API
- Performance/accessibility approach

## Phase 1: Design — Complete

| Artifact | Path | Status |
|----------|------|--------|
| Data model | [data-model.md](./data-model.md) | ✅ |
| Technical requirements | [requirements.md](./requirements.md) | ✅ |
| Architecture | [architecture.md](./architecture.md) | ✅ |
| Content schema contract | [contracts/content-schema.ts](./contracts/content-schema.ts) | ✅ |
| UI section contract | [contracts/ui-sections.md](./contracts/ui-sections.md) | ✅ |
| SEO contract | [contracts/seo-metadata.md](./contracts/seo-metadata.md) | ✅ |
| Quickstart guide | [quickstart.md](./quickstart.md) | ✅ |

## Implementation Phases (for /speckit-tasks)

### Phase A — Scaffold
- Initialize Next.js 15 + TypeScript + Tailwind
- Configure static export and basePath
- Set up project structure per architecture

### Phase B — Content & Types
- Implement `lib/types.ts` from content schema contract
- Create `content/site.ts` with placeholder/real data
- Validate required employers and project invariants

### Phase C — UI Sections (P1 → P4 order)
1. Layout shell (Header, Footer, SkipLink, ThemeToggle)
2. Hero (P1)
3. Contact (P1)
4. About + Experience (P2)
5. Projects + Articles (P3)
6. Responsive polish + dark mode QA (P4)

### Phase D — SEO & Deploy
- Metadata, sitemap, robots, OG image
- GitHub Actions deploy workflow
- Lighthouse audit and link verification

## Risk Register

| Risk | Mitigation |
|------|------------|
| GitHub Pages basePath misconfiguration | Document env vars; test with `serve out` |
| Static export + next/image limitations | `unoptimized: true` or native `<img>` |
| Missing real content at launch | Placeholder copy with clear TODOs; owner fills before deploy |
| Theme flash on load | Inline blocking script in layout (next-themes pattern) |

## Readiness

| Phase | Status |
|-------|--------|
| Phase 0 Research | ✅ Complete |
| Phase 1 Design | ✅ Complete |
| Phase 2 Tasks | ⏳ Pending — run `/speckit-tasks` |
| Implementation | ⏳ Blocked on tasks.md |
