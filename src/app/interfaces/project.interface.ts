export interface Project {
  id: string;
  title: string;
  slug: string;

  shortDescription: string;
  fullDescription: string;

  role: string;
  duration: string;
  projectType: string;

  imageUrl: string;

  technologies: string[];
  features: string[];
  responsibilities: string[];
  challenges: string[];

  githubUrl?: string;
  liveUrl?: string;

  isFeatured: boolean;
  displayOrder: number;
}