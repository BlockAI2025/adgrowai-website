import React, { useState } from 'react';
import CTABanner from '../../components/Marketing/CTABanner';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
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
      <section className="mkt-hero" style={{ paddingBottom: '40px' }}>
        <div className="mkt-container">
          <span className="mkt-hero-badge">
            <span>&#x1F4AC;</span>
            <span>Contact</span>
          </span>
          <h1 className="mkt-hero-title">
            Get in <span>touch</span>
          </h1>
          <p className="mkt-hero-subtitle">
            Questions, partnerships, or early access — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="mkt-contact-grid">
            {/* Form */}
            <div>
              {formStatus === 'success' ? (
                <div className="mkt-waitlist-success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <h2>Message sent!</h2>
                  <p>We'll get back to you within 24 hours.</p>
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
                    <label className="mkt-form-label">Subject *</label>
                    <select name="subject" className="mkt-form-select" required>
                      <option value="">Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Support</option>
                      <option value="enterprise">Enterprise Sales</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mkt-form-group">
                    <label className="mkt-form-label">Message *</label>
                    <textarea
                      name="message"
                      className="mkt-form-textarea"
                      required
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mkt-btn mkt-btn-primary mkt-btn-lg"
                    disabled={formStatus === 'submitting'}
                    style={{ width: '100%' }}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                  {formStatus === 'error' && (
                    <p style={{ color: '#EF4444', marginTop: '12px', fontSize: '14px' }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <div className="mkt-contact-info-item">
                <div className="mkt-contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="mkt-contact-info-content">
                  <h3>Email</h3>
                  <p>aman@adgrowai.com</p>
                </div>
              </div>

              <div className="mkt-contact-info-item">
                <div className="mkt-contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="mkt-contact-info-content">
                  <h3>Response Time</h3>
                  <p>We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="mkt-contact-info-item">
                <div className="mkt-contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="mkt-contact-info-content">
                  <h3>Registered Address</h3>
                  <p>
                    AdgrowAI Limited<br />
                    NZ Company No. 9418222 | NZBN 9429053564504<br />
                    117 Wiseley Road, West Harbour<br />
                    Auckland 0618, New Zealand
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Want to stay updated?"
        subtitle="Join our waitlist for product updates and early access."
        primaryCta="Join Waitlist"
        primaryLink="/waitlist"
      />
    </>
  );
};

export default ContactPage;
