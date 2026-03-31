import { useTranslations } from "next-intl";
import type { Post } from "@/domain/blog/types";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  const t = useTranslations("PostList");

  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
        {t("title")}
      </h2>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="rounded-lg border border-zinc-200 p-5 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h3 className="text-lg font-medium text-black dark:text-zinc-50">
              {post.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {post.summary}
            </p>
            <time className="mt-3 block text-xs text-zinc-500 dark:text-zinc-500">
              {post.date}
            </time>
          </li>
        ))}
      </ul>
    </section>
  );
}
