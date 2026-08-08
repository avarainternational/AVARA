import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const holdings = [
  {
    id: 1,
    name: 'Placeholder Asset 1.',
    category: 'Placeholder 1',
    stage: 'Placeholder Stage 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    metric: 'Placeholder Metric 1',
    placeholder: '[ ASSET IMAGE PLACEHOLDER 1 ]',
  },
  {
    id: 2,
    name: 'Placeholder Asset 2.',
    category: 'Placeholder 2',
    stage: 'Placeholder Stage 2',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    metric: 'Placeholder Metric 2',
    placeholder: '[ ASSET IMAGE PLACEHOLDER 2 ]',
  },
  {
    id: 3,
    name: 'Placeholder Asset 3.',
    category: 'Placeholder 3',
    stage: 'Placeholder Stage 3',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
    metric: 'Placeholder Metric 3',
    placeholder: '[ ASSET IMAGE PLACEHOLDER 3 ]',
  },
  {
    id: 4,
    name: 'Placeholder Asset 4.',
    category: 'Placeholder 1',
    stage: 'Placeholder Stage 4',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
    metric: 'Placeholder Metric 4',
    placeholder: '[ ASSET IMAGE PLACEHOLDER 4 ]',
  },
];

const categoryTabs = ['All Placeholders', 'Placeholder 1', 'Placeholder 2', 'Placeholder 3'];

export default function PortfolioShowcase({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('All Placeholders');

  const filteredHoldings = activeCategory === 'All Placeholders'
    ? holdings
    : holdings.filter(h => h.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--gold-dark)', marginBottom: '0.4rem' }}>
            Placeholder Track Record.
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: '700', color: '#1D1D1F', letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
            Placeholder Portfolio Showcase.
          </h2>
          <p style={{ color: '#6E6E73', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.05rem', lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>

          {/* Simple Apple Filter Tabs */}
          <div style={{ display: 'inline-flex', gap: '0.4rem', background: '#F5F5F7', padding: '0.3rem', borderRadius: 'var(--radius-pill)' }}>
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                style={{
                  background: activeCategory === tab ? '#FFFFFF' : 'transparent',
                  color: activeCategory === tab ? '#1D1D1F' : '#6E6E73',
                  border: 'none',
                  boxShadow: activeCategory === tab ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.82rem',
                  fontWeight: activeCategory === tab ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredHoldings.map((item) => (
            <div
              key={item.id}
              className="apple-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {item.stage}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#1D1D1F', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>
                  {item.name}
                </h3>
                <p style={{ color: '#6E6E73', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                  {item.description}
                </p>
              </div>

              {/* Placeholder Card */}
              <div className="placeholder-asset" style={{ margin: '0.5rem 0 1.2rem 0' }}>
                {item.placeholder}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1D1D1F' }}>
                  {item.metric}
                </span>
                <button
                  onClick={() => onOpenModal('access')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#06c',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.2rem',
                    padding: 0,
                  }}
                >
                  Placeholder link <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
