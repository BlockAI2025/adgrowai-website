import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingTiers = [
    {
      name: 'Growth',
      tagline: 'Your AI Account Manager',
      price: '$99',
      period: '/mo',
      annualPrice: '$79',
      description: 'For businesses ready to stop wasting ad spend and start scaling profitably',
      features: [
        'Up to 5 ad accounts',
        'Full AI campaign optimization',
        'Negative keyword detection',
        'Budget & match type intelligence',
        'Ad fatigue detection + copy refresh',
        'Strategy Coach (unlimited)',
        'Weekly AI performance review'
      ],
      cta: 'Start Optimizing',
      ctaLink: '/waitlist',
      highlighted: true
    },
    {
      name: 'Enterprise',
      tagline: 'For agencies & high-scale teams',
      price: 'Custom',
      period: '',
      annualPrice: 'Custom',
      description: 'Custom solutions for agencies managing multiple client accounts',
      features: [
        'Unlimited ad accounts',
        'White-label reporting',
        'Team collaboration',
        'API access',
        'Dedicated support'
      ],
      cta: 'Book Demo',
      ctaLink: '/contact',
      highlighted: false
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="mkt-hero">
        <div className="mkt-container">
          <span className="mkt-hero-badge">
            <span>&#x1F4B0;</span>
            <span>Pricing</span>
          </span>
          <h1 className="mkt-hero-title">
            Simple, <span>transparent</span> pricing
          </h1>
          <p className="mkt-hero-subtitle">
            Start optimizing your campaigns today. No hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="mkt-section" style={{ paddingTop: 0 }}>
        <div className="mkt-container">
          <div className="mkt-pricing-toggle">
            <span className={!isAnnual ? 'active' : ''}>Monthly</span>
            <button
              className="mkt-pricing-toggle-switch"
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle annual pricing"
            >
              <span className={`mkt-pricing-toggle-knob ${isAnnual ? 'annual' : ''}`}></span>
            </button>
            <span className={isAnnual ? 'active' : ''}>
              Annual <span className="mkt-pricing-save">(Save 20%)</span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="mkt-pricing-grid">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`mkt-pricing-card ${tier.highlighted ? 'highlighted' : ''}`}
              >
                {tier.highlighted && (
                  <div className="mkt-pricing-popular">Most Popular</div>
                )}

                <div className="mkt-pricing-header">
                  <h2 className="mkt-pricing-name">{tier.name}</h2>
                  <p className="mkt-pricing-tagline">{tier.tagline}</p>

                  <div className="mkt-pricing-price">
                    <span className="mkt-pricing-amount">
                      {isAnnual ? tier.annualPrice : tier.price}
                    </span>
                    {tier.period && (
                      <span className="mkt-pricing-period">{tier.period}</span>
                    )}
                  </div>

                  <p className="mkt-pricing-description">{tier.description}</p>
                </div>

                <ul className="mkt-pricing-features">
                  {tier.features.map((feature, i) => (
                    <li key={i}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.ctaLink}
                  className={`mkt-btn ${tier.highlighted ? 'mkt-btn-primary' : 'mkt-btn-secondary'} mkt-btn-full`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mkt-section" style={{ background: 'rgba(76, 111, 255, 0.03)' }}>
        <div className="mkt-container">
          <div className="mkt-section-header">
            <p className="mkt-section-label">FAQ</p>
            <h2 className="mkt-section-title">Common questions</h2>
          </div>

          <div className="mkt-faq-grid">
            <div className="mkt-faq-item">
              <h3>Can I change plans later?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
            </div>

            <div className="mkt-faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards, including Visa, Mastercard, and American Express. Enterprise clients can also pay via invoice.</p>
            </div>

            <div className="mkt-faq-item">
              <h3>Is there a long-term contract?</h3>
              <p>No. All plans are month-to-month with no long-term commitment. Annual plans are paid upfront but can be cancelled anytime.</p>
            </div>

            <div className="mkt-faq-item">
              <h3>What ad platforms do you support?</h3>
              <p>We support both Google Ads and Meta Ads with full integration. Connect your accounts securely via OAuth and get unified intelligence across both platforms from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="mkt-cta-banner">
            <h2>Ready to stop wasting ad spend?</h2>
            <p>Join the waitlist and be first to experience AI-powered campaign optimization.</p>
            <div className="mkt-cta-buttons">
              <Link to="/waitlist" className="mkt-btn mkt-btn-primary">
                Get Started
              </Link>
              <Link to="/contact" className="mkt-btn mkt-btn-secondary">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
