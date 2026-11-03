import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowLeftIcon } from "@/components/icons";
import { getPost, getPosts } from "@/lib/posts";
import { sections } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  const posts = getPosts();
  // A static export needs at least one path; this placeholder renders a 404.
  return posts.length > 0 ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "_none" }];
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <Nav items={sections} onHome={false} />
      <main className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
        <Link href="/writing/" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-rose-600 dark:hover:text-rose-400">
          <ArrowLeftIcon /> All writing
        </Link>
        <div className="mt-8 flex flex-wrap gap-1.5">
          {post.draft && (
            <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white dark:bg-zinc-100 dark:text-zinc-900">
              Draft
            </span>
          )}
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-rose-500/25 bg-rose-500/[0.07] px-2 py-0.5 text-[11px] font-medium text-rose-700 dark:text-rose-300">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{post.summary}</p>
        <div className="mt-6 h-px bg-gradient-to-r from-rose-500/60 via-rose-500/20 to-transparent" />
        <article className="prose-post mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
      <Footer />
    </>
  );
}
