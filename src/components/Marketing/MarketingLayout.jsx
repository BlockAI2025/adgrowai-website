import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MarketingNavbar from './MarketingNavbar';
import MarketingFooter from './MarketingFooter';
import BackgroundEffects from './BackgroundEffects';

const MarketingLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');

    return () => {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      document.documentElement.setAttribute('data-theme', savedTheme);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mkt-page">
      <BackgroundEffects />
      <MarketingNavbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      <MarketingFooter />
    </div>
  );
};

export default MarketingLayout;
