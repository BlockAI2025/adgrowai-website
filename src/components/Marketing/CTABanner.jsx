import React from 'react';
import { Link } from 'react-router-dom';

export default function CTABanner({
  title = "Ready to grow smarter?",
  subtitle = "Join the waitlist for early access and exclusive launch pricing.",
  primaryCta = "Join Waitlist",
  primaryLink = "/waitlist",
  secondaryCta,
  secondaryLink
}) {
  return (
    <section className="mkt-cta-banner">
      <div className="mkt-container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <div className="mkt-cta-banner-actions">
          <Link to={primaryLink} className="mkt-btn mkt-btn-primary mkt-btn-lg">
            {primaryCta}
          </Link>
          {secondaryCta && secondaryLink && (
            <Link to={secondaryLink} className="mkt-btn mkt-btn-secondary mkt-btn-lg">
              {secondaryCta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
