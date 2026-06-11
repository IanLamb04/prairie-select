const badges = [
  'BBB Accredited',
  'James Hardie Certified',
  'LP Preferred Contractor',
  'Google Guaranteed',
  'VSI Vinyl Certified',
]

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-steel">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-cream/50"
            >
              <span className="h-1 w-1 rounded-full bg-brass" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
