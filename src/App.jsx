import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X, ChevronDown } from 'lucide-react';
import InfinityWaterPage from './components/InfinityWaterPage';
import infinityLogo from './assets/infinity/logo.png';

const navTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'tab1', label: 'Placeholder Tab 1' },
  { id: 'tab2', label: 'Placeholder Tab 2' },
];

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('partners/infinity') || hash.includes('partners/infinity')) {
        return 'infinity';
      }
    }
    return 'avara';
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [partnerDropdownOpen, setPartnerDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('partners/infinity') || hash.includes('partners/infinity')) {
        setCurrentView('infinity');
      } else {
        setCurrentView('avara');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToInfinity = () => {
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '/partners/infinity-water');
    }
    setCurrentView('infinity');
  };

  const navigateToAvara = () => {
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '/');
    }
    setCurrentView('avara');
  };

  if (currentView === 'infinity') {
    return <InfinityWaterPage onNavigateToAvara={navigateToAvara} />;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', color: '#1D1D1F', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* AVARA Main Navigation Header */}
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
          padding: '0.8rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* AVARA Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigateToAvara(); }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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

          {/* Nav Tabs including Partner Companies Dropdown */}
          <nav style={{ display: 'none', gap: '0.4rem', alignItems: 'center' }} className="desktop-tabs">
            <a
              href="#overview"
              onClick={() => setActiveTab('overview')}
              className={`apple-nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
            >
              Overview
            </a>

            {/* Partner Companies Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setPartnerDropdownOpen(!partnerDropdownOpen)}
                className="apple-nav-tab"
                style={{
                  background: partnerDropdownOpen ? 'rgba(0, 0, 0, 0.05)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: '#1D1D1F',
                  fontWeight: '500',
                }}
              >
                Partner Companies <ChevronDown size={14} color="var(--gold-dark)" />
              </button>

              {partnerDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '120%',
                    left: 0,
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    padding: '0.6rem 0',
                    width: '220px',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                    zIndex: 200,
                  }}
                >
                  <a
                    href="/partners/infinity-water"
                    onClick={(e) => {
                      e.preventDefault();
                      setPartnerDropdownOpen(false);
                      navigateToInfinity();
                    }}
                    style={{
                      width: '100%',
                      padding: '0.7rem 1rem',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      fontSize: '0.88rem',
                      fontWeight: '600',
                      color: '#0284C7',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      textDecoration: 'none',
                    }}
                  >
                    <img src={infinityLogo} alt="Logo" style={{ width: '18px', height: '18px' }} />
                    Infinity Water
                  </a>
                </div>
              )}
            </div>

            <a
              href="#tab1"
              onClick={() => setActiveTab('tab1')}
              className={`apple-nav-tab ${activeTab === 'tab1' ? 'active' : ''}`}
            >
              Placeholder Tab 1
            </a>
            <a
              href="#tab2"
              onClick={() => setActiveTab('tab2')}
              className={`apple-nav-tab ${activeTab === 'tab2' ? 'active' : ''}`}
            >
              Placeholder Tab 2
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: '#1D1D1F', cursor: 'pointer' }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: '#FFFFFF',
              borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <a href="#overview" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1D1D1F', fontWeight: '500' }}>Overview</a>
            
            <div style={{ fontWeight: '700', color: 'var(--gold-dark)', fontSize: '0.85rem' }}>Partner Companies:</div>
            <a
              href="/partners/infinity-water"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                navigateToInfinity();
              }}
              style={{
                background: 'rgba(2, 132, 199, 0.08)',
                border: '1px solid rgba(2, 132, 199, 0.2)',
                borderRadius: '8px',
                padding: '0.7rem 1rem',
                color: '#0284C7',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
              }}
            >
              <img src={infinityLogo} alt="Logo" style={{ width: '18px', height: '18px' }} />
              Infinity Water
            </a>

            <div style={{ height: '1px', background: 'rgba(0,0,0,0.06)' }} />
            <a href="#tab1" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1D1D1F' }}>Placeholder Tab 1</a>
            <a href="#tab2" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1D1D1F' }}>Placeholder Tab 2</a>
          </div>
        )}

        <style>{`
          @media (min-width: 768px) {
            .desktop-tabs { display: flex !important; }
            .mobile-toggle { display: none !important; }
          }
        `}</style>
      </header>

      {/* Main Single Minimalist Content */}
      <main style={{ paddingTop: '9rem', paddingBottom: '5rem', flexGrow: 1 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          {/* Eyebrow */}
          <div
            style={{
              fontSize: '0.95rem',
              fontWeight: '600',
              color: 'var(--gold-dark)',
              letterSpacing: '0.04em',
              marginBottom: '0.8rem',
            }}
          >
            AVARA Sovereign.
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
              fontWeight: '700',
              letterSpacing: '-0.03em',
              color: '#1D1D1F',
              lineHeight: 1.08,
              marginBottom: '1.2rem',
              maxWidth: '900px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Architecting Wealth. <br />
            <span className="gold-gradient-text">Unmatched Alpha.</span>
          </h1>

          {/* Text Paragraph */}
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: '#6E6E73',
              maxWidth: '720px',
              margin: '0 auto 2.2rem auto',
              lineHeight: 1.5,
              fontWeight: '400',
            }}
          >
            Pro private equity, frontier venture, and quantitative yield strategies crafted for family offices and sovereign clients.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', alignItems: 'center', marginBottom: '4rem' }}>
            <button className="btn-apple-gold">
              Placeholder Action
            </button>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
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

          {/* Partner Spotlight Banner */}
          <div
            onClick={navigateToInfinity}
            style={{
              background: 'linear-gradient(135deg, #0F172A 0%, #070F1B 100%)',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              maxWidth: '850px',
              margin: '0 auto 3rem auto',
              color: '#FFFFFF',
              cursor: 'pointer',
              border: '1px solid rgba(14, 165, 233, 0.3)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              textAlign: 'left',
              transition: 'transform 0.3s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <img src={infinityLogo} alt="Infinity Water" style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
              <div>
                <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: '800', letterSpacing: '0.1em' }}>FEATURED PARTNER COMPANY</div>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF' }}>Infinity Water</div>
                <div style={{ fontSize: '0.88rem', color: '#94A3B8' }}>Pure Hydration & Smart Mobile Delivery Platform</div>
              </div>
            </div>

            <button className="btn-aqua-primary" style={{ background: '#0EA5E9', border: 'none', color: '#FFFFFF', padding: '0.7rem 1.4rem', borderRadius: '980px', fontWeight: '700', cursor: 'pointer', fontSize: '0.85rem' }}>
              Visit Infinity Water →
            </button>
          </div>

          {/* Single Placeholder Title & Text Paragraph Block */}
          <div
            style={{
              background: '#F5F5F7',
              borderRadius: '24px',
              padding: '3.5rem 2.5rem',
              maxWidth: '850px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#1D1D1F',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}
            >
              Placeholder Title
            </h2>
            <p
              style={{
                color: '#6E6E73',
                fontSize: '1.02rem',
                lineHeight: 1.6,
                maxWidth: '680px',
                margin: '0 auto',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(0,0,0,0.08)',
          padding: '2rem 0',
          textAlign: 'center',
          color: '#86868B',
          fontSize: '0.8rem',
          background: '#F5F5F7',
        }}
      >
        <div className="container">
          © {new Date().getFullYear()} AVARA Capital SA. All rights reserved. Partnered with Infinity Water.
        </div>
      </footer>
    </div>
  );
}
