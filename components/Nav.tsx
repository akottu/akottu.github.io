"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { accents, type Accent } from "@/lib/accents";

interface NavItem {
  id: string;
  label: string;
  accent: Accent;
}

// Sticky header whose links double as the site's color legend. The link for
// the section in view lights up in that section's color.
export default function Nav({ items, onHome = true }: { items: NavItem[]; onHome?: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items, onHome]);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-stone-50/75 backdrop-blur-xl dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-zinc-900 text-[11px] font-bold text-white dark:bg-zinc-100 dark:text-zinc-900">
            AK
          </span>
          <span className="hidden sm:inline">Anish Kottu</span>
        </Link>
        <ul className="flex items-center gap-0 text-xs sm:gap-1 sm:text-sm">
          {items.map((item) => {
            const a = accents[item.accent];
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <Link
                  href={onHome ? `#${item.id}` : `/#${item.id}`}
                  className={`flex items-center gap-1.5 rounded-full px-2 py-1.5 transition-colors sm:px-2.5 ${
                    isActive
                      ? `${a.soft} ${a.text}`
                      : `${a.text} sm:text-zinc-600 sm:hover:text-zinc-900 sm:dark:text-zinc-400 sm:dark:hover:text-zinc-100`
                  }`}
                >
                  <span className={`hidden h-1.5 w-1.5 rounded-full sm:inline-block ${a.dot}`} aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
