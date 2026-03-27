export default function HomePage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-start justify-end pb-16">
      <p className="mb-3 text-xs uppercase tracking-widest text-neutral-400">
        New drop
      </p>
      <h1 className="text-5xl font-semibold leading-none tracking-tight sm:text-7xl">
        Uncommon<br />Sense.
      </h1>
      <a
        href="/shop"
        className="mt-8 inline-block border border-neutral-950 px-6 py-3 text-sm tracking-wide hover:bg-neutral-950 hover:text-white transition-colors"
      >
        Shop Now
      </a>
    </section>
  );
}
