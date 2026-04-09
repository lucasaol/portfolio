"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheckBigIcon } from "lucide-react";
import { useState } from "react";

type Status = "waiting" | "submitting" | "success" | "error";

export function ContactForm() {
    const t = useTranslations("Contact");

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<Status>('waiting');

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error("Request failed");
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch {
            setStatus('error');
        }
    };

    return (
       <Card>
            <CardHeader>
                <CardTitle>{t('sendMessageTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <FieldGroup className="grid grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel htmlFor="name">{t('form.name.label')}</FieldLabel>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t('form.name.placeholder')}
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">{t('form.email.label')}</FieldLabel>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
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
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder={t('form.subject.placeholder')}
                            />
                        </Field>
                    </FieldGroup>

                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="message">{t('form.message.label')}</FieldLabel>
                            <Textarea 
                                id="message"
                                name="message"
                                rows={8}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t('form.message.placeholder')}
                                className="h-32 resize-none"
                            />
                        </Field>
                    </FieldGroup>
                    
                    <Button 
                        type="submit"
                        size="lg"
                        disabled={status === 'submitting'}
                    >
                        {t('sendMessage')}
                    </Button>
                </form>
            </CardContent>
            <CardFooter>
                {status === 'success' && (
                    <Alert variant="success">
                        <CircleCheckBigIcon />
                        <AlertTitle>{t('successTitle')}</AlertTitle>
                        <AlertDescription>{t('successDescription')}</AlertDescription>
                    </Alert>
                )}

                {status === 'error' && (
                    <Alert variant="danger">
                        <CircleCheckBigIcon />
                        <AlertTitle>{t('errorTitle')}</AlertTitle>
                        <AlertDescription>{t('errorDescription')}</AlertDescription>
                    </Alert>
                )}
            </CardFooter>
        </Card>
    );
}