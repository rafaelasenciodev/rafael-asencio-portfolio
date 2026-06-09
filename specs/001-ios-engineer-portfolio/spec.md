# Feature Specification: Senior iOS Engineer Portfolio Website

**Feature Branch**: `001-ios-engineer-portfolio`  
**Created**: 2026-06-09  
**Status**: Draft  
**Input**: User description: "Build a personal portfolio website for a Senior iOS Engineer — clean, professional, fast-loading site presenting experience, technical skills, articles and projects, used alongside LinkedIn, GitHub and a professional CV."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover Professional Identity (Priority: P1)

A recruiter or engineering peer lands on the portfolio homepage and immediately understands who the engineer is, their senior iOS role, and how to reach them or review their credentials.

**Why this priority**: First impressions determine whether visitors stay, contact the engineer, or move on. Identity and contact paths are the minimum viable portfolio.

**Independent Test**: Can be fully tested by opening the homepage on any device and verifying name, role, introduction, and working links to CV, GitHub, and LinkedIn without scrolling past the first screen on desktop.

**Acceptance Scenarios**:

1. **Given** a first-time visitor opens the site, **When** the homepage loads, **Then** they see the engineer's name, role title, and a short professional introduction above the fold on standard desktop viewports.
2. **Given** a visitor is on the hero section, **When** they select the CV link, **Then** they can access or download the professional CV without errors.
3. **Given** a visitor is on the hero section, **When** they select GitHub or LinkedIn links, **Then** they are taken to the correct external profiles in a new browser context.

---

### User Story 2 - Evaluate Professional Background (Priority: P2)

A hiring manager or collaborator reviews the engineer's summary, technology expertise, industry experience, and employment history to assess fit for senior iOS roles.

**Why this priority**: After identity, visitors need depth on qualifications. About and Experience sections support hiring and networking decisions.

**Independent Test**: Can be tested by navigating to About and Experience sections and confirming all listed employers, technologies, and summary content are readable and complete.

**Acceptance Scenarios**:

1. **Given** a visitor scrolls to About, **When** they read the section, **Then** they find a professional summary, a list of technologies, and relevant industries served.
2. **Given** a visitor opens Experience, **When** they review entries, **Then** they see documented roles at Sngular, AvioBook, and Grupo ABU with enough detail to understand scope and seniority.
3. **Given** a visitor uses only keyboard navigation, **When** they move through About and Experience, **Then** all content remains readable and reachable in logical order.

---

### User Story 3 - Explore Work and Thought Leadership (Priority: P3)

A technical evaluator browses showcased projects and published articles to validate engineering quality and communication skills.

**Why this priority**: Projects and articles differentiate senior engineers beyond résumé bullets and support credibility with peers and interviewers.

**Independent Test**: Can be tested by opening Projects and Articles sections and confirming at least one project (SwiftUI Architecture Showcase) and Medium article links are accessible.

**Acceptance Scenarios**:

1. **Given** a visitor opens Projects, **When** they view the SwiftUI Architecture Showcase entry, **Then** they can understand what the project demonstrates and access related details or links.
2. **Given** a visitor opens Projects, **When** they view future project placeholders, **Then** the section communicates upcoming work without appearing broken or incomplete.
3. **Given** a visitor opens Articles, **When** they select a Medium or external article link, **Then** they reach the correct published content.

---

### User Story 4 - Contact and Cross-Device Experience (Priority: P4)

A visitor on mobile or in low-light conditions can read the full site comfortably, find contact options quickly, and share or bookmark the site for later reference.

**Why this priority**: Recruiters and peers often browse on phones; readability and performance affect trust and completion of contact actions.

**Independent Test**: Can be tested on a mobile viewport and with dark appearance preference enabled, measuring that all sections render correctly and contact links work.

**Acceptance Scenarios**:

1. **Given** a visitor uses a mobile phone, **When** they browse all sections, **Then** content reflows without horizontal scrolling and text remains legible without zooming.
2. **Given** a visitor prefers dark appearance, **When** the site loads or they switch appearance, **Then** all sections maintain readable contrast and consistent styling.
3. **Given** a visitor reaches Contact, **When** they use email, LinkedIn, or GitHub options, **Then** each channel opens or initiates contact as expected.

---

### Edge Cases

- What happens when an external link (GitHub, LinkedIn, Medium, CV) is temporarily unavailable? The site should still load fully and show clear, non-blocking messaging or graceful link behavior without breaking the page.
- How does the site handle very long employer descriptions or article lists? Content should wrap and remain readable without layout breakage on small screens.
- What happens when JavaScript is limited or disabled? Core content (identity, experience, contact information) should remain accessible as readable static content.
- How does the site behave on slow networks? Visitors should see meaningful content quickly without waiting for decorative effects.
- What happens when the visitor uses a screen reader? Section headings, links, and navigation order should communicate structure clearly.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST present a Hero section containing the engineer's name, role, short introduction, and links to CV, GitHub, and LinkedIn.
- **FR-002**: The site MUST include an About section with professional summary, technologies, and industries.
- **FR-003**: The site MUST include an Experience section listing roles at Sngular, AvioBook, and Grupo ABU.
- **FR-004**: The site MUST include a Projects section featuring SwiftUI Architecture Showcase and a clearly labeled area for future projects.
- **FR-005**: The site MUST include an Articles section with links to Medium articles and other external publications.
- **FR-006**: The site MUST include a Contact section with email, LinkedIn, and GitHub access points.
- **FR-007**: The site MUST use a minimalist, professional visual design that prioritizes clarity and readability over decorative effects.
- **FR-008**: The site MUST support dark appearance in addition to a default light presentation.
- **FR-009**: The site MUST be fully usable on mobile, tablet, and desktop screen sizes without loss of content.
- **FR-010**: The site MUST avoid heavy animations, complex interactions, and unnecessary visual effects.
- **FR-011**: The site MUST be deployable as static content suitable for free public hosting without requiring a private server runtime.
- **FR-012**: The site MUST expose page metadata and structure that allow search engines and social platforms to index and preview the portfolio accurately.
- **FR-013**: All external links MUST open in a manner that preserves the visitor's ability to return to the portfolio easily.
- **FR-014**: The site MUST load primary content fast enough that visitors perceive the homepage as immediately usable on a typical broadband connection.
- **FR-015**: The site MUST present content in English as the primary language for international professional audiences.

### Key Entities

- **Profile**: Public professional identity including name, role, introduction, and outbound profile links (CV, GitHub, LinkedIn).
- **Professional Summary**: Narrative overview of expertise, technology stack, and industries.
- **Experience Entry**: A single employment record with employer name (Sngular, AvioBook, Grupo ABU), role context, timeframe, and accomplishments.
- **Project**: A showcased work item with title, description, status (published or upcoming), and optional demo or repository links.
- **Article**: A published writing item with title, publication source (e.g., Medium), and external URL.
- **Contact Channel**: A reachable method for professional outreach (email, LinkedIn, GitHub).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 95% of test users can identify the engineer's name, role, and at least one contact method within 10 seconds of landing on the homepage.
- **SC-002**: 100% of primary navigation sections (Hero, About, Experience, Projects, Articles, Contact) are reachable and readable on viewports from 320px to 1920px width without horizontal scrolling.
- **SC-003**: The homepage becomes meaningfully readable within 3 seconds on a standard 4G mobile connection in testing conditions.
- **SC-004**: Independent quality audits confirm at least 90% scores for loading speed, accessibility, and search discoverability on the published site.
- **SC-005**: At least 90% of test users rate the site as "professional and easy to read" in a 5-point usability survey.
- **SC-006**: All listed employers, projects, and article links are verified working at launch with zero broken primary links.
- **SC-007**: Visitors can complete the journey from landing to opening GitHub, LinkedIn, or CV in under 30 seconds without guidance.

## Assumptions

- Portfolio content (copy, employer details, project descriptions, article URLs) will be supplied by the portfolio owner before launch; the site is content-driven rather than a dynamic publishing platform.
- The CV is provided as a hosted file or stable external URL maintained by the owner.
- "Future projects" may use placeholder cards or a concise "coming soon" presentation until real projects are added.
- The site complements but does not replace LinkedIn, GitHub, or the downloadable CV; it aggregates and contextualizes those assets.
- Primary audience includes recruiters, hiring managers, and senior engineering peers evaluating iOS expertise.
- Deployment target is public static hosting compatible with GitHub Pages-style workflows (no authenticated backend, no user accounts, no form submission server in v1).
- Contact email uses a `mailto:` link or equivalent client-side contact initiation; no server-side message handling is required in v1.
- Visual design follows mobile-first layout principles with progressive enhancement for larger screens.
- Search and social sharing metadata will use the engineer's name and senior iOS positioning as default title and description.
- Technical implementation stack decisions (framework, styling system, export pipeline) will be captured in planning artifacts (`requirements.md`, `architecture.md`, `tasks.md`) produced in subsequent Spec Kit phases before coding begins.

## Out of Scope (v1)

- Blog CMS or in-site article authoring
- User authentication or admin dashboard
- Analytics dashboard embedded in the site
- Contact form with server-side email delivery
- Multi-language localization beyond English primary content
- Complex page transitions, parallax, or interactive 3D elements
