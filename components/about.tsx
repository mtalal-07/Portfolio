export default function About() {
  return (
    <section className="px-6 md:px-16 lg:px-20 py-32 md:py-40 max-w-[1440px] mx-auto" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 reveal-on-scroll">
        <div className="md:col-span-4">
          <span className="block" style={{ fontFamily: "'Syne', system-ui", fontSize: '120px', fontWeight: 400, lineHeight: 1, opacity: 0.25 }}>02</span>
          <p className="font-label-mono-sm text-label-mono-sm mt-4 text-gray-muted uppercase">The short version</p>
        </div>
        <div className="md:col-span-8">
          <h2 className="mb-10" style={{ fontFamily: "'Syne', system-ui", fontSize: 'clamp(48px, 8vw, 64px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Curious by nature. <br />
            <span className="italic text-primary-fixed">Deliberate</span> by design.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <p className="text-on-surface-variant" style={{ fontFamily: "'Inter', system-ui", fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
              I build full-stack and AI-powered applications with a bias for clarity, performance, and measurable
              outcomes. My work spans CRM systems, logistics platforms, analytics dashboards, collaborative tools, and
              intelligent automation.
            </p>
            <p className="text-on-surface-variant" style={{ fontFamily: "'Inter', system-ui", fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
              I&apos;m currently studying BS Artificial Intelligence at NFC Institute of Engineering and Fertilizer Research Faisalabad while working with clients
              across the US, UK, UAE, Canada, and Europe.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-block border-b-2 border-primary-fixed pb-2 font-label-mono-lg text-label-mono-lg text-primary hover:text-primary-fixed transition-all"
          >
            Let&apos;s build something useful ↗
          </a>
        </div>
      </div>

      {/* Feature Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-20 md:mt-32 border-t border-outline-variant">
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-outline-variant group hover:bg-surface-elevated transition-colors">
          <span className="text-primary-fixed block mb-6" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500 }}>01</span>
          <h3 className="mb-4" style={{ fontFamily: "'Syne', system-ui", fontSize: '28px', fontWeight: 600, letterSpacing: '-0.01em' }}>AI &amp; Machine Learning</h3>
          <p className="text-gray-muted" style={{ fontFamily: "'Inter', system-ui", fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
            Intelligent systems built with CNNs, RNNs, LSTMs, and transformer-based LLMs &mdash; from computer vision to NLP and generative AI with RAG and LangChain.
          </p>
        </div>
        <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-outline-variant group hover:bg-surface-elevated transition-colors">
          <span className="text-primary-fixed block mb-6" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500 }}>02</span>
          <h3 className="mb-4" style={{ fontFamily: "'Syne', system-ui", fontSize: '28px', fontWeight: 600, letterSpacing: '-0.01em' }}>Full-stack development</h3>
          <p className="text-gray-muted" style={{ fontFamily: "'Inter', system-ui", fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
            End-to-end web applications using React.js, Node.js, Flask, and Django &mdash; with clean REST APIs, responsive UIs, and maintainable code.
          </p>
        </div>
        <div className="p-8 group hover:bg-surface-elevated transition-colors">
          <span className="text-primary-fixed block mb-6" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500 }}>03</span>
          <h3 className="mb-4" style={{ fontFamily: "'Syne', system-ui", fontSize: '28px', fontWeight: 600, letterSpacing: '-0.01em' }}>Data &amp; analytics</h3>
          <p className="text-gray-muted" style={{ fontFamily: "'Inter', system-ui", fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
            Data pipelines, business intelligence dashboards, and database design using MySQL, MongoDB, Power BI, and DAX &mdash; turning raw data into decisions.
          </p>
        </div>
      </div>
    </section>
  )
}
