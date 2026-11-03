import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Pick<Post, "slug" | "title" | "summary" | "tags" | "draft"> }) {
  return (
    <Link
      href={`/writing/${post.slug}/`}
      className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white/70 p-6 transition hover:-translate-y-0.5 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/5 dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      <div className="flex flex-wrap items-center gap-1.5">
        {post.draft && (
          <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white dark:bg-zinc-100 dark:text-zinc-900">
            Draft
          </span>
        )}
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-rose-500/25 bg-rose-500/[0.07] px-2 py-0.5 text-[11px] font-medium text-rose-700 dark:text-rose-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-rose-600 dark:text-zinc-50 dark:group-hover:text-rose-400">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{post.summary}</p>
      <span className="mt-auto pt-5 text-sm font-medium text-rose-600 dark:text-rose-400">Read →</span>
    </Link>
  );
}
