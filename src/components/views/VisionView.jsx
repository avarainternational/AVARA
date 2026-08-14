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
    <div style={{ overflow: 'hidden' }}>
      {/* ─── HERO BANNER ─── */}
      <section
        style={{
          background: 'linear-gradient(165deg, #0a0f1a 0%, #111827 40%, #1a2540 100%)',
          padding: 'clamp(8rem, 14vw, 12rem) 2rem clamp(4rem, 8vw, 7rem)',
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
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              color: '#D4AF37',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Our Purpose
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '700',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              maxWidth: '800px',
              margin: '0 auto 1.5rem',
            }}
          >
            Building the Future of Global Commerce.
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            At AVARA, we believe that the flow of goods and services should be seamless, transparent, and empowering.
          </p>
        </div>
      </section>


        {/* ─── MISSION STATEMENT ─── */}
      <section
        ref={(el) => (refs.current[11] = el)}
        data-idx="11"
        style={{
          background: '#FFFFFF',
          padding: 'clamp(2rem, 4vw, 4rem) 2rem clamp(4rem, 8vw, 6rem)',
          ...fadeStyle('11'),
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: '700',
              color: '#1D1D1F',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Our vision is to become the world's most trusted partner in international trade, logistics, and multi-industry investment.
          </h2>
          <p style={{ color: '#6E6E73', fontSize: '1.1rem', lineHeight: 1.7 }}>
            We connect buyers and sellers, streamline complex supply chains, and open new markets — all while building lasting relationships rooted in trust, transparency, and shared success.
          </p>
        </div>
      </section>

      {/* ─── PILLARS ─── */}
      <section style={{ background: '#F8F9FA', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#D4AF37',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Strategic Pillars
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '700', color: '#1D1D1F', letterSpacing: '-0.02em' }}>
              How We Achieve Our Vision
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                ref={(el) => (refs.current[idx + 12] = el)}
                data-idx={idx + 12}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '2rem',
                  alignItems: 'start',
                  background: '#FFFFFF',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  ...fadeStyle(idx + 12, 0.12 * idx),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, #D4AF37, #F0D78C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                  }}
                >
                  {pillar.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: '700',
                      color: '#1D1D1F',
                      marginBottom: '0.8rem',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p style={{ color: '#6E6E73', lineHeight: 1.7, fontSize: '1rem' }}>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
