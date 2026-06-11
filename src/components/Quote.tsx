export default function Quote() {
  return (
    <section className="relative border-y border-brass/10 bg-linen py-20 text-walnut lg:py-28">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
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
