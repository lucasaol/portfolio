
export type Category = "Web" | "Mobile" | "Frontend" | "Backend";
export type Technology = "PHP" | "Laravel" | "TypeScript" | "Node.js" | "Next.js" | "React.js" | "Python" | "PostgreSQL" | "MySQL" | "Docker" | "AWS";

export interface Project {
  slug: string;
  title: string;
  image: string;
  introduction: string;
  categories: Category[];
  url?: string;
  githubUrl?: string;
  overview: string;
  description: string;
  stack: Technology[];
  gallery: string[];
}