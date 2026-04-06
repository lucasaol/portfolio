import { Paragraph } from "@/domain/projects/types";

interface ProjectDescriptionProps {
    description: Paragraph
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
    return (
        <div>
            {description.title && (
                <h2 className="mb-3 text-2xl font-bold">{description.title}</h2>
            )}

            {description.content.map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{paragraph}</p>
            ))}
        </div>
    );
}