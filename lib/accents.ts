// Each section of the site has its own accent color, used for its label,
// its card borders, and its dot in the nav. Class names are written out in
// full so Tailwind can see them.

export type Accent = "violet" | "teal" | "amber" | "rose" | "sky" | "lime" | "indigo" | "pine";

export const accents: Record<
  Accent,
  {
    text: string;
    dot: string;
    border: string;
    hoverBorder: string;
    soft: string;
    glow: string;
    ring: string;
    chip: string;
  }
> = {
  violet: {
    text: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-500",
    border: "border-violet-500/30",
    hoverBorder: "hover:border-violet-500/60",
    soft: "bg-violet-500/[0.06] dark:bg-violet-400/[0.08]",
    glow: "from-violet-500/25",
    ring: "ring-violet-500/30",
    chip: "border-violet-500/25 bg-violet-500/[0.07] text-violet-700 dark:text-violet-300",
  },
  teal: {
    text: "text-teal-600 dark:text-teal-400",
    dot: "bg-teal-500",
    border: "border-teal-500/30",
    hoverBorder: "hover:border-teal-500/60",
    soft: "bg-teal-500/[0.06] dark:bg-teal-400/[0.08]",
    glow: "from-teal-500/25",
    ring: "ring-teal-500/30",
    chip: "border-teal-500/25 bg-teal-500/[0.07] text-teal-700 dark:text-teal-300",
  },
  amber: {
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
    border: "border-amber-500/30",
    hoverBorder: "hover:border-amber-500/60",
    soft: "bg-amber-500/[0.07] dark:bg-amber-400/[0.08]",
    glow: "from-amber-500/25",
    ring: "ring-amber-500/30",
    chip: "border-amber-500/30 bg-amber-500/[0.08] text-amber-800 dark:text-amber-300",
  },
  rose: {
    text: "text-rose-600 dark:text-rose-400",
    dot: "bg-rose-500",
    border: "border-rose-500/30",
    hoverBorder: "hover:border-rose-500/60",
    soft: "bg-rose-500/[0.06] dark:bg-rose-400/[0.08]",
    glow: "from-rose-500/25",
    ring: "ring-rose-500/30",
    chip: "border-rose-500/25 bg-rose-500/[0.07] text-rose-700 dark:text-rose-300",
  },
  sky: {
    text: "text-sky-600 dark:text-sky-400",
    dot: "bg-sky-500",
    border: "border-sky-500/30",
    hoverBorder: "hover:border-sky-500/60",
    soft: "bg-sky-500/[0.06] dark:bg-sky-400/[0.08]",
    glow: "from-sky-500/25",
    ring: "ring-sky-500/30",
    chip: "border-sky-500/25 bg-sky-500/[0.07] text-sky-700 dark:text-sky-300",
  },
  // The green between amber and teal, used for Interests.
  lime: {
    text: "text-lime-700 dark:text-lime-400",
    dot: "bg-lime-500",
    border: "border-lime-500/35",
    hoverBorder: "hover:border-lime-500/60",
    soft: "bg-lime-500/[0.08] dark:bg-lime-400/[0.08]",
    glow: "from-lime-500/25",
    ring: "ring-lime-500/30",
    chip: "border-lime-500/30 bg-lime-500/[0.08] text-lime-800 dark:text-lime-300",
  },
  indigo: {
    text: "text-indigo-600 dark:text-indigo-400",
    dot: "bg-indigo-500",
    border: "border-indigo-500/30",
    hoverBorder: "hover:border-indigo-500/60",
    soft: "bg-indigo-500/[0.06] dark:bg-indigo-400/[0.08]",
    glow: "from-indigo-500/25",
    ring: "ring-indigo-500/30",
    chip: "border-indigo-500/25 bg-indigo-500/[0.07] text-indigo-700 dark:text-indigo-300",
  },
  // Chathouse's Season 1 palette: pine green on winter-sky blue.
  pine: {
    text: "text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-600",
    border: "border-emerald-600/30",
    hoverBorder: "hover:border-emerald-600/60",
    soft: "bg-emerald-600/[0.06] dark:bg-emerald-400/[0.08]",
    glow: "from-emerald-600/25",
    ring: "ring-emerald-600/30",
    chip: "border-emerald-600/25 bg-emerald-600/[0.07] text-emerald-800 dark:text-emerald-300",
  },
};
