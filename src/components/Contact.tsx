export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass">
              Get in touch
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-cream sm:text-5xl">
              Ready to transform
              <br />
              your home&apos;s exterior?
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-cream/60">
              Whether it&apos;s a complete renovation or a focused upgrade, we&apos;ll provide
              a detailed quote with no surprises. Contact us for your free consultation.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:+12047835527"
                className="group flex items-center gap-4 text-cream/80 transition-colors hover:text-brass-light"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-white/10 bg-steel transition-colors group-hover:border-brass/40">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-cream/40">Phone</span>
                  <span className="text-lg">(204) 783-5527</span>
                </div>
              </a>

              <a
                href="mailto:info@prairieselect.ca"
                className="group flex items-center gap-4 text-cream/80 transition-colors hover:text-brass-light"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-white/10 bg-steel transition-colors group-hover:border-brass/40">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-cream/40">Email</span>
                  <span className="text-lg">info@prairieselect.ca</span>
                </div>
              </a>
            </div>
          </div>

          <form
            className="glass-panel metal-border space-y-5 p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-wider text-cream/45">
                  Name
                </span>
                <input
                  type="text"
                  className="w-full border border-white/10 bg-steel/50 px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-brass/50"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-wider text-cream/45">
                  Phone
                </span>
                <input
                  type="tel"
                  className="w-full border border-white/10 bg-steel/50 px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-brass/50"
                  placeholder="(204) 555-0100"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-wider text-cream/45">
                Email
              </span>
              <input
                type="email"
                className="w-full border border-white/10 bg-steel/50 px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-brass/50"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-wider text-cream/45">
                Project details
              </span>
              <textarea
                rows={4}
                className="w-full resize-none border border-white/10 bg-steel/50 px-4 py-3 text-sm text-cream outline-none transition-colors focus:border-brass/50"
                placeholder="Tell us about your project..."
              />
            </label>
            <button
              type="submit"
              className="w-full border border-brass bg-brass py-3.5 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-brass-light"
            >
              Request Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
