"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

const categoryKeys = ["Web", "Mobile", "Frontend", "Backend"] as const;

export function CategoryFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const selected = searchParams?.get("c") ?? "";
    const t = useTranslations("Projects");

    const handleCategorySelected = (value: string) => {
        if (value === 'all') {
            router.push(`/projects`, {
                scroll: false
            });
            return;
        }
        router.push(`/projects?c=${value}`, {
            scroll: false
        });
    };

    return (
        <div className="mb-8 flex flex-wrap justify-center">
            <Button 
                variant="link"
                className="hover:no-underline"
                onClick={() => handleCategorySelected('all')}
            >
                <Badge
                    variant={ !selected ? "default" : "secondary"}
                    className="px-4 py-4 text-sm font-medium hover:bg-muted/80 cursor-pointer"
                >
                    {t('all')}
                </Badge>
            </Button>

            {categoryKeys.map((cat) => (
                <Button
                    key={cat}
                    variant="link"
                    className="hover:no-underline"
                    onClick={() => handleCategorySelected(cat)}
                >
                    <Badge 
                        variant={ cat === selected ? "default" : "secondary"}
                        className="px-4 py-4 text-sm font-medium hover:bg-muted/80 cursor-pointer"
                    >
                        {cat}
                    </Badge>
                </Button>
            ))}
        </div>
    );
}