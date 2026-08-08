import React from 'react';

const reviews = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Placeholder Name 1",
    role: "Placeholder Role • Location 1",
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Placeholder Name 2",
    role: "Placeholder Role • Location 2",
  },
  {
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Placeholder Name 3",
    role: "Placeholder Role • Location 3",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--gold-dark)', marginBottom: '0.4rem' }}>
            Placeholder Section.
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: '700', color: '#1D1D1F', letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
            Placeholder Reviews.
          </h2>
          <p style={{ color: '#6E6E73', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{
                background: '#F5F5F7',
                borderRadius: '18px',
                padding: '2.2rem 1.8rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
              }}
            >
              <p style={{ fontSize: '1rem', color: '#1D1D1F', lineHeight: 1.6, fontWeight: '400', marginBottom: '2rem', fontStyle: 'italic' }}>
                "{rev.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--gold-light)',
                    border: '1px solid var(--gold-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.65rem',
                    color: 'var(--gold-dark)',
                    fontWeight: '700',
                  }}
                >
                  AVATAR
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#1D1D1F', fontSize: '0.92rem' }}>
                    {rev.author}
                  </div>
                  <div style={{ color: '#86868B', fontSize: '0.78rem' }}>
                    {rev.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
