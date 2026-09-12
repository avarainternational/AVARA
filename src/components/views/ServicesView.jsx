import React, { useEffect, useRef, useState } from 'react';
import { Globe2, Truck, Building2, ShoppingBag, Package, ChevronRight } from 'lucide-react';
import globalTradingImg from '../../assets/services/global-trading.jpg';
import logisticsImg from '../../assets/services/logistics.jpg';
import realEstateImg from '../../assets/services/real-estate.jpg';
import ecommerceImg from '../../assets/services/ecommerce.jpg';
import consultingImg from '../../assets/services/consulting.jpg';

const services = [
  {
    icon: <Globe2 size={22} />,
    color: '#C5A059',
    image: globalTradingImg || '/assets/services/global-trading.jpg',
    title: 'Global Trading & Distribution',
    description:
      'Importing and exporting a diverse range of products including agricultural goods, consumer electronics, construction materials, and raw industrial materials across international borders.',
    tags: ['Import/Export', 'Consumer Goods', 'Raw Materials'],
  },
  {
    icon: <Truck size={22} />,
    color: '#C5A059',
    image: logisticsImg || '/assets/services/logistics.jpg',
    title: 'End-to-End Logistics',
    description:
      'Comprehensive freight services by land, water, and air. We handle customs clearance, warehousing, and complex supply chain requirements on a global scale.',
    tags: ['Freight', 'Customs', 'Warehousing'],
  },
  {
    icon: <Building2 size={22} />,
    color: '#C5A059',
    image: realEstateImg || '/assets/services/real-estate.jpg',
    title: 'Real Estate & Properties',
    description:
      'Procuring, developing, and managing premium real estate properties. We handle everything from sales and mortgages to long-term property development and improvement.',
    tags: ['Development', 'Sales', 'Management'],
  },
  {
    icon: <ShoppingBag size={22} />,
    color: '#C5A059',
    image: ecommerceImg || '/assets/services/ecommerce.jpg',
    title: 'E-Commerce & Retail',
    description:
      'Operating dynamic e-commerce platforms and retail channels. We distribute consumer goods domestically and internationally through major digital marketplaces.',
    tags: ['Online Retail', 'Marketplaces', 'Distribution'],
  },
  {
    icon: <Package size={22} />,
    color: '#C5A059',
    image: consultingImg || '/assets/services/consulting.jpg',
    title: 'Business Consulting',
    description:
      'Providing expert consultancy in document preparation, marketing strategy, e-commerce operations, and international trade expansion for businesses of all sizes.',
    tags: ['Strategy', 'Marketing', 'Trade Advisory'],
  },
];

export default function ServicesView() {
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
      { threshold: 0.1 }
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
          {/* Eyebrow: 11px mobile, 0.08em tracking */}
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            What We Do
          </div>

          {/* Hero H1: fluid clamp */}
          <h1
            className="heading-hero"
            style={{
              maxWidth: '850px',
              margin: '0 auto 1.3rem',
            }}
          >
            Our Core Capabilities
          </h1>

          {/* Body: fluid 15px-16px, 65ch line length limit */}
          <p
            className="body-prose-dark"
            style={{
              margin: '0 auto',
            }}
          >
            A comprehensive suite of institutional services engineered to bridge global markets and deliver unmatched operational value across industries.
          </p>
        </div>
      </section>

      {/* ─── SERVICES GRID WITH IMAGES ─── */}
      <section style={{ background: '#F8FAFC', padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
        <div className="container">
          <div className="services-responsive-grid">
            {services.map((service, idx) => (
              <div
                key={idx}
                ref={(el) => (refs.current[idx] = el)}
                data-idx={idx}
                className="service-card-item"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.06)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  ...fadeStyle(idx, 0.08 * idx),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                  const img = e.currentTarget.querySelector('.service-card-img');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
                  const img = e.currentTarget.querySelector('.service-card-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Visual Image Banner */}
                <div
                  style={{
                    position: 'relative',
                    height: '200px',
                    width: '100%',
                    overflow: 'hidden',
                    background: '#0B132B',
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onError={(e) => {
                      e.target.style.opacity = '0.9';
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(11, 19, 43, 0.1) 0%, rgba(11, 19, 43, 0.65) 100%)',
                    }}
                  />

                  {/* Floating Category Icon Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(11, 19, 43, 0.85)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(197, 160, 89, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C5A059',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Card Content Body: 20px internal padding on mobile, 32px on desktop */}
                <div
                  className="service-card-body"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  {/* H3 Title: fluid clamp 18px-22px, weight 600 */}
                  <h3
                    className="heading-card"
                    style={{
                      color: '#0F172A',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description: fluid 15px-16px, 1.6-1.65 line-height, #475569 */}
                  <p
                    className="body-prose-light"
                    style={{
                      marginBottom: '1.4rem',
                      flexGrow: 1,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          color: '#0F172A',
                          background: 'rgba(197, 160, 89, 0.12)',
                          border: '1px solid rgba(197, 160, 89, 0.3)',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '980px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        style={{
          background: '#FFFFFF',
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0',
          textAlign: 'center',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="container" style={{ maxWidth: '750px' }}>
          {/* Eyebrow */}
          <div className="eyebrow-badge" style={{ marginBottom: '0.9rem' }}>
            Partner With Us
          </div>

          <h2
            className="heading-section-light"
            style={{
              marginBottom: '1.1rem',
            }}
          >
            Ready to scale your business globally?
          </h2>

          <p
            className="body-prose-light"
            style={{
              margin: '0 auto 2rem',
            }}
          >
            Let our international trade and supply chain specialists help you navigate cross-border opportunities with confidence.
          </p>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold btn-responsive"
          >
            Get in Touch <ChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* Component Specific Responsive Rules */}
      <style>{`
        .services-responsive-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .service-card-body {
          padding: 1.25rem; /* 20px mobile breathing room */
        }
        @media (min-width: 640px) {
          .services-responsive-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
          }
          .service-card-body {
            padding: 2rem 1.8rem 2.2rem;
          }
        }
      `}</style>
    </div>
  );
}
