import React from 'react';
import { ArrowRight, Smartphone, Droplets, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import infinityLogoImport from '../assets/infinity/logo.png';

const infinityLogo = infinityLogoImport || '/infinity/logo.png';

export default function FeaturedDigitalInitiative({ navigateToInfinity }) {
  const handleNavigate = (e) => {
    if (e) e.preventDefault();
    if (navigateToInfinity) {
      navigateToInfinity();
    } else if (typeof window !== 'undefined') {
      window.location.href = '/infinity-water';
    }
  };

  return (
    <section
      id="digital-ventures"
      style={{
        background: 'linear-gradient(165deg, #070B14 0%, #0D1527 50%, #070F1B 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem, 7vw, 7rem) 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* Ambient background glow effects */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, rgba(14, 165, 233, 0.05) 50%, transparent 70%)',
          top: '20%',
          right: '-10%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.06) 0%, transparent 70%)',
          bottom: '10%',
          left: '-5%',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className="digital-initiative-grid">
          {/* Left Column: Text & CTA */}
          <div>
            {/* Eyebrow / Badges: 11px mobile, 0.08em tracking */}
            <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
              Main Focused Project • Strategic Partner Venture
            </div>

            {/* Headline H2: fluid clamp */}
            <h2
              className="heading-section"
              style={{
                marginBottom: '1.2rem',
              }}
            >
              Featured Digital Initiative: <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F0D78C 50%, #C5A059 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Infinity Water
              </span>
            </h2>

            {/* Body Text */}
            <p
              className="body-prose-dark"
              style={{
                marginBottom: '1.8rem',
              }}
            >
              Beyond quality hydration, AVARA is dedicated to genuine consumer care. Infinity Water is our holistic digital wellness application created to cultivate healthy hydration habits, deliver daily medical and wellness news, and help families stay connected through caring health nudges.
            </p>

            {/* Key Initiative Highlights */}
            <div className="digital-highlights-grid">
              {[
                {
                  icon: <Droplets size={16} color="#C5A059" />,
                  title: 'Smart Hydration Reminders',
                  desc: 'Mindful daily intake prompts tailored to your lifestyle',
                },
                {
                  icon: <Sparkles size={16} color="#C5A059" />,
                  title: 'Family & Relations Care Circle',
                  desc: 'Send caring hydration nudges to loved ones',
                },
                {
                  icon: <Zap size={16} color="#C5A059" />,
                  title: 'Curated Health & Wellness News',
                  desc: 'Daily verified tips on health, nutrition & energy',
                },
                {
                  icon: <ShieldCheck size={16} color="#C5A059" />,
                  title: 'Care-First Philosophy',
                  desc: 'Supporting community health & long-term well-being',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '12px',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      marginTop: '2px',
                      background: 'rgba(197, 160, 89, 0.12)',
                      padding: '0.35rem',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF', fontSize: '0.875rem', fontWeight: '600' }}>
                      {item.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', color: '#94A3B8', fontSize: '0.78rem', marginTop: '0.2rem', lineHeight: 1.5 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons: Stacking on mobile, inline on desktop */}
            <div className="cta-button-group" style={{ alignItems: 'stretch' }}>
              {/* Primary Gold CTA */}
              <a
                href="/infinity-water"
                onClick={handleNavigate}
                className="btn-gold btn-responsive cta-infinity-button"
              >
                <span>Discover the Wellness App</span>
                <ArrowRight size={18} />
              </a>

              {/* App Availability Indicator */}
              <div
                className="btn-responsive"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.1rem',
                  minHeight: '48px',
                  borderRadius: '980px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  color: '#CBD5E1',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-sans)',
                  boxSizing: 'border-box',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#F8FAFC', fontWeight: '500' }}>
                  <Smartphone size={14} color="#C5A059" /> iOS & Android App
                </span>
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                <span>Free Companion</span>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup Visual */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              marginTop: '1.5rem',
            }}
          >
            {/* Device Glow Behind Phone */}
            <div
              style={{
                position: 'absolute',
                width: '300px',
                height: '480px',
                borderRadius: '48px',
                background: 'radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 80%)',
                filter: 'blur(35px)',
                pointerEvents: 'none',
              }}
            />

            {/* Smartphone Mockup Frame */}
            <div
              className="smartphone-mockup"
              onClick={handleNavigate}
              style={{
                width: '100%',
                maxWidth: 'clamp(270px, 85vw, 320px)',
                background: '#0F172A',
                borderRadius: '42px',
                padding: '11px',
                border: '3px solid #334155',
                boxShadow:
                  '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 0 15px rgba(0,0,0,0.8)',
                position: 'relative',
                cursor: 'pointer',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
              }}
              title="Click to view Infinity Water mobile application details"
            >
              {/* Dynamic Island / Camera Notch */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90px',
                  height: '20px',
                  background: '#020617',
                  borderRadius: '12px',
                  zIndex: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 8px',
                }}
              >
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#1E293B' }} />
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#0F172A', border: '1px solid #1E293B' }} />
              </div>

              {/* Phone Screen Canvas */}
              <div
                style={{
                  background: 'linear-gradient(180deg, #070F1B 0%, #0B192C 100%)',
                  borderRadius: '34px',
                  padding: '2.2rem 1.1rem 1.4rem',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(197, 160, 89, 0.25)',
                  color: '#F0F9FF',
                }}
              >
                {/* Mockup Status Bar */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.68rem',
                    fontWeight: '600',
                    color: '#94A3B8',
                    marginBottom: '1rem',
                    padding: '0 0.4rem',
                  }}
                >
                  <span>9:41</span>
                  <div style={{ display: 'flex', gap: '0.35rem', alignItems: 'center' }}>
                    <span>5G</span>
                    <div style={{ width: '16px', height: '9px', border: '1px solid #94A3B8', borderRadius: '2px', padding: '1px' }}>
                      <div style={{ width: '80%', height: '100%', background: '#C5A059', borderRadius: '1px' }} />
                    </div>
                  </div>
                </div>

                {/* Mockup App Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.2rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img
                      src={infinityLogo}
                      alt="Infinity Water"
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        border: '1px solid rgba(197, 160, 89, 0.5)',
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: '800', letterSpacing: '0.04em', color: '#FFFFFF', lineHeight: 1 }}>
                        INFINITY <span style={{ color: '#C5A059' }}>WATER</span>
                      </div>
                      <div style={{ fontSize: '0.62rem', color: '#94A3B8', marginTop: '2px' }}>
                        Wellness & Care
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '0.65rem',
                      color: '#C5A059',
                      background: 'rgba(197, 160, 89, 0.15)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '980px',
                      fontWeight: '600',
                      border: '1px solid rgba(197, 160, 89, 0.3)',
                    }}
                  >
                    Caring for You
                  </span>
                </div>

                {/* Hydration Circular Gauge Card */}
                <div
                  style={{
                    background: 'rgba(197, 160, 89, 0.08)',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    borderRadius: '18px',
                    padding: '1.1rem 1rem',
                    textAlign: 'center',
                    marginBottom: '0.8rem',
                    position: 'relative',
                  }}
                >
                  <div style={{ fontSize: '0.68rem', color: '#94A3B8', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Your Daily Hydration
                  </div>
                  <div
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: '800',
                      color: '#FFFFFF',
                      marginTop: '0.2rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    1,850 <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#C5A059' }}>/ 2,400 ml</span>
                  </div>

                  {/* Visual Progress Bar */}
                  <div
                    style={{
                      height: '7px',
                      background: '#1E293B',
                      borderRadius: '4px',
                      margin: '0.6rem auto 0.3rem',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: '77%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #D4AF37 0%, #C5A059 100%)',
                        borderRadius: '4px',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem', color: '#94A3B8' }}>
                    <span>77% Reached</span>
                    <span style={{ color: '#C5A059', fontWeight: '600' }}>Great Energy!</span>
                  </div>
                </div>

                {/* Family Care Circle & Health Brief Widgets */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.55rem', marginBottom: '0.8rem' }}>
                  {/* Family Care Widget */}
                  <div
                    style={{
                      background: '#0F172A',
                      border: '1px solid rgba(197, 160, 89, 0.2)',
                      borderRadius: '12px',
                      padding: '0.65rem 0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1rem' }}>❤️</span>
                      <div>
                        <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#F0F9FF' }}>Family Care Circle</div>
                        <div style={{ fontSize: '0.62rem', color: '#94A3B8' }}>Mom reminded to drink water</div>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.62rem', color: '#C5A059', fontWeight: '600', background: 'rgba(197, 160, 89, 0.15)', padding: '0.2rem 0.45rem', borderRadius: '6px' }}>
                      Nudged ✓
                    </span>
                  </div>

                  {/* Health News Brief */}
                  <div
                    style={{
                      background: '#0F172A',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '12px',
                      padding: '0.6rem 0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.62rem', color: '#C5A059', fontWeight: '700', textTransform: 'uppercase' }}>
                      <span>📰</span> Daily Health Tip
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#CBD5E1', marginTop: '0.2rem', lineHeight: 1.3 }}>
                      "Proper hydration enhances focus and reduces stress by 25%."
                    </div>
                  </div>
                </div>

                {/* In-App Quick Log & Care Check-in Button */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #C5A059 100%)',
                    borderRadius: '12px',
                    padding: '0.65rem',
                    textAlign: 'center',
                    fontSize: '0.76rem',
                    fontWeight: '700',
                    color: '#0B132B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <Droplets size={14} /> Log 250ml & Send Care Check
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div
                style={{
                  width: '110px',
                  height: '4px',
                  background: '#64748B',
                  borderRadius: '2px',
                  margin: '8px auto 2px',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Component Specific CSS & Micro-Animations */}
      <style>{`
        .digital-initiative-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        .digital-highlights-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 640px) {
          .digital-highlights-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }
        @media (min-width: 900px) {
          .digital-initiative-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 4rem;
          }
        }
        .cta-infinity-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(197, 160, 89, 0.4) !important;
        }
        .smartphone-mockup:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(197, 160, 89, 0.35), inset 0 0 15px rgba(0,0,0,0.8) !important;
        }
      `}</style>
    </section>
  );
}
