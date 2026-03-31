import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const links = [
  { href: "/", key: "home" },
  { href: "/blog", key: "blog" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
] as const;

export function Sidebar() {
  const t = useTranslations("Sidebar");

  return (
    <aside className="w-64 shrink-0 border-r border-zinc-200 p-6 dark:border-zinc-800">
      <nav>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {t("title")}
        </h2>
        <ul className="space-y-2">
          {links.map(({ href, key }) => (
            <li key={key}>
              <Link
                href={href}
                className="block rounded-md px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
