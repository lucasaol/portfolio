import { socialMedia } from '@/domain/contact/data';

export function SocialMedias() {

    return (
        <div className="flex gap-3">
            {socialMedia.map((social) => (
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