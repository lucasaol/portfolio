import type { Locale } from "@/i18n/routing";
import type { Post } from "@/domain/blog/types";

const posts: Record<Locale, Post[]> = {
  br: [
    {
      slug: "construindo-portfolio-nextjs",
      title: "Construindo um Portfólio com Next.js",
      summary:
        "Como criei meu portfólio pessoal utilizando Next.js, Tailwind CSS e next-intl para internacionalização.",
      date: "2026-03-25",
    },
    {
      slug: "typescript-dicas-avancadas",
      title: "Dicas Avançadas de TypeScript",
      summary:
        "Explorando recursos avançados do TypeScript como tipos condicionais, infer e template literal types.",
      date: "2026-03-18",
    },
    {
      slug: "server-components-na-pratica",
      title: "Server Components na Prática",
      summary:
        "Entendendo como React Server Components funcionam e quando utilizá-los no seu projeto.",
      date: "2026-03-10",
    },
  ],
  en: [
    {
      slug: "building-portfolio-nextjs",
      title: "Building a Portfolio with Next.js",
      summary:
        "How I built my personal portfolio using Next.js, Tailwind CSS and next-intl for internationalization.",
      date: "2026-03-25",
    },
    {
      slug: "advanced-typescript-tips",
      title: "Advanced TypeScript Tips",
      summary:
        "Exploring advanced TypeScript features like conditional types, infer and template literal types.",
      date: "2026-03-18",
    },
    {
      slug: "server-components-in-practice",
      title: "Server Components in Practice",
      summary:
        "Understanding how React Server Components work and when to use them in your project.",
      date: "2026-03-10",
    },
  ],
};

export function getPosts(locale: Locale): Post[] {
  return posts[locale];
}
