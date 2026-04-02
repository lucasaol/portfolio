import { Skill } from "@/domain/skills/types";
import { Card, CardContent } from "@/components/ui/card";

interface SkillsListProps {
    title: string;
    skills: Skill[];
}
export function SkillsList({ title, skills }: SkillsListProps) {
    return (
        <>
            <h3 className="mb-4 text-xl font-semibold">{title}</h3>
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {skills.map((skill) => (
                    <Card
                        key={skill.title}
                        className="border-0 bg-card shadow-sm transition-shadow hover:shadow-md"
                    >
                        <CardContent className="flex gap-4 p-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <skill.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="mb-1 font-semibold">{skill.title}</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}