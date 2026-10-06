import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import icon from '../../assets/logos/adgrow-icon.png';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/features', label: 'Features' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/blog', label: 'Blog' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function MarketingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`mkt-navbar ${scrolled ? 'mkt-navbar-scrolled' : ''}`}>
      <div className="mkt-navbar-inner">
        {/* Logo */}
        <Link to="/" className="mkt-navbar-logo" aria-label="AdgrowAI">
          <img src={icon} alt="" height="32" />
          <span className="mkt-logo-text" aria-hidden="true">Adgrow<span className="mkt-logo-text-ai">AI</span></span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="mkt-navbar-links">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`mkt-navbar-link ${location.pathname === link.path ? 'mkt-navbar-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA - hidden until SaaS is in production */}
        <div className="mkt-navbar-cta">
          <Link to="/waitlist" className="mkt-btn mkt-btn-primary">Get Started</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mkt-navbar-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mkt-navbar-mobile">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="mkt-navbar-mobile-link"
            >
              {link.label}
            </Link>
          ))}
          <div className="mkt-navbar-mobile-cta">
            <Link to="/waitlist" className="mkt-btn mkt-btn-primary" style={{ width: '100%' }}>Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
