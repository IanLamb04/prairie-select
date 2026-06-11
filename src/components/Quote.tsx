export default function Quote() {
  return (
    <section className="relative border-y border-brass/20 bg-linen py-20 text-walnut lg:py-28">
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="font-display text-6xl leading-none text-oak/20">&ldquo;</span>
        <blockquote className="font-display text-2xl leading-relaxed font-medium text-walnut sm:text-3xl lg:text-4xl">
          When a home feels customized to an owner&apos;s needs, the people who live there
          find it more appealing than the finest resort.
        </blockquote>
        <cite className="mt-8 block text-sm font-medium uppercase tracking-[0.2em] text-oak not-italic">
          — Vern Yip
        </cite>
      </div>
    </section>
  )
}
