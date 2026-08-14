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
    color: '#0EA5E9',
    image: globalTradingImg || '/assets/services/global-trading.jpg',
    title: 'Global Trading & Distribution',
    description:
      'Importing and exporting a diverse range of products including agricultural goods, consumer electronics, construction materials, and raw industrial materials across international borders.',
    tags: ['Import/Export', 'Consumer Goods', 'Raw Materials'],
  },
  {
    icon: <Truck size={22} />,
    color: '#8B5CF6',
    image: logisticsImg || '/assets/services/logistics.jpg',
    title: 'End-to-End Logistics',
    description:
      'Comprehensive freight services by land, water, and air. We handle customs clearance, warehousing, and complex supply chain requirements on a global scale.',
    tags: ['Freight', 'Customs', 'Warehousing'],
  },
  {
    icon: <Building2 size={22} />,
    color: '#F59E0B',
    image: realEstateImg || '/assets/services/real-estate.jpg',
    title: 'Real Estate & Properties',
    description:
      'Procuring, developing, and managing premium real estate properties. We handle everything from sales and mortgages to long-term property development and improvement.',
    tags: ['Development', 'Sales', 'Management'],
  },
  {
    icon: <ShoppingBag size={22} />,
    color: '#10B981',
    image: ecommerceImg || '/assets/services/ecommerce.jpg',
    title: 'E-Commerce & Retail',
    description:
      'Operating dynamic e-commerce platforms and retail channels. We distribute consumer goods domestically and internationally through major digital marketplaces.',
    tags: ['Online Retail', 'Marketplaces', 'Distribution'],
  },
  {
    icon: <Package size={22} />,
    color: '#EC4899',
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
            What We Do
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '700',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              maxWidth: '800px',
              margin: '0 auto 1.5rem',
            }}
          >
            Our Capabilities
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
            A comprehensive suite of services designed to bridge global markets and deliver unmatched value across industries.
          </p>
        </div>
      </section>

      {/* ─── SERVICES GRID WITH IMAGES ─── */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                ref={(el) => (refs.current[idx] = el)}
                data-idx={idx}
                className="service-card-item"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  ...fadeStyle(idx, 0.08 * idx),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.12)';
                  const img = e.currentTarget.querySelector('.service-card-img');
                  if (img) img.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
                  const img = e.currentTarget.querySelector('.service-card-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Visual Category Image Banner */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    width: '100%',
                    overflow: 'hidden',
                    background: '#0F172A',
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
                      // Fallback gracefully
                      e.target.style.opacity = '0.9';
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(10, 15, 26, 0.6) 100%)',
                    }}
                  />

                  {/* Floating Category Icon Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(10, 15, 26, 0.8)',
                      backdropFilter: 'blur(12px)',
                      border: `1px solid ${service.color}60`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: service.color,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Card Content Body */}
                <div
                  style={{
                    padding: '2rem 1.8rem 2.2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: '700',
                      color: '#1D1D1F',
                      marginBottom: '0.85rem',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: '#6E6E73',
                      lineHeight: 1.65,
                      fontSize: '0.95rem',
                      marginBottom: '1.5rem',
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
                          fontSize: '0.72rem',
                          fontWeight: '600',
                          color: service.color,
                          background: `${service.color}12`,
                          border: `1px solid ${service.color}25`,
                          padding: '0.35rem 0.75rem',
                          borderRadius: '980px',
                          letterSpacing: '0.02em',
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
          background: '#F8F9FA',
          padding: 'clamp(4rem, 8vw, 6rem) 2rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '700', color: '#1D1D1F', marginBottom: '1rem' }}>
            Ready to scale your business globally?
          </h2>
          <p style={{ color: '#6E6E73', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Let us help you navigate international markets with confidence.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #C5A059 100%)',
              color: '#FFFFFF',
              fontWeight: '600',
              fontSize: '0.9rem',
              padding: '0.85rem 2.2rem',
              borderRadius: '980px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            Get in Touch <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
