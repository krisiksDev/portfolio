import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="expériences" style={{ padding: '6rem 4rem', borderTop: '0.5px solid #1a1a1a' }}>

      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#888', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '0.5px', background: '#888' }}></span>
        Expériences
      </div>

      <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', lineHeight: '1.15', letterSpacing: '-0.02em', color: '#f5f5f5', margin: '0 0 4rem', fontFamily: 'DM Sans, sans-serif' }}>
        Mon <strong style={{ fontWeight: '500' }}>parcours.</strong>
      </h2>

      <div style={{ maxWidth: '760px', display: 'flex', flexDirection: 'column' }}>
        {experiences.map((xp, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '2rem', paddingBottom: '2.5rem', marginBottom: '2.5rem', borderBottom: i < experiences.length - 1 ? '0.5px solid #838383' : 'none' }}>

            {/* Colonne gauche */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '2px' }}>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#ffffff', letterSpacing: '0.08em' }}>
                {xp.date}
              </span>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: xp.type === 'work' ? '#5bc8a8' : '#c4c4c4', marginTop: '2px' }}>
                {xp.type === 'work' ? '● Expérience' : '○ Formation'}
              </span>
            </div>

            {/* Colonne droite */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: '500', color: '#f5f5f5' }}>{xp.title}</span>
              <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#666', letterSpacing: '0.04em' }}>{xp.company}</span>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#888', lineHeight: '1.75', fontWeight: '300', margin: '0.25rem 0 0' }}>
                {xp.description}
              </p>
              {xp.tags.length > 0 && (
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  {xp.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#ffffff', border: '0.5px solid #858585', padding: '0.25rem 0.6rem', letterSpacing: '0.06em' }}>{tag}</span>
                  ))}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}