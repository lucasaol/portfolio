import type { Metadata } from "next";
import { getAllProjectSlugs, getProjectBySlug } from "@/domain/projects/data";
import { locales } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/projects/project-details";

interface ProjectDetailsPageProps {
    params: Promise<{ locale: string; slug: string; }>;
}

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return locales.flatMap((locale) => 
        slugs.map((slug) => ({ locale, slug }))
    );
}

export async function generateMetadata({ params }: ProjectDetailsPageProps): Promise<Metadata> {
    const { slug, locale } = await params;
    const project = getProjectBySlug(locale, slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} - Lucas Andrade`,
        description: project.introduction,
    }
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
    const {slug, locale } = await params;
    setRequestLocale(locale);

    const project = getProjectBySlug(locale, slug);
    if (!project) {
        notFound();
    }

    return (
        <article className="py-12 px-4 sm:px-8 lg:px-12">
            <ProjectDetails project={project} />
        </article>
    );
}