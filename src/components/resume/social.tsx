import { socialMedia } from "@/domain/contact/data";
import { Hash } from "lucide-react";

interface ResumeSocialProps {
    title: string;
}

export function ResumeSocialInfo({ title }: ResumeSocialProps) {
    return (
        <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <Hash className="h-4 w-4 text-primary" />
                {title}
            </h3>

            <ul className="space-y-2.5 text-xs">
                {socialMedia.map((social) => (
                    <li key={social.label}>
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="flex items-center gap-2 text-muted-foreground"
                        >
                            <social.icon className="h-3.5 w-3.5 text-primary" />
                            {social.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}