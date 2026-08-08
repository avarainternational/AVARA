import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'pillars', label: 'Placeholder 1' },
  { id: 'calculator', label: 'Placeholder 2' },
  { id: 'portfolio', label: 'Placeholder 3' },
  { id: 'governance', label: 'Placeholder 4' },
];

export default function Navbar({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        padding: '0.65rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#1D1D1F',
          }}
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '6px',
              background: 'var(--gold-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: '800',
              fontSize: '0.85rem',
            }}
          >
            A
          </div>
          <span style={{ fontWeight: '700', fontSize: '1.05rem', letterSpacing: '-0.02em', color: '#1D1D1F' }}>
            AVARA
          </span>
        </a>

        {/* Apple Style Placeholder Nav Tabs */}
        <nav style={{ display: 'none', gap: '0.3rem', alignItems: 'center' }} className="desktop-tabs">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`apple-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              style={{
                color: activeTab === tab.id ? '#1D1D1F' : '#6E6E73',
                fontWeight: activeTab === tab.id ? '600' : '400',
              }}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        {/* Minimal Action CTA */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.8rem' }} className="desktop-tabs">
          <button
            onClick={() => onOpenModal('portal')}
            style={{
              background: 'none',
              border: 'none',
              color: '#6E6E73',
              fontSize: '0.82rem',
              cursor: 'pointer',
              fontWeight: '500',
            }}
          >
            Placeholder Login
          </button>
          <button
            onClick={() => onOpenModal('access')}
            className="btn-apple-gold"
            style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
          >
            Placeholder Access
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: '#1D1D1F', cursor: 'pointer' }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
              style={{
                textDecoration: 'none',
                color: '#1D1D1F',
                fontSize: '1rem',
                fontWeight: '500',
              }}
            >
              {tab.label}
            </a>
          ))}
          <div style={{ height: '1px', background: 'rgba(0,0,0,0.06)', margin: '0.5rem 0' }} />
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenModal('access'); }}
            className="btn-apple-gold"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Placeholder Access
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-tabs { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
