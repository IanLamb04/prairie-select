export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl metal-border mt-4 rounded-sm px-5 py-3 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/75" >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-brass">
            Prairie Select Exteriors
          </p>
          <h1 className="font-display text-5xl leading-[1.1] font-medium text-cream sm:text-6xl lg:text-7xl">
            Crafted exteriors
            <br />
            <span className="italic text-brass-light">built to endure</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">
            Premium siding, cladding, and roofing for prairie homes — precision
            installation with the warmth of true craftsmanship.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="border border-brass/60 bg-brass/10 px-8 py-3.5 text-sm font-medium tracking-wide text-brass-light transition-colors hover:bg-brass/20"
            >
              Free Quote
            </a>
            <a
              href="#services"
              className="border border-cream/20 px-8 py-3.5 text-sm font-medium tracking-wide text-cream transition-colors hover:border-cream/40 hover:bg-cream/5"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
