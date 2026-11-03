import { accents, type Accent } from "@/lib/accents";

// A color-coded page section: numbered eyebrow in the section's color, a
// heading, and a soft glow of the same color behind it.
export default function Section({
  id,
  index,
  label,
  title,
  accent,
  children,
}: {
  id: string;
  index: number;
  label: string;
  title: string;
  accent: Accent;
  children: React.ReactNode;
}) {
  const a = accents[accent];
  return (
    <section id={id} className="relative scroll-mt-20 py-20 sm:py-24">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-gradient-to-br ${a.glow} to-transparent opacity-60 blur-3xl dark:opacity-40`}
      />
      <div className="relative">
        <p className={`flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em] ${a.text}`}>
          <span className={`h-2 w-2 rounded-full ${a.dot}`} aria-hidden="true" />
          {String(index).padStart(2, "0")} · {label}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
