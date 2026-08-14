import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import SpinningEarth3D from '../SpinningEarth3D';

export default function HomeView({ navigateToInfinity, navigateToContact, navigateToServices }) {
  const [visible, setVisible] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [entry.target.dataset.idx]: true }));
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const fadeStyle = (idx, delay = 0) => ({
    opacity: visible[idx] ? 1 : 0,
    transform: visible[idx] ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
  });

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* ─── HERO SECTION ─── */}
      <section
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(165deg, #0a0f1a 0%, #111827 40%, #1a2540 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '5.5rem',
          paddingBottom: '3rem',
        }}
      >
        {/* ═══ LAYER 1 (Base): Geometric Grid Background ═══ */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />
        {/* Subtle radial ambient glow on the right behind globe */}
        <div
          style={{
            position: 'absolute',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, rgba(212, 175, 55, 0.06) 40%, transparent 70%)',
            top: '50%',
            right: '-5%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* ═══ LAYER 2: 3D Spinning Globe (Right Side, Half Visible) ═══ */}
        <div
          className="hero-spinning-earth-bg"
          style={{
            position: 'absolute',
            top: '50%',
            right: '-14%',
            transform: 'translateY(-50%)',
            width: 'clamp(620px, 55vw, 920px)',
            height: 'clamp(620px, 55vw, 920px)',
            zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.9,
          }}
        >
          <SpinningEarth3D />
        </div>

        {/* ═══ LAYER 2.5: Gold Scale Image (Bottom Aligned to Left, Bigger on Desktop) ═══ */}
        <div
          className="hero-scale-img"
          style={{
            position: 'absolute',
            bottom: 0,
            left: '-1%',
            width: 'clamp(480px, 38vw, 750px)',
            maxHeight: '110vh',
            display: 'flex',
            alignItems: 'flex-end',
            zIndex: 2,
            pointerEvents: 'none',
            opacity: 0.65,
          }}
        >
          <img
            src="/assets/hero/scale.png"
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '94vh',
              objectFit: 'contain',
              objectPosition: 'bottom left',
              display: 'block',
              filter: 'brightness(1.35) contrast(0.95)',
            }}
          />
        </div>

        {/* ═══ LAYER 3: Hero Text Content (Rendered Normally On Top) ═══ */}
        <div
          style={{
            position: 'relative',
            zIndex: 3,
            width: '100%',
            maxWidth: '1240px',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 8rem)',
          }}
        >
          <div className="hero-text-block" style={{ textAlign: 'center', maxWidth: '720px' }}>

            <h1
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.6rem)',
                fontWeight: '700',
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                lineHeight: 1.08,
                marginBottom: '1.5rem',
              }}
            >
              Connecting Markets.
              <br />
              <span
                style={{
                  background: 'linear-gradient(90deg, #D4AF37, #F0D78C, #D4AF37)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Elevating Commerce.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.65,
                fontWeight: '400',
                maxWidth: '600px',
                margin: '0 auto 2.5rem auto',
              }}
            >
              A premier global trading and logistics partner, delivering comprehensive supply chain, distribution, and business consulting solutions across borders.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={navigateToServices}
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #C5A059 100%)',
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '980px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                Explore Our Services
              </button>
              <button
                onClick={navigateToContact}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  color: '#FFFFFF',
                  fontWeight: '500',
                  fontSize: '0.9rem',
                  padding: '0.85rem 2rem',
                  borderRadius: '980px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
              >
                Contact Us <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'rgba(255,255,255,0.3)',
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            animation: 'pulse 2s infinite',
            zIndex: 3,
          }}
        >
          <span>SCROLL</span>
          <ArrowDown size={14} />
        </div>
      </section>

      {/* ─── ABOUT / INTRO ─── */}
      <section
        ref={(el) => (refs.current[2] = el)}
        data-idx="2"
        style={{
          background: '#FFFFFF',
          padding: 'clamp(4rem, 8vw, 8rem) 2rem',
          ...fadeStyle('2'),
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              color: '#D4AF37',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Who We Are
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: '700',
              color: '#1D1D1F',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Comprehensive Cross-Border Solutions for a Connected World
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: '#6E6E73',
              lineHeight: 1.7,
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            From importing and exporting a vast portfolio of consumer and industrial goods to providing end-to-end logistics, e-commerce infrastructure, and real estate management — AVARA is dedicated to bridging gaps and creating value across diverse global markets.
          </p>
        </div>
      </section>

      {/* Responsive & Animation Keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.8; transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 960px) {
          .hero-spinning-earth-bg {
            right: -22% !important;
            width: 480px !important;
            height: 480px !important;
            opacity: 0.6 !important;
          }
          .hero-scale-img {
            left: -3% !important;
            right: auto !important;
            transform: none !important;
            bottom: 0 !important;
            width: 320px !important;
            max-height: 58vh !important;
            opacity: 0.42 !important;
          }
        }
        @media (max-width: 640px) {
          .hero-spinning-earth-bg {
            right: -30% !important;
            top: 50% !important;
            width: 400px !important;
            height: 400px !important;
            opacity: 0.4 !important;
          }
          .hero-scale-img {
            left: -6% !important;
            right: auto !important;
            transform: none !important;
            bottom: 0 !important;
            top: auto !important;
            width: 290px !important;
            max-height: 52vh !important;
            opacity: 0.36 !important;
          }
        }
      `}</style>
    </div>
  );
}
