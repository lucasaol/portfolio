import { Locale } from "@/i18n/routing";
import type { WorkExperience } from "./types";

const experiences: Record<Locale, WorkExperience[]> = {
  br: [
    {
      jobTitle: "Senior Fullstack Software Engineer",
      companyName: "FastPay",
      location: "Remoto",
      description: "Atuo no desenvolvimento e manutenção do core da plataforma de pagamentos globais, abrangendo processamento de transações multimoedas, normalização de taxas, câmbio, liquidação, antecipação de recebíveis e conciliação financeira em larga escala.",
      achievements: [
        "Implemento e evoluo integrações com diversos meios de pagamento, como Pix, cartão de crédito, boleto, Rapipago e Khipu (LATAM), além de outros gateways internacionais, focando em segurança, estabilidade e baixa latência.",
        "Projeto e construo APIs robustas para e-commerce, marketplaces, SaaS, fintechs e plataformas white-label, seguindo padrões de arquitetura distribuída, observabilidade e alta disponibilidade.",
        "Participo do design técnico e das decisões arquiteturais da infraestrutura de pagamentos, aplicando boas práticas de segurança, compliance e escalabilidade."
      ],
      period: "nov/2025 - presente",
    },
    {
      jobTitle: "Senior Software Engineer",
      companyName: "Paag",
      location: "Remoto",
      description: "Responsável pelo desenvolvimento de soluções financeiras 360º, envio de pagamentos, liquidações de fundos de cobrança, proteção antifraude e comunicação simplificada.",
      achievements: [
        "Envolvido no produto “Paag Payments”, solução de cobranças personalizadas, com foto no mercado de BETs esportivas regularizadas pelo Banco Central do Brasil, contando também com a possibilidade de pagamentos internacionais."
      ],
      period: "out/2024 - out/2025"
    },
    {
      jobTitle: "Senior Backend Engineer",
      companyName: "SplitPay Brasil",
      location: "Remoto",
      description: "Atuei temporariamente durante meio período como desenvolvedor backend na equipe de desenvolvimento do produto Split Pay, sistema de gestão financeira para clínicas médicas, odontológicas e salões de beleza, focando na entrega final e lançamento da plataforma.",
      achievements: [
        "Participação no desenvolvimento das atividades: gestão de clínicas, Split de pagamentos, emissão de nota fiscal, calendário de pagamentos."
      ],
      period: "out/2024 - dez/2024"
    },
    {
      jobTitle: "Senior Software Engineer",
      companyName: "Celcoin",
      location: "Remoto",
      description: "Responsável pelo desenvolvimento do produto “cel_card”, um serviço white-label inovador de emissão e gerenciamento de cartões de crédito.",
      achievements: [
        "Anteriormente, atuei como Senior Software Engineer na Squad “Integrações“ do produto “cel_cash“ (antigo Galax Pay), contribuindo para soluções de cash management."
      ],
      period: "jan/2024 - out/2024"
    },
    {
      jobTitle: "Squad Tech Lead",
      companyName: "Celcoin",
      location: "Remoto",
      description: "Liderança de uma squad do time de engenharia da Celcoin, focando no desenvolvimento do produto de cash management “cel_cash“, que abrange a gestão de cobranças únicas e recorrentes via cartão de crédito, boleto e/ou Pix.",
      achievements: [
        "Treinamento e desenvolvimento dos integrantes da equipe, priorizando a qualidade do sistema desenvolvido e a formação de novos líderes.",
        "Gestão de pessoas, fornecendo feedbacks contínuos e definindo Planos de Desenvolvimento Individual (PDIs) para cada membro, com o intuito de criar um ambiente colaborativo e produtivo.",
        "Colaboração constante com o time de Produto, participando do discovery, refinamento e planejamento técnico das novas funcionalidades a serem desenvolvidas.",
        "Envolvimento em processos seletivos, participando das entrevistas e na contratação de novos integrantes para a equipe."
      ],
      period: "jan/2023 - jan/2024"
    },
    {
      jobTitle: "Líder Técnico",
      companyName: "Galax Pay",
      location: "Belo Horizonte/MG",
      description: "Liderança técnica de uma squad do time de Tecnologia, focando na excelência do desenvolvimento e na formação de novos líderes.",
      achievements: [
        "Implementação de um ambiente colaborativo e produtivo através de feedbacks contínuos e melhorias de processos, além de definir Planos de Desenvolvimento Individual (PDIs) para cada membro da equipe.",
        "Envolvimento em processos seletivos, participando das entrevistas e na contratação de novos integrantes para a equipe."
      ],
      period: "mai/2022 - jan/2023"
    },
    {
      jobTitle: "Analista Desenvolvedor Pleno II",
      companyName: "Galax Pay",
      location: "Belo Horizonte/MG",
      description: "Atuação no desenvolvimento e manutenção de sistemas de gestão de cobranças, incluindo transações via cartão de crédito, boleto e Pix.",
      achievements: [
        "Experiência com regulamentações do Banco Central relacionadas ao Pix e conhecimento em gateways de pagamento e subadquirentes."
      ],
      period: "set/2020 - mai/2022"
    },
    {
      jobTitle: "Líder Técnico",
      companyName: "Construsite Brasil",
      location: "Belo Horizonte/MG",
      description: "Coordenação do setor de Desenvolvimento, liderando a equipe em treinamentos e desenvolvimento contínuo.",
      achievements: [
        "Envolvimento em processos seletivos, participando das entrevistas e na contratação de novos integrantes para a equipe."
      ],
      period: "abr/2019 - set/2020"
    },
    {
      jobTitle: "Desenvolvedor Web Júnior",
      companyName: "Construsite Brasil",
      location: "Belo Horizonte/MG",
      description: "Desenvolvimento e manutenção de soluções web nas áreas de Sites e Gestores de Conteúdo (CMS), E-commerce, Gestão de Imobiliárias, Intranet e Gestão ERP.",
      achievements: [
        "Participei no desenvolvimento de soluções personalizadas, garantindo que os sistemas atendessem às necessidades específicas dos clientes.",
        "Suporte técnico via telefone e e-mails, auxiliando usuários na resolução de problemas e garantindo uma experiência positiva com os serviços oferecidos."
      ],
      period: "jan/2018 - abr/2019"
    },
    {
      jobTitle: "Estágio em Desenvolvimento Web",
      companyName: "Construsite Brasil",
      location: "Belo Horizonte/MG",
      description: "Desenvolvimento de sites, portais web e lojas virtuais para os clientes da empresa, focando em atender às suas necessidades e demandas específicas.",
      achievements: [
        "Suporte técnico via telefone e e-mails, auxiliando usuários na resolução de problemas e garantindo uma experiência positiva com os serviços oferecidos."
      ],
      period: "jun/2017 - jan/2018"
    },
    {
      jobTitle: "Auxiliar de Suporte Técnico",
      companyName: "Power Tecnologia BH",
      location: "Belo Horizonte/MG",
      description: "Suporte técnico, auxiliando na manutenção de computadores e no atendimento remoto aos clientes.",
      achievements: [
        "Visitas presenciais a empresas clientes para prestar suporte técnico, garantindo a resolução eficaz de problemas."
      ],
      period: "abr/2017 - mai/2017"
    },
    {
      jobTitle: "Monitor de Laboratório de Informática",
      companyName: "Colégio COTEMIG",
      location: "Belo Horizonte/MG",
      description: "Responsável pela organização e manutenção dos laboratórios de informática, garantindo um ambiente propício ao aprendizado.",
      achievements: [
        "Auxílio aos alunos em atividades e estudos técnicos, promovendo suporte efetivo e colaborativo nas disciplinas propostas pelos professores."
      ],
      period: "out/2015 - abr/2017"
    }
  ],
  en: [
    {
        jobTitle: "Senior Fullstack Software Engineer",
        companyName: "FastPay",
        location: "Remote",
        period: "out/2025 - present",
        description: "----",
        achievements: []
    },
    {
        jobTitle: "Senior Software Engineer",
        companyName: "Paag",
        location: "Remote",
        period: "out/2024 - out/2025",
        description: "",
        achievements: []
    }
  ],
};

export function getExperiences(locale: Locale): WorkExperience[] {
    return experiences[locale];
}