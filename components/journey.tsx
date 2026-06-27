export default function Journey() {
  const milestones = [
    {
      dateRange: '2024 – PRESENT',
      title: 'BS Artificial Intelligence',
      organization: 'NFC Institute of Engineering and Fertilizer Research · Faisalabad',
      description: 'CGPA 3.29/4.0 · Artificial Intelligence Batch 2023.',
    },
    {
      dateRange: '2025 – PRESENT',
      title: 'Freelance AI Developer',
      organization: 'International Clients · Remote',
      description: 'Building full-stack applications and AI solutions for clients worldwide.',
    },
  ]

  return (
    <section className="px-6 md:px-16 lg:px-20 py-32 md:py-40 max-w-[1440px] mx-auto" id="journey">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 reveal-on-scroll items-start">
        <div className="md:col-span-4">
          <div style={{ fontFamily: "'Syne', system-ui", fontSize: '120px', fontWeight: 400, lineHeight: 1, opacity: 0.25, marginBottom: '20px' }}>05</div>
          <h2 style={{ fontFamily: "'Syne', system-ui", fontSize: '64px', fontWeight: 700, letterSpacing: '-0.02em' }}>The journey</h2>
        </div>
        <div className="md:col-span-8 flex items-center">
          <p style={{ fontFamily: "'Syne', system-ui", fontSize: '64px', fontWeight: 700, letterSpacing: '-0.01em', fontStyle: 'italic', color: '#cef019' }}>
            Learning fast. Shipping often.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 space-y-16">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-outline-variant"></div>

        {milestones.map((milestone, index) => (
          <div key={index} className="reveal-on-scroll relative">
            {/* Timeline marker */}
            <div className="absolute -left-[17px] top-1 w-4 h-4 bg-primary-fixed" style={{ width: '14px', height: '14px', backgroundColor: '#cef019' }}></div>

            {/* Date range */}
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', color: '#8f9379', textTransform: 'uppercase', marginBottom: '12px' }}>
              {milestone.dateRange}
            </div>

            {/* Title */}
            <h3 style={{ fontFamily: "'Syne', system-ui", fontSize: '32px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '8px' }}>
              {milestone.title}
            </h3>

            {/* Organization */}
            <div style={{ fontFamily: "'Inter', system-ui", fontSize: '18px', fontWeight: 400, color: '#e4e2de', marginBottom: '12px' }}>
              {milestone.organization}
            </div>

            {/* Description */}
            <p style={{ fontFamily: "'Inter', system-ui", fontSize: '16px', fontWeight: 400, lineHeight: 1.6, color: '#c6c9ad' }}>
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
