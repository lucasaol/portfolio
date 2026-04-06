import { Project } from "@/domain/projects/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Globe } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProjectBreadcrumb, ProjectGallery, ProjectDescription } from "./details";
import Link from "next/link";

interface ProjectDetailsProps {
    project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
    const t = useTranslations('Projects');

    return (
        <div className="mx-auto max-w-4xl">
            <ProjectBreadcrumb
                listPageTitle={t('title')}
                projectTitle={project.title}
            />
            
            <h1 className="mb-8 text-3xl font-bold tracking-tight text-primary">{project.title}</h1>

            <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                unoptimized
                className="w-full object-cover rounded-lg mb-8"
            />

            <Card className="mb-8 border-0 bg-card shadow-sm">
                <CardContent className="p-6 flex flex-row">
                    <div className="w-1/4">
                        <div className="mb-4 flex flex-col flex-wrap gap-6 text-sm text-muted-foreground">
                            {project.url && (
                                <div className="flex items-center gap-1">
                                    <Globe className="h-4 w-4 text-primary" />{" "}
                                    <a 
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground hover:text-primary"
                                    >
                                        Website
                                    </a>
                                </div>
                            )}
                            {project.githubUrl && (
                                <div className="flex items-center gap-1">
                                    <IconBrandGithub className="h-4 w-4 text-primary" />{" "}
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground hover:text-primary"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="w-3/4">
                        <h2 className="mb-4 font-bold tracking-tight ">{t('overview')}</h2>
                        <p className="mb-4 leading-relaxed text-muted-foreground">{project.overview}</p>
                    </div>
                </CardContent>
            </Card>

            <div className="mb-8">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {t('stackUsed')}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">{tech}</Badge>
                    ))}
                </div>
            </div>

            <Separator className="mb-8" />

            {project.description.map((desc, index) => (
                <section key={desc.title ?? index} className="mb-8">
                    <ProjectDescription description={desc} />
                </section>
            ))}

            {project.gallery && (
                <section className="mb-8">
                    <ProjectGallery images={project.gallery} />
                </section>  
            )}

            <Separator className="mb-8" />
            
            <section className="rounded-lg bg-primary/5 p-8 text-center">
                <h2 className="mb-3 text-2xl font-bold">{t('ctaTitle')}</h2>
                <p className="mx-auto mb-6 max-w-lg text-muted-foreground">{t('ctaDescription')}</p>

                <Button asChild>
                    <Link href="/contact">
                        <ExternalLink className="h-4 w-4" />
                        {t('ctaLink')}
                    </Link>
                </Button>
            </section>
        </div>
    );
}