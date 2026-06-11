const areas = [
  'Winnipeg',
  'Selkirk',
  'Steinbach',
  'Stonewall',
  'East and West St. Paul',
  'Headingley',
  'Oak Bluff',
  'St. Andrews',
  'Niverville',
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="wood-grain relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass">
              Service Areas
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-oak sm:text-5xl">
              Proudly serving
              <br />
              Manitoba & beyond
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-oak">
              From urban Winnipeg to surrounding communities, our local crews understand
              the climate, the architecture, and what prairie homeowners need.
            </p>
          </div>

          <div className="glass-panel-warm metal-border grid grid-cols-2 gap-px bg-white/5 p-px sm:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="bg-charcoal/80 px-4 py-5 text-center text-sm text-cream/70 transition-colors hover:bg-steel/80 hover:text-brass-light"
              >
                {area}
              </div>
            ))}
            <div className="col-span-2 flex items-center justify-center bg-charcoal/60 px-4 py-5 text-sm text-cream/45 sm:col-span-3">
              & more surrounding communities
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
