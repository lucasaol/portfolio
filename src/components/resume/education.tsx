import { getEducation } from "@/domain/resume/education";
import { Locale } from "@/i18n/routing";
import { GraduationCap } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardAction, CardContent, CardDescription, CardHeader } from "../ui/card";

interface ResumeEducationProps {
    title: string;
    locale: Locale;
}

export function ResumeEducation({title, locale}: ResumeEducationProps) {
    const education = getEducation(locale);

    return (
        <section className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <GraduationCap className="h-5 w-5 text-primary" />
                {title}
            </h3>

            <ul className="space-y-3">
                {education.map((edu) => (
                    <Card key={edu.degree} size="sm">
                        <CardHeader>
                            <CardDescription>
                                    <h4 className="text-sm font-semibold text-foreground">{edu.degree}</h4>
                                    <span className="text-xs text-primary">{edu.institution}</span>                            
                            </CardDescription>
                            <CardAction>
                                <Badge variant="secondary" className="text-xs text-muted-foreground">{edu.period}</Badge>
                            </CardAction>
                        </CardHeader>
                    </Card>
                ))}
                </ul>
        </section>
    );
}