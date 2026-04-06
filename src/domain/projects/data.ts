import { Locale } from "@/i18n/routing";
import { Project } from "./types";

const allProjects: Record<Locale, Project[]> = {
    br: [
        {
            slug: "marcador-truco-mineiro",
            image: "https://v2.devlucas.com/image/project-gallery/01KG8AAC0Y9VGAEH5H8T3PCHP7.png",
            title: "Marcador Truco Mineiro",
            introduction: "Marcador online de tentos do truco mineiro",
            categories: ["Web", "Frontend"],
            url: "https://lucasaol.github.io/truco",
            githubUrl: "https://github.com/lucasaol/truco",
            overview: "teste",
            description: "<p>teste</p>",
            stack: ["TypeScript", "React.js"],
            gallery: []
        },
        {
            slug: "wedding-hub",
            image: "https://placehold.co/600x400",
            title: "Site de Casamento",
            introduction: "teste teste teste teste teste teste teste teste teste teste teste teste",
            categories: ["Web", "Backend"],
            url: "https://lucasaol.github.io/truco",
            githubUrl: "https://github.com/lucasaol/truco",
            overview: "teste",
            description: "<p>teste</p>",
            stack: ["React.js"],
            gallery: []
        },
        {
            slug: "wedding-hub-2",
            image: "https://placehold.co/600x400",
            title: "Site de Casamento 2",
            introduction: "teste teste teste teste teste teste teste teste teste teste teste teste",
            categories: ["Mobile"],
            url: "https://lucasaol.github.io/truco",
            githubUrl: "https://github.com/lucasaol/truco",
            overview: "teste",
            description: "<p>teste</p>",
            stack: ["React.js"],
            gallery: []
        }
    ],
    en: [],
};

export function getProjects(locale: Locale, limit?: number): Project[] {
    const projects = allProjects[locale];
    if (limit) {
        return projects.slice(0, limit);
    }
    return projects;
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
    return allProjects[locale].find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
    return allProjects.br.map((p) => p.slug);
}