import { Locale } from "@/i18n/routing";
import { Project } from "./types";

const allProjects: Record<Locale, Project[]> = {
    br: [
        {
            slug: "marcador-truco-mineiro",
            image: "https://cdn.lucasandrade.work/projects/truco/01.png",
            title: "Marcador Truco Mineiro",
            introduction: "Marcador online de tentos do truco mineiro",
            categories: ["Web", "Frontend"],
            url: "https://lucasaol.github.io/truco",
            githubUrl: "https://github.com/lucasaol/truco",
            overview: "Aplicação web para marcação de pontos (tentos) do jogo de cartas Truco. Desenvolvida como um projeto de estudos em React. Nada de overengineering. A proposta é resolver um problema real com o mínimo necessário, de forma clara e eficiente.",
            description: [
                {
                    title: "Descrição",
                    content: [
                        "Este projeto é uma SPA desenvolvida para resolver um problema simples e real: marcar os pontos do truco sem confusão e principalmente sem depender de memória.",
                        "A ideia é substituir a marcação manual (papel e caneta, risquinho na mesa, feijões, etc.) por uma interface simples, rápida e responsiva, pensada em ser acessível pelo celular durante o jogo, bem rápido.",
                        "O visual faz referência à mesa de baralho, utilizando tons de verde escuro com detalhes em dourado. O contador de pontos das duplas foi inspirado nos naipes de um baralho tradicional, reforçando a identidade do jogo.",

                    ],
                },
                {
                    title: "Funcionalidades",
                    content: [
                        "- Marcação de pontos em tempo real.",
                        "- Controle de partidas e identificação das duplas.",
                        "- Histórico local das partidas (*localStorage* do navegador).",
                        "- Interface responsiva (desktop e mobile)."
                    ]
                }
            ],
            stack: ["TypeScript", "React.js"],
            gallery: [
                "https://cdn.lucasandrade.work/projects/truco/01.png"
            ]
        },
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