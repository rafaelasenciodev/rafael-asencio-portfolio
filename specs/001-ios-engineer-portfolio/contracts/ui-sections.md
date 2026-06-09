# UI Section Contract

**Feature**: `001-ios-engineer-portfolio`  
**Date**: 2026-06-09

Defines the public UI surface exposed to visitors. Each section is a self-contained component with a stable DOM contract.

## Global Layout Contract

| Element | Requirement |
|---------|-------------|
| `<html lang="en">` | Required |
| Skip link | First focusable element; targets `#main-content` |
| `<header>` | Sticky or static; contains logo/name + nav + theme toggle |
| `<main id="main-content">` | Wraps all sections |
| `<footer>` | Copyright + repeated contact links |

## Section Registry

| Section ID | Component | Heading (`h2`) | Required Content |
|------------|-----------|----------------|------------------|
| `hero` | `Hero` | — (uses `h1` for name) | Name, role, intro, CV/GitHub/LinkedIn CTAs |
| `about` | `About` | "About" | Summary paragraph, tech tags, industry tags |
| `experience` | `Experience` | "Experience" | Timeline/list of 3+ entries |
| `projects` | `Projects` | "Projects" | ≥1 published card, ≥1 upcoming card |
| `articles` | `Articles` | "Articles" | List of external article links |
| `contact` | `Contact` | "Contact" | Email, LinkedIn, GitHub |

## Navigation Contract

- Header nav links use `href="#{section-id}"` for in-page scroll
- Mobile: collapsible menu or horizontal scroll; all 6 anchors reachable
- Active section highlighting: optional; not required in v1

## Hero Contract

```text
<h1>{profile.name}</h1>
<p class="role">{profile.role}</p>
<p class="intro">{profile.introduction}</p>
<nav aria-label="Primary actions">
  <a href={cvUrl}>CV</a>
  <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
</nav>
```

## Experience Entry Card Contract

Each entry renders:
- Company name (prominent)
- Role title
- Date range (`startDate` – `endDate | "Present"`)
- Description
- Optional highlights as `<ul>`
- Optional technology tags

## Project Card Contract

| `status` | Visual treatment |
|----------|------------------|
| `published` | Full card with links (repo/demo) when URLs present |
| `upcoming` | Muted style + "Coming soon" badge; no broken links |

## Article List Item Contract

- Title (link to external URL)
- Source label (e.g., "Medium")
- Optional date and summary
- External link: `target="_blank"` + `rel="noopener noreferrer"`

## Theme Toggle Contract

- Button with `aria-label="Toggle color theme"`
- Icons: sun/moon or text labels "Light"/"Dark"
- Persists preference across sessions
- Respects system preference on first visit

## Responsive Breakpoints

| Token | Min width | Layout behavior |
|-------|-----------|-----------------|
| `sm` | 640px | Single column → optional 2-col grids |
| `md` | 768px | Side-by-side project cards |
| `lg` | 1024px | Max content width ~768px centered |
| `xl` | 1280px | Same; increased horizontal padding |

## Prohibited UI Patterns (v1)

- Parallax scrolling
- Page transition animations
- Auto-playing media
- Modal dialogs (except mobile nav if needed)
- Loading spinners for static content
