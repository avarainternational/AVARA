import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import infinityLogoImport from '../assets/infinity/logo.webp';
import avaraLogoImport from '../assets/avara/logo.webp';

const infinityLogo = infinityLogoImport || '/infinity/logo.webp';
const avaraLogo = avaraLogoImport || '/logo/logo.webp';

export default function Header({ navigateToInfinity, navigateToAvara }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInfinityClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (navigateToInfinity) {
      navigateToInfinity();
    } else if (typeof window !== 'undefined') {
      window.location.href = '/infinity-water';
    }
  };

  const handleHomeClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (navigateToAvara) {
      navigateToAvara();
    } else if (typeof window !== 'undefined') {
      document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(10, 15, 26, 0.92)',
        backdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '0.8rem 0',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* AVARA Holding Logo */}
        <a
          href="/"
          onClick={handleHomeClick}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <img
            src={avaraLogo}
            alt="AVARA International"
            style={{
              height: '38px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 8px rgba(197, 160, 89, 0.35))',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.15rem', letterSpacing: '-0.01em', color: '#FFFFFF', lineHeight: 1.1 }}>
              AVARA
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.62rem', letterSpacing: '0.15em', color: '#C5A059', textTransform: 'uppercase', fontWeight: '600' }}>
              International
            </span>
          </div>
        </a>

        {/* Desktop Nav Tabs with Digital Ventures & Infinity Water */}
        <nav style={{ display: 'none', gap: '0.4rem', alignItems: 'center' }} className="desktop-tabs">
          <a
            href="#overview"
            onClick={handleHomeClick}
            className="apple-nav-tab"
          >
            Home
          </a>

          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="apple-nav-tab"
          >
            Services
          </a>

          <a
            href="#vision"
            onClick={(e) => { e.preventDefault(); document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="apple-nav-tab"
          >
            Vision
          </a>

          {/* Dedicated Digital Ventures / Infinity Water Tab - Gold Aligned */}
          <a
            href="/infinity-water"
            onClick={handleInfinityClick}
            className="apple-nav-tab"
            style={{
              color: '#C5A059',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(197, 160, 89, 0.15)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              padding: '0.35rem 0.85rem',
              borderRadius: '980px',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(197, 160, 89, 0.25)';
              e.currentTarget.style.borderColor = '#D4AF37';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(197, 160, 89, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.35)';
            }}
            title="View Infinity Water Dedicated App Subpage"
          >
            <img src={infinityLogo} alt="Infinity" style={{ width: '16px', height: '16px', borderRadius: '50%' }} />
            <span>Digital Ventures</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="apple-nav-tab"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            padding: '0.4rem',
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mobile-toggle"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(10, 15, 26, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          <a
            href="#overview"
            onClick={handleHomeClick}
            style={{ textDecoration: 'none', color: '#F8FAFC', fontWeight: '500', fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center' }}
          >
            Home
          </a>

          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
            style={{ textDecoration: 'none', color: '#CBD5E1', fontSize: '1rem', fontWeight: '500', minHeight: '44px', display: 'flex', alignItems: 'center' }}
          >
            Services
          </a>

          <a
            href="#vision"
            onClick={(e) => { e.preventDefault(); document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
            style={{ textDecoration: 'none', color: '#CBD5E1', fontSize: '1rem', fontWeight: '500', minHeight: '44px', display: 'flex', alignItems: 'center' }}
          >
            Vision
          </a>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '0.25rem 0' }} />

          <div style={{ fontFamily: 'var(--font-display)', fontWeight: '600', color: '#C5A059', fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Featured Digital Venture
          </div>
          <a
            href="/infinity-water"
            onClick={handleInfinityClick}
            style={{
              background: 'rgba(197, 160, 89, 0.12)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              borderRadius: '12px',
              padding: '0.85rem 1.1rem',
              minHeight: '48px',
              color: '#C5A059',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <img src={infinityLogo} alt="Logo" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>Digital Ventures: Infinity Water</div>
              <div style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: '400', marginTop: '2px' }}>Wellness & Hydration Mobile App</div>
            </div>
          </a>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '0.25rem 0' }} />

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
            style={{ textDecoration: 'none', color: '#CBD5E1', fontSize: '1rem', fontWeight: '500', minHeight: '44px', display: 'flex', alignItems: 'center' }}
          >
            Contact Us
          </a>
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
