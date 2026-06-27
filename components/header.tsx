'use client'

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 bg-surface/80 backdrop-blur-md border-b border-outline-variant transition-transform"
      style={{ maxWidth: 'calc(100% - 0px)' }}
    >
      <a className="text-primary" href="/" style={{ fontFamily: "'Syne', system-ui", fontSize: '20px', fontWeight: 800, letterSpacing: '-0.05em', textTransform: 'uppercase' }}>
        TALAL/DEV
      </a>

      <nav className="hidden md:flex items-center gap-8">
        <button
          onClick={() => scrollToSection('about')}
          className="text-on-surface-variant hover:text-primary transition-all cursor-pointer bg-none border-none p-0"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500 }}
        >
          ABOUT
        </button>
        <button
          onClick={() => scrollToSection('work')}
          className="text-on-surface-variant hover:text-primary transition-all cursor-pointer bg-none border-none p-0"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500 }}
        >
          WORK
        </button>
        <button
          onClick={() => scrollToSection('journey')}
          className="text-on-surface-variant hover:text-primary transition-all cursor-pointer bg-none border-none p-0"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500 }}
        >
          JOURNEY
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-on-surface-variant hover:text-primary transition-all cursor-pointer bg-none border-none p-0"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500 }}
        >
          CONTACT
        </button>
      </nav>

      <a
        href="/Talal-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-primary text-background hover:bg-primary-container transition-colors"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 700, textTransform: 'uppercase' }}
      >
        Resume
      </a>
    </header>
  )
}
