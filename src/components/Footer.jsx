import React, { useState } from 'react';

export default function Footer({ onOpenModal }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer style={{ background: '#F5F5F7', borderTop: '1px solid rgba(0, 0, 0, 0.08)', paddingTop: '4rem', paddingBottom: '3rem', color: '#6E6E73' }}>
      <div className="container">
        {/* Top Disclaimer Paragraph */}
        <div style={{ fontSize: '0.72rem', lineHeight: 1.6, marginBottom: '2rem', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', paddingBottom: '2rem' }}>
          <p style={{ marginBottom: '0.6rem' }}>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>© {new Date().getFullYear()} AVARA Capital SA. All rights reserved.</p>
        </div>

        {/* Footer Navigation Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
            fontSize: '0.78rem',
          }}
        >
          <div>
            <h4 style={{ color: '#1D1D1F', fontSize: '0.78rem', fontWeight: '600', marginBottom: '0.8rem' }}>
              Placeholder Column 1
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#overview" style={footerLinkStyle}>Placeholder Link 1</a></li>
              <li><a href="#pillars" style={footerLinkStyle}>Placeholder Link 2</a></li>
              <li><a href="#pillars" style={footerLinkStyle}>Placeholder Link 3</a></li>
              <li><a href="#pillars" style={footerLinkStyle}>Placeholder Link 4</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#1D1D1F', fontSize: '0.78rem', fontWeight: '600', marginBottom: '0.8rem' }}>
              Placeholder Column 2
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><button onClick={() => onOpenModal('portal')} style={{ ...footerLinkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Placeholder Portal</button></li>
              <li><button onClick={() => onOpenModal('access')} style={{ ...footerLinkStyle, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Placeholder Access</button></li>
              <li><a href="#calculator" style={footerLinkStyle}>Placeholder Calculator</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#1D1D1F', fontSize: '0.78rem', fontWeight: '600', marginBottom: '0.8rem' }}>
              Placeholder Column 3
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#governance" style={footerLinkStyle}>Placeholder Compliance</a></li>
              <li><a href="#governance" style={footerLinkStyle}>Placeholder Custody</a></li>
              <li><a href="#governance" style={footerLinkStyle}>Placeholder Audits</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#1D1D1F', fontSize: '0.78rem', fontWeight: '600', marginBottom: '0.8rem' }}>
              Placeholder Newsletter
            </h4>
            <p style={{ fontSize: '0.75rem', marginBottom: '0.8rem', lineHeight: 1.4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {subscribed ? (
              <span style={{ color: 'var(--gold-dark)', fontWeight: '600', fontSize: '0.75rem' }}>✓ Subscribed.</span>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.4rem' }}>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(0,0,0,0.1)',
                    borderRadius: 'var(--radius-pill)',
                    padding: '0.4rem 0.8rem',
                    fontSize: '0.75rem',
                    outline: 'none',
                    width: '130px',
                  }}
                />
                <button type="submit" className="btn-apple-gold" style={{ padding: '0.4rem 0.8rem', fontSize: '0.72rem' }}>
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal links */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1.5rem', fontSize: '0.72rem' }}>
          <div>Global Locations: Zurich • New York • Singapore</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Placeholder Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Placeholder Terms</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Placeholder Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: '#6E6E73',
  textDecoration: 'none',
  fontSize: '0.75rem',
  transition: 'color 0.2s ease',
};
