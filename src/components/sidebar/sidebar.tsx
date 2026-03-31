"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SidebarContent } from "./sidebar-content";

const links = [
  { href: "/", key: "home" },
  { href: "/blog", key: "blog" },
  { href: "/projects", key: "projects" },
  { href: "/about", key: "about" },
] as const;

export function Sidebar() {
  const t = useTranslations("Sidebar");

  return (
    <>
      <aside className="fixed left-0 top-0 z-40 hidden h-full w-[280px] overflow-y-auto border-r border-sidebar-border bg-sidebar lg:block">
        <SidebarContent />
      </aside>
    </>
  );
}
