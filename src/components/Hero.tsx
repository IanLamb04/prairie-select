export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid lg:grid-cols-2">
        <div className="relative bg-charcoal">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink via-charcoal/90 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brass/30 to-transparent" />
        </div>

        <div className="wood-grain relative">
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-walnut/80 via-transparent to-oak/40" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-brass">
              Precision meets craft
            </p>
            <h1 className="font-display text-5xl leading-[1.1] font-medium text-cream sm:text-6xl lg:text-7xl">
              Where black steel
              <br />
              <span className="italic text-brass-light">meets warm timber</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/65 sm:text-lg">
              Premium exterior systems for prairie homes — engineered for harsh winters,
              designed with the soul of handcrafted detail.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="border border-brass bg-brass px-8 py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-brass-light"
              >
                Free Quote
              </a>
              <a
                href="#services"
                className="glass-panel-warm px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-cream/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-4 lg:col-span-5">
            <div className="glass-panel metal-border rounded-sm p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-px flex-1 bg-brass/40" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50">
                  Since 2009
                </span>
                <span className="h-px flex-1 bg-brass/40" />
              </div>
              <p className="font-display text-2xl leading-snug text-cream/90">
                &ldquo;Home isn&apos;t a place — it&apos;s a feeling we help create.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '15+', label: 'Years' },
                { value: '250+', label: 'Reviews' },
                { value: 'A+', label: 'Rated' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="metal-border bg-steel/60 px-3 py-4 text-center backdrop-blur-sm"
                >
                  <div className="font-display text-2xl font-medium text-brass-light">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-cream/45">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block">
        <a
          href="#craft"
          className="flex flex-col items-center gap-2 text-cream/40 transition-colors hover:text-brass"
          aria-label="Scroll to content"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Discover</span>
          <span className="block h-8 w-px bg-gradient-to-b from-brass/60 to-transparent" />
        </a>
      </div>
    </section>
  )
}
