export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 4rem', maxWidth: '620px' }}>

      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', color: '#888', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '0.5px', background: '#888' }}></span>
        Contact
      </div>

      <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: '300', lineHeight: '1.1', letterSpacing: '-0.02em', color: '#f5f5f5', margin: '0 0 1.5rem', fontFamily: 'DM Sans, sans-serif' }}>
        Travaillons<br /><strong style={{ fontWeight: '500' }}>ensemble.</strong>
      </h2>

      <p style={{ fontSize: '16px', color: '#aaa', lineHeight: '1.8', fontWeight: '300', fontFamily: 'DM Sans, sans-serif', marginBottom: '3rem' }}>
        Tu as un projet, une opportunité de stage ou d'alternance ?<br />
        N'hésite pas à me contacter directement.
      </p>

      {/* Email */}
      <a href="mailto:gaspardglp@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', fontFamily: 'Space Mono, monospace', fontSize: '14px', color: '#f5f5f5', textDecoration: 'none', marginBottom: '3rem', borderBottom: '0.5px solid #333', paddingBottom: '0.5rem' }}>
        gaspardglp@gmail.com
        <span style={{ fontSize: '10px', color: '#666' }}>↗</span>
      </a>

      {/* Liens */}
      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
        <a href="https://www.linkedin.com/in/gglp/" target="_blank" rel="noreferrer" style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', color: '#e8e8e8', textDecoration: 'none', letterSpacing: '0.06em', border: '0.5px solid #e8e8e8', padding: '0.6rem 1.25rem' }}
        onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.borderColor = '#fff' }}
        onMouseLeave={e => { e.target.style.color = '#e8e8e8'; e.target.style.borderColor = '#e8e8e8' }}>
            LinkedIn ↗
        </a>
        <a href="https://github.com/krisiksDev" target="_blank" rel="noreferrer" style={{ fontFamily: 'Space Mono, monospace', fontSize: '12px', color: '#e8e8e8', textDecoration: 'none', letterSpacing: '0.06em', border: '0.5px solid #e8e8e8', padding: '0.6rem 1.25rem' }}
        onMouseEnter={e => { e.target.style.color = '#fff'; e.target.style.borderColor = '#fff' }}
        onMouseLeave={e => { e.target.style.color = '#e8e8e8'; e.target.style.borderColor = '#e8e8e8' }}>
            GitHub ↗
        </a>
      </div>

    </section>
  )
}