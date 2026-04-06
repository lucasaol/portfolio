import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfoSection } from "@/components/contact/contact-info";
import { SocialMediaSection } from "@/components/contact/social-media";
import { setRequestLocale, getTranslations } from "next-intl/server";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "Contact" });

    return (
        <section className="py-12 px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-2 text-3xl font-bold tracking-tight">{t('title')}</h2>
                <p className="mb-6 max-w-2xl text-muted-foreground">{t('subtitle')}</p>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-6">
                        <ContactInfoSection locale={locale} />
                        <SocialMediaSection />
                    </div>
                    
                    <div className="md:col-span-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}