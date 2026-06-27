export default function Footer() {
  return (
    <footer className="w-full py-20 px-8 flex flex-col md:flex-row justify-between items-center gap-2 max-w-screen-2xl mx-auto border-t border-outline-variant">
      <div className="flex flex-col items-center md:items-start">
        <span className="text-primary" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}>TALAL/DEV</span>
        <p className="text-gray-muted mt-2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 400, textTransform: 'uppercase' }}>
          © 2026 MUHAMMAD TALAL · BUILT WITH PRECISION
        </p>
      </div>
      <div className="flex gap-8">
        <a
          href="https://linkedin.com/in/muhammadtalal07"
          className="text-gray-muted hover:text-primary transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500, textTransform: 'uppercase' }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/mtalal-07"
          className="text-gray-muted hover:text-primary transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500, textTransform: 'uppercase' }}
        >
          GitHub
        </a>
        <a
          href="mailto:muhammadtalal089@gmail.com"
          className="text-gray-muted hover:text-primary transition-colors"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500, textTransform: 'uppercase' }}
        >
          Email
        </a>
      </div>
      <div className="text-center md:text-right">
        <p style={{ fontFamily: "'Syne', system-ui", fontSize: '14px', fontWeight: 400, color: '#e4e2de' }}>Designed with intent. Built with care.</p>
      </div>
    </footer>
  )
}
