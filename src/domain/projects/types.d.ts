
export type Category = "Web" | "Mobile" | "Frontend" | "Backend";
export type Technology = "PHP" | "Laravel" | "TypeScript" | "Node.js" | "Next.js" | "React.js" | "NestJS" | "Python" | "PostgreSQL" | "MySQL" | "Docker" | "AWS";

export interface Paragraph {
  title?: string,
  content: string[],
}

export interface RepositoryLink {
  label: string,
  url: string,
}

export interface Project {
  slug: string;
  title: string;
  image: string;
  introduction: string;
  categories: Category[];
  url?: string;
  githubUrl?: RepositoryLink[];
  overview: string;
  description: Paragraph[];
  stack: Technology[];
  gallery: string[];
}