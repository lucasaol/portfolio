import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/domain/projects/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const t = useTranslations("Projects");
    
    return (
        <Card className="group relative overflow-hidden border-0 bg-card shadow-sm transition-shadow hover:shadow-md pt-0">
            <Link href={`/projects/${project.slug}`} className="flex flex-col h-full">
                <div>
                    <div className="absolute inset-0 z-30 aspect-video bg-black/10 hover:bg-black/5 dark:bg-black/30 dark:hover:bg-black/10" />
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        unoptimized
                        className="relative z-20 aspect-video w-full object-cover"
                    />
                </div>

                <CardHeader className="p-5">
                    <CardTitle className="mb-1 font-semibold">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                        {project.introduction}
                    </CardDescription>

                    <div className="flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 4).map((tech) => (
                            <Badge key={`${project.slug}-${tech}`} variant="secondary" className="text-xs font-normal">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardHeader>

                <CardFooter className="mt-auto">
                    <Button variant="outline" className="w-full cursor-pointer hover:scale-105">
                        {t("viewMore")}
                    </Button>
                </CardFooter>
            </Link>
        </Card>
    );
}