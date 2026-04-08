import { ResumeCareerProfile } from "@/components/resume/career-profile";
import { ResumeContactInfo } from "@/components/resume/contact";
import { ResumeEducation } from "@/components/resume/education";
import { ResumeLanguagesInfo } from "@/components/resume/languages";
import { ResumeSocialInfo } from "@/components/resume/social";
import { ResumeWorkExperiences } from "@/components/resume/work-experiences";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DownloadIcon } from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";

interface ResumePageProps {
  params: Promise<{ locale: string }>;
};


export default async function ResumePage({ params }: ResumePageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "Resume" });

    return (
        <section className="py-12 px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-row align-middle justify-between mb-8">
                    <h2 className="mb-2 text-3xl font-bold tracking-tight">{t('title')}</h2>

                    <Button variant="outline">
                        <DownloadIcon className="h-4 w-4" />
                        {t('download')}
                    </Button>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row">
                    <aside className="shrink-0 lg:w-64">
                        <div className="space-y-6 lg:sticky lg:top-8">
                            <ResumeContactInfo title={t('contactLabel')} locale={locale} />
                            <Separator />

                            <ResumeSocialInfo title={t('socialLabel')} />
                            <Separator />

                            <ResumeLanguagesInfo title={t('languagesLabel')} locale={locale} />
                        </div>
                    </aside>

                    <div className="min-w-0 flex-1">
                        <ResumeCareerProfile
                            title={t('careerLabel')}
                            summary={t('careerSummary')}
                            goals={t('careerGoals')}
                        />

                        <ResumeWorkExperiences title={t('experiencesLabel')} locale={locale} />

                        <ResumeEducation title={t('educationLabel')} locale={locale} />
                    </div>
                </div>
            </div>
        </section>
    );
}