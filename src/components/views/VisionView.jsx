import React, { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    num: '01',
    title: 'Global Integration',
    description:
      'We aim to deeply integrate emerging and developed markets by building robust supply chains, state-of-the-art e-commerce channels, and comprehensive distribution networks that span continents.',
  },
  {
    num: '02',
    title: 'Sustainable Growth',
    description:
      'Whether we are managing real estate, trading essential commodities, or providing business consultancy, our foundational goal is sustainable, long-term growth for our partners, clients, and communities.',
  },
  {
    num: '03',
    title: 'Operational Excellence',
    description:
      'From customs clearance at international ports to delivering consumer goods via modern online platforms, we strive for unparalleled operational excellence in every transaction.',
  },
];

export default function VisionView() {
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
    <div style={{ overflow: 'hidden', fontFamily: 'var(--font-sans)' }}>
      {/* ─── HERO BANNER ─── */}
      <section
        style={{
          background: 'linear-gradient(165deg, #070B14 0%, #0D1527 45%, #131F3B 100%)',
          padding: 'clamp(5rem, 10vw, 9rem) 0 clamp(3rem, 6vw, 5rem)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Eyebrow */}
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            Our Purpose
          </div>

          {/* Hero H1 */}
          <h1
            className="heading-hero"
            style={{
              maxWidth: '850px',
              margin: '0 auto 1.3rem',
            }}
          >
            Building the Future of Global Commerce.
          </h1>

          {/* Body Description */}
          <p
            className="body-prose-dark"
            style={{
              margin: '0 auto',
            }}
          >
            At AVARA, we believe that the flow of goods, ideas, and services should be seamless, transparent, and empowering for communities worldwide.
          </p>
        </div>
      </section>

      {/* ─── MISSION STATEMENT ─── */}
      <section
        ref={(el) => (refs.current[11] = el)}
        data-idx="11"
        style={{
          background: '#FFFFFF',
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
          ...fadeStyle('11'),
        }}
      >
        <div className="container" style={{ maxWidth: '920px', textAlign: 'center' }}>
          {/* Eyebrow */}
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            Long-Term Vision
          </div>

          <h2
            className="heading-section-light"
            style={{
              marginBottom: '1.4rem',
            }}
          >
            To become the world's most trusted partner in international trade, logistics, and multi-industry investment.
          </h2>

          <p
            className="body-prose-light"
            style={{
              margin: '0 auto',
            }}
          >
            We connect buyers and sellers, streamline complex supply chains, and open new markets — all while building lasting relationships rooted in trust, transparency, and shared success.
          </p>
        </div>
      </section>

      {/* ─── PILLARS ─── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3.5rem, 6vw, 6rem) 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '0.8rem' }}>
              Strategic Pillars
            </div>
            <h2 className="heading-section-light">
              How We Achieve Our Vision
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                ref={(el) => (refs.current[idx + 12] = el)}
                data-idx={idx + 12}
                className="pillar-card-responsive"
                style={{
                  alignItems: 'start',
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  ...fadeStyle(idx + 12, 0.12 * idx),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                }}
              >
                <div
                  className="pillar-number-responsive"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700',
                    color: '#C5A059',
                    lineHeight: 1,
                  }}
                >
                  {pillar.num}
                </div>
                <div>
                  <h3
                    className="heading-card"
                    style={{
                      color: '#0F172A',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="body-prose-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Specific Responsive Rules */}
      <style>{`
        .pillar-card-responsive {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding: 1.25rem; /* 20px on mobile */
        }
        .pillar-number-responsive {
          font-size: 2.2rem;
        }
        @media (min-width: 640px) {
          .pillar-card-responsive {
            display: grid;
            grid-template-columns: 80px 1fr;
            gap: 2.2rem;
            padding: 2.4rem 2rem;
          }
          .pillar-number-responsive {
            font-size: 2.8rem;
          }
        }
      `}</style>
    </div>
  );
}
