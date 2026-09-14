import React, { useState, useEffect } from 'react';
import { ArrowRight, Smartphone, Droplets, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import infinityBottleImport from '../assets/infinity/bottle.png';
import infinityWaterImport from '../assets/infinity/infinity.png';
import infinityBothImport from '../assets/infinity/both.png';

const infinityBottle = infinityBottleImport || '/infinity/bottle.png';
const infinityWater = infinityWaterImport || '/infinity/infinity.png';
const infinityBoth = infinityBothImport || '/infinity/both.png';

const showcaseImages = [
  { src: infinityBottle, alt: 'Infinity Water Premium Bottle' },
  { src: infinityWater, alt: 'Infinity Water Hydration Wellness' },
  { src: infinityBoth, alt: 'Infinity Water Complete Care Collection' },
];

export default function FeaturedDigitalInitiative({ navigateToInfinity }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

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
        background: 'linear-gradient(165deg, #070B14 0%, #07172A 50%, #051121 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem, 7vw, 7rem) 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {/* Ambient background glow effects - Infinity Blue */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(2, 66, 110, 0.06) 50%, transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)',
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
            {/* Eyebrow / Badges: Infinity Blue Accent */}
            <div
              className="eyebrow-badge infinity-eyebrow-badge"
              style={{
                marginBottom: '1rem',
                background: 'rgba(14, 165, 233, 0.12)',
                border: '1px solid rgba(14, 165, 233, 0.35)',
                color: '#38BDF8',
              }}
            >
              Main Focused Project • Strategic Partner Venture
            </div>

            {/* Headline H2: fluid clamp with Infinity Cyan-Blue Gradient */}
            <h2
              className="heading-section"
              style={{
                marginBottom: '1.2rem',
              }}
            >
              Featured Digital Initiative: <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #0EA5E9 50%, #0284C7 100%)',
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
                  icon: <Droplets size={16} color="#0EA5E9" />,
                  title: 'Smart Hydration Reminders',
                  desc: 'Mindful daily intake prompts tailored to your lifestyle',
                },
                {
                  icon: <Sparkles size={16} color="#0EA5E9" />,
                  title: 'Family & Relations Care Circle',
                  desc: 'Send caring hydration nudges to loved ones',
                },
                {
                  icon: <Zap size={16} color="#0EA5E9" />,
                  title: 'Curated Health & Wellness News',
                  desc: 'Daily verified tips on health, nutrition & energy',
                },
                {
                  icon: <ShieldCheck size={16} color="#0EA5E9" />,
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
                      background: 'rgba(14, 165, 233, 0.12)',
                      border: '1px solid rgba(14, 165, 233, 0.25)',
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
              {/* Primary Infinity Blue CTA */}
              <a
                href="/infinity-water"
                onClick={handleNavigate}
                className="btn-infinity-blue btn-responsive cta-infinity-button"
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
                  border: '1px solid rgba(14, 165, 233, 0.35)',
                  color: '#CBD5E1',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-sans)',
                  boxSizing: 'border-box',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#F8FAFC', fontWeight: '500' }}>
                  <Smartphone size={14} color="#38BDF8" /> iOS & Android App
                </span>
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
                <span>Free Companion</span>
              </div>
            </div>
          </div>

          {/* Right Column: Rotating 3-Image Showcase (Carousel) */}
          <div
            style={{
              textAlign: 'center',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginTop: '1.5rem',
            }}
          >
            {/* Ambient Radial Glow Behind Images - Infinity Blue */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'min(340px, 80vw)',
                height: 'min(340px, 80vw)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(2, 66, 110, 0.1) 60%, transparent 75%)',
                filter: 'blur(35px)',
                pointerEvents: 'none',
              }}
            />

            {/* Carousel Container */}
            <div
              className="infinity-showcase-container"
              onClick={handleNavigate}
              style={{ cursor: 'pointer' }}
              title="Click to view Infinity Water dedicated application"
            >
              {showcaseImages.map((image, idx) => {
                const isActive = activeImageIndex === idx;
                return (
                  <img
                    key={idx}
                    src={image.src}
                    alt={image.alt}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      maxHeight: '92%',
                      maxWidth: '90%',
                      objectFit: 'contain',
                      transform: isActive
                        ? 'translate(-50%, -50%) scale(1) translateY(0px)'
                        : 'translate(-50%, -50%) scale(0.92) translateY(16px)',
                      opacity: isActive ? 1 : 0,
                      filter: isActive
                        ? 'drop-shadow(0 16px 35px rgba(14, 165, 233, 0.45)) drop-shadow(0 4px 12px rgba(0,0,0,0.6))'
                        : 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))',
                      transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.65s ease',
                      pointerEvents: isActive ? 'auto' : 'none',
                      zIndex: isActive ? 2 : 1,
                    }}
                  />
                );
              })}
            </div>

            {/* Slide Navigation Indicator Pills */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '0.8rem',
                zIndex: 5,
              }}
            >
              {showcaseImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    width: activeImageIndex === idx ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: activeImageIndex === idx ? 'linear-gradient(90deg, #38BDF8, #0EA5E9)' : 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    boxShadow: activeImageIndex === idx ? '0 0 10px rgba(14, 165, 233, 0.7)' : 'none',
                  }}
                />
              ))}
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
          box-shadow: 0 8px 25px rgba(14, 165, 233, 0.5) !important;
        }
        .infinity-showcase-container {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: clamp(300px, 70vw, 480px);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s ease;
        }
        .infinity-showcase-container:hover {
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
}
