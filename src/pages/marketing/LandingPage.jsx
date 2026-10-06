import React from 'react';
import { Link } from 'react-router-dom';
import FAQAccordion from '../../components/Marketing/FAQAccordion';
import CTABanner from '../../components/Marketing/CTABanner';
import HeroDashboard from '../../components/Marketing/HeroDashboard';
import TrustSection from '../../components/Marketing/TrustSection';

// Icons
const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18"/>
    <path d="M18 17V9"/>
    <path d="M13 17V5"/>
    <path d="M8 17v-3"/>
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const RefreshIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 2v6h-6"/>
    <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
    <path d="M3 22v-6h6"/>
    <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
  </svg>
);

const LandingPage = () => {
  const features = [
    {
      icon: <BrainIcon />,
      title: "Intelligence That Explains Itself",
      description: "Every recommendation shows the reasoning behind it. No black boxes. No 'trust me' automation."
    },
    {
      icon: <ChartIcon />,
      title: "Google & Meta In One View",
      description: "See what's working across both platforms. Spot patterns you'd miss looking at each separately."
    },
    {
      icon: <MessageIcon />,
      title: "Strategy Coach",
      description: "Ask questions in plain English. Get answers based on your actual campaign data, not generic advice."
    },
    {
      icon: <ShieldIcon />,
      title: "Confidence Scores On Everything",
      description: "Know how certain the AI is before you act. Low confidence? It'll tell you to wait and watch."
    },
    {
      icon: <CheckCircleIcon />,
      title: "You Approve Every Change",
      description: "Nothing happens without your say-so. Review recommendations, then apply with one click."
    },
    {
      icon: <RefreshIcon />,
      title: "Learns What You Like",
      description: "The more you use it, the smarter it gets. AdgrowAI adapts to your style and priorities."
    }
  ];

  const faqItems = [
    {
      question: "How does AdgrowAI connect to my ad accounts?",
      answer: "Secure OAuth connection — the same method used by Google and Meta. We request read-only access by default, and you can disconnect anytime from your account settings."
    },
    {
      question: "Will AdgrowAI make changes without my approval?",
      answer: "No. Every recommendation requires your approval before any changes are made. You review, you decide, you apply. The AI explains and suggests — you stay in control."
    },
    {
      question: "What platforms do you support?",
      answer: "We support both Google Ads and Meta Ads with full integration. Connect your accounts securely via OAuth and get unified intelligence across both platforms from day one."
    },
    {
      question: "Do I need technical expertise to use it?",
      answer: "Not at all. AdgrowAI is designed for business owners and marketers, not just ads experts. The AI explains everything in plain language and tells you exactly what to do."
    },
    {
      question: "Is my data safe?",
      answer: "Yes. We use industry-standard encryption, never store your ad account passwords, and your data is never shared or sold. You can export or delete your data anytime."
    }
  ];

  return (
    <>
      {/* HERO */}
      <section className="mkt-hero">
        <div className="mkt-container">
          <span className="mkt-hero-badge">
            <span>&#x1F50D;</span>
            <span>AI-Powered Campaign Intelligence</span>
          </span>

          <h1 className="mkt-hero-title">
            Your ads are leaking money.<br />
            <span>Our AI knows exactly where — and what to do about it.</span>
          </h1>

          <p className="mkt-hero-subtitle">
            Not another dashboard. AdgrowAI runs real optimization playbooks — the same decision logic agencies use. Now yours for $99/month.
          </p>

          <p style={{ fontSize: '15px', color: '#C7CDE0', maxWidth: '640px', margin: '0 auto 8px', textAlign: 'center', lineHeight: 1.5 }}>
            AdgrowAI connects to your Google Ads account to analyse your campaigns, keywords and conversion tracking, then explains what to change in plain language. Every change to your account requires your explicit approval before it is applied.
          </p>

          <div className="mkt-hero-cta">
            <Link to="/waitlist" className="mkt-btn mkt-btn-primary mkt-btn-lg">
              Start Now
            </Link>
            <Link to="/features" className="mkt-btn mkt-btn-secondary mkt-btn-lg">
              See How It Works
            </Link>
          </div>

          <p style={{ fontSize: '14px', color: '#9CA3AF', marginTop: '20px', textAlign: 'center' }}>
            Built for founders spending $1k–$10k/month who want agency results without the retainer.
          </p>

          <HeroDashboard />
        </div>
      </section>

      {/* STATS ROW */}
      <section className="mkt-section-sm">
        <div className="mkt-container">
          <div className="mkt-stats-bar">
            <div className="mkt-stat">
              <div className="mkt-stat-value">24/7</div>
              <div className="mkt-stat-label">Campaign Monitoring</div>
            </div>
            <div className="mkt-stat">
              <div className="mkt-stat-value">2 min</div>
              <div className="mkt-stat-label">Setup Time</div>
            </div>
            <div className="mkt-stat">
              <div className="mkt-stat-value">100%</div>
              <div className="mkt-stat-label">You Stay In Control</div>
            </div>
            <div className="mkt-stat">
              <div className="mkt-stat-value">Zero</div>
              <div className="mkt-stat-label">Black-Box Decisions</div>
            </div>
          </div>
        </div>
      </section>

      {/* MINI DEMO CLIPS */}
      <section className="mkt-section mkt-demo-section">
        <div className="mkt-container">
          <div className="mkt-section-header">
            <p className="mkt-section-label">See It In Action</p>
            <h2 className="mkt-section-title">AI that shows its work</h2>
            <p className="mkt-section-description">
              Watch how AdgrowAI finds opportunities and explains every recommendation.
            </p>
          </div>

          <div className="mkt-demo-grid">
            {/* Demo 1: Waste Detection */}
            <div className="mkt-demo-card">
              <div className="mkt-demo-video">
                <div className="mkt-demo-placeholder">
                  <div className="mkt-demo-placeholder-icon" style={{ color: '#EF4444' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mkt-demo-content">
                <div className="mkt-demo-metric">
                  <span className="mkt-demo-metric-value" style={{ color: '#EF4444' }}>$287</span>
                  <span className="mkt-demo-metric-label">wasted spend found</span>
                </div>
                <h3 className="mkt-demo-title">Stops Wasted Spend</h3>
                <p className="mkt-demo-description">
                  AI flags search terms burning your budget and recommends negative keywords — with estimated savings.
                </p>
              </div>
            </div>

            {/* Demo 2: Budget Intelligence */}
            <div className="mkt-demo-card">
              <div className="mkt-demo-video">
                <div className="mkt-demo-placeholder">
                  <div className="mkt-demo-placeholder-icon" style={{ color: '#10B981' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mkt-demo-content">
                <div className="mkt-demo-metric">
                  <span className="mkt-demo-metric-value" style={{ color: '#10B981' }}>38%</span>
                  <span className="mkt-demo-metric-label">traffic being missed</span>
                </div>
                <h3 className="mkt-demo-title">Knows When To Scale</h3>
                <p className="mkt-demo-description">
                  Detects profitable campaigns limited by budget and shows exactly how much you're leaving on the table.
                </p>
              </div>
            </div>

            {/* Demo 3: Strategy Coach */}
            <div className="mkt-demo-card">
              <div className="mkt-demo-video">
                <div className="mkt-demo-placeholder">
                  <div className="mkt-demo-placeholder-icon" style={{ color: '#4C6FFF' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mkt-demo-content">
                <div className="mkt-demo-metric">
                  <span className="mkt-demo-metric-value" style={{ color: '#4C6FFF' }}>Ask</span>
                  <span className="mkt-demo-metric-label">anything about your ads</span>
                </div>
                <h3 className="mkt-demo-title">Strategy Coach</h3>
                <p className="mkt-demo-description">
                  Chat with AI that knows your campaigns. Get answers grounded in your actual data, not generic advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="mkt-section-header">
            <p className="mkt-section-label">Features</p>
            <h2 className="mkt-section-title">Intelligence, not just automation</h2>
            <p className="mkt-section-description">
              Every feature is designed to help you make better decisions — not just more changes.
            </p>
          </div>
          <div className="mkt-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="mkt-card">
                <div className="mkt-feature-icon">
                  {React.cloneElement(feature.icon, { width: 24, height: 24 })}
                </div>
                <div className="mkt-feature-title">{feature.title}</div>
                <div className="mkt-feature-desc">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mkt-section" style={{ background: 'rgba(76, 111, 255, 0.03)' }}>
        <div className="mkt-container">
          <div className="mkt-section-header">
            <p className="mkt-section-label">How It Works</p>
            <h2 className="mkt-section-title">Up and running in minutes</h2>
          </div>
          <div className="mkt-steps">
            <div className="mkt-step">
              <div className="mkt-step-number">1</div>
              <h3 className="mkt-step-title">Connect Your Accounts</h3>
              <p className="mkt-step-description">
                Secure OAuth connection to Google Ads and Meta. Read-only by default — your campaigns are safe.
              </p>
            </div>
            <div className="mkt-step">
              <div className="mkt-step-number">2</div>
              <h3 className="mkt-step-title">AI Monitors & Explains</h3>
              <p className="mkt-step-description">
                AdgrowAI analyzes everything and surfaces opportunities with clear explanations and confidence scores.
              </p>
            </div>
            <div className="mkt-step">
              <div className="mkt-step-number">3</div>
              <h3 className="mkt-step-title">You Decide & Scale</h3>
              <p className="mkt-step-description">
                Review recommendations, approve what makes sense, and scale with confidence. You're always in control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM TRUST */}
      <TrustSection waitlistCount={500} />

      {/* FAQ */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="mkt-section-header">
            <p className="mkt-section-label">FAQ</p>
            <h2 className="mkt-section-title">Common questions</h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        title="Ready to stop guessing?"
        subtitle="Join the waitlist for early access and see where your ads are leaking money."
        primaryCta="Start Now"
        primaryLink="/waitlist"
        secondaryCta="See How It Works"
        secondaryLink="/features"
      />
    </>
  );
};

export default LandingPage;
