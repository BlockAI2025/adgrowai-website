// src/App.js - AdgrowAI marketing website (www.adgrowai.com).
// The SaaS app lives at app.adgrowai.com in a separate private repository.
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MarketingLayout } from './components/Marketing';
import {
  LandingPage,
  FeaturesPage,
  PricingPage,
  AboutPage,
  ContactPage,
  WaitlistPage,
  PrivacyPage as MarketingPrivacyPage,
  TermsPage,
  BlogPage,
  BlogPostPage
} from './pages/marketing';

const DeleteData = React.lazy(() => import('./components/Compliance/DeleteData'));
const Privacy = React.lazy(() => import('./components/Compliance/Privacy'));

// Login and registration happen in the app.
const SAAS_APP_URL = 'https://app.adgrowai.com';

const ExternalRedirect = ({ to }) => {
  React.useEffect(() => { window.location.href = to; }, [to]);
  return null;
};

function App() {
  React.useEffect(() => {
    document.title = 'Adgrow AI - AI-Powered Marketing Automation';
  }, []);

  return (
    <Router>
      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050810', color: '#E8ECF6' }}>Loading...</div>}>
        <Routes>
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/website" element={<Navigate to="/" replace />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/waitlist" element={<WaitlistPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/privacy-marketing" element={<MarketingPrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Route>

          <Route path="/login" element={<ExternalRedirect to={`${SAAS_APP_URL}/login`} />} />
          <Route path="/register" element={<ExternalRedirect to={`${SAAS_APP_URL}/register`} />} />

          {/* Compliance pages: these URLs may be registered with Google and Meta. Keep them. */}
          <Route path="/delete-data" element={<DeleteData />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/data-deletion" element={<DeleteData />} />
          <Route path="/privacy-policy" element={<Privacy />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
