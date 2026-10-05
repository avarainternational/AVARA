import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import SpinningEarth3D from '../SpinningEarth3D';
import mainHeroBgImport from '../../assets/hero/mainherobackground.webp';

const mainHeroBg = mainHeroBgImport || '/assets/hero/mainherobackground.webp';

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
          backgroundColor: '#070B14',
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
        {/* ═══ Hero Background Image (Full Brightness) ═══ */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${mainHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />

        {/* ═══ 3D Spinning Globe (Right Side) ═══ */}
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
            opacity: 0.95,
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
            {/* Eyebrow: Clean typography text without tag/pill effects */}
            <div
              className="eyebrow-badge"
              style={{
                marginBottom: '1rem',
                color: '#F0D78C',
                letterSpacing: '0.14em',
                fontWeight: '600',
              }}
            >
              Global Enterprise Conglomerate
            </div>

            {/* H1 Hero Title: Sharp white and vibrant gold gradient (no filter/blur bugs) */}
            <h1
              className="heading-hero"
              style={{
                marginBottom: '1.4rem',
                color: '#FFFFFF',
              }}
            >
              Connecting Capital & Markets.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #FFF0B3 0%, #F5D061 40%, #E5A93C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                }}
              >
                Empowering Enterprise.
              </span>
            </h1>

            {/* Subheadline: Intense high-clarity pure slate-white with text shadow for crisp legibility */}
            <p
              className="body-prose-dark"
              style={{
                marginBottom: '2.4rem',
                color: '#F8FAFC',
                fontSize: 'clamp(1.02rem, 1.25vw, 1.15rem)',
                lineHeight: 1.72,
                fontWeight: '400',
                maxWidth: '65ch',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0, 0, 0, 0.9)',
              }}
            >
              Connecting discerning investors with high-growth companies in their targeted sectors, backed by integrated operations in medicine supply chain logistics, Thailand healthcare access, prime real estate, and cross-border ventures.
            </p>

            {/* CTAs: Stack full width with 48px touch targets on mobile, horizontal on desktop */}
            <div className="cta-button-group">
              <button
                onClick={navigateToServices}
                className="btn-gold btn-responsive"
                style={{
                  boxShadow: '0 4px 25px rgba(212, 175, 55, 0.45)',
                  fontWeight: '600',
                }}
              >
                Explore Our Services
              </button>

              <button
                onClick={navigateToContact}
                className="btn-outline btn-responsive"
                style={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.45)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(12px)',
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.8)',
                }}
              >
                Contact Us <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator: Intense crisp white with shadow */}
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
            color: '#F8FAFC',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)',
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
