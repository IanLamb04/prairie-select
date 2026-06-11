export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-brass/40 bg-ink">
              <span className="font-display text-sm font-semibold text-brass">P</span>
            </span>
            <div className="leading-tight">
              <span className="font-display text-lg text-cream">Prairie Select</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-cream/40">
                Exteriors
              </span>
            </div>
          </div>

          <p className="text-center text-xs text-cream/35">
            © {new Date().getFullYear()} Prairie Select. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-cream/40">
            <a href="#" className="transition-colors hover:text-brass">
              Privacy Policy
            </a>
            <a href="#contact" className="transition-colors hover:text-brass">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
