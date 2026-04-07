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
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input
                                type="text"
                                id="name"
                                required
                                placeholder="Seu nome completo"
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">E-mail</FieldLabel>
                            <Input
                                type="email"
                                id="email"
                                required
                                placeholder="seu@email.com"
                            />
                        </Field>
                    </FieldGroup>

                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="subject">Assunto</FieldLabel>
                            <Input
                                type="text"
                                id="subject"
                                required
                                placeholder="Como posso ajudar?"
                            />
                        </Field>
                    </FieldGroup>

                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="message">Mensagem</FieldLabel>
                            <Textarea 
                                id="message"
                                rows={8}
                                required
                                placeholder="Sua mensagem..."
                                className="h-32 resize-none"
                            />
                        </Field>
                    </FieldGroup>

                    <div className="flex">
                        <Button type="submit" size="lg">
                            Enviar mensagem
                        </Button>
                    </div>
                </form>
            </CardContent>
            <CardFooter>
                <Alert variant="success">
                    <CircleCheckBigIcon />
                    <AlertTitle>Sucesso!</AlertTitle>
                    <AlertDescription>
                        Mensagem enviada com sucesso, em breve retornarei o contato!
                    </AlertDescription>
                </Alert>
            </CardFooter>
        </Card>
    );
}