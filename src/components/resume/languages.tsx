import { getLanguages } from "@/domain/resume/languages";
import { Locale } from "@/i18n/routing";
import { Languages } from "lucide-react";

interface ResumeLanguagesProps {
    title: string;
    locale: Locale;
}

export function ResumeLanguagesInfo({ title, locale }: ResumeLanguagesProps) {
    const languages = getLanguages(locale);
    return (
        <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <Languages className="h-4 w-4 text-primary" />
                {title}
            </h3>

            <ul className="space-y-1.5 text-xs">
                {languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between">
                        <span>{lang.name}</span>
                        <span className="text-xs text-muted-foreground">{lang.proficiency}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}