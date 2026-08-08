import React from 'react';

export default function InstitutionalTrust() {
  return (
    <section id="governance" className="section-padding" style={{ background: '#F5F5F7' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--gold-dark)', marginBottom: '0.4rem' }}>
            Placeholder Governance.
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: '700', color: '#1D1D1F', letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
            Placeholder Trust Title.
          </h2>
          <p style={{ color: '#6E6E73', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* 4 Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <TrustCard title="Placeholder Title 1." subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." placeholder="[ PLACEHOLDER CERTIFICATE 1 ]" />
          <TrustCard title="Placeholder Title 2." subtitle="Sed do eiusmod tempor incididunt ut labore et dolore." placeholder="[ PLACEHOLDER CERTIFICATE 2 ]" />
          <TrustCard title="Placeholder Title 3." subtitle="Ut enim ad minim veniam, quis nostrud exercitation." placeholder="[ PLACEHOLDER CERTIFICATE 3 ]" />
          <TrustCard title="Placeholder Title 4." subtitle="Duis aute irure dolor in reprehenderit in voluptate." placeholder="[ PLACEHOLDER CERTIFICATE 4 ]" />
        </div>
      </div>
    </section>
  );
}

function TrustCard({ title, subtitle, placeholder }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '18px',
        padding: '2rem 1.6rem',
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
      }}
    >
      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1D1D1F', marginBottom: '0.3rem' }}>
          {title}
        </h3>
        <p style={{ color: '#6E6E73', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.2rem' }}>
          {subtitle}
        </p>
      </div>

      <div className="placeholder-asset" style={{ background: '#F5F5F7', padding: '1rem', fontSize: '0.75rem' }}>
        {placeholder}
      </div>
    </div>
  );
}
