import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { socialMedia } from "@/domain/contact/data";

export function SocialMediaSection() {
    const t = useTranslations("Contact");
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('socialMediaLabel')}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-3">
                    {socialMedia.map((social) => (
                        <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label={social.label}
                        >
                            <social.icon className="h-5 w-5" />
                        </a>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}