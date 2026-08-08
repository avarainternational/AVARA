import React, { useState } from 'react';
import { X, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, mode = 'access' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    entityType: 'Family Office',
    investorId: '',
    accessKey: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '480px',
          padding: '2.5rem',
          position: 'relative',
          background: '#FFFFFF',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: '#F5F5F7',
            border: 'none',
            color: '#6E6E73',
            cursor: 'pointer',
            padding: '0.4rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.2rem auto',
              }}
            >
              <CheckCircle2 size={28} color="var(--gold-dark)" />
            </div>

            <h3 style={{ fontSize: '1.4rem', color: '#1D1D1F', fontWeight: '700', marginBottom: '0.5rem' }}>
              {mode === 'portal' ? 'Key Dispatched' : 'Request Received'}
            </h3>

            <p style={{ color: '#6E6E73', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.8rem' }}>
              {mode === 'portal'
                ? 'Your security key has been sent to your primary authentication device.'
                : 'A Managing Partner will reach out within 24 hours.'}
            </p>

            <button onClick={handleReset} className="btn-apple-gold" style={{ width: '100%', justifyContent: 'center' }}>
              Done
            </button>
          </div>
        ) : (
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--gold-dark)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              {mode === 'portal' ? 'Client Portal' : 'AVARA Access'}
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#1D1D1F', fontWeight: '700', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
              {mode === 'portal' ? 'Institutional Sign In' : 'Request Confidential Access'}
            </h3>

            <p style={{ color: '#6E6E73', fontSize: '0.88rem', marginBottom: '1.8rem', lineHeight: 1.45 }}>
              {mode === 'portal'
                ? 'Access real-time NAV statements and capital notices.'
                : 'Request prospectus reports and accredited investment mandates.'}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {mode === 'portal' ? (
                <>
                  <div>
                    <label style={labelStyle}>Investor Account ID</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ACC-8849-ZUR"
                      value={formData.investorId}
                      onChange={(e) => setFormData({ ...formData, investorId: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Encrypted Access Key</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••••••"
                      value={formData.accessKey}
                      onChange={(e) => setFormData({ ...formData, accessKey: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Lord Alistair Sterling"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Institutional Email</label>
                    <input
                      type="email"
                      required
                      placeholder="sterling@sterlingoffice.ch"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Entity Type</label>
                    <select
                      value={formData.entityType}
                      onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="Family Office">Family Office</option>
                      <option value="Sovereign Fund">Sovereign Wealth</option>
                      <option value="Pension Fund">Pension / Endowment</option>
                      <option value="Ultra HNW">High-Net-Worth</option>
                    </select>
                  </div>
                </>
              )}

              <button type="submit" className="btn-apple-gold" style={{ justifyContent: 'center', width: '100%', marginTop: '0.5rem' }}>
                {mode === 'portal' ? 'Sign In' : 'Submit Request'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.78rem',
  color: '#6E6E73',
  fontWeight: '500',
  marginBottom: '0.3rem',
};

const inputStyle = {
  width: '100%',
  background: '#F5F5F7',
  border: '1px solid rgba(0,0,0,0.06)',
  borderRadius: '10px',
  padding: '0.75rem 0.9rem',
  color: '#1D1D1F',
  fontSize: '0.88rem',
  outline: 'none',
  fontFamily: 'var(--font-sans)',
};
