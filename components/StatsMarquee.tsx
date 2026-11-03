import { accents } from "@/lib/accents";
import { stats } from "@/lib/site";

type Stat = (typeof stats)[number];

function StatCard({ stat }: { stat: Stat }) {
  const a = accents[stat.accent];
  return (
    <li className={`flex w-64 shrink-0 flex-col rounded-2xl border bg-white/80 px-5 py-4 backdrop-blur dark:bg-zinc-900/70 ${a.border}`}>
      <span className={`text-2xl font-semibold tracking-tight ${a.text}`}>{stat.value}</span>
      <span className="mt-1 text-sm leading-5 text-zinc-600 dark:text-zinc-400">{stat.label}</span>
      <span className="mt-3 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
        <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} aria-hidden="true" />
        {stat.where}
      </span>
    </li>
  );
}

// Two rows of real stats drifting in opposite directions. Each row is
// rendered twice back to back so the loop is seamless; hovering pauses it,
// and with reduced motion it becomes a static, horizontally scrollable row.
function Row({ items, reverse }: { items: Stat[]; reverse?: boolean }) {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto">
      <ul
        className={`flex w-max gap-4 py-1 group-hover:[animation-play-state:paused] motion-reduce:animate-none ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[...items, ...items].map((stat, i) => (
          <StatCard key={`${stat.value}-${i}`} stat={stat} />
        ))}
      </ul>
    </div>
  );
}

export default function StatsMarquee() {
  const half = Math.ceil(stats.length / 2);
  return (
    <section aria-label="Highlights from my work" className="relative left-1/2 mt-14 w-screen -translate-x-1/2 space-y-4">
      <ul className="sr-only">
        {stats.map((s) => (
          <li key={s.value}>
            {s.value} {s.label} ({s.where})
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className="space-y-4">
        <Row items={stats.slice(0, half)} />
        <Row items={stats.slice(half)} reverse />
      </div>
    </section>
  );
}
