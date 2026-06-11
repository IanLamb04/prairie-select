export default function WhyChoose() {
  return (
    <section id="craft" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[560px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/20 to-ink/60 lg:to-ink" />
          <div className="absolute inset-4 border border-white/10" />
        </div>

        <div className="wood-grain flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-lg">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass-light/80">
              Why Prairie Select
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight font-medium text-cream sm:text-5xl">
              Built for prairie weather.
              <br />
              <span className="italic text-brass-light">Finished by hand.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-cream/70">
              We combine decades of exterior expertise with the care of artisan installers.
              From freezing winters to blazing summers, our systems are engineered to endure —
              and detailed to feel like they were always meant to be there.
            </p>
            <p className="mt-4 leading-relaxed text-cream/60">
              Honest pricing, clear communication, and a final walkthrough on every project.
              That&apos;s how we&apos;ve earned the trust of homeowners across Manitoba and beyond.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                'Certified installers for leading brands',
                'No hidden costs — ever',
                'Meticulous cleanup and inspection',
                'Local team that knows prairie homes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-cream/75">
                  <span className="mt-1.5 h-px w-4 shrink-0 bg-brass" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
