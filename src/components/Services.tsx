import { balancedGridCols, balancedGridSpan } from '../utils/grid'

const services = [
  {
    title: 'Custom Cladding',
    description:
      'Precision aluminum cladding that frames windows and doors with architectural clarity.',
    accent: 'steel',
  },
  {
    title: 'Siding',
    description:
      'From fibre cement to engineered wood — materials chosen for beauty and prairie durability.',
    accent: 'wood',
  },
  {
    title: 'Eavestroughs',
    description:
      'Seamless drainage systems that protect your foundation through every freeze-thaw cycle.',
    accent: 'steel',
  },
  {
    title: 'Versetta Stone',
    description:
      'The warmth of stone without the weight — handcrafted appearance, modern installation.',
    accent: 'wood',
  },
  {
    title: 'Soffits & Fascia',
    description:
      'Critical details that prevent ice dams and give your roofline a clean, finished edge.',
    accent: 'steel',
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass">
              Our Services
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-cream sm:text-5xl">
              Exterior systems, elevated
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-cream/55 lg:text-right">
            Whether you need a full renovation or a targeted upgrade,
            we deliver craftsmanship you can trust for decades.
          </p>
        </div>

        <div
          className={`mt-16 grid gap-px bg-white/5 ${balancedGridCols(2, 'sm')} ${balancedGridCols(3, 'lg')}`}
        >
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`group relative overflow-hidden p-8 transition-colors ${balancedGridSpan(i, services.length, 2, 'sm')} ${balancedGridSpan(i, services.length, 3, 'lg')} ${
                service.accent === 'wood'
                  ? 'bg-charcoal hover:bg-oak/20'
                  : 'bg-steel hover:bg-graphite'
              }`}
            >
              <div
                className={`absolute top-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full ${
                  service.accent === 'wood' ? 'bg-brass' : 'bg-cream/30'
                }`}
              />
              <span className="text-[10px] uppercase tracking-[0.25em] text-cream/35">
                {service.accent === 'wood' ? 'Artisan' : 'Precision'}
              </span>
              <h3 className="mt-3 font-display text-2xl text-cream">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/55">
                {service.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-brass transition-colors hover:text-brass-light"
              >
                Inquire
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
