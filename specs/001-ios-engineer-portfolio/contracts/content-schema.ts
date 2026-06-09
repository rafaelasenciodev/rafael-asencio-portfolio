/**
 * Content Schema Contract
 * Feature: 001-ios-engineer-portfolio
 *
 * This file defines the canonical TypeScript interfaces for portfolio content.
 * Implementation MUST conform to these types in lib/types.ts.
 */

export type ProjectStatus = 'published' | 'upcoming';

export interface Profile {
  name: string;
  role: string;
  introduction: string;
  email: string;
  cvUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  location?: string;
}

export interface ProfessionalSummary {
  summary: string;
  technologies: string[];
  industries: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
  highlights?: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  tags?: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  source: string;
  url: string;
  publishedAt?: string;
  summary?: string;
}

export interface SiteContent {
  profile: Profile;
  about: ProfessionalSummary;
  experience: ExperienceEntry[];
  projects: Project[];
  articles: Article[];
}

export interface NavigationAnchor {
  id: 'hero' | 'about' | 'experience' | 'projects' | 'articles' | 'contact';
  label: string;
}

/** Launch invariant: these company names MUST appear in experience */
export const REQUIRED_EMPLOYERS = ['Sngular', 'AvioBook', 'Grupo ABU'] as const;

/** Launch invariant: at least one published project with this title */
export const REQUIRED_PROJECT_TITLE = 'SwiftUI Architecture Showcase';
