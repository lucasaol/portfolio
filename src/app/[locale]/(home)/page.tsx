import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { AboutSection, ContactSection, OverviewSection, ProjectsSection } from "@/components/home/sections";

interface PageProps {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function HomePage({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <AboutSection />
      <OverviewSection locale={locale} />
      <ProjectsSection locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
