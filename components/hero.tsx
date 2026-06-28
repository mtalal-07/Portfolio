export default function Hero() {
  return (
    <>
      {/* Section 01: Hero */}
      <section className="px-6 md:px-16 lg:px-20 min-h-[921px] flex flex-col justify-end pb-20" id="hero">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-20 items-start">
          <div className="md:col-span-1 border-t border-outline-variant pt-4">
            <span className="block" style={{ fontFamily: "'Syne', system-ui", fontSize: '120px', fontWeight: 400, lineHeight: 1, opacity: 0.25 }}>01</span>
          </div>
          <div className="md:col-span-2 pt-4 border-t border-outline-variant">
            <p className="font-label-mono-sm text-label-mono-sm text-primary-fixed mb-4">Full Stack Developer · Faisalabad, PK</p>
            <h1 className="mb-8 max-w-4xl leading-tight" style={{ fontFamily: "'Syne', system-ui", fontSize: 'clamp(64px, 10vw, 96px)', fontWeight: 700, letterSpacing: '-0.04em' }}>
              Building software <br />
              <span className="italic text-primary-fixed">with gravity.</span>
            </h1>
            <p className="text-on-surface-variant max-w-2xl mb-12" style={{ fontFamily: "'Inter', system-ui", fontSize: '18px', fontWeight: 400, lineHeight: 1.6 }}>
              I&apos;m Muhammad Talal, a software engineer and full-stack developer who transforms complex problems into reliable, scalable products.
            </p>
            <div className="flex flex-wrap items-center gap-10">
              <a
                href="#work"
                className="text-primary hover:text-primary-fixed transition-colors"
                style={{ fontFamily: "'Syne', system-ui", fontSize: '18px', fontWeight: 700, textDecoration: 'underline', textDecorationColor: 'currentColor', textUnderlineOffset: '4px' }}
              >
                Explore selected work
              </a>
              <a
                href="mailto:muhammadtalal089@gmail.com"
                className="text-primary hover:text-primary-fixed transition-colors"
                style={{ fontFamily: "'Syne', system-ui", fontSize: '18px', fontWeight: 700, textDecoration: 'underline', textDecorationColor: 'currentColor', textUnderlineOffset: '4px' }}
              >
                muhammadtalal089@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Stats Ticker */}
        <div className="mt-24 border-t border-outline-variant pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto w-full">
          <div className="text-center">
            <span className="text-primary-fixed block mb-2" style={{ fontFamily: "'Syne', system-ui", fontSize: '40px', fontWeight: 700 }}>5+</span>
            <span className="text-gray-muted uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 500 }}>
              Production apps
            </span>
          </div>
          <div className="text-center">
            <span className="text-primary-fixed block mb-2" style={{ fontFamily: "'Syne', system-ui", fontSize: '40px', fontWeight: 700 }}>10+</span>
            <span className="text-gray-muted uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 500 }}>
              Clients
            </span>
          </div>
          <div className="text-center">
            <span className="text-primary-fixed block mb-2" style={{ fontFamily: "'Syne', system-ui", fontSize: '40px', fontWeight: 700 }}>5+</span>
            <span className="text-gray-muted uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 500 }}>
              Countries
            </span>
          </div>
          <div className="text-center">
            <span className="text-primary-fixed block mb-2" style={{ fontFamily: "'Syne', system-ui", fontSize: '40px', fontWeight: 700 }}>3.29</span>
            <span className="text-gray-muted uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 500 }}>
              CGPA / 4.0
            </span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full overflow-hidden bg-surface-container py-10 border-y border-outline-variant">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="font-label-mono-lg text-label-mono-lg px-8 text-on-surface-variant">
            BUILDING AI SOLUTIONS <span className="text-primary-fixed">•</span> LLM APPLICATIONS{' '}
            <span className="text-primary-fixed">•</span> RAG SYSTEMS <span className="text-primary-fixed">•</span>{' '}
            WEB DEVELOPMENT <span className="text-primary-fixed">•</span> MOBILE APPS{' '}
            <span className="text-primary-fixed">•</span> CLOUD ARCHITECTURE <span className="text-primary-fixed">•</span>{' '}
            CLEAN CODE <span className="text-primary-fixed">•</span> USER-CENTERED DESIGN{' '}
            <span className="text-primary-fixed">•</span> INNOVATION <span className="text-primary-fixed">•</span>
          </span>
          <span className="font-label-mono-lg text-label-mono-lg px-8 text-on-surface-variant">
            BUILDING AI SOLUTIONS <span className="text-primary-fixed">•</span> LLM APPLICATIONS{' '}
            <span className="text-primary-fixed">•</span> RAG SYSTEMS <span className="text-primary-fixed">•</span>{' '}
            WEB DEVELOPMENT <span className="text-primary-fixed">•</span> MOBILE APPS{' '}
            <span className="text-primary-fixed">•</span> CLOUD ARCHITECTURE <span className="text-primary-fixed">•</span>{' '}
            CLEAN CODE <span className="text-primary-fixed">•</span> USER-CENTERED DESIGN{' '}
            <span className="text-primary-fixed">•</span> INNOVATION <span className="text-primary-fixed">•</span>
          </span>
        </div>
      </div>
    </>
  )
}
