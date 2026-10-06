import React from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function PricingCard({
  tier,
  price,
  period,
  description,
  features,
  popular,
  ctaText,
  ctaLink
}) {
  return (
    <div className={`mkt-pricing-card ${popular ? 'mkt-pricing-card-popular' : ''}`}>
      {popular && <div className="mkt-pricing-popular-badge">Most Popular</div>}
      <div className="mkt-pricing-name">{tier}</div>
      <div>
        <span className="mkt-pricing-price">
          {price === 0 ? 'Free' : `$${price}`}
        </span>
        {price > 0 && <span className="mkt-pricing-period">/{period}</span>}
      </div>
      <div className="mkt-pricing-desc">{description}</div>
      <ul className="mkt-pricing-features">
        {features.map((feature, index) => (
          <li key={index} className="mkt-pricing-feature">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={ctaLink}
        className={`mkt-btn ${popular ? 'mkt-btn-primary' : 'mkt-btn-secondary'} mkt-btn-lg`}
        style={{ width: '100%' }}
      >
        {ctaText}
      </Link>
    </div>
  );
}
