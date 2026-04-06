import { Locale } from "@/i18n/routing";
import { Skill } from "./types";
import { BookOpenIcon, CloudCogIcon, Code2Icon, CreditCardIcon, DatabaseIcon, GitBranchIcon, LightbulbIcon, Users2Icon } from "lucide-react";

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
    en: [
        {
            title: "---",
            description: "---",
            icon: Code2Icon
        },
        {
            title: "---",
            description: "---",
            icon: DatabaseIcon
        },
        {
            title: "---",
            description: "---",
            icon: CloudCogIcon
        },
        {
            title: "---",
            description: "---",
            icon: GitBranchIcon
        }
    ],
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
    en: [
        {
            title: "---",
            description: "---",
            icon: Users2Icon
        },
        {
            title: "---",
            description: "---",
            icon: LightbulbIcon
        },
        {
            title: "---",
            description: "---",
            icon: CreditCardIcon
        },
        {
            title: "---",
            description: "---",
            icon: BookOpenIcon
        }
    ],
};


export function getSkills(locale: Locale, type: "hard" | "soft"): Skill[] {
    if (type === 'soft') {
        return softSkills[locale];
    }
    return hardSkills[locale];
}
