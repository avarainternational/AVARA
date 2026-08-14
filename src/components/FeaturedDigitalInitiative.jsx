import React from 'react';
import { ArrowRight, Smartphone, Droplets, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
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
        background: 'linear-gradient(165deg, #0A0F1A 0%, #0D1527 50%, #070F1B 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 8vw, 8rem) 2rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Ambient background glow effects */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(212, 175, 55, 0.04) 50%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
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
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          className="digital-initiative-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: 'clamp(2.5rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Text & CTA */}
          <div>
            {/* Main Focused Project & Strategic Partner Venture Caption */}
            <div
              style={{
                fontSize: '0.84rem',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#D4AF37',
                marginBottom: '1rem',
              }}
            >
              Main Focused Project • Strategic Partner Venture
            </div>

            {/* Headline */}
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: '700',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '1.4rem',
              }}
            >
              Featured Digital Initiative: <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 45%, #D4AF37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Infinity Water
              </span>
            </h2>

            {/* Body Text */}
            <p
              style={{
                fontSize: 'clamp(1.02rem, 1.5vw, 1.15rem)',
                color: 'rgba(255, 255, 255, 0.72)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '620px',
                fontWeight: '400',
              }}
            >
              Beyond quality hydration, AVARA is dedicated to genuine consumer care. Infinity Water is our holistic digital wellness application created to cultivate healthy hydration habits, deliver daily medical and wellness news, and help families stay connected through caring health nudges.
            </p>

            {/* Key Initiative Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                marginBottom: '2.4rem',
              }}
            >
              {[
                {
                  icon: <Droplets size={16} color="#38BDF8" />,
                  title: 'Smart Hydration Reminders',
                  desc: 'Mindful daily intake prompts tailored to your lifestyle',
                },
                {
                  icon: <Sparkles size={16} color="#38BDF8" />,
                  title: 'Family & Relations Care Circle',
                  desc: 'Send caring hydration nudges to loved ones',
                },
                {
                  icon: <Zap size={16} color="#38BDF8" />,
                  title: 'Curated Health & Wellness News',
                  desc: 'Daily verified tips on health, nutrition & energy',
                },
                {
                  icon: <ShieldCheck size={16} color="#D4AF37" />,
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
                      background: 'rgba(14, 165, 233, 0.1)',
                      padding: '0.35rem',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: '#FFFFFF', fontSize: '0.86rem', fontWeight: '600' }}>
                      {item.title}
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.76rem', marginTop: '0.15rem' }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons: Main CTA + Store Badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.2rem',
              }}
            >
              {/* Primary Stylized CTA Button */}
              <a
                href="/infinity-water"
                onClick={handleNavigate}
                className="cta-infinity-button"
                style={{
                  background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 60%, #0369A1 100%)',
                  color: '#FFFFFF',
                  padding: '0.9rem 2.2rem',
                  borderRadius: '980px',
                  fontSize: '0.94rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: '0 8px 24px rgba(14, 165, 233, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  cursor: 'pointer',
                }}
              >
                <span>Discover the Wellness App</span>
                <ArrowRight size={18} />
              </a>

              {/* App Availability Indicator */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '0.6rem 1rem',
                  borderRadius: '980px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'rgba(255, 255, 255, 0.65)',
                  fontSize: '0.78rem',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FFFFFF', fontWeight: '500' }}>
                  <Smartphone size={14} color="#38BDF8" /> iOS & Android App
                </span>
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                <span>Free Wellness Companion</span>
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
            }}
          >
            {/* Device Glow Behind Phone */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '520px',
                borderRadius: '48px',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, rgba(2, 132, 199, 0.1) 50%, transparent 80%)',
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
                maxWidth: '320px',
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
                  padding: '2.2rem 1.2rem 1.4rem',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(14, 165, 233, 0.2)',
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
                      <div style={{ width: '80%', height: '100%', background: '#38BDF8', borderRadius: '1px' }} />
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
                        border: '1px solid rgba(14, 165, 233, 0.5)',
                      }}
                    />
                    <div>
                      <div style={{ fontSize: '0.78rem', fontWeight: '800', letterSpacing: '0.04em', color: '#FFFFFF', lineHeight: 1 }}>
                        INFINITY <span style={{ color: '#38BDF8' }}>WATER</span>
                      </div>
                      <div style={{ fontSize: '0.62rem', color: '#64748B', marginTop: '2px' }}>
                        Wellness & Care
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontSize: '0.65rem',
                      color: '#38BDF8',
                      background: 'rgba(14, 165, 233, 0.15)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '980px',
                      fontWeight: '600',
                    }}
                  >
                    Caring for You
                  </span>
                </div>

                {/* Hydration Circular Gauge Card */}
                <div
                  style={{
                    background: 'rgba(14, 165, 233, 0.08)',
                    border: '1px solid rgba(14, 165, 233, 0.22)',
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
                      fontSize: '1.9rem',
                      fontWeight: '800',
                      color: '#FFFFFF',
                      marginTop: '0.2rem',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    1,850 <span style={{ fontSize: '0.95rem', fontWeight: '500', color: '#38BDF8' }}>/ 2,400 ml</span>
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
                        background: 'linear-gradient(90deg, #38BDF8 0%, #0EA5E9 100%)',
                        borderRadius: '4px',
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem', color: '#64748B' }}>
                    <span>77% Reached</span>
                    <span style={{ color: '#38BDF8', fontWeight: '600' }}>Great Energy!</span>
                  </div>
                </div>

                {/* Family Care Circle & Health Brief Widgets */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.55rem', marginBottom: '0.8rem' }}>
                  {/* Family Care Widget */}
                  <div
                    style={{
                      background: '#0F172A',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
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
                    <span style={{ fontSize: '0.62rem', color: '#38BDF8', fontWeight: '600', background: 'rgba(56, 189, 248, 0.12)', padding: '0.2rem 0.45rem', borderRadius: '6px' }}>
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.62rem', color: '#D4AF37', fontWeight: '700', textTransform: 'uppercase' }}>
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
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
                    borderRadius: '12px',
                    padding: '0.65rem',
                    textAlign: 'center',
                    fontSize: '0.76rem',
                    fontWeight: '700',
                    color: '#FFFFFF',
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
        .cta-infinity-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(14, 165, 233, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.4) !important;
          background: linear-gradient(135deg, #38BDF8 0%, #0EA5E9 60%, #0284C7 100%) !important;
        }
        .smartphone-mockup:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 35px 60px -15px rgba(14, 165, 233, 0.25), 0 0 0 1px rgba(56, 189, 248, 0.3), inset 0 0 15px rgba(0,0,0,0.8) !important;
        }
        @media (max-width: 900px) {
          .digital-initiative-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .digital-initiative-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .digital-initiative-grid p {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}
