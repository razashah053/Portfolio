export interface Project {
  id: number;
  num: string;           // "01", "02", "03"
  tags: string[];
  name: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;    // spans full grid width if true
}

export interface Experience {
  id: number;
  dateRange: string;     // e.g. "2022 — Present"
  role: string;
  company: string;
  description: string;
}

export interface SkillGroup {
  category: string;      // "Frontend" | "Backend" | "Infrastructure"
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email';
}
