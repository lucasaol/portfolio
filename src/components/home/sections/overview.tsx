
import { SkillsList } from "@/components/skills/skills-list";
import { getSkills } from "@/domain/skills/data";
import { useTranslations } from "next-intl";

export function OverviewSection() {
    const t = useTranslations("Overview");
    const hardSkills = getSkills('br', 'hard');
    const softSkills = getSkills('br', 'soft');

    return (
        <section id="overview" className="py-12 px-4 sm:px-8 lg:px-12 theme-bg-light">
            <div className="mx-auto max-w-5xl">
                <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">{t('title')}</h2>
                <p className="mx-auto mb-8 max-w-2xl text-center text-muted-foreground">{t('subtitle')}</p>

                <SkillsList title="Hard Skills" skills={hardSkills} />
                <SkillsList title="Soft Skills" skills={softSkills} />
            </div>
        </section>
    );
}