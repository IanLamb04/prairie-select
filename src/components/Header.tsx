import { useState } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Craft', href: '#craft' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="glass-panel metal-border mt-4 flex items-center justify-between rounded-sm px-5 py-3">
          <a href="#" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-brass/40 bg-charcoal">
              <span className="font-display text-lg font-semibold text-brass">P</span>
            </span>
            <div className="leading-tight">
              <span className="font-display text-xl font-medium tracking-wide text-cream">
                Prairie Select
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-cream/50">
                Exteriors
              </span>
            </div>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-wide text-cream/70 transition-colors hover:text-brass-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden border border-brass/60 bg-brass/10 px-5 py-2 text-sm font-medium tracking-wide text-brass-light transition-colors hover:bg-brass/20 md:inline-block"
          >
            Request a Quote
          </a>

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block h-px w-6 bg-cream transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-opacity ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </nav>

        {open && (
          <div className="glass-panel metal-border mt-2 rounded-sm p-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-sm tracking-wide text-cream/80"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="mt-2 block border border-brass/60 bg-brass/10 px-5 py-2.5 text-center text-sm font-medium text-brass-light"
                  onClick={() => setOpen(false)}
                >
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
