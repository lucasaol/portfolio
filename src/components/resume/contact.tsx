import { Locale } from "@/i18n/routing";
import { getContactInfo } from "@/domain/contact/data";
import { Globe, User } from "lucide-react";

interface ResumeContactProps {
    title: string;
    locale: Locale;
}

export function ResumeContactInfo({ title, locale }: ResumeContactProps) {
    const contact = getContactInfo(locale);

    return (
        <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <User className="h-4 w-4 text-primary" />
                {title}
            </h3>

            <ul className="space-y-2.5 text-xs">
                {contact.map((info) => (
                    <li key={info.label} className="flex items-center gap-2 text-muted-foreground">
                        <info.icon className="h-3.5 w-3.5 text-primary" />
                        {info.text}
                    </li>
                ))}

                <li key="website" className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="h-3.5 w-3.5 text-primary" />
                    lucasandrade.work
                </li>
            </ul>
        </div>
    );
}