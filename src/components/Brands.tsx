const brands = [
  'James Hardie',
  'LP SmartSide',
  'Versetta Stone',
  'Kaycan',
  'Gentek',
  'Fusion Stone',
  'CanExel',
  'Cedar Renditions',
]

export default function Brands() {
  return (
    <section className="border-y border-white/5 bg-ink py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.3em] text-cream/40">
          Trusted brands we carry
        </p>
        <div className="grid grid-cols-2 gap-px bg-white/5 sm:grid-cols-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center bg-charcoal px-4 py-8 transition-colors hover:bg-steel"
            >
              <span className="text-center text-xs font-medium uppercase tracking-[0.15em] text-cream/50 transition-colors hover:text-brass/80">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
