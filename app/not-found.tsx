import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-start justify-center px-6">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-rose-600 dark:text-rose-400">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
      <Link href="/" className="mt-6 text-sm font-medium text-violet-600 hover:underline dark:text-violet-400">
        ← Back home
      </Link>
    </main>
  );
}
