import { balancedGridCols, balancedGridSpan } from '../utils/grid'

const testimonials = [
  {
    quote:
      'The crew was professional, the cleanup impeccable, and they took genuine pride in a job well done. Our eavestroughs look flawless.',
    author: 'Gilles P.',
    location: 'Winnipeg, MB',
  },
  {
    quote:
      'Very happy with my experience with Prairie Select Exteriors. They came out to my place and did my gutters, fascia, and downspouts all in a few short hours. The results look great and they had great customer service. They had an eye for detail and cared enough to do quality work. Thanks guys!',
    author: 'Carl Henry',
    location: 'Landmark, MB',
  },
  {
    quote:
      'Attention to detail was impeccable. It looks like we have an entirely new house — warm, modern, and perfectly finished.',
    author: 'Sue K.',
    location: 'Winnipeg, MB',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass">
            Testimonials
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium text-cream sm:text-5xl">
            Trusted by homeowners
          </h2>
        </div>

        <div className={`mt-16 grid gap-6 ${balancedGridCols(3, 'lg')}`}>
          {testimonials.map((t, i) => (
            <figure
              key={t.author}
              className={`metal-border flex flex-col justify-between p-8 ${balancedGridSpan(i, testimonials.length, 3, 'lg')} ${
                i === 1 ? 'glass-panel lg:-mt-4 lg:mb-4' : 'bg-steel/50'
              }`}
            >
              <div>
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-brass text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="font-display text-lg leading-relaxed text-cream/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-white/5 pt-6">
                <span className="block text-sm font-medium text-cream">{t.author}</span>
                <span className="text-xs text-cream/45">{t.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
