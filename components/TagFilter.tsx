"use client";

import { useState } from "react";
import PostCard from "./PostCard";
import type { Post } from "@/lib/posts";

type PostSummary = Pick<Post, "slug" | "title" | "summary" | "tags" | "draft">;

// Posts are organized by topic rather than date; pick a tag to narrow down.
export default function TagFilter({ posts, tags }: { posts: PostSummary[]; tags: string[] }) {
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? posts.filter((p) => p.tags.includes(active)) : posts;

  const chip = (label: string, value: string | null) => {
    const on = active === value;
    return (
      <button
        key={label}
        onClick={() => setActive(value)}
        aria-pressed={on}
        className={`rounded-full border px-3 py-1 text-sm font-medium transition ${
          on
            ? "border-rose-500 bg-rose-500 text-white"
            : "border-zinc-300 text-zinc-600 hover:border-rose-500/60 hover:text-rose-600 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-rose-400"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {chip("All", null)}
        {tags.map((t) => chip(t, t))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {shown.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
