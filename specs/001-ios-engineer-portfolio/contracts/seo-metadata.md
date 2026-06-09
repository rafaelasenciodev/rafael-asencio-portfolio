# SEO & Metadata Contract

**Feature**: `001-ios-engineer-portfolio`  
**Date**: 2026-06-09

## Page Metadata (`app/layout.tsx`)

| Field | Source | Example |
|-------|--------|---------|
| `title` | `profile.name` + role | `"Rafael Asencio — Senior iOS Engineer"` |
| `description` | `profile.introduction` (truncated 160 chars) | First sentence of intro |
| `metadataBase` | Env `NEXT_PUBLIC_SITE_URL` | `https://rafael-asencio.github.io` |
| `canonical` | Same as site URL | Root path |

## Open Graph

| Property | Value |
|----------|-------|
| `og:type` | `website` |
| `og:title` | Same as `title` |
| `og:description` | Same as `description` |
| `og:url` | Canonical URL |
| `og:locale` | `en_US` |
| `og:image` | `/og-image.png` (1200×630, static asset in `public/`) |

## Twitter Card

| Property | Value |
|----------|-------|
| `twitter:card` | `summary_large_image` |
| `twitter:title` | Same as `title` |
| `twitter:description` | Same as `description` |
| `twitter:image` | Same as `og:image` |

## Structured Data (Optional v1)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "{profile.name}",
  "jobTitle": "{profile.role}",
  "url": "{siteUrl}",
  "sameAs": ["{githubUrl}", "{linkedinUrl}"]
}
```

## Sitemap (`app/sitemap.ts`)

- Single entry: `/` (homepage)
- `lastModified`: build date or content update date
- `changeFrequency`: `monthly`
- `priority`: `1.0`

## Robots (`app/robots.ts`)

```text
User-agent: *
Allow: /
Sitemap: {siteUrl}/sitemap.xml
```

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Canonical URL, sitemap, OG |
| `NEXT_PUBLIC_BASE_PATH` | Conditional | GitHub project pages subdirectory |
