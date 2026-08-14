import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import infinityLogoImport from '../assets/infinity/logo.png';
import avaraLogoImport from '../assets/avara/logo.png';

const infinityLogo = infinityLogoImport || '/infinity/logo.png';
const avaraLogo = avaraLogoImport || '/logo/logo.png';

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
        background: 'rgba(10, 15, 26, 0.88)',
        backdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '0.75rem 0',
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
              filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.35))',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontWeight: '800', fontSize: '1.08rem', letterSpacing: '0.01em', color: '#FFFFFF', lineHeight: 1.1 }}>
              AVARA
            </span>
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.12em', color: '#D4AF37', textTransform: 'uppercase', fontWeight: '700' }}>
              International
            </span>
          </div>
        </a>

        {/* Desktop Nav Tabs with Digital Ventures & Infinity Water */}
        <nav style={{ display: 'none', gap: '0.5rem', alignItems: 'center' }} className="desktop-tabs">
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

          {/* Dedicated Digital Ventures / Infinity Water Tab */}
          <a
            href="/infinity-water"
            onClick={handleInfinityClick}
            className="apple-nav-tab"
            style={{
              color: '#38BDF8',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(14, 165, 233, 0.1)',
              border: '1px solid rgba(14, 165, 233, 0.25)',
              padding: '0.35rem 0.85rem',
              borderRadius: '980px',
              transition: 'all 0.2s ease',
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
          style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '0.3rem' }}
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
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.1rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          }}
        >
          <a
            href="#overview"
            onClick={handleHomeClick}
            style={{ textDecoration: 'none', color: '#FFFFFF', fontWeight: '500', fontSize: '1rem' }}
          >
            Home
          </a>

          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
            style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
          >
            Services
          </a>

          <a
            href="#vision"
            onClick={(e) => { e.preventDefault(); document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
            style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
          >
            Vision
          </a>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '0.2rem 0' }} />

          <div style={{ fontWeight: '700', color: '#D4AF37', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Featured Digital Venture:
          </div>
          <a
            href="/infinity-water"
            onClick={handleInfinityClick}
            style={{
              background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0.05) 100%)',
              border: '1px solid rgba(14, 165, 233, 0.35)',
              borderRadius: '12px',
              padding: '0.85rem 1.1rem',
              color: '#38BDF8',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <img src={infinityLogo} alt="Logo" style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
            <div>
              <div style={{ fontSize: '0.95rem' }}>Digital Ventures: Infinity Water</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontWeight: '400' }}>Wellness & Hydration Mobile App</div>
            </div>
          </a>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '0.2rem 0' }} />

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
            style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
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
