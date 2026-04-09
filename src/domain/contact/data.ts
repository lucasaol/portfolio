import { ContactInfo, SocialMedia } from "./types";
import { IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp } from '@tabler/icons-react';
import { Locale } from "@/i18n/routing";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export const socialMedia: SocialMedia[] = [
    { 
        label: "LinkedIn",
        text: "linkedin.com/in/lucasaol",
        icon: IconBrandLinkedin,
        href: "https://www.linkedin.com/in/lucasaol"
    },
    { 
        label: "GitHub",
        text: "github.com/lucasaol",
        icon: IconBrandGithub,
        href: "https://github.com/lucasaol"
    },
    { 
        label: "WhatsApp",
        text: "wa.me/5531983010121",
        icon: IconBrandWhatsapp,
        href: "https://wa.me/5531983010121"
    }
];

const contactInfo: Record<Locale, ContactInfo[]> = {
    br: [
        {
            icon: MailIcon,
            label: "E-mail",
            text: "hello@lucasandrade.work"
        },
        {
            icon: PhoneIcon,
            label: "Telefone",
            text: "(31) 98301-0121"
        },
        {
            icon: MapPinIcon,
            label: "Localização",
            text: "Belo Horizonte, MG"
        }
    ],
    en: [
        {
            icon: MailIcon,
            label: "Email",
            text: "hello@lucasandrade.work"
        },
        {
            icon: PhoneIcon,
            label: "Phone",
            text: "+55 (31) 98301-0121"
        },
        {
            icon: MapPinIcon,
            label: "Location",
            text: "Brazil"
        }
    ]
};

export function getContactInfo(locale: Locale): ContactInfo[] {
    return contactInfo[locale];
}