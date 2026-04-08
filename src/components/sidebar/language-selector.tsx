"use client";

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function LanguageSelector() {
  const pathname = usePathname();
  const locale = useLocale();
  const withoutLocale = pathname.replace(`/${locale}`, "") || "/";

  return (
    <div className="flex overflow-hidden rounded-full border border-sidebar-border">
        <Link
          href={withoutLocale}
          locale= "br"
          className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs transition-colors ${
            locale === "br"
              ? "bg-sidebar-accent text-sidebar-foreground"
              : "text-sidebar-foreground/50 hover:text-sidebar-foreground/80"
          }`}
          aria-label="Português (Brasil)"
        >
          <Image src="https://flagcdn.com/br.svg" alt="Português (BR)" width={20} height={14} />
          PT
        </Link>

        <Link
          href={withoutLocale}
          locale="en"
          className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs transition-colors ${
            locale === "en"
              ? "bg-sidebar-accent text-sidebar-foreground"
              : "text-sidebar-foreground/50 hover:text-sidebar-foreground/80"
          }`}
          aria-label="English"
        >
          <Image src="https://flagcdn.com/us.svg" alt="English" width={20} height={14} />
          EN
        </Link>
    </div>
  );
}