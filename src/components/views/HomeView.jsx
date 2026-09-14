import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import SpinningEarth3D from '../SpinningEarth3D';

export default function HomeView({ _navigateToInfinity, navigateToContact, navigateToServices }) {
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
          background: 'linear-gradient(165deg, #070B14 0%, #0D1527 45%, #131F3B 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '5.5rem',
          paddingBottom: '3.5rem',
        }}
      >
        {/* ═══ LAYER 1: Geometric Grid Background ═══ */}
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
        {/* Radial ambient glow behind globe */}
        <div
          style={{
            position: 'absolute',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(197, 160, 89, 0.1) 0%, rgba(11, 19, 43, 0.05) 50%, transparent 70%)',
            top: '50%',
            right: '-5%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* ═══ LAYER 2: 3D Spinning Globe (Right Side) ═══ */}
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

        {/* ═══ LAYER 3: Hero Content ═══ */}
        <div
          className="container hero-content-padding"
          style={{
            position: 'relative',
            zIndex: 3,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            minHeight: 'calc(100vh - 8rem)',
          }}
        >
          <div className="hero-text-block" style={{ textAlign: 'left', maxWidth: '680px', width: '100%' }}>
            {/* Eyebrow: 11px on mobile with 0.08em tracking to eliminate line wraps */}
            <div
              className="eyebrow-badge"
              style={{
                marginBottom: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
              }}
            >
              <span>Global Enterprise Conglomerate</span>
            </div>

            {/* H1 Hero Title: 32px-36px mobile (tight 1.18 line-height), 52px desktop */}
            <h1
              className="heading-hero"
              style={{
                marginBottom: '1.3rem',
              }}
            >
              Connecting Capital & Markets.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #F0D78C 50%, #C5A059 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Empowering Enterprise.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="body-prose-dark"
              style={{
                marginBottom: '2.2rem',
              }}
            >
              Connecting discerning investors with high-growth companies in their targeted sectors, backed by integrated operations in medicine supply chain logistics, Thailand healthcare access, prime real estate, and cross-border ventures.
            </p>

            {/* CTAs: Stack full width with 48px touch targets on mobile, horizontal on desktop */}
            <div className="cta-button-group">
              <button
                onClick={navigateToServices}
                className="btn-gold btn-responsive"
              >
                Explore Our Services
              </button>

              <button
                onClick={navigateToContact}
                className="btn-outline btn-responsive"
              >
                Contact Us <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
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
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-display)',
            fontWeight: '600',
            letterSpacing: '0.15em',
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
          padding: 'clamp(3.5rem, 6vw, 6.5rem) 0',
          ...fadeStyle('2'),
        }}
      >
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          {/* Eyebrow */}
          <div
            className="eyebrow-badge"
            style={{
              marginBottom: '1rem',
            }}
          >
            Who We Are
          </div>

          {/* Section H2: 24px-28px mobile, 36px desktop */}
          <h2
            className="heading-section-light"
            style={{
              marginBottom: '1.4rem',
            }}
          >
            Connecting Investors, Enterprises, and Vital Global Resources
          </h2>

          {/* Body Text: 15px mobile, 16px desktop, 65ch line length limit */}
          <p
            className="body-prose-light"
            style={{
              margin: '0 auto',
            }}
          >
            From aligning investors with high-potential companies across strategic sectors, to managing critical medicine and logistics supply chains, facilitating patient access to top hospitals in Thailand, developing prime Thai real estate, and driving corporate advisory and retail distribution — AVARA creates lasting institutional value across borders.
          </p>
        </div>
      </section>

      {/* Responsive & Animation Keyframes */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.35; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.85; transform: translateX(-50%) translateY(6px); }
        }
        @media (max-width: 960px) {
          .hero-spinning-earth-bg {
            right: -22% !important;
            width: 480px !important;
            height: 480px !important;
            opacity: 0.6 !important;
          }
        }
        @media (max-width: 640px) {
          .hero-spinning-earth-bg {
            right: -35% !important;
            top: 50% !important;
            width: 320px !important;
            height: 320px !important;
            opacity: 0.25 !important;
          }
          .hero-content-padding {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
