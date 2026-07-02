import { balancedGridCols, balancedGridSpan } from '../utils/grid'

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
    <section className="relative border-y border-white/5 bg-ink py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/65 to-ink/50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.3em] text-brass-light">
          Trusted brands we carry
        </p>
        <div className={`grid ${balancedGridCols(2)} ${balancedGridCols(4, 'sm')}`}>
          {brands.map((brand, i) => (
            <div
              key={brand}
              className={`border border-cream/20 flex items-center justify-center px-4 py-8 transition-colors hover:border-cream/40 hover:bg-cream/5 ${balancedGridSpan(i, brands.length, 2)} ${balancedGridSpan(i, brands.length, 4, 'sm')}`}
            >
              <span className="text-center text-xs font-medium uppercase tracking-[0.15em] text-cream transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
