import { getExperiences } from "@/domain/resume/experiences";
import { Locale } from "@/i18n/routing";
import { Building2 } from "lucide-react";
import { Badge } from "../ui/badge";

interface ResumeExperiencesProps {
    title: string;
    locale: Locale;
}

export function ResumeWorkExperiences({title, locale}: ResumeExperiencesProps) {
    const experiences = getExperiences(locale);
    
    return (
        <section className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <Building2 className="h-5 w-5 text-primary" />
                {title}
            </h3>

            <div className="relative space-y-0">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

                {experiences.map((exp, i) => (
                    <div key={i} className="relative pl-7 pb-6 last:pb-0">
                        <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-primary bg-background" />
                        <h4 className="font-semibold">{exp.jobTitle}</h4>
                        <div className="flex justify-between gap-x-3 gap-y-1">
                            <span className="text-sm text-primary font-medium">{exp.companyName}</span>

                            <div className="flex flex-wrap items-baseline gap-2">
                                <Badge variant="secondary" className="text-xs text-muted-foreground">{exp.location}</Badge>
                                <Badge variant="secondary" className="text-xs text-muted-foreground">{exp.period}</Badge>
                            </div>
                        </div>
                        <p key={i} className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                        
                        {exp.achievements && (
                            <ul className="mt-2 space-y-1">
                                {exp.achievements.map((item, j) => (
                                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

        </section>
    );
}