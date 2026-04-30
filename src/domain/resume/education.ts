import { Locale } from "@/i18n/routing";
import type { Education } from "./types";

const education: Record<Locale, Education[]> = {
  br: [
    { degree: "Pós-graduação Lato Sensu Especialização em Desenvolvimento Mobile", institution: "Estácio", period: "2024 - 2024" },
    { degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas", institution: "Faculdade COTEMIG", period: "2020 - 2021" },
    { degree: "Bacharelado em Sistemas de Informação", institution: "Faculdade COTEMIG", period: "2017 - 2021" },
    { degree: "Técnico em Informática Gerencial", institution: "Colégio COTEMIG", period: "2014 - 2016" },
  ],
  en: [
    { degree: "Postgraduate Specialization in Mobile Development", institution: "Estácio", period: "2024 - 2024" },
    { degree: "Technology Degree in Systems Analysis and Development", institution: "Faculdade COTEMIG", period: "2020 - 2021" },
    { degree: "Bachelor's Degree in Information Systems", institution: "Faculdade COTEMIG", period: "2017 - 2021" },
    { degree: "Technical Degree in Business Informatics", institution: "Colégio COTEMIG", period: "2014 - 2016" },
  ],
};


export function getEducation(locale: Locale): Education[] {
    return education[locale];
}