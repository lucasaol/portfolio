import { Locale } from "@/i18n/routing";
import type { Language } from "./types";

const languages: Record<Locale, Language[]> = {
  br: [
    { name: "Português", proficiency: "Nativo" },
    { name: "Inglês", proficiency: "Intermediário" },
    { name: "Espanhol", proficiency: "Básico" },
  ],
  en: [
    { name: "Portuguese", proficiency: "Native" },
    { name: "English", proficiency: "Intermediate" },
    { name: "Spanish", proficiency: "Basic" },
  ],
};

export function getLanguages(locale: Locale): Language[] {
    return languages[locale];
}