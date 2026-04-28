export default function About() {
  const skills = ['Persévérant', 'Travail d\'équipe', 'Adaptabilité', 'Rigueur']
  const interests = [
    { label: 'E-Sports', detail: 'Supporter Karmine Corp' },
    { label: 'Formule 1', detail: 'Red Bull, Lucas Parle F1' },
    { label: 'Jeux vidéo', detail: 'League of Legends, RFT.gg' },
  ]

  return (
    <section id="à propos" style={{ padding: '6rem 4rem', borderTop: '0.5px solid #1a1a1a' }}>

      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#888', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '0.5px', background: '#888' }}></span>
        À propos
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '900px' }}>

        {/* Colonne gauche — texte */}
        <div>
          <h2 style={{ fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: '300', lineHeight: '1.15', letterSpacing: '-0.02em', color: '#f5f5f5', margin: '0 0 1.5rem', fontFamily: 'DM Sans, sans-serif' }}>
            Qui suis-<strong style={{ fontWeight: '500' }}>je ?</strong>
          </h2>
          <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.9', fontWeight: '300', fontFamily: 'DM Sans, sans-serif', marginBottom: '1.25rem' }}>
            Étudiant en Bachelor Informatique à l'école <span style={{ color: '#e0e0e0' }}>Enigma</span>, je suis passionné par le développement et l'automatisation.
          </p>
          <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.9', fontWeight: '300', fontFamily: 'DM Sans, sans-serif', marginBottom: '1.25rem' }}>
            Mon parcours m'a amené à travailler sur des <span style={{ color: '#e0e0e0' }}>RPA en Python</span> au Tribunal Judiciaire de Lille, où j'ai découvert des frameworks comme PyQt6, Selenium et Playwright.
          </p>
          <p style={{ fontSize: '15px', color: '#aaa', lineHeight: '1.9', fontWeight: '300', fontFamily: 'DM Sans, sans-serif' }}>
            Je parle <span style={{ color: '#e0e0e0' }}>français</span> nativement et <span style={{ color: '#e0e0e0' }}>anglais</span> à un niveau C1.
          </p>
        </div>

        {/* Colonne droite — soft skills + intérêts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* Soft skills */}
          <div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Soft skills</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {skills.map(s => (
                <span key={s} style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#e8e8e8', border: '0.5px solid #333', padding: '0.4rem 0.9rem', letterSpacing: '0.04em' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Centres d'intérêt */}
          <div>
            <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '10px', color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>Centres d'intérêt</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {interests.map(({ label, detail }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '0.5px solid #1a1a1a', paddingBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#e8e8e8', fontWeight: '400' }}>{label}</span>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#555', letterSpacing: '0.04em' }}>{detail}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}