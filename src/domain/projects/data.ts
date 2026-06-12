import { Locale } from "@/i18n/routing";
import { Project } from "./types";

const allProjects: Record<Locale, Project[]> = {
    br: [
        {
            slug: "truco-mineiro-scoreboard",
            image: "https://cdn.lucasandrade.work/projects/truco/01.png",
            title: "Marcador Truco Mineiro",
            introduction: "Marcador online de tentos do truco mineiro",
            categories: ["Web", "Frontend"],
            url: "https://lucasaol.github.io/truco",
            githubUrl: [
                { label: "GitHub", url: "https://github.com/lucasaol/truco" }
            ],
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
                        "- Histórico local das partidas (localStorage do navegador).",
                        "- Interface responsiva (desktop e mobile)."
                    ]
                }
            ],
            stack: ["TypeScript", "React.js"],
            gallery: [
                "https://cdn.lucasandrade.work/projects/truco/01.png"
            ]
        },
        {
            slug: "nextduo",
            image: "https://cdn.lucasandrade.work/projects/nextduo/00.png",
            title: "Next Duo",
            introduction: "Plataforma para gamers encontrarem o duo perfeito",
            categories: ["Web", "Frontend", "Backend"],
            githubUrl: [
                { label: "Frontend", url: "https://github.com/lucasaol/nextduo-web" },
                { label: "Backend", url: "https://github.com/lucasaol/nextduo-api" }
            ],
            overview: "Plataforma social voltada para gamers que querem encontrar parceiros (duos) compatíveis para jogar em ranqueadas. O matching acontece a partir dos jogos em comum e do nível de habilidade (elo/rank) de cada jogador, priorizando quem está realmente ativo. Projeto full-stack, com front-end em React e back-end em NestJS seguindo princípios de DDD e Clean Architecture.",
            description: [
                {
                    title: "Descrição",
                    content: [
                        "Achar um bom parceiro de duo costuma ser uma loteria: você cai com gente de nível muito diferente do seu, ou que está inativa há semanas. O Next Duo resolve isso conectando jogadores pelos jogos que têm em comum e pelo rank de cada um.",
                        "O usuário entra com a conta do Discord (OAuth2), monta um perfil escolhendo seus jogos e o rank/elo em cada um, e a partir daí pode buscar outros jogadores aplicando filtros por jogo, faixa de rank e tempo desde o último login — garantindo que os resultados sejam de pessoas ativas.",
                        "Encontrou alguém compatível? É só enviar um convite de duo, com uma mensagem opcional. O outro jogador recebe, aceita ou recusa, e tudo isso é acompanhado por um painel de convites enviados e recebidos.",
                        "A identidade visual segue uma estética gamer: tema escuro com detalhes em neon, tipografia Orbitron nos títulos e cards com efeito de vidro (glassmorphism).",
                    ],
                },
                {
                    title: "Funcionalidades",
                    content: [
                        "- Autenticação social via Discord (OAuth2), com avatar e perfil sincronizados.",
                        "- Perfil de jogador com biografia e biblioteca de jogos, cada um com seu rank/elo.",
                        "- Busca de jogadores com filtros por jogo, faixas de rank e atividade recente.",
                        "- Sistema de convites de duo (enviar, aceitar, recusar e cancelar) com acompanhamento de status.",
                        "- Paginação por cursor para lidar com grandes volumes de resultados de forma eficiente.",
                        "- Catálogo de jogos e ranks administrável por usuários com perfil root.",
                    ]
                },
                {
                    title: "Arquitetura & Back-end",
                    content: [
                        "A API foi construída em NestJS organizada por domínios de negócio (auth, users, games, invites), com separação em camadas de domínio, aplicação e HTTP. Cada operação é isolada em seu próprio use-case, o que mantém as responsabilidades claras e o código testável.",
                        "A persistência usa PostgreSQL com TypeORM e migrations versionadas. A autenticação é feita com JWT assinado por par de chaves RSA, e o controle de acesso por papéis (player / root) é aplicado via guards e decorators customizados.",
                        "As variáveis de ambiente são validadas com Zod na inicialização (fail fast), e todo o ambiente — API e banco — sobe via Docker Compose.",
                    ]
                }
            ],
            stack: ["TypeScript", "React.js", "Node.js", "NestJS", "PostgreSQL", "Docker"],
            gallery: [
                "https://cdn.lucasandrade.work/projects/nextduo/01.png",
                "https://cdn.lucasandrade.work/projects/nextduo/02.png",
                "https://cdn.lucasandrade.work/projects/nextduo/03.png",
                "https://cdn.lucasandrade.work/projects/nextduo/04.png",
                "https://cdn.lucasandrade.work/projects/nextduo/05.png",
                "https://cdn.lucasandrade.work/projects/nextduo/06.png"
            ]
        },
    ],
    en: [
        {
            slug: "truco-mineiro-scoreboard",
            image: "https://cdn.lucasandrade.work/projects/truco/01.png",
            title: "Truco Mineiro Scoreboard",
            introduction: "Online scoreboard for Truco Mineiro",
            categories: ["Web", "Frontend"],
            url: "https://lucasaol.github.io/truco",
            githubUrl: [
                { label: "GitHub", url: "https://github.com/lucasaol/truco" }
            ],
            overview: "A web app for tracking points (tentos) in the Truco card game. Built as a React study project. Kept it lean — no overengineering. The goal is to solve a real problem with the bare minimum, in a clear and efficient way.",
            description: [
                {
                    title: "Description",
                    content: [
                        "Truco Mineiro is a traditional Brazilian card game from the state of Minas Gerais, played in pairs and known for its fast pace, bluffing, and lively scorekeeping rituals.",
                        "This project is a SPA built to solve a simple, real problem: keeping score during a Truco match without confusion — and without relying on memory.",
                        "The idea is to replace manual scorekeeping (tally marks on paper, scratches on the table, beans, or whatever's at hand) with a simple, fast, and responsive interface — designed to be used on a phone right at the table, with minimal friction.",
                        "The visual style references a card table, with deep green tones and gold accents. The pair scoreboards are inspired by the suits of a traditional deck, reinforcing the identity of the game.",
                    ],
                },
                {
                    title: "Features",
                    content: [
                        "- Real-time score tracking.",
                        "- Match control and pair identification.",
                        "- Local match history (browser's localStorage).",
                        "- Responsive interface (desktop and mobile)."
                    ]
                }
            ],
            stack: ["TypeScript", "React.js"],
            gallery: [
                "https://cdn.lucasandrade.work/projects/truco/01.png"
            ]
        },
        {
            slug: "nextduo",
            image: "https://cdn.lucasandrade.work/projects/nextduo/00.png",
            title: "Next Duo",
            introduction: "A platform for gamers to find their perfect duo",
            categories: ["Web", "Frontend", "Backend"],
            githubUrl: [
                { label: "Frontend", url: "https://github.com/lucasaol/nextduo-web" },
                { label: "Backend", url: "https://github.com/lucasaol/nextduo-api" }
            ],
            overview: "A social platform for gamers looking for compatible partners (duos) to play ranked games with. Matching is based on shared games and each player's skill level (elo/rank), prioritizing players who are actually active. A full-stack project, with a React front-end and a NestJS back-end built around DDD and Clean Architecture principles.",
            description: [
                {
                    title: "Description",
                    content: [
                        "Finding a good duo partner is usually a gamble: you end up with someone way above or below your skill level, or with a player who's been inactive for weeks. Next Duo solves this by connecting players through the games they have in common and each one's rank.",
                        "Users sign in with their Discord account (OAuth2), build a profile by picking their games and their rank/elo in each, and from there can search for other players using filters by game, rank tier, and time since last login — making sure results come from active people.",
                        "Found someone compatible? Just send a duo invite, with an optional message. The other player receives it and can accept or decline, all tracked through a dashboard of sent and received invites.",
                        "The visual identity follows a gaming aesthetic: a dark theme with neon accents, the Orbitron typeface for headings, and glassmorphism cards.",
                    ],
                },
                {
                    title: "Features",
                    content: [
                        "- Social authentication via Discord (OAuth2), with synced avatar and profile.",
                        "- Player profile with a bio and a game library, each game holding its own rank/elo.",
                        "- Player search with filters by game, rank tiers, and recent activity.",
                        "- Duo invite system (send, accept, reject, and cancel) with status tracking.",
                        "- Cursor-based pagination to efficiently handle large result sets.",
                        "- Game and rank catalog manageable by users with a root role.",
                    ]
                },
                {
                    title: "Architecture & Back-end",
                    content: [
                        "The API was built with NestJS, organized by business domains (auth, users, games, invites) and split into domain, application, and HTTP layers. Each operation lives in its own use-case, keeping responsibilities clear and the code testable.",
                        "Persistence relies on PostgreSQL with TypeORM and versioned migrations. Authentication uses JWT signed with an RSA key pair, and role-based access control (player / root) is enforced through custom guards and decorators.",
                        "Environment variables are validated with Zod at startup (fail fast), and the whole environment — API and database — spins up via Docker Compose.",
                    ]
                }
            ],
            stack: ["TypeScript", "React.js", "Node.js", "NestJS", "PostgreSQL", "Docker"],
            gallery: [
                "https://cdn.lucasandrade.work/projects/nextduo/01.png",
                "https://cdn.lucasandrade.work/projects/nextduo/02.png",
                "https://cdn.lucasandrade.work/projects/nextduo/03.png",
                "https://cdn.lucasandrade.work/projects/nextduo/04.png",
                "https://cdn.lucasandrade.work/projects/nextduo/05.png",
                "https://cdn.lucasandrade.work/projects/nextduo/06.png"
            ]
        },
    ],
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