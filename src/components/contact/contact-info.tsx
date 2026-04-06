import { getContactInfo } from "@/domain/contact/data";
import { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactProps {
    locale: Locale;
}
export function ContactInfoSection({ locale }: ContactProps) {
    const t = useTranslations("Contact");

    const contact = getContactInfo(locale);
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('contactInfoLabel')}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4 text-sm">
                    {contact.map((info) => (
                        <li key={info.label} className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <info.icon className="h-4 w-4" />
                            </div>
                            <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                {info.label}
                            </p>
                            <p className="text-foreground">{info.text}</p>
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </CardContent>
        </Card>
    );
}