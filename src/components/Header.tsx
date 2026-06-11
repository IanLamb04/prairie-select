import { useEffect, useState } from 'react'
import logo from '../assets/prairie-select-logo.png'

const navLinks = [
  { label: 'Craft', href: '#craft' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavBar = () => {
      const currentScrollY = window.scrollY;

      console.log(window.scrollY);

      if (currentScrollY > lastScrollY){
        setIsNavVisible(false); 
        setIsMobileMenuOpen(false);
      }
      else
        setIsNavVisible(true);

      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", controlNavBar);

    return () => window.removeEventListener("scroll", controlNavBar);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-steel transition-transform duration-200 ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className="mt-0 flex items-center justify-between rounded-sm px-5 py-3">
          <a href="#" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-brass/40 bg-charcoal">
              <img src={logo} alt="Prairie Select" className="font-display text-lg font-semibold text-brass" />
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

          <ul className="hidden items-center gap-8 nav:flex">
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
            className="hidden border border-brass/60 bg-brass/10 px-5 py-2 text-sm font-medium tracking-wide text-brass-light transition-colors hover:bg-brass/20 nav:inline-block"
          >
            Request a Quote
          </a>

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 nav:hidden"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block h-px w-6 bg-cream transition-transform ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-transform ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="glass-panel metal-border mt-2 rounded-sm p-4 nav:hidden mb-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-sm tracking-wide text-cream/80"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="mt-2 block border border-brass/60 bg-brass/10 px-5 py-2.5 text-center text-sm font-medium text-brass-light"
                  onClick={() => setIsMobileMenuOpen(false)}
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
