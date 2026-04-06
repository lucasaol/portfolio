
import { ProjectList } from "@/components/projects/project-list";
import { getProjects } from "@/domain/projects/data";
import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function ProjectsSection() {
    const t = useTranslations("Projects");

    const projects = getProjects('br', 4);

    return (
        <section id="projects" className="py-12 px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">{t('featured.title')}</h2>
                <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">{t('featured.subtitle')}</p>
                
                <ProjectList projects={projects} />

                <div className="mt-8 text-center">
                    <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                        {t('featured.viewAll')}
                        <ExternalLink className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}