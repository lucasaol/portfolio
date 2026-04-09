import { Locale } from "@/i18n/routing";
import { Skill } from "./types";
import { 
    BookOpenIcon,
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
            title: "Devops & Cloud",
            description: "Orquestração de ambientes com Docker, criação de pipelines de CI/CD resilientes com GitHub Actions e infraestrutura na nuvem com AWS.",
            icon: CloudCogIcon
        },
        {
            title: "Git",
            description: "Domínio avançado de Git e fluxos de trabalho colaborativos (Gitflow/Trunk-based), garantindo a integridade e rastreabilidade do código em equipe e ambientes de CI/CD.",
            icon: GitBranchIcon
        }
    ],
    en: [],
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
    en: [],
};


export function getSkills(locale: Locale, type: "hard" | "soft"): Skill[] {
    if (type === 'soft') {
        return softSkills[locale];
    }
    return hardSkills[locale];
}
