import Link from "next/link";
import Nav from "@/components/Nav";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import StatsMarquee from "@/components/StatsMarquee";
import PostCard from "@/components/PostCard";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { accents } from "@/lib/accents";
import { about, certifications, education, experience, projects, sections, site } from "@/lib/site";
import { getPosts } from "@/lib/posts";

export default function Home() {
  const posts = getPosts();
  // The Writing section (and its nav link) only appears once a post is published.
  const visibleSections = sections.filter((s) => s.id !== "writing" || posts.length > 0);
  const indexOf = (id: string) => visibleSections.findIndex((s) => s.id === id) + 1;

  return (
    <>
      <Nav items={visibleSections} />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />

        <Section id="about" index={indexOf("about")} label="About" title="An engineer who likes owning the whole problem." accent="violet">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 text-[17px] leading-8 text-zinc-700 dark:text-zinc-300">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="h-fit rounded-2xl border border-violet-500/20 bg-white/70 p-6 dark:bg-zinc-900/50">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Toolbox</p>
              <dl className="mt-5 space-y-5">
                {about.toolbox.map((group) => (
                  <div key={group.group}>
                    <dt className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{group.group}</dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${accents.violet.chip}`}>
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        <Section id="experience" index={indexOf("experience")} label="Experience" title="Five years, four companies, every layer of the stack." accent="teal">
          <ol className="relative space-y-6 border-l border-teal-500/30 pl-6 sm:pl-8">
            {experience.map((job, i) => (
              <li key={job.company} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[31px] top-7 h-3.5 w-3.5 rounded-full border-2 border-stone-50 sm:-left-[39px] dark:border-zinc-950 ${
                    i === 0 ? "bg-teal-500 ring-4 ring-teal-500/20" : "bg-teal-500/60"
                  }`}
                />
                <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 transition hover:border-teal-500/50 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {job.title} <span className="text-teal-600 dark:text-teal-400">· {job.company}</span>
                    </h3>
                    <p className="font-mono text-xs text-zinc-500">{job.dates}</p>
                  </div>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{job.summary}</p>
                  <ul className="mt-4 space-y-2.5">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300">
                        <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" index={indexOf("projects")} label="Projects" title="Things I build on my own time." accent="amber">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => {
              const a = accents[project.accent];
              const featured = i === 0;
              return (
                <article
                  key={project.name}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white/70 p-6 transition hover:-translate-y-0.5 hover:shadow-xl sm:p-7 dark:bg-zinc-900/50 ${a.border} ${a.hoverBorder} ${
                    featured ? "md:col-span-2" : ""
                  }`}
                >
                  <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${a.dot}`} />
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${a.glow} to-transparent opacity-70 blur-2xl dark:opacity-50`}
                  />
                  <div className="relative flex flex-wrap items-center justify-between gap-3">
                    <h3 className={`text-xl font-semibold tracking-tight sm:text-2xl ${a.text}`}>{project.name}</h3>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="relative mt-3 text-[15px] leading-7 text-zinc-700 dark:text-zinc-300">{project.blurb}</p>
                  <ul className={`relative mt-4 grid gap-2.5 ${featured ? "md:grid-cols-2 md:gap-x-8" : ""}`}>
                    {project.details.map((d) => (
                      <li key={d} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                        <span aria-hidden="true" className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <span key={s} className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${a.chip}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                      >
                        {project.hrefLabel ?? "Visit"} <ArrowUpRightIcon />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        {posts.length > 0 && (
          <Section id="writing" index={indexOf("writing")} label="Writing" title="Notes from problems I've worked through." accent="rose">
            <div className="grid gap-6 md:grid-cols-2">
              {posts.slice(0, 4).map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <Link href="/writing/" className="mt-8 inline-flex text-sm font-medium text-rose-600 hover:underline dark:text-rose-400">
              Browse all writing by topic →
            </Link>
          </Section>
        )}

        <Section id="education" index={indexOf("education")} label="Education" title="Always learning, formally and otherwise." accent="sky">
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((e) => (
              <div key={e.school} className="rounded-2xl border border-zinc-200 bg-white/70 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold tracking-tight">{e.school}</h3>
                  {e.dates && (
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${accents.sky.chip}`}>{e.dates}</span>
                  )}
                </div>
                <p className="mt-2 text-[15px] text-zinc-600 dark:text-zinc-400">{e.degree}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-sky-500/20 bg-sky-500/[0.04] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Certifications</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <li key={c} className={`rounded-full border px-3 py-1 text-sm ${accents.sky.chip}`}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function StatusBadge({ status }: { status: string }) {
  const live = status === "Live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
        live
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
          : "border-zinc-300 bg-zinc-100 text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-400"
      }`}
    >
      <span className={`relative flex h-2 w-2`}>
        {live && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${live ? "bg-emerald-500" : "bg-zinc-400"}`} />
      </span>
      {status}
    </span>
  );
}

function Hero() {
  return (
    <section className="relative pb-4 pt-16 sm:pb-6 sm:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-[8%] h-72 w-72 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-500/15" />
        <div className="absolute top-10 right-[6%] h-64 w-64 rounded-full bg-teal-400/20 blur-3xl dark:bg-teal-500/10" />
        <div className="absolute top-56 left-[40%] h-56 w-56 rounded-full bg-amber-400/20 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(113,113,122,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(113,113,122,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      </div>

      <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-teal-500" />
        {site.role}
      </p>
      <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900 sm:text-7xl dark:text-zinc-50">
        Anish{" "}
        <span className="bg-gradient-to-r from-violet-600 via-teal-500 to-amber-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-teal-300 dark:to-amber-300">
          Kottu
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9 dark:text-zinc-400">{site.tagline}</p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          <MailIcon /> Email me
        </a>
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:border-zinc-500"
        >
          <LinkedInIcon /> LinkedIn
        </a>
        <a
          href={site.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-5 py-2.5 text-sm font-medium backdrop-blur transition hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:border-zinc-500"
        >
          <GitHubIcon /> GitHub
        </a>
      </div>

      <StatsMarquee />
    </section>
  );
}
