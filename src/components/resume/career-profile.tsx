import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseBusiness } from "lucide-react";

interface ResumeCareerProfileProps {
    title: string;
    summary: string;
    goals: string;
}

export function ResumeCareerProfile({ title, summary, goals }: ResumeCareerProfileProps) {

    return (
        <section className="mb-8">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <BriefcaseBusiness className="h-5 w-5 text-primary" />
                {title}
            </h3>
            <Card size="sm" className="border-0 bg-card shadow-sm">
                <CardContent className="space-y-5">
                    <p className="leading-relaxed text-muted-foreground">{summary}</p>
                    <p className="leading-relaxed text-muted-foreground">{goals}</p>
                </CardContent>
            </Card>
        </section>
    );
}