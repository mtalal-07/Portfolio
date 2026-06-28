export default function Skills() {
  const skills = [
    {
      category: 'FRONTEND',
      number: '01',
      tech: 'React · Next.js · TypeScript · Tailwind CSS · Vue.js',
    },
    {
      category: 'BACKEND',
      number: '02',
      tech: 'Node.js · Express · Python · FastAPI · WebSockets · REST APIs',
    },
    {
      category: 'DATA & AI',
      number: '03',
      tech: 'MongoDB · PostgreSQL · Redis · TensorFlow · Scikit-learn · NLP',
    },
    {
      category: 'CLOUD & DEVOPS',
      number: '04',
      tech: 'AWS · Docker · GitHub Actions · CI/CD · Firebase · Serverless',
    },
  ]

  return (
    <section className="px-6 md:px-16 lg:px-20 py-32 md:py-40 max-w-[1440px] mx-auto" id="skills">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 reveal-on-scroll">
        <div className="md:col-span-4">
          <span style={{ fontFamily: "'Syne', system-ui", fontSize: '120px', fontWeight: 400, lineHeight: 1, opacity: 0.25, marginBottom: '20px' }} className="block">04</span>
          <p className="mt-4 text-gray-muted uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500 }}>Technical arsenal</p>
        </div>
        <div className="md:col-span-8">
          <h2 style={{ fontFamily: "'Syne', system-ui", fontSize: '64px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Tools &amp; technologies for <br />
            <span className="italic text-primary-fixed">building at scale.</span>
          </h2>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="border-t border-outline-variant divide-y divide-outline-variant">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-16 hover:bg-surface-elevated transition-colors px-4 md:px-0 border-b border-outline-variant last:border-b-0"
          >
            <span className="text-gray-muted uppercase flex-shrink-0" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 500, minWidth: 'fit-content' }}>
              {skill.number} · {skill.category}
            </span>
            <h3 className="text-on-surface group-hover:text-primary-fixed transition-colors flex-1 text-xl md:text-3xl" style={{ fontFamily: "'Syne', system-ui", fontSize: 'clamp(16px, 5vw, 32px)', fontWeight: 700, letterSpacing: '-0.01em' }}>
              {skill.tech}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}
