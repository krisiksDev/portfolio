import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projets" style={{ padding: '6rem 4rem', borderTop: '0.5px solid #1a1a1a' }}>

      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#888', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '0.5px', background: '#888' }}></span>
        Projets
      </div>

      <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', lineHeight: '1.15', letterSpacing: '-0.02em', color: '#f5f5f5', margin: '0 0 3rem', fontFamily: 'DM Sans, sans-serif' }}>
        Mes <strong style={{ fontWeight: '500' }}>réalisations.</strong>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '960px' }}>
        {projects.map((project, i) => (
          <div key={i} style={{
            border: '0.5px solid ' + (project.wip ? '#1e1e1e' : '#2a2a2a'),
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            opacity: project.wip ? 0.4 : 1,
            transition: 'border-color 0.2s',
            cursor: project.link ? 'pointer' : 'default',
          }}
            onMouseEnter={e => { if (!project.wip) e.currentTarget.style.borderColor = '#555' }}
            onMouseLeave={e => { if (!project.wip) e.currentTarget.style.borderColor = '#2a2a2a' }}
            onClick={() => { if (project.link) window.open(project.link, '_blank') }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: '500', color: '#f5f5f5' }}>{project.title}</span>
              {project.link && <span style={{ color: '#555', fontSize: '12px' }}>↗</span>}
              {project.wip && <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', color: '#555', letterSpacing: '0.08em' }}>WIP</span>}
            </div>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#777', lineHeight: '1.7', fontWeight: '300', margin: 0 }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#555', letterSpacing: '0.06em' }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}