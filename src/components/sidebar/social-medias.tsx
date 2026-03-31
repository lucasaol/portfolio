import { IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp } from '@tabler/icons-react';

const socialLinks = [
  { href: "https://www.linkedin.com/in/lucasaol/", icon: IconBrandLinkedin, label: "LinkedIn" },
  { href: "https://github.com/lucasaol", icon: IconBrandGithub, label: "GitHub" },
  { href: "https://wa.me/5531983010121", icon: IconBrandWhatsapp, label: "WhatsApp" },
];

export function SocialMedias() {

    return (
        <div className="flex gap-3">
            {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sidebar-foreground/60 transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                    <social.icon className="h-5 w-5" />
                </a>
            ))}
        </div>
    );
}