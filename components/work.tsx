export default function Work() {
  const projects = [
    {
      number: '01',
      category: 'CIRCUIT BOARD DETECTION',
      title: 'Circuit Board Detection',
      tags: ['Computer Vision', 'PyTorch', 'OpenCV', 'ONNX'],
      description: 'Real-time YOLO v5 computer vision detecting 15+ component types at 50 FPS with ~92% accuracy.',
    },
    {
      number: '02',
      category: 'NLP RESEARCH',
      title: 'BiEncoder Optimization',
      tags: ['NLP', 'PyTorch', 'Hugging Face', 'Dense Retrieval'],
      description: 'Embedding dimension research across 2,800 queries showing ~300% Recall@500 improvement with 4096-dim vectors.',
    },
    {
      number: '03',
      category: 'AI INTERVIEW SYSTEM',
      title: 'AI Interview Conduct',
      tags: ['Flask', 'OpenCV', 'Gemini API', 'Speech-to-Text'],
      description: 'Real-time proctoring with face detection, eye tracking, and Gemini 2.5 Flash–powered question generation and evaluation.',
    },
    {
      number: '04',
      category: 'SENTIMENT ANALYSIS',
      title: 'Sentiment Classification',
      tags: ['TensorFlow', 'Keras', 'NLTK', 'LSTM'],
      description: 'Bidirectional LSTM model classifying social media text with ~85% accuracy, featuring full NLTK preprocessing pipeline.',
    },
    {
      number: '05',
      category: 'BUSINESS INTELLIGENCE',
      title: 'Sales Intelligence & Business Analytics Dashboard',
      tags: ['Power BI', 'DAX', 'Power Query', 'SQL Server'],
      description: '12-page Power BI dashboard for Motorola tracking 769M in revenue, 19K units sold, and 4K transactions with real-time KPIs.',
    },
  ]

  return (
    <section className="px-6 md:px-16 lg:px-20 py-32 md:py-40 max-w-[1440px] mx-auto" id="work">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 reveal-on-scroll">
        <div className="md:col-span-4">
          <span style={{ fontFamily: "'Syne', system-ui", fontSize: '120px', fontWeight: 400, lineHeight: 1, opacity: 0.25, marginBottom: '20px' }} className="block">03</span>
          <p className="mt-4 text-gray-muted uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 500 }}>Selected work</p>
        </div>
        <div className="md:col-span-8">
          <h2 style={{ fontFamily: "'Syne', system-ui", fontSize: '64px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            From <span className="italic text-primary-fixed">concept</span> to <br />
            production-grade <span className="italic text-primary-fixed">systems.</span>
          </h2>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-outline-variant">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-8 group hover:bg-surface-elevated transition-colors cursor-pointer ${
              index < 4 ? 'border-b md:border-r border-outline-variant' : ''
            } ${index === 1 || index === 3 ? 'md:border-r' : ''} ${index === 4 ? 'md:col-span-2' : ''}`}
          >
            <div className="mb-6 flex items-start justify-between">
              <span style={{ color: '#cef019', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {project.number} · {project.category}
              </span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary-fixed transition-colors">
                arrow_outward
              </span>
            </div>
            <h3 className="mb-4 group-hover:text-primary-fixed transition-colors" style={{ fontFamily: "'Syne', system-ui", fontSize: '36px', fontWeight: 600, letterSpacing: '-0.01em' }}>
              {project.title}
            </h3>
            <p className="text-on-surface-variant mb-6" style={{ fontFamily: "'Inter', system-ui", fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-2 border border-outline-variant text-on-surface-variant"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 400 }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
