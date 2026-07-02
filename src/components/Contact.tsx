const phoneNumber = "12043804404";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-12 flex-col lg:flex-row place-content-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brass">
              Get in touch
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium text-cream">
              Ready to transform your home&apos;s exterior?
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-cream/60">
              Whether it&apos;s a complete renovation or a focused upgrade, we&apos;ll provide
              a detailed quote with no surprises. Contact us for your free consultation.
            </p>
          </div>
          <div className="flex flex-col mt-7 space-y-6">
            <a href={`tel:+${phoneNumber}`} className="group flex lg:flex-row-reverse items-center gap-4 text-cream/80 transition-colors hover:text-brass-light">
              <span className="flex h-12 w-12 items-center justify-center border border-white/10 bg-steel transition-colors group-hover:border-brass/40">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <div>
                <span className="block text-xs lg:text-right uppercase tracking-wider text-cream/40">Phone</span>
                <span className="text-lg">{`(${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`}</span>
              </div>
            </a>
            <a href="mailto:info@prairieselect.com" className="group flex lg:flex-row-reverse items-center gap-4 text-cream/80 transition-colors hover:text-brass-light">
              <span className="flex h-12 w-12 items-center justify-center border border-white/10 bg-steel transition-colors group-hover:border-brass/40">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <div>
                <span className="block lg:text-right text-xs uppercase tracking-wider text-cream/40">Email</span>
                <span className="text-lg">info@prairieselect.com</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
