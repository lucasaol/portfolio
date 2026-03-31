import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function AboutSection() {
    const t = useTranslations("About");

    return (
        <section id="about" className="py-12 px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                    <div className="flex-1">
                        <h2 className="mb-2 text-3xl font-bold tracking-tight">{t('title')}</h2>
                        <p className="mb-4 text-lg text-primary font-medium">{t('role')}</p>

                        <p className="mb-4 leading-relaxed text-muted-foreground">{t('description')}</p>
                        <p className="mb-6 leading-relaxed text-muted-foreground">{t('bio')}</p>

                        <div className="flex flex-wrap gap-3">
                            <Button
                                variant="default"
                                className="rounded-full"
                                size="lg"
                                asChild
                            >
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                                >
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    {t('viewPortfolio')}
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                className="rounded-full"
                                size="lg"
                                asChild
                            >
                                <Link
                                    href="/resume"
                                    className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                                >
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    {t('viewResume')}
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="shrink-0">
                        <Avatar className="h-48 w-48 border-4 border-primary/20 shadow-lg md:h-56 md:w-56">
                            <AvatarImage src="/profile.jpeg" alt="Lucas Andrade" />
                            <AvatarFallback className="bg-primary/10 text-primary text-4xl font-bold">
                                LA
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </section>
    );
}