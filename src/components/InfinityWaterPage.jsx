import React, { useState } from 'react';
import { ArrowRight, Check, Droplets, Smartphone, ShieldCheck, Sparkles, RefreshCw, Star, ChevronDown, ArrowLeft } from 'lucide-react';
import infinityLogo from '../assets/infinity/logo.png';
import infinityBottle from '../assets/infinity/bottle.png';

export default function InfinityWaterPage({ onNavigateToAvara }) {
  const [selectedPlan, setSelectedPlan] = useState('subscription');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="infinity-theme" style={{ minHeight: '100vh', background: '#070F1B', color: '#F0F9FF', fontFamily: 'var(--font-sans)' }}>
      {/* Infinity Water Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: 'rgba(7, 15, 27, 0.85)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
          padding: '0.9rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <img
              src={infinityLogo}
              alt="Infinity Water Logo"
              style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(14, 165, 233, 0.4)' }}
            />
            <span style={{ fontWeight: '800', fontSize: '1.2rem', letterSpacing: '0.08em', color: '#FFFFFF' }}>
              INFINITY <span style={{ color: '#38BDF8' }}>WATER</span>
            </span>
          </div>

          {/* Navigation Links with Partner Dropdown */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.8rem' }}>
            <a href="#water-overview" style={linkStyle}>Purity</a>
            <a href="#mobile-app" style={linkStyle}>Mobile App</a>
            <a href="#products" style={linkStyle}>Subscription</a>

            {/* Partner Companies Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#E0F2FE',
                  fontWeight: '600',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                Partner Companies <ChevronDown size={14} color="#38BDF8" />
              </button>

              {dropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '120%',
                    right: 0,
                    background: '#0B192C',
                    border: '1px solid rgba(14, 165, 233, 0.3)',
                    borderRadius: '12px',
                    padding: '0.6rem 0',
                    width: '200px',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                    zIndex: 200,
                  }}
                >
                  <button
                    onClick={() => { setDropdownOpen(false); onNavigateToAvara(); }}
                    style={dropdownItemStyle}
                  >
                    AVARA Capital SA
                  </button>
                  <button
                    onClick={() => setDropdownOpen(false)}
                    style={{ ...dropdownItemStyle, color: '#38BDF8', fontWeight: '700' }}
                  >
                    ✓ Infinity Water (Active)
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Back to AVARA Button */}
          <button
            onClick={onNavigateToAvara}
            style={{
              background: 'rgba(14, 165, 233, 0.12)',
              border: '1px solid rgba(14, 165, 233, 0.4)',
              color: '#38BDF8',
              padding: '0.5rem 1.1rem',
              borderRadius: '980px',
              fontSize: '0.82rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <ArrowLeft size={14} /> Return to AVARA
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="water-overview"
        style={{
          paddingTop: '8.5rem',
          paddingBottom: '5rem',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.18) 0%, rgba(7, 15, 27, 1) 70%)',
        }}
      >
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.3)',
                padding: '0.4rem 0.9rem',
                borderRadius: '100px',
                color: '#38BDF8',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.08em',
                marginBottom: '1.2rem',
              }}
            >
              <Droplets size={14} /> PURE HYDROLOGICAL EXCELLENCE
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: '800',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: '1.2rem',
                color: '#FFFFFF',
              }}
            >
              Purity Without Limits. <br />
              <span style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 50%, #0284C7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Hydration Reimagined.
              </span>
            </h1>

            <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2.2rem', maxWidth: '540px' }}>
              Engineered for peak physical performance and cellular clarity. Paired with a smart mobile account ecosystem for automated home & office delivery.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#products" className="btn-aqua-primary">
                Order Hydration Pack <ArrowRight size={16} />
              </a>
              <a href="#mobile-app" className="btn-aqua-outline">
                Explore Mobile Account
              </a>
            </div>

            {/* Spec Badges */}
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Sparkles size={16} color="#38BDF8" /> pH 7.8 Alkaline
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} color="#38BDF8" /> Zero Microplastics
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <RefreshCw size={16} color="#38BDF8" /> 100% Recyclable
              </div>
            </div>
          </div>

          {/* Hero Bottle Graphic Showcase */}
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '380px',
                height: '380px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.35) 0%, rgba(2, 132, 199, 0) 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
              }}
            />
            <img
              src={infinityBottle}
              alt="Infinity Water Premium Bottle"
              style={{
                maxHeight: '520px',
                width: 'auto',
                filter: 'drop-shadow(0 20px 40px rgba(14, 165, 233, 0.3))',
                transition: 'transform 0.4s ease',
              }}
            />
          </div>
        </div>
      </section>

      {/* Mobile Account & App Store Graphic Section */}
      <section id="mobile-app" style={{ padding: '5rem 0', background: '#0B192C', borderTop: '1px solid rgba(14, 165, 233, 0.15)', borderBottom: '1px solid rgba(14, 165, 233, 0.15)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Left App Interface Mockup Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.12) 0%, rgba(2, 132, 199, 0.04) 100%)',
                border: '1px solid rgba(14, 165, 233, 0.3)',
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  background: '#070F1B',
                  borderRadius: '20px',
                  border: '1px solid rgba(14, 165, 233, 0.4)',
                  padding: '1.8rem 1.4rem',
                  maxWidth: '320px',
                  margin: '0 auto',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#38BDF8', fontWeight: '700' }}>
                    <Smartphone size={16} /> INFINITY MOBILE APP
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#475569', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>v2.4</span>
                </div>

                <div style={{ background: 'rgba(14, 165, 233, 0.1)', padding: '1rem', borderRadius: '12px', marginBottom: '1rem', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Daily Hydration Target</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#FFFFFF', marginTop: '0.2rem' }}>2,400 ml</div>
                  <div style={{ height: '6px', background: '#1E293B', borderRadius: '3px', marginTop: '0.6rem', overflow: 'hidden' }}>
                    <div style={{ width: '80%', height: '100%', background: 'linear-gradient(90deg, #38BDF8, #0284C7)' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#E2E8F0', padding: '0.6rem 0.8rem', background: '#0F172A', borderRadius: '8px', marginBottom: '0.6rem' }}>
                  <span>Next Refill Delivery</span>
                  <span style={{ color: '#38BDF8', fontWeight: '700' }}>Tomorrow, 9 AM</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#E2E8F0', padding: '0.6rem 0.8rem', background: '#0F172A', borderRadius: '8px' }}>
                  <span>Eco Reward Points</span>
                  <span style={{ color: '#38BDF8', fontWeight: '700' }}>1,480 PTS</span>
                </div>
              </div>
            </div>

            {/* Right App Store & Google Play Info */}
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#38BDF8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                MOBILE HYDRATION ACCOUNT
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.15 }}>
                Control Your Supply. <br />Track Your Hydration.
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                Sync your Infinity Water mobile account to manage recurring subscription orders, track daily electrolyte balance, earn eco-recycling points, and pause deliveries with one tap.
              </p>

              {/* Official App Store & Google Play Graphic Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                {/* Apple App Store Graphic */}
                <a
                  href="#app-store"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    background: '#000000',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '12px',
                    padding: '0.65rem 1.4rem',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.36c.64-.78 1.08-1.86.96-2.94-.93.04-2.07.62-2.73 1.39-.59.68-1.11 1.78-.97 2.84 1.05.08 2.11-.51 2.74-1.29z" />
                  </svg>
                  <div style={{ textTransform: 'none', textAlign: 'left' }}>
                    <div style={{ fontSize: '0.62rem', color: '#A1A1AA', letterSpacing: '0.02em', lineHeight: 1 }}>Download on the</div>
                    <div style={{ fontSize: '1rem', fontWeight: '700', fontFamily: 'sans-serif', lineHeight: 1.2 }}>App Store</div>
                  </div>
                </a>

                {/* Google Play Graphic */}
                <a
                  href="#google-play"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    background: '#000000',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '12px',
                    padding: '0.65rem 1.4rem',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M3.6 2.3L13.8 12.5L3.6 22.7C3.2 22.2 3 21.4 3 20.4V3.6C3 2.6 3.2 1.8 3.6 2.3Z" />
                    <path fill="#FBBC04" d="M17.4 8.9L14.7 11.6L13.8 12.5L14.7 13.4L17.4 16.1L20.6 14.3C21.7 13.7 21.7 12.3 20.6 11.7L17.4 8.9Z" />
                    <path fill="#4285F4" d="M3.6 2.3L13.8 12.5L17.4 8.9L5.4 2.1C4.8 1.7 4.1 1.8 3.6 2.3Z" />
                    <path fill="#34A853" d="M3.6 22.7C4.1 23.2 4.8 23.3 5.4 22.9L17.4 16.1L13.8 12.5L3.6 22.7Z" />
                  </svg>
                  <div style={{ textTransform: 'none', textAlign: 'left' }}>
                    <div style={{ fontSize: '0.62rem', color: '#A1A1AA', letterSpacing: '0.02em', lineHeight: 1, textTransform: 'uppercase' }}>GET IT ON</div>
                    <div style={{ fontSize: '1rem', fontWeight: '700', fontFamily: 'sans-serif', lineHeight: 1.2 }}>Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Pricing Section */}

      {/* Infinity Water Footer */}
      <footer style={{ borderTop: '1px solid rgba(14, 165, 233, 0.2)', background: '#050B14', padding: '3rem 0', color: '#64748B', fontSize: '0.82rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src={infinityLogo} alt="Logo" style={{ width: '22px', height: '22px' }} />
            <span>© {new Date().getFullYear()} Infinity Water Technologies. A Partner Company of AVARA Capital.</span>
          </div>

          <button
            onClick={onNavigateToAvara}
            style={{
              background: 'none',
              border: 'none',
              color: '#38BDF8',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.82rem',
            }}
          >
            Switch to AVARA Capital SA →
          </button>
        </div>
      </footer>

      {/* Styled helper buttons for Infinity theme */}
      <style>{`
        .btn-aqua-primary {
          background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
          color: #FFFFFF;
          font-weight: 700;
          padding: 0.85rem 1.8rem;
          border-radius: 980px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 8px 20px rgba(14, 165, 233, 0.35);
          transition: transform 0.2s ease;
        }
        .btn-aqua-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(14, 165, 233, 0.5);
        }
        .btn-aqua-outline {
          background: transparent;
          color: #F0F9FF;
          font-weight: 600;
          padding: 0.85rem 1.8rem;
          border-radius: 980px;
          border: 1px solid rgba(14, 165, 233, 0.4);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
        }
        .btn-aqua-outline:hover {
          background: rgba(14, 165, 233, 0.15);
          border-color: #38BDF8;
        }
        .btn-aqua-white {
          background: #FFFFFF;
          color: #0284C7;
          font-weight: 800;
          padding: 0.85rem 1.8rem;
          border-radius: 980px;
          text-decoration: none;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .btn-aqua-white:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

const linkStyle = {
  color: '#E0F2FE',
  textDecoration: 'none',
  fontSize: '0.88rem',
  fontWeight: '500',
};

const dropdownItemStyle = {
  width: '100%',
  padding: '0.6rem 1rem',
  background: 'none',
  border: 'none',
  color: '#E2E8F0',
  textAlign: 'left',
  fontSize: '0.85rem',
  fontWeight: '500',
  cursor: 'pointer',
};
