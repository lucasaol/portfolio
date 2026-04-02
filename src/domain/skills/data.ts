import { Locale } from "@/i18n/routing";
import { Skill } from "./types";
import { BookIcon, BookOpenIcon, CloudCogIcon, Code2Icon, CreditCardIcon, DatabaseIcon, GitBranchIcon, LibraryIcon, LightbulbIcon, Users2Icon } from "lucide-react";

const hardSkills: Record<Locale, Skill[]> = {
    br: [
        {
            title: "Code",
            description: "aaaa",
            icon: Code2Icon
        },
        {
            title: "DB",
            description: "aaaa",
            icon: DatabaseIcon
        },
        {
            title: "Cloud",
            description: "aaaa",
            icon: CloudCogIcon
        },
        {
            title: "Git",
            description: "aaaa",
            icon: GitBranchIcon
        }
    ],
    en: [],
};


const softSkills: Record<Locale, Skill[]> = {
    br: [
        {
            title: "Liderança",
            description: "aaaa",
            icon: Users2Icon
        },
        {
            title: "visão",
            description: "aaaa",
            icon: LightbulbIcon
        },
        {
            title: "pagamento",
            description: "aaaa",
            icon: CreditCardIcon
        },
        {
            title: "aprendizado",
            description: "aaaa",
            icon: BookOpenIcon
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
