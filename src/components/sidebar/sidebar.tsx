"use client";

import { useState } from "react";
import { SidebarContent } from "./sidebar-content";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <aside className="fixed left-0 top-0 z-40 hidden h-full w-[280px] overflow-y-auto border-r border-sidebar-border bg-sidebar lg:block">
        <SidebarContent />
      </aside>

      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-sidebar-border bg-sidebar px-4 py-3 lg:hidden">
        <h1 className="text-lg font-bold text-sidebar-foreground">Lucas Andrade</h1>
        
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6 text-sidebar-foreground" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[200px] border-sidebar-border bg-sidebar p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
