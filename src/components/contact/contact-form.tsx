import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheckBigIcon } from "lucide-react";

export function ContactForm() {
    const t = useTranslations("Contact");

    return (
       <Card>
            <CardHeader>
                <CardTitle>{t('sendMessageTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <FieldGroup className="grid grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="name">{t('form.name.label')}</FieldLabel>
                            <Input
                                type="text"
                                id="name"
                                required
                                placeholder={t('form.name.placeholder')}
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">{t('form.email.label')}</FieldLabel>
                            <Input
                                type="email"
                                id="email"
                                required
                                placeholder={t('form.email.placeholder')}
                            />
                        </Field>
                    </FieldGroup>

                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="subject">{t('form.subject.label')}</FieldLabel>
                            <Input
                                type="text"
                                id="subject"
                                required
                                placeholder={t('form.subject.placeholder')}
                            />
                        </Field>
                    </FieldGroup>

                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="message">{t('form.message.label')}</FieldLabel>
                            <Textarea 
                                id="message"
                                rows={8}
                                required
                                placeholder={t('form.message.placeholder')}
                                className="h-32 resize-none"
                            />
                        </Field>
                    </FieldGroup>
                    
                    <Button type="submit" size="lg">{t('sendMessage')}</Button>
                </form>
            </CardContent>
            <CardFooter>
                <Alert variant="success">
                    <CircleCheckBigIcon />
                    <AlertTitle>{t('successTitle')}</AlertTitle>
                    <AlertDescription>{t('successDescription')}</AlertDescription>
                </Alert>
                <Alert variant="danger">
                    <CircleCheckBigIcon />
                    <AlertTitle>{t('errorTitle')}</AlertTitle>
                    <AlertDescription>{t('errorDescription')}</AlertDescription>
                </Alert>
            </CardFooter>
        </Card>
    );
}