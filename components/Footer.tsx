import { accents } from "@/lib/accents";
import { getPosts } from "@/lib/posts";
import { sections, site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Footer() {
  // One stripe per section actually shown on the site, in section order.
  const hasPosts = getPosts().length > 0;
  const visible = sections.filter((s) => s.id !== "writing" || hasPosts);
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 flex h-1">
            {visible.map((s) => (
              <span key={s.id} className={`flex-1 ${accents[s.accent].dot}`} />
            ))}
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let&apos;s talk.</h2>
          <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
            Whether it&apos;s about engineering, AI in real products, or something you&apos;re building, email is the fastest way to reach me.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              <MailIcon /> {site.email}
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
            >
              <LinkedInIcon /> LinkedIn
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:border-zinc-500 dark:border-zinc-700 dark:hover:border-zinc-500"
            >
              <GitHubIcon /> GitHub
            </a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} {site.name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
