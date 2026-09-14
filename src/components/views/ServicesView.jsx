import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Truck, HeartPulse, Building2, Briefcase, ShoppingBag, ChevronRight, Sparkles } from 'lucide-react';
import investmentImg from '../../assets/services/investment.jpg';
import logisticsImg from '../../assets/services/logistics.jpg';
import healthcareImg from '../../assets/services/healthcare.jpg';
import realEstateImg from '../../assets/services/real-estate.jpg';
import consultingImg from '../../assets/services/consulting.jpg';
import ecommerceImg from '../../assets/services/ecommerce.jpg';

const services = [
  {
    icon: <TrendingUp size={22} />,
    color: '#D4AF37',
    image: investmentImg,
    isFlagship: true,
    badgeText: 'Main Core Focus',
    title: 'Investment & Capital Connectivity',
    description:
      'Empowering investors to deploy capital into their preferred sectors while connecting high-growth companies with strategic funding. We facilitate high-impact cross-border ventures, syndicate capital, and structure long-term growth partnerships.',
    tags: ['Investor Matchmaking', 'Direct Investment', 'Venture Growth', 'Cross-Border Capital'],
  },
  {
    icon: <Truck size={22} />,
    color: '#C5A059',
    image: logisticsImg,
    isFlagship: false,
    title: 'End-to-End Logistics & Medicine Supply Chain',
    description:
      'Comprehensive multimodal freight by land, sea, and air with integrated customs clearance and bonded warehousing. We manage complex international supply chains with dedicated capabilities for pharmaceuticals and vital medical supplies.',
    tags: ['Medicine Supply Chain', 'Freight & Customs', 'Cold Chain Warehousing'],
  },
  {
    icon: <HeartPulse size={22} />,
    color: '#C5A059',
    image: healthcareImg,
    isFlagship: false,
    title: 'International Healthcare Facilitation',
    description:
      'A trusted concierge bridging patients and families with world-renowned, JCI-accredited hospitals and top specialist physicians in Thailand. We coordinate doctor consultations, hospital admissions, treatment plans, and medical travel logistics.',
    tags: ['Top Thailand Hospitals', 'Medical Referral', 'Patient Concierge'],
  },
  {
    icon: <Building2 size={22} />,
    color: '#C5A059',
    image: realEstateImg,
    isFlagship: false,
    title: 'Real Estate in Thailand',
    description:
      'Procuring, developing, and managing prime residential, commercial, and hospitality properties across Thailand. We guide regional and international investors through property acquisition, title due diligence, and asset yield optimization.',
    tags: ['Thailand Property', 'Development', 'Asset Management'],
  },
  {
    icon: <Briefcase size={22} />,
    color: '#C5A059',
    image: consultingImg,
    isFlagship: false,
    title: 'Business Consulting & Market Entry',
    description:
      'Expert corporate advisory for cross-border expansion into Southeast Asian markets. We provide comprehensive guidance on company registration, regulatory compliance, trade documentation, and operational scaling.',
    tags: ['Corporate Advisory', 'Market Entry', 'Trade Compliance'],
  },
  {
    icon: <ShoppingBag size={22} />,
    color: '#C5A059',
    image: ecommerceImg,
    isFlagship: false,
    title: 'E-Commerce & Retail Distribution',
    description:
      'Operating dynamic digital retail channels and regional distribution networks. We connect leading consumer brands and healthcare essentials with major international e-commerce platforms and retail outlets.',
    tags: ['Digital Retail', 'Marketplace Channels', 'Distribution'],
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
          {/* Eyebrow */}
          <div className="eyebrow-badge" style={{ marginBottom: '1rem' }}>
            What We Do
          </div>

          {/* Hero H1 */}
          <h1
            className="heading-hero"
            style={{
              maxWidth: '850px',
              margin: '0 auto 1.3rem',
            }}
          >
            Our Core Capabilities
          </h1>

          {/* Body */}
          <p
            className="body-prose-dark"
            style={{
              margin: '0 auto',
            }}
          >
            A multi-industry conglomerate focused on connecting investors with high-potential companies, advancing medicine supply chains, facilitating premier Thai healthcare access, and developing cross-border assets.
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
                className={`service-card-item ${service.isFlagship ? 'flagship-service-card' : ''}`}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: service.isFlagship
                    ? '1.5px solid rgba(212, 175, 55, 0.45)'
                    : '1px solid rgba(0,0,0,0.06)',
                  boxShadow: service.isFlagship
                    ? '0 10px 30px rgba(197, 160, 89, 0.12)'
                    : '0 4px 20px rgba(0,0,0,0.04)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  ...fadeStyle(idx, 0.08 * idx),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = service.isFlagship
                    ? '0 22px 48px rgba(197, 160, 89, 0.22)'
                    : '0 20px 40px rgba(0,0,0,0.08)';
                  const img = e.currentTarget.querySelector('.service-card-img');
                  if (img) img.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = service.isFlagship
                    ? '0 10px 30px rgba(197, 160, 89, 0.12)'
                    : '0 4px 20px rgba(0,0,0,0.04)';
                  const img = e.currentTarget.querySelector('.service-card-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                {/* Visual Image Banner */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
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

                  {/* Flagship Badge if applicable */}
                  {service.isFlagship && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'linear-gradient(135deg, #D4AF37 0%, #F59E0B 100%)',
                        color: '#070B14',
                        padding: '0.32rem 0.75rem',
                        borderRadius: '980px',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        letterSpacing: '0.04em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        textTransform: 'uppercase',
                      }}
                    >
                      <Sparkles size={12} />
                      <span>{service.badgeText}</span>
                    </div>
                  )}

                  {/* Floating Category Icon Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(11, 19, 43, 0.88)',
                      backdropFilter: 'blur(12px)',
                      border: service.isFlagship
                        ? '1.5px solid #D4AF37'
                        : '1px solid rgba(197, 160, 89, 0.35)',
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

                {/* Card Content Body */}
                <div
                  className="service-card-body"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  {/* H3 Title */}
                  <h3
                    className="heading-card"
                    style={{
                      color: '#0F172A',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
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
                          background: service.isFlagship
                            ? 'rgba(212, 175, 55, 0.16)'
                            : 'rgba(197, 160, 89, 0.12)',
                          border: service.isFlagship
                            ? '1px solid rgba(212, 175, 55, 0.45)'
                            : '1px solid rgba(197, 160, 89, 0.3)',
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
            Ready to deploy capital or scale your enterprise?
          </h2>

          <p
            className="body-prose-light"
            style={{
              margin: '0 auto 2rem',
            }}
          >
            Whether you are an investor seeking vetted opportunities, a company seeking growth capital, or in need of specialized cross-border logistics and healthcare connectivity, our team is here to assist.
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
          padding: 1.25rem;
        }
        @media (min-width: 640px) {
          .services-responsive-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
          }
          .service-card-body {
            padding: 2rem 1.8rem 2.2rem;
          }
        }
      `}</style>
    </div>
  );
}
