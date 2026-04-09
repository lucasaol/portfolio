import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { SocialMedias } from "@/components/sidebar/social-medias";
import { LanguageSelector } from "@/components/sidebar/language-selector";
import { ThemeToggle } from "@/components/sidebar/theme-toggle";

const navLinks = [
  { path: "/", key: "about" as const },
  { path: "/projects", key: "projects" as const },
  { path: "/resume", key: "resume" as const },
  { path: "/contact", key: "contact" as const },
];

export function SidebarContent() {
    const t = useTranslations("Sidebar");

    return (
        <div className="flex h-full flex-col items-center px-6 py-8">
            <Avatar className="mb-4 h-28 w-28 border-2 border-primary">
                <AvatarImage src="https://cdn.lucasandrade.work/profile/avatar.png" alt="Lucas Andrade" />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">LA</AvatarFallback>
            </Avatar>

            <h1 className="mb-1 text-xl font-bold text-sidebar-foreground">Lucas Andrade</h1>
            <p className="text-center text-sm text-sidebar-foreground/70">Senior Software Engineer | Tech Lead</p>

            <Separator className="my-4 bg-sidebar-border" />
            
            <nav className="mb-6 w-full space-y-1">
                {navLinks.map((link) => (
                    <Link
                      key={link.key}
                      href={link.path}
                      className="block rounded-md px-3 py-2 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-primary"
                    >
                        {t(link.key)}
                    </Link>
                ))}
            </nav>
            <div className="mt-auto flex flex-col gap-1 items-center">
                <SocialMedias />
                <Separator className="my-4 bg-sidebar-border" />
                <div className="flex items-center gap-2">
                    {/* <LanguageSelector /> */}
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}