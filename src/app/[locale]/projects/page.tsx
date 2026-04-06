import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { getProjects } from "@/domain/projects/data";
import { ProjectList } from "@/components/projects/project-list";
import { CategoryFilter } from "@/components/projects/category-filter";
import { Category } from "@/domain/projects/types";

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ c: string }>;
};

export default function ProjectsPage({ params, searchParams }: PageProps) {
    const { locale } = use(params);
    setRequestLocale(locale);

    const { c: category } = use(searchParams);

    const t = useTranslations("Projects");
    const projects = getProjects(locale);

    const filteredProjects = 
        !category ? projects : projects.filter((p) => p.categories.includes(category as Category));

    return (
        <div className="py-12 px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-2 text-3xl font-bold tracking-light">{t('title')}</h2>

                <p className="max-w-2xl text-muted-foreground">{t('intro')}</p>
                <p className="mb-8 text-foreground font-medium">
                    {t('callToAction') + " "}
                    <Link href="/contact" className="text-primary hover:underline">
                        {t('ctaLink')}
                    </Link>
                </p>
                
                <section id="projects" className="mt-2">
                    <CategoryFilter />
                    <ProjectList projects={filteredProjects} />
                </section>
            </div>
        </div>
    );
}