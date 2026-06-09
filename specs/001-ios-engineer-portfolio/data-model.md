# Data Model: Senior iOS Engineer Portfolio Website

**Feature**: `001-ios-engineer-portfolio`  
**Date**: 2026-06-09  
**Storage**: TypeScript modules (compile-time only; no database)

## Overview

All entities are static content loaded at build time. No runtime persistence, mutations, or user-generated data.

---

## Profile

Represents the engineer's public identity displayed in Hero and reused in SEO metadata.

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `name` | `string` | Yes | Non-empty, max 80 chars |
| `role` | `string` | Yes | Non-empty, max 120 chars |
| `introduction` | `string` | Yes | Non-empty, max 500 chars |
| `email` | `string` | Yes | Valid email format |
| `cvUrl` | `string` | Yes | Valid URL or relative path (`/cv.pdf`) |
| `githubUrl` | `string` | Yes | Valid HTTPS URL |
| `linkedinUrl` | `string` | Yes | Valid HTTPS URL |
| `location` | `string` | No | Optional display string |

**Relationships**: One Profile per site. Referenced by Contact and Hero sections.

---

## ProfessionalSummary

Content for the About section.

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `summary` | `string` | Yes | Non-empty, supports paragraph breaks |
| `technologies` | `string[]` | Yes | Min 1 item, each non-empty |
| `industries` | `string[]` | Yes | Min 1 item, each non-empty |

**Relationships**: Embedded in site content root; not shared across instances.

---

## ExperienceEntry

A single employment record in the Experience section.

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `id` | `string` | Yes | Unique slug (kebab-case) |
| `company` | `string` | Yes | Non-empty |
| `role` | `string` | Yes | Non-empty |
| `startDate` | `string` | Yes | ISO date or display format (e.g., `"2020"`, `"Jan 2022"`) |
| `endDate` | `string \| null` | Yes | `null` = present; otherwise display/ISO string |
| `description` | `string` | Yes | Non-empty |
| `highlights` | `string[]` | No | Bullet accomplishments |
| `technologies` | `string[]` | No | Role-specific tech tags |

**Relationships**: Ordered collection. Launch requires entries for Sngular, AvioBook, and Grupo ABU.

**Ordering**: Newest `startDate` first (manual order in content file).

---

## Project

A showcased work item in the Projects section.

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `id` | `string` | Yes | Unique slug |
| `title` | `string` | Yes | Non-empty |
| `description` | `string` | Yes | Non-empty |
| `status` | `'published' \| 'upcoming'` | Yes | Enum |
| `tags` | `string[]` | No | Tech/category labels |
| `repoUrl` | `string` | No | Valid HTTPS URL when present |
| `demoUrl` | `string` | No | Valid HTTPS URL when present |
| `imageUrl` | `string` | No | Relative or absolute image path |

**Relationships**: Ordered collection. Must include SwiftUI Architecture Showcase (`status: 'published'`). Upcoming projects use `status: 'upcoming'`.

**State transitions**: `upcoming` → `published` when owner adds links and content (content-only change, no runtime state).

---

## Article

An external publication linked from the Articles section.

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `id` | `string` | Yes | Unique slug |
| `title` | `string` | Yes | Non-empty |
| `source` | `string` | Yes | e.g., `"Medium"` |
| `url` | `string` | Yes | Valid HTTPS URL |
| `publishedAt` | `string` | No | Display date |
| `summary` | `string` | No | Short teaser, max 200 chars |

**Relationships**: Ordered collection, newest first.

---

## ContactChannel

Derived view model for the Contact section (not stored separately).

| Field | Type | Source |
|-------|------|--------|
| `type` | `'email' \| 'github' \| 'linkedin'` | Fixed set |
| `label` | `string` | Display label |
| `href` | `string` | `mailto:` or HTTPS URL |
| `external` | `boolean` | `true` for GitHub/LinkedIn |

**Derivation**: Built from `Profile` fields at render time.

---

## SiteContent (Aggregate Root)

Single exported object composing all entities.

```typescript
interface SiteContent {
  profile: Profile;
  about: ProfessionalSummary;
  experience: ExperienceEntry[];
  projects: Project[];
  articles: Article[];
}
```

**Validation rules (build-time)**:
- `experience` must contain exactly the three required employers (by `company` name match).
- At least one `project` with `title` containing "SwiftUI Architecture Showcase".
- All `url`/`href` fields must pass URL validation.
- No duplicate `id` values within each collection.

---

## NavigationAnchor

Internal section identifiers for in-page navigation.

| Field | Type | Values |
|-------|------|--------|
| `id` | `string` | `hero`, `about`, `experience`, `projects`, `articles`, `contact` |
| `label` | `string` | Human-readable nav label |

**Relationships**: Static config array driving header nav and `id` attributes on `<section>` elements.
