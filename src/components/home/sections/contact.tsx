import { Button } from "@/components/ui/button";
import { getContactInfo } from "@/domain/contact/data";
import { Locale } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ContactProps {
    locale: Locale;
}

export function ContactSection({ locale }: ContactProps) {
    const t = useTranslations("Contact");

    const contact = getContactInfo(locale);

    return (
        <section id="contact" className="py-12 px-4 sm:px-8 lg:px-12 theme-bg-light">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">{t('ctaTitle')}</h2>
                <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">{t('ctaSubtitle')}</p>

                <div className="mx-auto max-w-lg space-y-4 text-center">
                    {contact.map((info) => (
                        <div key={info.label} className="flex items-center justify-center gap-3 text-muted-foreground">
                            <info.icon className="h-5 w-5 text-primary" />
                            <span>{info.text}</span>
                        </div>
                    ))}

                    <div className="pt-4">
                        <Button asChild>
                            <Link href="/contact">{t('sendMessage')}</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}