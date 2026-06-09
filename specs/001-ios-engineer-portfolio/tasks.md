# Tasks: Senior iOS Engineer Portfolio Website

**Input**: Design documents from `/specs/001-ios-engineer-portfolio/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Not requested in spec — no test tasks included. Validation via build, Lighthouse, and link checks in Polish phase.

**Organization**: Tasks grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: User story label (US1–US4)
- All tasks include exact file paths

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize Next.js 15 project with static export configuration

- [ ] T001 Initialize Next.js 15 project with TypeScript, Tailwind CSS, ESLint, and App Router at repository root
- [ ] T002 Install next-themes, clsx, and tailwind-merge dependencies in `package.json`
- [ ] T003 Configure `output: 'export'`, `basePath`, `assetPrefix`, `images.unoptimized`, and `trailingSlash` in `next.config.ts`
- [ ] T004 [P] Create `.env.local.example` with `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BASE_PATH` variables
- [ ] T005 [P] Enable TypeScript strict mode and path alias `@/*` in `tsconfig.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core types, content, layout shell, and shared UI primitives that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T006 Create `lib/types.ts` mirroring interfaces from `specs/001-ios-engineer-portfolio/contracts/content-schema.ts`
- [ ] T007 Create `lib/utils.ts` with `cn()` helper using clsx and tailwind-merge
- [ ] T008 Create `content/navigation.ts` with NavigationAnchor array for all six sections
- [ ] T009 Create `content/site.ts` with typed SiteContent skeleton (empty/placeholder values for all entities)
- [ ] T010 Create `app/globals.css` with Tailwind directives and light/dark CSS custom properties (`--background`, `--foreground`, `--muted`, `--accent`, `--border`)
- [ ] T011 Create `components/ui/Section.tsx` shared wrapper accepting `id`, `title`, and `children` props
- [ ] T012 [P] Create `components/ui/Tag.tsx` for technology and industry label chips
- [ ] T013 [P] Create `components/ui/ExternalLink.tsx` with `target="_blank"` and `rel="noopener noreferrer"`
- [ ] T014 Create `components/layout/SkipLink.tsx` linking to `#main-content` as first focusable element
- [ ] T015 Create `app/layout.tsx` with root HTML shell, ThemeProvider, metadata stub, and `globals.css` import
- [ ] T016 Create `app/page.tsx` skeleton composing Header, `<main id="main-content">`, and Footer
- [ ] T017 Create `components/layout/Header.tsx` with site name and in-page nav links from `content/navigation.ts`
- [ ] T018 Create `components/layout/Footer.tsx` with copyright and repeated contact links from profile data

**Checkpoint**: Foundation ready — layout shell renders with empty main; user story implementation can begin

---

## Phase 3: User Story 1 — Discover Professional Identity (Priority: P1) 🎯 MVP

**Goal**: Visitor immediately sees name, role, introduction, and working links to CV, GitHub, and LinkedIn; dedicated Contact section provides outreach channels

**Independent Test**: Open homepage on desktop — verify name, role, intro, and CV/GitHub/LinkedIn links visible above the fold; Contact section email and social links work

### Implementation for User Story 1

- [ ] T019 [US1] Populate `profile` fields (name, role, introduction, email, cvUrl, githubUrl, linkedinUrl) in `content/site.ts`
- [ ] T020 [P] [US1] Create `components/sections/Hero.tsx` rendering h1, role, intro, and CV/GitHub/LinkedIn CTAs per `contracts/ui-sections.md`
- [ ] T021 [P] [US1] Create `components/sections/Contact.tsx` rendering email mailto link and LinkedIn/GitHub via `components/ui/ExternalLink.tsx`
- [ ] T022 [US1] Wire Hero and Contact sections into `app/page.tsx` passing data from `content/site.ts`
- [ ] T023 [US1] Add CV asset at `public/cv.pdf` or set external `cvUrl` in `content/site.ts`

**Checkpoint**: MVP functional — identity and contact paths complete; deployable as minimal portfolio

---

## Phase 4: User Story 2 — Evaluate Professional Background (Priority: P2)

**Goal**: Visitor can read professional summary, technology stack, industries, and full employment history at Sngular, AvioBook, and Grupo ABU

**Independent Test**: Navigate to About and Experience sections — confirm summary, tech/industry tags, and three employer entries with role details are readable

### Implementation for User Story 2

- [ ] T024 [US2] Populate `about` fields (summary, technologies, industries) in `content/site.ts`
- [ ] T025 [US2] Populate `experience` array with Sngular, AvioBook, and Grupo ABU entries in `content/site.ts`
- [ ] T026 [P] [US2] Create `components/sections/About.tsx` rendering summary paragraph and Tag lists for technologies and industries
- [ ] T027 [P] [US2] Create `components/sections/Experience.tsx` rendering employer cards with role, dates, description, and highlights
- [ ] T028 [US2] Wire About and Experience sections into `app/page.tsx` passing data from `content/site.ts`

**Checkpoint**: User Stories 1 and 2 both work — identity plus professional depth

---

## Phase 5: User Story 3 — Explore Work and Thought Leadership (Priority: P3)

**Goal**: Visitor can browse SwiftUI Architecture Showcase project and upcoming placeholders, plus external Medium articles

**Independent Test**: Open Projects and Articles sections — confirm published project card with links, upcoming placeholder styled as "coming soon", and article links reach external URLs

### Implementation for User Story 3

- [ ] T029 [US3] Add SwiftUI Architecture Showcase (`status: 'published'`) and upcoming project entry in `content/site.ts`
- [ ] T030 [US3] Add Medium and external article entries in `content/site.ts`
- [ ] T031 [P] [US3] Create `components/ui/ProjectCard.tsx` with published/upcoming visual variants per `contracts/ui-sections.md`
- [ ] T032 [P] [US3] Create `components/sections/Projects.tsx` rendering ProjectCard list from `content/site.ts`
- [ ] T033 [P] [US3] Create `components/sections/Articles.tsx` rendering article list with ExternalLink items
- [ ] T034 [US3] Wire Projects and Articles sections into `app/page.tsx` passing data from `content/site.ts`

**Checkpoint**: User Stories 1–3 complete — full content portfolio with projects and articles

---

## Phase 6: User Story 4 — Contact and Cross-Device Experience (Priority: P4)

**Goal**: Site works comfortably on mobile, supports dark mode toggle, and maintains readability and accessibility across all sections

**Independent Test**: Browse on 320px viewport with dark mode enabled — no horizontal scroll, all sections readable, theme toggle works, contact links functional, keyboard navigation reaches all interactive elements

### Implementation for User Story 4

- [ ] T035 [P] [US4] Create `components/layout/ThemeToggle.tsx` with `aria-label="Toggle color theme"` using next-themes
- [ ] T036 [US4] Integrate ThemeToggle into `components/layout/Header.tsx`
- [ ] T037 [US4] Implement mobile-responsive collapsible navigation menu in `components/layout/Header.tsx`
- [ ] T038 [P] [US4] Apply mobile-first responsive layout and spacing across all files in `components/sections/`
- [ ] T039 [US4] Verify WCAG AA contrast for light and dark modes updating `app/globals.css` and Tailwind `dark:` variants
- [ ] T040 [US4] Add `focus-visible` styles and verify keyboard tab order across `components/layout/` and `components/sections/`

**Checkpoint**: All four user stories complete — full cross-device and accessibility experience

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: SEO, static assets, CI/CD deployment, and quality verification

- [ ] T041 [P] Configure full SEO metadata (title, description, Open Graph, Twitter) in `app/layout.tsx` per `contracts/seo-metadata.md`
- [ ] T042 [P] Create `app/sitemap.ts` with canonical site URL from `NEXT_PUBLIC_SITE_URL`
- [ ] T043 [P] Create `app/robots.ts` allowing all crawlers and referencing sitemap URL
- [ ] T044 [P] Add `public/og-image.png` (1200×630) and `public/favicon.ico` static assets
- [ ] T045 Create `.github/workflows/deploy.yml` for GitHub Pages build-and-deploy pipeline
- [ ] T046 Run `npm run build` and verify `out/` directory generates without errors
- [ ] T047 Run Lighthouse audit confirming Performance, Accessibility, and SEO scores ≥ 90
- [ ] T048 Verify all external links in `content/site.ts` (CV, GitHub, LinkedIn, Medium, project repos) are reachable
- [ ] T049 Validate end-to-end setup and deploy steps documented in `specs/001-ios-engineer-portfolio/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — **BLOCKS all user stories**
- **User Stories (Phases 3–6)**: All depend on Phase 2 completion
- **Polish (Phase 7)**: Depends on Phases 3–6 (all user stories) being complete

### User Story Dependencies

- **US1 (P1)**: Starts after Phase 2 — no dependency on other stories
- **US2 (P2)**: Starts after Phase 2 — independent of US1 content but shares `app/page.tsx` (sequential wiring recommended)
- **US3 (P3)**: Starts after Phase 2 — independent content; shares `app/page.tsx`
- **US4 (P4)**: Starts after Phase 2 — cross-cutting styles depend on all section components existing (best after US1–US3)

### Within Each User Story

- Content population in `content/site.ts` before section components that consume it
- Section components before wiring into `app/page.tsx`
- US4 theme/responsive polish after all section components exist

### Parallel Opportunities

- **Phase 1**: T004 and T005 in parallel after T003
- **Phase 2**: T012 and T013 in parallel; T017 and T018 in parallel after T008–T011
- **US1**: T020 and T021 in parallel after T019
- **US2**: T026 and T027 in parallel after T024–T025
- **US3**: T031, T032, and T033 — T032/T033 in parallel after T031; T031 parallel with T029–T030
- **US4**: T035 and T038 in parallel
- **Polish**: T041, T042, T043, T044 all in parallel

---

## Parallel Example: User Story 1

```bash
# After T019 (content populated), launch section components in parallel:
Task T020: "Create components/sections/Hero.tsx"
Task T021: "Create components/sections/Contact.tsx"

# Then wire sequentially:
Task T022: "Wire Hero and Contact sections into app/page.tsx"
```

---

## Parallel Example: User Story 3

```bash
# After content tasks T029–T030, launch in parallel:
Task T031: "Create components/ui/ProjectCard.tsx"
Task T033: "Create components/sections/Articles.tsx"

# Then:
Task T032: "Create components/sections/Projects.tsx" (depends on T031)
Task T034: "Wire Projects and Articles into app/page.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001–T005)
2. Complete Phase 2: Foundational (T006–T018)
3. Complete Phase 3: User Story 1 (T019–T023)
4. **STOP and VALIDATE**: Hero visible above fold, CV/GitHub/LinkedIn links work, Contact section reachable
5. Deploy/demo minimal portfolio

### Incremental Delivery

1. Setup + Foundational → shell ready
2. US1 → identity + contact → **MVP deploy**
3. US2 → professional background → deploy
4. US3 → projects + articles → deploy
5. US4 → responsive + dark mode → deploy
6. Polish → SEO + CI/CD + quality gates → production launch

### Parallel Team Strategy

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: US1 (T019–T023)
   - Developer B: US2 content (T024–T025), then sections after US1 wires page
   - Developer C: US3 content (T029–T030), then components
3. US4 and Polish sequentially after all sections exist

---

## Notes

- [P] tasks = different files, no incomplete dependencies
- [Story] label maps task to user story for traceability
- Content in `content/site.ts` is the single source of truth — update content tasks before section components
- No animation libraries per spec (FR-010)
- Commit after each phase checkpoint
- Avoid editing `app/page.tsx` in parallel across developers

---

## Task Summary

| Phase | Tasks | Count |
|-------|-------|-------|
| Phase 1: Setup | T001–T005 | 5 |
| Phase 2: Foundational | T006–T018 | 13 |
| Phase 3: US1 (P1) 🎯 MVP | T019–T023 | 5 |
| Phase 4: US2 (P2) | T024–T028 | 5 |
| Phase 5: US3 (P3) | T029–T034 | 6 |
| Phase 6: US4 (P4) | T035–T040 | 6 |
| Phase 7: Polish | T041–T049 | 9 |
| **Total** | | **49** |

| User Story | Task Count | Parallel Tasks |
|------------|------------|----------------|
| US1 | 5 | 2 (T020, T021) |
| US2 | 5 | 2 (T026, T027) |
| US3 | 6 | 3 (T031–T033) |
| US4 | 6 | 2 (T035, T038) |

**Suggested MVP scope**: Phase 1 + Phase 2 + Phase 3 (23 tasks)  
**Format validation**: ✅ All 49 tasks follow `- [ ] T### [P?] [US?] Description with file path` format
