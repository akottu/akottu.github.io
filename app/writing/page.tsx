import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TagFilter from "@/components/TagFilter";
import { getAllTags, getPosts } from "@/lib/posts";
import { sections } from "@/lib/site";

export const metadata: Metadata = { title: "Writing" };

export default function WritingPage() {
  const posts = getPosts();
  const tags = getAllTags(posts);
  const summaries = posts.map(({ slug, title, summary, tags, draft }) => ({ slug, title, summary, tags, draft }));

  return (
    <>
      <Nav items={sections.filter((s) => s.id !== "writing" || posts.length > 0)} onHome={false} />
      <main className="mx-auto min-h-[60vh] max-w-5xl px-5 py-20 sm:px-8">
        <p className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] text-rose-600 dark:text-rose-400">
          <span className="h-2 w-2 rounded-full bg-rose-500" aria-hidden="true" />
          Writing
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Notes, organized by topic.</h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Write-ups of problems I&apos;ve worked through. They&apos;re grouped by topic rather than date, and I keep them up to date as my thinking changes.
        </p>
        <div className="mt-12">
          {posts.length > 0 ? (
            <TagFilter posts={summaries} tags={tags} />
          ) : (
            <p className="text-zinc-500">Nothing published yet. Check back soon.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
