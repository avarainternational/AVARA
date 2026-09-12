import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export default function ContactView() {
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

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    borderRadius: '12px',
    border: '1px solid #E2E8F0',
    outline: 'none',
    fontSize: '16px', // Strict mobile requirement: 16px prevents iOS Safari focus auto-zoom
    fontFamily: 'var(--font-sans)',
    color: '#0F172A',
    background: '#FFFFFF',
    minHeight: '48px', // Thumb tap friendly
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxSizing: 'border-box',
  };

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
            Reach Out
          </div>

          {/* Hero H1 */}
          <h1
            className="heading-hero"
            style={{
              maxWidth: '850px',
              margin: '0 auto 1.3rem',
            }}
          >
            Let's Build Something Together.
          </h1>

          {/* Body */}
          <p
            className="body-prose-dark"
            style={{
              margin: '0 auto',
            }}
          >
            Partner with AVARA International to unlock new global supply channels and investment horizons.
          </p>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ─── */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(3.5rem, 6vw, 6rem) 0' }}>
        <div
          ref={(el) => (refs.current[0] = el)}
          data-idx="0"
          className="container contact-main-layout"
          style={{
            ...fadeStyle('0'),
          }}
        >
          {/* Left Column: Contact Information */}
          <div>
            <div className="eyebrow-badge" style={{ marginBottom: '0.8rem' }}>
              Get In Touch
            </div>

            <h2
              className="heading-section-light"
              style={{
                marginBottom: '0.8rem',
              }}
            >
              Global Headquarters & Inquiries
            </h2>

            <p className="body-prose-light" style={{ marginBottom: '2.2rem' }}>
              Our executive team and cross-border specialists are ready to discuss your next strategic project or distribution partnership.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
              {[
                {
                  icon: <MapPin size={22} />,
                  title: 'Headquarters',
                  text: '123 Global Commerce Blvd\nSuite 500\nBusiness District, 10000',
                },
                {
                  icon: <Mail size={22} />,
                  title: 'Email Us',
                  text: 'contact@avara-global.com\npartnerships@avara-global.com',
                },
                {
                  icon: <Phone size={22} />,
                  title: 'Call Us',
                  text: '+1 (555) 123-4567\nMon-Fri, 9am — 6pm',
                },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(197, 160, 89, 0.12)',
                      border: '1px solid rgba(197, 160, 89, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#C5A059',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: '600',
                        color: '#0F172A',
                        marginBottom: '0.25rem',
                        fontSize: '1rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-sans)', color: '#475569', lineHeight: 1.55, fontSize: '0.92rem', whiteSpace: 'pre-line' }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            className="contact-form-card"
            style={{
              background: '#F8FAFC',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            }}
          >
            <form
              style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Responsive Name Grid: 1 col on mobile, 2 cols on >= 640px */}
              <div className="contact-name-grid">
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      marginBottom: '0.4rem',
                      color: '#1E293B',
                    }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#C5A059';
                      e.target.style.boxShadow = '0 0 0 3px rgba(197, 160, 89, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E2E8F0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      marginBottom: '0.4rem',
                      color: '#1E293B',
                    }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#C5A059';
                      e.target.style.boxShadow = '0 0 0 3px rgba(197, 160, 89, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E2E8F0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    marginBottom: '0.4rem',
                    color: '#1E293B',
                  }}
                >
                  Work Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#C5A059';
                    e.target.style.boxShadow = '0 0 0 3px rgba(197, 160, 89, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    marginBottom: '0.4rem',
                    color: '#1E293B',
                  }}
                >
                  Inquiry Type
                </label>
                <select
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2364748B' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1.2rem center',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#C5A059';
                    e.target.style.boxShadow = '0 0 0 3px rgba(197, 160, 89, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option>Global Trading & Distribution</option>
                  <option>End-to-End Logistics & Freight</option>
                  <option>Real Estate & Properties</option>
                  <option>E-Commerce & Retail Partnerships</option>
                  <option>Business Consulting</option>
                  <option>Strategic Venture Opportunity</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    marginBottom: '0.4rem',
                    color: '#1E293B',
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your organization and how we can collaborate..."
                  rows={4}
                  style={{ ...inputStyle, minHeight: '110px', resize: 'vertical' }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#C5A059';
                    e.target.style.boxShadow = '0 0 0 3px rgba(197, 160, 89, 0.15)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#E2E8F0';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Primary Gold Submit Button: full-width on mobile, min 48px height */}
              <button
                type="submit"
                className="btn-gold btn-responsive"
                style={{
                  marginTop: '0.4rem',
                }}
              >
                Send Message <ChevronRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Component Specific Responsive Rules */}
      <style>{`
        .contact-main-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .contact-form-card {
          padding: 1.25rem; /* 20px on mobile */
        }
        .contact-name-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px) {
          .contact-name-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.2rem;
          }
        }
        @media (min-width: 768px) {
          .contact-main-layout {
            grid-template-columns: 1fr 1.3fr;
            gap: 4rem;
          }
          .contact-form-card {
            padding: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}
