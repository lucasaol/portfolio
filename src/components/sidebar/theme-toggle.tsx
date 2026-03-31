import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative flex items-center gap-2 rounded-full border border-sidebar-border px-3 py-1.5 text-xs text-sidebar-foreground/70 transition-colors hover:text-primary"
            aria-label="Toggle dark mode"
        >
            <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute left-3 h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}