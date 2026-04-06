import { Button } from "@/components/ui/button";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";


export function ContactSection() {
    const t = useTranslations("Contact");

    const contactInfo = [
        {
            icon: MailIcon,
            text: "hello@lucasandrade.work"
        },
        {
            icon: PhoneIcon,
            text: "+55 (31) 98301-0121"
        },
        {
            icon: MapPinIcon,
            text: t('location')
        }
    ];

    return (
        <section id="contact" className="py-12 px-4 sm:px-8 lg:px-12 theme-bg-light">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">{t('title')}</h2>
                <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">{t('subtitle')}</p>

                <div className="mx-auto max-w-lg space-y-4 text-center">
                    {contactInfo.map((info) => (
                        <div key={info.text} className="flex items-center justify-center gap-3 text-muted-foreground">
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