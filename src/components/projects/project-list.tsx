import { Project } from "@/domain/projects/types";
import { ProjectCard } from "./project-card";

interface ProjectListProps {
    projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {

    return (
        <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
    );
}