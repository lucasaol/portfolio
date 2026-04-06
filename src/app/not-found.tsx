import { Button } from "@/components/ui/button";
import { ExternalLink, Home } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFoundPage() {
    const t = useTranslations('NotFound');

    return (
        <section className="flex min-h-[calc(100vh-3.5rem)] items-center px-4 py-12 sm:px-8 lg:min-h-screen lg:px-12">
            <div className="mx-auto w-full max-w-3xl text-center">
                <p className="mb-2 text-8xl font-bold leading-none tracking-tight text-primary">404</p>
                
                <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h1>
                <p className="mx-auto mb-8 max-w-xl text-muted-foreground">{t('description')}</p>

                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button asChild>
                        <Link href="/">
                            <Home className="h-4 w-4" />
                            {t('backToHome')}
                        </Link>
                    </Button>

                    <Button variant="secondary" asChild>
                        <Link href="/contact">
                            <ExternalLink className="h-4 w-4" />
                            {t('contactCta')}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}