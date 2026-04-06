import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactForm() {
    const t = useTranslations("Contact");

    return (
       <Card>
            <CardHeader>
                <CardTitle>{t('sendMessageTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    
                </form>
            </CardContent>
        </Card>
    );
}