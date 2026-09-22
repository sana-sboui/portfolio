export type Language = "en" | "fr";

export interface Experience {
  company: string;
  role: Record<Language, string>;
  period: Record<Language, string>;
  project: Record<Language, string>;
  description: Record<Language, string>;
  technologies: string[];
  highlights: Record<Language, string[]>;
  recent?: boolean;
  featured?: boolean;
}

export interface Project {
  name: string;
  category: Record<Language, string>;
  description: Record<Language, string>;
  technologies: string[];
  featured?: boolean;

  coverImage: string;

  demoUrl?: string;
  sourceUrl?: string;

  videoUrl?: string;
  screenshots?: string[];

  note?: Record<Language, string>;

  resources?: {
    label: Record<Language, string>;
    url: string;
  }[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: Record<Language, string>;
  credentialUrl: string;
  image: string;
}