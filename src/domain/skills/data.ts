import { Locale } from "@/i18n/routing";
import { Skill } from "./types";
import {
    CloudCogIcon,
    Code2Icon,
    CreditCardIcon,
    DatabaseIcon,
    GitBranchIcon,
    LightbulbIcon,
    PackageIcon,
    PaletteIcon,
    Users2Icon
} from "lucide-react";
import { IconHierarchy } from "@tabler/icons-react";

const hardSkills: Record<Locale, Skill[]> = {
    br: [
        {
            title: "PHP & Laravel",
            description: "Desenvolvimento de aplicações web robustas e escaláveis com PHP e o ecossistema Laravel, focando em código limpo e boas práticas.",
            icon: Code2Icon
        },
        {
            title: "React.js & Next.js",
            description: "Criação de interfaces modernas e performáticas com React.js, Next.js, TypeScript e as melhores práticas do ecossistema frontend.",
            icon: PaletteIcon
        },
        {
            title: "Python & FastAPI",
            description: "Construção de APIs de alta performance e microsserviços escaláveis, integrando IA, processamento de dados e automações eficientes.",
            icon: PackageIcon
        },
        {
            title: "Bancos de Dados",
            description: "Ampla experiência com PostgreSQL, MySQL, MongoDB, DynamoDB, Redis e ORMs como Eloquent e Prisma para modelagem eficiente de dados.",
            icon: DatabaseIcon
        },
        {
            title: "DevOps & Cloud",
            description: "Orquestração de ambientes com Docker, criação de pipelines de CI/CD resilientes com GitHub Actions e infraestrutura na nuvem com AWS.",
            icon: CloudCogIcon
        },
        {
            title: "Git",
            description: "Domínio avançado de Git e fluxos de trabalho colaborativos (Gitflow/Trunk-based), garantindo a integridade e rastreabilidade do código em equipe e ambientes de CI/CD.",
            icon: GitBranchIcon
        }
    ],
    en: [
        {
            title: "PHP & Laravel",
            description: "Building robust, scalable web applications with PHP and the Laravel ecosystem, focusing on clean code and best practices.",
            icon: Code2Icon
        },
        {
            title: "React.js & Next.js",
            description: "Crafting modern, high-performance interfaces with React.js, Next.js, TypeScript, and the best practices of the frontend ecosystem.",
            icon: PaletteIcon
        },
        {
            title: "Python & FastAPI",
            description: "Building high-performance APIs and scalable microservices, integrating AI, data processing, and efficient automations.",
            icon: PackageIcon
        },
        {
            title: "Database Management",
            description: "Extensive experience with PostgreSQL, MySQL, MongoDB, DynamoDB, Redis, and ORMs like Eloquent and Prisma for efficient data modeling.",
            icon: DatabaseIcon
        },
        {
            title: "DevOps & Cloud",
            description: "Orchestrating environments with Docker, building resilient CI/CD pipelines with GitHub Actions, and running cloud infrastructure on AWS.",
            icon: CloudCogIcon
        },
        {
            title: "Git",
            description: "Advanced command of Git and collaborative workflows (Gitflow/Trunk-based), ensuring code integrity and traceability across teams and CI/CD environments.",
            icon: GitBranchIcon
        }
    ],
};


const softSkills: Record<Locale, Skill[]> = {
    br: [
        {
            title: "Liderança Técnica & Mentoria",
            description: "Gestão de times de alta performance, promovendo cultura de Code Review, mentoria para desenvolvedores e o estabelecimento de padrões de qualidade de software.",
            icon: Users2Icon
        },
        {
            title: "Arquitetura & System Design",
            description: "Capacidade analítica para projetar sistemas complexos utilizando DDD e Clean Architecture, focando na escalabilidade e manutenibilidade de serviços desacoplados e resilientes.",
            icon: IconHierarchy
        },
        {
            title: "Soluções de Pagamento & Segurança",
            description: "Domínio técnico de fluxos financeiros complexos, construção de gateways de pagamento, descriptografia de tokens, gestão de certificados e conformidade com padrões de segurança do setor.",
            icon: CreditCardIcon
        },
        {
            title: "Visão de Negócio & Produto",
            description: "Abordagem holística no desenvolvimento, garantindo que as decisões técnicas estejam alinhadas aos objetivos estratégicos e à experiência do usuário final.",
            icon: LightbulbIcon
        }
    ],
    en: [
        {
            title: "Technical Leadership & Mentorship",
            description: "Leading high-performance teams, fostering a Code Review culture, mentoring developers, and establishing software quality standards.",
            icon: Users2Icon
        },
        {
            title: "Architecture & System Design",
            description: "Analytical mindset for designing complex systems with DDD and Clean Architecture, focused on the scalability and maintainability of decoupled, resilient services.",
            icon: IconHierarchy
        },
        {
            title: "Payment Solutions & Security",
            description: "Strong technical command of complex financial flows, payment gateway development, token decryption, certificate management, and compliance with industry security standards.",
            icon: CreditCardIcon
        },
        {
            title: "Product & Business Mindset",
            description: "A holistic approach to development, ensuring technical decisions are aligned with strategic goals and the end-user experience.",
            icon: LightbulbIcon
        }
    ],
};


export function getSkills(locale: Locale, type: "hard" | "soft"): Skill[] {
    if (type === 'soft') {
        return softSkills[locale];
    }
    return hardSkills[locale];
}
