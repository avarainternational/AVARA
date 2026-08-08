import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const pillars = [
  {
    id: 'p1',
    category: 'Placeholder 1',
    title: 'Placeholder Title 1.',
    tagline: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    metric: 'Placeholder Metric 1',
    placeholder: '[ PLACEHOLDER GRAPHIC 1 ]',
  },
  {
    id: 'p2',
    category: 'Placeholder 2',
    title: 'Placeholder Title 2.',
    tagline: 'Consectetur adipiscing elit.',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    metric: 'Placeholder Metric 2',
    placeholder: '[ PLACEHOLDER GRAPHIC 2 ]',
  },
  {
    id: 'p3',
    category: 'Placeholder 3',
    title: 'Placeholder Title 3.',
    tagline: 'Sed do eiusmod tempor.',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    metric: 'Placeholder Metric 3',
    placeholder: '[ PLACEHOLDER GRAPHIC 3 ]',
  },
  {
    id: 'p4',
    category: 'Placeholder 4',
    title: 'Placeholder Title 4.',
    tagline: 'Incididunt ut labore.',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    metric: 'Placeholder Metric 4',
    placeholder: '[ PLACEHOLDER GRAPHIC 4 ]',
  },
];

const categoryTabs = ['All Placeholders', 'Placeholder 1', 'Placeholder 2', 'Placeholder 3', 'Placeholder 4'];

export default function AssetPillars({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All Placeholders');

  const filteredPillars = selectedCategory === 'All Placeholders'
    ? pillars
    : pillars.filter(p => p.category === selectedCategory);

  return (
    <section id="pillars" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--gold-dark)', marginBottom: '0.4rem' }}>
            Placeholder Subtitle.
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: '700', color: '#1D1D1F', letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
            Placeholder Section Header.
          </h2>
          <p style={{ color: '#6E6E73', maxWidth: '600px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem', lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>

          {/* Apple Filter Tabs */}
          <div style={{ display: 'inline-flex', gap: '0.4rem', background: '#F5F5F7', padding: '0.3rem', borderRadius: 'var(--radius-pill)' }}>
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                style={{
                  background: selectedCategory === tab ? '#FFFFFF' : 'transparent',
                  color: selectedCategory === tab ? '#1D1D1F' : '#6E6E73',
                  border: 'none',
                  boxShadow: selectedCategory === tab ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                  padding: '0.5rem 1.1rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.82rem',
                  fontWeight: selectedCategory === tab ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="apple-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                minHeight: '380px',
              }}
            >
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--gold-dark)', fontWeight: '700', marginBottom: '0.4rem' }}>
                  {pillar.metric}
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#1D1D1F', letterSpacing: '-0.02em', marginBottom: '0.3rem' }}>
                  {pillar.title}
                </h3>
                <div style={{ fontSize: '0.92rem', color: '#1D1D1F', fontWeight: '500', marginBottom: '0.8rem' }}>
                  {pillar.tagline}
                </div>
                <p style={{ color: '#6E6E73', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  {pillar.description}
                </p>
              </div>

              {/* Placeholder Graphic Box */}
              <div className="placeholder-asset" style={{ margin: '1rem 0 0 0' }}>
                {pillar.placeholder}
              </div>

              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  onClick={() => onOpenModal('access')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#06c',
                    fontSize: '0.88rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.2rem',
                    padding: 0,
                  }}
                >
                  Placeholder link <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
