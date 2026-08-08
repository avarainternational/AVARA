import React from 'react';

const tickerItems = [
  { symbol: 'PLACEHOLDER 1', value: '+$1,000.00', change: '+1.00%' },
  { symbol: 'PLACEHOLDER 2', value: '+$2,500.00', change: '+2.50%' },
  { symbol: 'PLACEHOLDER 3', value: '+$3,800.00', change: '+3.80%' },
  { symbol: 'PLACEHOLDER 4', value: '+$4,200.00', change: '+4.20%' },
  { symbol: 'PLACEHOLDER 5', value: '+$5,500.00', change: '+5.50%' },
];

export default function MarketTicker() {
  const list = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div
      style={{
        background: '#F5F5F7',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
        padding: '0.6rem 0',
        overflow: 'hidden',
      }}
    >
      <div className="animate-ticker">
        {list.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0 1.8rem',
              whiteSpace: 'nowrap',
              fontSize: '0.78rem',
            }}
          >
            <span style={{ color: '#86868B', fontWeight: '500' }}>{item.symbol}</span>
            <span style={{ color: '#1D1D1F', fontWeight: '600' }}>{item.value}</span>
            <span style={{ color: 'var(--gold-dark)', fontWeight: '600' }}>{item.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
