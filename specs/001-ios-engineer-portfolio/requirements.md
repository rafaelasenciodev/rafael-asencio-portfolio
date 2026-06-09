# Technical Requirements: Senior iOS Engineer Portfolio Website

**Feature**: `001-ios-engineer-portfolio`  
**Date**: 2026-06-09  
**Source**: [spec.md](./spec.md) + user technical brief

## TR-001 — Technology Stack

| ID | Requirement | Priority |
|----|-------------|----------|
| TR-001.1 | Next.js 15 with App Router | Must |
| TR-001.2 | TypeScript (strict mode enabled) | Must |
| TR-001.3 | Tailwind CSS for styling | Must |
| TR-001.4 | Static export (`output: 'export'`) — no Node server in production | Must |

## TR-002 — Hosting & Deployment

| ID | Requirement | Priority |
|----|-------------|----------|
| TR-002.1 | Deployable to GitHub Pages via CI pipeline | Must |
| TR-002.2 | Support configurable `basePath` for project pages vs. user pages | Must |
| TR-002.3 | All asset paths must resolve correctly post-deploy | Must |
| TR-002.4 | Build produces deterministic `out/` artifact | Must |

## TR-003 — Page Structure & Sections

| ID | Requirement | Maps to |
|----|-------------|---------|
| TR-003.1 | Hero: name, role, intro, CV/GitHub/LinkedIn links | FR-001 |
| TR-003.2 | About: summary, technologies, industries | FR-002 |
| TR-003.3 | Experience: Sngular, AvioBook, Grupo ABU | FR-003 |
| TR-003.4 | Projects: SwiftUI Architecture Showcase + upcoming placeholders | FR-004 |
| TR-003.5 | Articles: Medium/external links | FR-005 |
| TR-003.6 | Contact: email, LinkedIn, GitHub | FR-006 |

## TR-004 — Design & UX

| ID | Requirement | Maps to |
|----|-------------|---------|
| TR-004.1 | Minimalist, professional visual language | FR-007 |
| TR-004.2 | Light and dark appearance support | FR-008 |
| TR-004.3 | Mobile-first responsive layout (320px–1920px) | FR-009 |
| TR-004.4 | No heavy animations or complex interactions | FR-010 |
| TR-004.5 | Readable typography: sufficient line-height, contrast, and font sizes | FR-007 |
| TR-004.6 | Primary content language: English | FR-015 |

## TR-005 — Performance

| ID | Requirement | Maps to |
|----|-------------|---------|
| TR-005.1 | First meaningful paint within 3s on 4G (SC-003) | SC-003 |
| TR-005.2 | No client-side data fetching for core content | FR-014 |
| TR-005.3 | Minimal JavaScript bundle; no animation libraries | FR-010 |
| TR-005.4 | Images optimized or statically sized; lazy load below fold | SC-004 |

## TR-006 — SEO & Metadata

| ID | Requirement | Maps to |
|----|-------------|---------|
| TR-006.1 | Page title, description, canonical URL via Metadata API | FR-012 |
| TR-006.2 | Open Graph and Twitter card tags | FR-012 |
| TR-006.3 | `sitemap.xml` and `robots.txt` generated at build | FR-012 |
| TR-006.4 | Semantic heading hierarchy (single `h1`, logical `h2` per section) | FR-012 |

## TR-007 — Accessibility

| ID | Requirement | Maps to |
|----|-------------|---------|
| TR-007.1 | Keyboard-navigable header nav and all interactive elements | User Story 2 |
| TR-007.2 | Skip-to-content link | Edge cases |
| TR-007.3 | Focus-visible styles on all focusable elements | FR-007 |
| TR-007.4 | Color contrast WCAG AA in light and dark modes | FR-008 |
| TR-007.5 | `aria-label` on icon-only controls (theme toggle) | Edge cases |

## TR-008 — Links & External Resources

| ID | Requirement | Maps to |
|----|-------------|---------|
| TR-008.1 | External links: `target="_blank"` + `rel="noopener noreferrer"` | FR-013 |
| TR-008.2 | Email via `mailto:` with encoded address | FR-006 |
| TR-008.3 | CV accessible as `/cv.pdf` or external URL | FR-001 |
| TR-008.4 | All primary links verified at launch | SC-006 |

## TR-009 — Content Architecture

| ID | Requirement | Priority |
|----|-------------|----------|
| TR-009.1 | Content defined in typed TypeScript modules | Must |
| TR-009.2 | Content changes require rebuild/redeploy only | Must |
| TR-009.3 | No CMS, database, or authenticated admin in v1 | Must |

## TR-010 — Quality Gates

| ID | Requirement | Maps to |
|----|-------------|---------|
| TR-010.1 | `npm run build` succeeds with zero errors | — |
| TR-010.2 | ESLint passes with no errors | — |
| TR-010.3 | Lighthouse Performance, Accessibility, SEO ≥ 90 | SC-004 |
| TR-010.4 | No horizontal scroll on 320px viewport | SC-002 |

## Out of Scope (v1)

Per [spec.md](./spec.md#out-of-scope-v1): CMS, auth, analytics dashboard, server-side contact form, i18n, complex animations.
