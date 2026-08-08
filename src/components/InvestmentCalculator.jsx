import React, { useState } from 'react';

const strategies = [
  { id: 'p1', name: 'Placeholder Strategy 1', rate: 0.085, label: '8.5% APY' },
  { id: 'p2', name: 'Placeholder Strategy 2', rate: 0.142, label: '14.2% APY' },
  { id: 'p3', name: 'Placeholder Strategy 3', rate: 0.225, label: '22.5% APY' },
  { id: 'p4', name: 'Placeholder Strategy 4', rate: 0.284, label: '28.4% APY' },
];

export default function InvestmentCalculator({ onOpenModal }) {
  const [initialCapital, setInitialCapital] = useState(250000);
  const [years, setYears] = useState(10);
  const [selectedStrategy, setSelectedStrategy] = useState(strategies[3]);

  const totalValue = Math.round(initialCapital * Math.pow(1 + selectedStrategy.rate, years));
  const totalGain = totalValue - initialCapital;

  const formatUSD = (num) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(num);
  };

  return (
    <section id="calculator" className="section-padding" style={{ background: '#F5F5F7' }}>
      <div className="container">
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--gold-dark)', marginBottom: '0.4rem' }}>
            Placeholder Subtitle.
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: '700', color: '#1D1D1F', letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>
            Placeholder Calculator Title.
          </h2>
          <p style={{ color: '#6E6E73', maxWidth: '580px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Calculator Card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            {/* Inputs */}
            <div>
              {/* Slider 1 */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#6E6E73', fontWeight: '500' }}>Placeholder Parameter 1</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1D1D1F' }}>
                    {formatUSD(initialCapital)}
                  </span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={10000000}
                  step={50000}
                  value={initialCapital}
                  onChange={(e) => setInitialCapital(Number(e.target.value))}
                />
              </div>

              {/* Slider 2 */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#6E6E73', fontWeight: '500' }}>Placeholder Parameter 2</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1D1D1F' }}>
                    {years} Units
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
              </div>

              {/* Strategy Tabs */}
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#6E6E73', display: 'block', marginBottom: '0.6rem', fontWeight: '500' }}>Placeholder Strategy Selection</span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  {strategies.map((strat) => {
                    const active = strat.id === selectedStrategy.id;
                    return (
                      <button
                        key={strat.id}
                        onClick={() => setSelectedStrategy(strat)}
                        style={{
                          background: active ? '#F5F5F7' : '#FFFFFF',
                          border: active ? '2px solid var(--gold-primary)' : '1px solid rgba(0,0,0,0.08)',
                          borderRadius: '12px',
                          padding: '0.7rem',
                          textAlign: 'left',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <div style={{ fontSize: '0.8rem', fontWeight: '600', color: '#1D1D1F' }}>{strat.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--gold-dark)', fontWeight: '700', marginTop: '0.2rem' }}>{strat.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div
              style={{
                background: '#F5F5F7',
                borderRadius: '18px',
                padding: '2.5rem 2rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.8rem', color: '#86868B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem', fontWeight: '600' }}>
                Placeholder Projected Calculation
              </div>

              <div className="gold-gradient-text" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', fontWeight: '800', lineHeight: 1.1, marginBottom: '0.8rem' }}>
                {formatUSD(totalValue)}
              </div>

              <div style={{ fontSize: '0.95rem', color: '#1D1D1F', fontWeight: '600', marginBottom: '1.5rem' }}>
                +{formatUSD(totalGain)} Lorem Ipsum Return
              </div>

              {/* Placeholder Graph Asset */}
              <div className="placeholder-asset" style={{ background: '#FFFFFF', padding: '1.5rem', marginBottom: '1.8rem' }}>
                [ SIMULATION CHART GRAPHIC PLACEHOLDER ]
              </div>

              <button
                onClick={() => onOpenModal('access')}
                className="btn-apple-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Placeholder Consultation Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
