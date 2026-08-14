import React, { useState, useEffect } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import InfinityWaterPage from './components/InfinityWaterPage';
import FeaturedDigitalInitiative from './components/FeaturedDigitalInitiative';
import infinityLogoImport from './assets/infinity/logo.png';
import avaraLogoImport from './assets/avara/logo.png';

import HomeView from './components/views/HomeView';
import ServicesView from './components/views/ServicesView';
import VisionView from './components/views/VisionView';
import ContactView from './components/views/ContactView';

const infinityLogo = infinityLogoImport || '/infinity/logo.png';
const avaraLogo = avaraLogoImport || '/logo/logo.png';

const navTabs = [
  { id: 'overview', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'vision', label: 'Vision' },
  { id: 'contact', label: 'Contact Us' },
];

const isInfinityRoute = (path = '', hash = '') => {
  const p = (path || '').toLowerCase();
  const h = (hash || '').toLowerCase();
  return (
    p.includes('infinity-water') ||
    p.includes('partners/infinity') ||
    p.includes('/infinity') ||
    h.includes('infinity-water') ||
    h.includes('partners/infinity') ||
    h.includes('infinity')
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      if (isInfinityRoute(window.location.pathname, window.location.hash)) {
        return 'infinity';
      }
    }
    return 'avara';
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      if (isInfinityRoute(window.location.pathname, window.location.hash)) {
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
      window.history.pushState({}, '', '/infinity-water');
    }
    setCurrentView('infinity');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToAvara = () => {
    if (window.history && window.history.pushState) {
      window.history.pushState({}, '', '/');
    }
    setCurrentView('avara');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
            onClick={(e) => { e.preventDefault(); navigateToAvara(); }}
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
              onClick={(e) => { e.preventDefault(); document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' }); }}
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
              onClick={(e) => {
                e.preventDefault();
                navigateToInfinity();
              }}
              className="apple-nav-tab"
              style={{
                color: '#38BDF8',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
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
              onClick={(e) => { e.preventDefault(); document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }}
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
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                navigateToInfinity();
              }}
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

      {/* Main Content Area - Scrollable Sections */}
      <main style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <section id="overview">
          <HomeView
            navigateToInfinity={navigateToInfinity}
            navigateToContact={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            navigateToServices={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </section>
        <section id="services">
          <ServicesView />
        </section>
        <section id="vision">
          <VisionView />
        </section>
        {/* ─── FEATURED DIGITAL INITIATIVE: INFINITY WATER (Above Contact) ─── */}
        <section id="digital-ventures">
          <FeaturedDigitalInitiative navigateToInfinity={navigateToInfinity} />
        </section>
        <section id="contact">
          <ContactView />
        </section>
      </main>

      {/* ─── PREMIUM FOOTER ─── */}
      <footer
        style={{
          background: 'linear-gradient(165deg, #0a0f1a 0%, #111827 100%)',
          padding: '4rem 2rem 2rem',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.85rem',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', marginBottom: '3rem' }}>
            {/* Brand */}
            <div style={{ maxWidth: '320px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
                <img
                  src={avaraLogo}
                  alt="AVARA International"
                  style={{ height: '44px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 2px 10px rgba(212, 175, 55, 0.25))' }}
                />
                <div>
                  <div style={{ fontWeight: '800', fontSize: '1.15rem', color: '#FFFFFF', lineHeight: 1.1 }}>AVARA</div>
                  <div style={{ fontSize: '0.62rem', color: '#D4AF37', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '700' }}>International Co., Ltd.</div>
                </div>
              </div>
              <p style={{ lineHeight: 1.6 }}>
                A premier global trading and logistics conglomerate connecting markets and elevating commerce worldwide.
              </p>
            </div>
            {/* Links */}
            <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontWeight: '700', color: '#FFFFFF', marginBottom: '1rem', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Navigation</div>
                {['Home', 'Services', 'Vision', 'Contact'].map((l) => (
                  <a key={l} href={`#${l.toLowerCase() === 'home' ? 'overview' : l.toLowerCase()}`} onClick={(e) => { e.preventDefault(); document.getElementById(l.toLowerCase() === 'home' ? 'overview' : l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); }} style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '0.6rem', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#D4AF37')} onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}>{l}</a>
                ))}
              </div>
              <div>
                <div style={{ fontWeight: '700', color: '#FFFFFF', marginBottom: '1rem', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Digital Ventures</div>
                <a href="/infinity-water" onClick={(e) => { e.preventDefault(); navigateToInfinity(); }} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target.style.color = '#38BDF8')} onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}>Infinity Water</a>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.78rem' }}>
            <span>© {new Date().getFullYear()} AVARA International Co., Ltd. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

