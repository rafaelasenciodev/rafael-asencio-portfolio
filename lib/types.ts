export type ProjectStatus = "published" | "upcoming";

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

export type SectionId =
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "articles"
  | "contact";

export interface NavigationAnchor {
  id: SectionId;
  label: string;
}
