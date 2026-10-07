import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ChevronRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactView() {
  const [visible, setVisible] = useState({});
  const refs = useRef([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiryType: 'Investment & Capital Deployment (Connecting Investors & Companies)',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.firstName || !formData.message) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/contact@avarainternational.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'Full Name': `${formData.firstName} ${formData.lastName}`.trim(),
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Email': formData.email,
          'Inquiry Type': formData.inquiryType,
          'Message': formData.message,
          _subject: `New Website Inquiry: ${formData.inquiryType} (${formData.firstName} ${formData.lastName})`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success');
      } else {
        throw new Error(data.message || 'Transmission could not be confirmed.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage(
        'Unable to complete automatic web delivery due to network restrictions. You can retry or click below to launch your email client directly.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      inquiryType: 'Investment & Capital Deployment (Connecting Investors & Companies)',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  const mailtoFallbackUrl = `mailto:contact@avarainternational.com?subject=${encodeURIComponent(
    `Inquiry: ${formData.inquiryType} - ${formData.firstName} ${formData.lastName}`
  )}&body=${encodeURIComponent(
    `Sender: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nInquiry: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
  )}`;

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
              Head Office & Corporate Inquiries
            </h2>

            <p className="body-prose-light" style={{ marginBottom: '2.2rem' }}>
              Our executive team and cross-border specialists are ready to discuss your next strategic project, venture investment, or regional enterprise partnership.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
              {[
                {
                  icon: <MapPin size={22} />,
                  title: 'Head Office',
                  content: (
                    <div>
                      <div style={{ fontWeight: '600', color: '#0F172A', marginBottom: '0.2rem' }}>
                        AVARA CO., LTD.
                      </div>
                      <div>
                        No.11/2, Building P23, Sukhumvit Soi 23,<br />
                        Klong Toei Nua Subdistrict, Watthana District,<br />
                        Bangkok 10110, Thailand
                      </div>
                    </div>
                  ),
                },
                {
                  icon: <Phone size={22} />,
                  title: 'Telephone',
                  content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <a
                        href="tel:+66943178943"
                        style={{
                          color: '#0F172A',
                          textDecoration: 'none',
                          fontWeight: '500',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C5A059')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#0F172A')}
                      >
                        +66-9-43178943
                      </a>
                      <a
                        href="tel:+66946767344"
                        style={{
                          color: '#0F172A',
                          textDecoration: 'none',
                          fontWeight: '500',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C5A059')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#0F172A')}
                      >
                        +66-9-46767344
                      </a>
                    </div>
                  ),
                },
                {
                  icon: <Mail size={22} />,
                  title: 'Email Us',
                  content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <a
                        href="mailto:contact@avarainternational.com"
                        style={{
                          color: '#0F172A',
                          textDecoration: 'none',
                          fontWeight: '500',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#C5A059')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#0F172A')}
                      >
                        contact@avarainternational.com
                      </a>
                    </div>
                  ),
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
                    <div style={{ fontFamily: 'var(--font-sans)', color: '#475569', lineHeight: 1.55, fontSize: '0.92rem' }}>
                      {item.content}
                    </div>
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
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '1rem 0.5rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(197, 160, 89, 0.12)',
                    border: '2px solid #C5A059',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem auto',
                    color: '#C5A059',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '0.6rem',
                  }}
                >
                  Inquiry Dispatched Successfully
                </h3>

                <p
                  style={{
                    color: '#475569',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    maxWidth: '460px',
                    margin: '0 auto 1.5rem auto',
                  }}
                >
                  Thank you, <strong style={{ color: '#0F172A' }}>{formData.firstName}</strong>. Your message has been transmitted directly to{' '}
                  <strong style={{ color: '#C5A059' }}>contact@avarainternational.com</strong>.
                  Our executive team will review your requirements and respond to{' '}
                  <span style={{ color: '#0F172A', fontWeight: '600' }}>{formData.email}</span>.
                </p>

                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '1.1rem 1.25rem',
                    textAlign: 'left',
                    marginBottom: '1.8rem',
                    fontSize: '0.85rem',
                    color: '#64748B',
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ marginBottom: '0.4rem' }}>
                    <span style={{ fontWeight: '600', color: '#0F172A' }}>Inquiry Track:</span> {formData.inquiryType}
                  </div>
                  <div>
                    <span style={{ fontWeight: '600', color: '#0F172A' }}>Target Mailbox:</span> contact@avarainternational.com
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-gold btn-responsive"
                  style={{ margin: '0 auto' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
                onSubmit={handleSubmit}
              >
                {status === 'error' && (
                  <div
                    style={{
                      background: 'rgba(239, 68, 68, 0.08)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '12px',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#DC2626', fontSize: '0.9rem', fontWeight: '600' }}>
                      <AlertCircle size={18} />
                      <span>Submission Notice</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: '#475569', lineHeight: 1.5 }}>
                      {errorMessage}
                    </p>
                    <a
                      href={mailtoFallbackUrl}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.65rem 1rem',
                        borderRadius: '8px',
                        background: '#0F172A',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        marginTop: '0.2rem',
                      }}
                    >
                      <Mail size={16} /> Open in Email App to contact@avarainternational.com
                    </a>
                  </div>
                )}

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
                      First Name <span style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
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
                      Last Name <span style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
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
                    Work Email Address <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
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
                    value={formData.inquiryType}
                    onChange={(e) => setFormData((prev) => ({ ...prev, inquiryType: e.target.value }))}
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
                    <option>Investment & Capital Deployment (Connecting Investors & Companies)</option>
                    <option>Logistics & Medicine Supply Chain</option>
                    <option>International Healthcare Facilitation (Top Thailand Hospitals)</option>
                    <option>Real Estate in Thailand</option>
                    <option>Business Consulting & Market Entry</option>
                    <option>E-Commerce & Retail Distribution</option>
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
                    Message <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <textarea
                    required
                    placeholder="Tell us about your organization and how we can collaborate..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
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
                  disabled={status === 'submitting'}
                  className="btn-gold btn-responsive"
                  style={{
                    marginTop: '0.4rem',
                    opacity: status === 'submitting' ? 0.75 : 1,
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending to contact@avarainternational.com...
                    </>
                  ) : (
                    <>
                      Send Message <ChevronRight size={18} />
                    </>
                  )}
                </button>

                {/* Direct Mail Routing Assurance */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    fontSize: '0.78rem',
                    color: '#64748B',
                    marginTop: '0.2rem',
                    textAlign: 'center',
                  }}
                >
                  <Mail size={14} color="#C5A059" />
                  <span>
                    Direct destination:{' '}
                    <a
                      href="mailto:contact@avarainternational.com"
                      style={{ color: '#0F172A', fontWeight: '600', textDecoration: 'underline' }}
                    >
                      contact@avarainternational.com
                    </a>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Component Specific Responsive Rules */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
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
