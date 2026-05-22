import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FCFAF9] flex items-center justify-center px-6">
      <section className="max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#305E2F] mb-4">
          404
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[#1B3A1F] mb-6">
          This page has flown the nest.
        </h1>

        <p className="text-lg text-[#4B5A4C] mb-8">
          The page you’re looking for may have moved, been removed, or never existed.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#1B3A1F] px-7 py-3 text-white font-semibold transition hover:bg-[#305E2F]"
        >
          Back to homepage
        </Link>
      </section>
    </main>
  );
}