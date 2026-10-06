import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/logos/adgrow-icon.png';

const footerLinks = {
  product: [
    { label: 'Features', path: '/features' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Waitlist', path: '/waitlist' },
  ],
  company: [
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-marketing' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Data Deletion', path: '/delete-data' },
  ],
};

export default function MarketingFooter() {
  return (
    <footer className="mkt-footer">
      <div className="mkt-container">
        <div className="mkt-footer-grid">
          {/* Brand */}
          <div className="mkt-footer-brand">
            <Link to="/website" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '10px' }}>
              <img src={icon} alt="" height="36" />
              <span className="mkt-logo-text" style={{ fontSize: '22px' }}>Adgrow<span className="mkt-logo-text-ai">AI</span></span>
            </Link>
            <p>AI-powered strategy and optimization intelligence for your paid advertising campaigns.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mkt-footer-heading">Product</h3>
            {footerLinks.product.map(link => (
              <Link key={link.path} to={link.path} className="mkt-footer-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h3 className="mkt-footer-heading">Company</h3>
            {footerLinks.company.map(link => (
              <Link key={link.path} to={link.path} className="mkt-footer-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h3 className="mkt-footer-heading">Legal</h3>
            {footerLinks.legal.map(link => (
              <Link key={link.path} to={link.path} className="mkt-footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal Entity */}
        <div className="mkt-footer-legal-entity">
          <strong>AdgrowAI Limited</strong> &mdash; NZ Company No. 9418222 | NZBN 9429053564504<br />
          Registered office: 117 Wiseley Road, West Harbour, Auckland 0618, New Zealand<br />
          Contact: <a href="mailto:aman@adgrowai.com" className="mkt-footer-legal-link">aman@adgrowai.com</a>
        </div>

        <div className="mkt-footer-bottom">
          <span className="mkt-footer-copyright">
            &copy; {new Date().getFullYear()} AdgrowAI Limited. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
