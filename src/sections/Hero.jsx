export default function Hero() {
  const waves = Array.from({ length: 18 }, (_, i) => {
    const y = 100 + i * 42
    const amp = 40 + (i % 4) * 25
    const shift = (i % 3) * 80
    return `M0,${y} C200,${y - amp + shift} 400,${y + amp} 600,${y - amp * 0.5} S1000,${y + amp * 0.7} 1440,${y - amp + shift * 0.3}`
  })

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '0 4rem' }}>

      {/* Vagues en fond */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        {waves.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#ffffff" strokeWidth="0.4" opacity={0.08 + (i % 5) * 0.04} />
        ))}
      </svg>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '620px' }}>

        <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#888', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-block', width: '24px', height: '0.5px', background: '#888' }}></span>
          Bachelor Informatique
        </div>

        <h1 style={{ fontSize: 'clamp(48px, 5.5vw, 76px)', fontWeight: '300', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#f5f5f5', margin: '0', fontFamily: 'DM Sans, sans-serif' }}>
          Gaspard<br />
          <strong style={{ fontWeight: '500' }}>Grignet Le Perron</strong>
        </h1>

        <div style={{ display: 'flex', gap: '0.75rem', margin: '2rem 0', flexWrap: 'wrap' }}>
          {['Stage · 2 à 3 mois', 'Alternance · 12 mois'].map(badge => (
            <span key={badge} style={{
              fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.06em',
              padding: '0.6rem 1.25rem', border: '0.5px solid #e8e8e8', color: '#e8e8e8'
            }}>{badge}</span>
          ))}
        </div>
        
        <p style={{ fontSize: '16px', color: '#aaa', lineHeight: '1.8', maxWidth: '500px', fontWeight: '300', fontFamily: 'DM Sans, sans-serif', marginBottom: '2.5rem' }}>
          Je recherche activement une entreprise pour{' '}
          <span style={{ color: '#e0e0e0' }}>apprendre, contribuer</span> et{' '}
          <span style={{ color: '#e0e0e0' }}>grandir</span> que ce soit en stage ou en alternance.
          <br /><br />
          Rigoureux, et motivé je souhaite m'investir pour atteindre les objectifs communs.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3.5rem' }}>
            <a href="#contact" style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', letterSpacing: '0.06em', padding: '0.85rem 1.75rem', background: '#f5f5f5', color: '#0a0a0a', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
              Me contacter
              </a>
              <a href="/CV_Gaspard_Grignet_Le_Perron.pdf" download
              style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', letterSpacing: '0.06em', padding: '0.85rem 1.75rem', background: 'transparent', color: '#aaa', border: '0.5px solid #555', cursor: 'pointer', textDecoration: 'none' }}
              onMouseEnter={e => { e.target.style.color = '#e8e8e8'; e.target.style.borderColor = '#e8e8e8' }}
              onMouseLeave={e => { e.target.style.color = '#aaa'; e.target.style.borderColor = '#555' }}>
                Télécharger le CV
              </a>
            </div>

        <div style={{ height: '0.5px', background: '#2a2a2a', marginBottom: '1.5rem' }}></div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {['Python', 'TypeScript', 'JavaScript', 'React', 'GitHub', 'Power BI'].map(skill => (
            <span key={skill} style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#ffffff', letterSpacing: '0.08em' }}>{skill}</span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#5bc8a8', fontFamily: 'Space Mono, monospace', letterSpacing: '0.04em' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5bc8a8', display: 'inline-block' }}></span>
          Disponible dès maintenant
        </div>

      </div>
    </section>
  )
}