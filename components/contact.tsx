'use client'

export default function Contact() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section
      className="px-6 md:px-16 lg:px-20 py-32 md:py-40 bg-primary-container text-background min-h-[819px] flex flex-col justify-center"
      id="contact"
    >
      <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
        <span style={{ fontFamily: "'Syne', system-ui", fontSize: '120px', fontWeight: 400, lineHeight: 1, opacity: 0.25 }} className="block text-background">06</span>
        <p className="text-background/80 mt-4 uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500 }}>
          Let&apos;s make something matter
        </p>
        <h2 className="mt-8 mb-16 leading-tight" style={{ fontFamily: "'Syne', system-ui", fontSize: '92px', fontWeight: 700, letterSpacing: '-0.02em' }}>
          Have an idea <br />
          <span className="italic">worth building?</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 border-t border-background/30 pt-12">
          <a
            href="mailto:muhammadtalal089@gmail.com"
            className="border-b-2 border-background hover:border-b-4 transition-all pb-2"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '18px', fontWeight: 500, textDecoration: 'none' }}
          >
            muhammadtalal089@gmail.com <span className="inline-block ml-2">↗</span>
          </a>
          <div className="text-right space-y-1">
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', opacity: 0.9, letterSpacing: '0.05em' }}>
              Based in Faisalabad, Pakistan
            </p>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 500, textTransform: 'uppercase', opacity: 0.9, letterSpacing: '0.05em' }}>
              Open to global collaboration
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto w-full mt-16 pt-8 flex justify-between items-center">
        <button
          onClick={handleBackToTop}
          className="flex items-center gap-2 uppercase tracking-widest hover:translate-y-[-2px] transition-transform bg-none border-none cursor-pointer p-0 text-background"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 600 }}
        >
          Back to top
          <span className="material-symbols-outlined text-lg">north</span>
        </button>
      </div>
    </section>
  )
}
