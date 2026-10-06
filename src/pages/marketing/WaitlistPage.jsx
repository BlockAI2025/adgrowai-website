import React, { useState } from 'react';

const WaitlistPage = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/maqddere', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        if (window.gtag) {
          window.gtag('event', 'sign_up', { method: 'waitlist' });
        }
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="mkt-hero">
        <div className="mkt-container">
          <span className="mkt-hero-badge">
            <span>&#x1F680;</span>
            <span>Early Access</span>
          </span>
          <h1 className="mkt-hero-title">
            Be <span>first in line</span>
          </h1>
          <p className="mkt-hero-subtitle">
            Get early access to AdgrowAI and exclusive launch pricing.
          </p>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="mkt-section" style={{ paddingTop: 0 }}>
        <div className="mkt-container">
          <div className="mkt-waitlist-form">
            {formStatus === 'success' ? (
              <div className="mkt-waitlist-success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3>You're on the list!</h3>
                <p>We'll be in touch soon with updates and early access details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mkt-form-group">
                  <label className="mkt-form-label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="mkt-form-input"
                    required
                  />
                </div>
                <div className="mkt-form-group">
                  <label className="mkt-form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="mkt-form-input"
                    required
                  />
                </div>
                <div className="mkt-form-group">
                  <label className="mkt-form-label">Business Name (optional)</label>
                  <input
                    type="text"
                    name="business"
                    className="mkt-form-input"
                  />
                </div>
                <div className="mkt-form-group">
                  <label className="mkt-form-label">Where are you based? (optional)</label>
                  <input
                    type="text"
                    name="location"
                    className="mkt-form-input"
                    placeholder="e.g. Auckland, New Zealand"
                  />
                </div>
                <div className="mkt-form-group">
                  <label className="mkt-form-label">Monthly Ad Spend (optional)</label>
                  <select name="adSpend" className="mkt-form-select">
                    <option value="">Select range</option>
                    <option value="0-1000">$0 - $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-50000">$10,000 - $50,000</option>
                    <option value="50000+">$50,000+</option>
                  </select>
                </div>
                <div className="mkt-form-group">
                  <label className="mkt-form-label">Biggest Google/Meta Ads Challenge (optional)</label>
                  <textarea
                    name="challenge"
                    className="mkt-form-textarea"
                    placeholder="What's your biggest pain point with paid ads?"
                    style={{ minHeight: '80px' }}
                  />
                </div>
                <button
                  type="submit"
                  className="mkt-btn mkt-btn-primary mkt-btn-lg"
                  disabled={formStatus === 'submitting'}
                  style={{ width: '100%' }}
                >
                  {formStatus === 'submitting' ? 'Joining...' : 'Join the Waitlist'}
                </button>
                {formStatus === 'error' && (
                  <p style={{ color: '#EF4444', marginTop: '12px', fontSize: '14px', textAlign: 'center' }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Benefits */}
          <div style={{ maxWidth: '500px', margin: '48px auto 0', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px' }}>
              By joining the waitlist, you'll get:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Early access before public launch',
                'Direct input on features we build',
                'Priority support when you sign up'
              ].map((benefit, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaitlistPage;
