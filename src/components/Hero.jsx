import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero({ onOpenModal }) {
  return (
    <section
      id="overview"
      style={{
        paddingTop: '8rem',
        paddingBottom: '4rem',
        textAlign: 'center',
        background: '#FFFFFF',
      }}
    >
      <div className="container">
        {/* Eyebrow */}
        <div
          style={{
            fontSize: '0.9rem',
            fontWeight: '600',
            color: 'var(--gold-dark)',
            letterSpacing: '0.04em',
            marginBottom: '0.6rem',
          }}
        >
          AVARA Sovereign.
        </div>

        {/* Hero Title */}
        <h1
          style={{
            fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
            fontWeight: '700',
            letterSpacing: '-0.03em',
            color: '#1D1D1F',
            lineHeight: 1.08,
            marginBottom: '1rem',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Architecting Wealth. <br />
          <span className="gold-gradient-text">Unmatched Alpha.</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: '#6E6E73',
            maxWidth: '720px',
            margin: '0 auto 2rem auto',
            lineHeight: 1.45,
            fontWeight: '400',
          }}
        >
          Pro private equity, frontier venture, and quantitative yield strategies crafted for family offices and sovereign clients.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '3.5rem' }}>
          <button onClick={() => onOpenModal('access')} className="btn-apple-gold">
            Placeholder Action
          </button>
          <a
            href="#calculator"
            style={{
              color: '#06c',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.2rem',
            }}
          >
            Placeholder Link <ChevronRight size={16} />
          </a>
        </div>

        {/* Apple Style Placeholder Asset */}
        <div
          style={{
            background: 'linear-gradient(180deg, #F5F5F7 0%, #EBEBEF 100%)',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            padding: '3.5rem 2rem',
            maxWidth: '1000px',
            margin: '0 auto 4rem auto',
            boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
          }}
        >
          <div className="placeholder-asset" style={{ background: '#FFFFFF', border: '1px dashed var(--gold-border)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', maxWidth: '750px', margin: '0 auto' }}>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontWeight: '700' }}>
              [ ASSET SHOWCASE PLACEHOLDER ]
            </div>
            <div style={{ fontSize: '1.2rem', color: '#1D1D1F', fontWeight: '700', margin: '0.4rem 0' }}>
              Placeholder Title Header
            </div>
            <p style={{ color: '#6E6E73', fontSize: '0.85rem', maxWidth: '500px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Placeholder Stat Tiles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.2rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <AppleStatTile title="Placeholder 1" subtitle="Lorem ipsum dolor sit" />
          <AppleStatTile title="Placeholder 2" subtitle="Consectetur adipiscing elit" />
          <AppleStatTile title="Placeholder 3" subtitle="Sed do eiusmod tempor" />
          <AppleStatTile title="Placeholder 4" subtitle="Incididunt ut labore" />
        </div>
      </div>
    </section>
  );
}

function AppleStatTile({ title, subtitle }) {
  return (
    <div
      style={{
        background: '#F5F5F7',
        borderRadius: '16px',
        padding: '1.5rem 1.2rem',
        textAlign: 'center',
      }}
    >
      <div className="gold-gradient-text" style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.2rem' }}>
        {title}
      </div>
      <div style={{ color: '#6E6E73', fontSize: '0.8rem', fontWeight: '500' }}>
        {subtitle}
      </div>
    </div>
  );
}
