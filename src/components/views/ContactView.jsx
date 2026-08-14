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
    padding: '0.9rem 1rem',
    borderRadius: '12px',
    border: '1px solid #E5E7EB',
    outline: 'none',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    background: '#FFFFFF',
    transition: 'border-color 0.2s ease',
  };

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
            Reach Out
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
            Let's Build Something Together.
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '550px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Partner with AVARA to unlock new global opportunities.
          </p>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ─── */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(4rem, 8vw, 7rem) 2rem' }}>
        <div
          ref={(el) => (refs.current[0] = el)}
          data-idx="0"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'start',
            ...fadeStyle('0'),
          }}
        >
          {/* Left — Info */}
          <div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#1D1D1F', marginBottom: '0.5rem' }}>Contact Information</h2>
            <p style={{ color: '#6E6E73', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Our team is ready to discuss your next project or partnership opportunity.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
                      width: '46px',
                      height: '46px',
                      borderRadius: '14px',
                      background: 'rgba(212, 175, 55, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#D4AF37',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: '600', color: '#1D1D1F', marginBottom: '0.3rem', fontSize: '0.95rem' }}>{item.title}</h4>
                    <p style={{ color: '#6E6E73', lineHeight: 1.5, fontSize: '0.9rem', whiteSpace: 'pre-line' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div
            style={{
              background: '#FAFAFA',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: '1px solid rgba(0,0,0,0.05)',
            }}
          >
            <form
              style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: '#1D1D1F' }}>
                    First Name
                  </label>
                  <input type="text" placeholder="John" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = '#D4AF37')} onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: '#1D1D1F' }}>
                    Last Name
                  </label>
                  <input type="text" placeholder="Doe" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = '#D4AF37')} onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: '#1D1D1F' }}>
                  Email Address
                </label>
                <input type="email" placeholder="john@company.com" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = '#D4AF37')} onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: '#1D1D1F' }}>
                  Inquiry Type
                </label>
                <select
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%236E6E73' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#D4AF37')}
                  onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                >
                  <option>General Trading</option>
                  <option>Logistics & Freight</option>
                  <option>Real Estate</option>
                  <option>Business Consulting</option>
                  <option>Partnership Opportunity</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.4rem', color: '#1D1D1F' }}>
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => (e.target.style.borderColor = '#D4AF37')}
                  onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #C5A059 100%)',
                  color: '#FFFFFF',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  padding: '0.9rem',
                  borderRadius: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '0.5rem',
                  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.3s ease',
                }}
              >
                Send Message <ChevronRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1.3fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
