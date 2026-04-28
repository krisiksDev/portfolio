export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.5rem 4rem',
      borderBottom: '0.5px solid #222',
    }}>
      <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '13px', color: '#e8e8e8', letterSpacing: '0.08em' }}>
        Gaspard Grignet Le Perron
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {['À propos', 'Projets', 'Expériences', 'Contact'].map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} style={{
            fontSize: '13px', color: '#e8e8e8', textDecoration: 'none', letterSpacing: '0.08em'
          }}>{link}</a>
          ))}
      </div>
    </nav>
  )
}