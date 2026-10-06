import React, { useState, useEffect, useRef } from 'react';
import CTABanner from '../../components/Marketing/CTABanner';
import FeatureDeepDive from '../../components/Marketing/FeatureDeepDive';
import {
  WastePreventionIllustration,
  BudgetOptimizationIllustration,
  StrategyCoachIllustration,
  ConfidenceLayerIllustration,
  LearnsStyleIllustration
} from '../../components/Marketing/FeatureIllustrations';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const FeaturesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  const features = [
    {
      id: 'connect',
      label: 'Connect',
      title: "Connect your accounts in under 2 minutes",
      description: "Secure OAuth connection to Google Ads and Meta. Read-only by default — your campaigns are safe.",
      points: [
        "One-click secure authentication",
        "Read-only access by default",
        "No passwords stored",
        "Disconnect anytime"
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      ),
      color: '#4C6FFF'
    },
    {
      id: 'analyze',
      label: 'Analyze',
      title: "AI analyzes everything automatically",
      description: "Performance patterns, learning phases, budget utilization, creative fatigue — all monitored continuously.",
      points: [
        "Real-time performance monitoring",
        "Learning phase awareness",
        "Cross-platform insights",
        "Anomaly detection"
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      color: '#10B981'
    },
    {
      id: 'decide',
      label: 'Decide',
      title: "Make confident decisions with Strategy Coach",
      description: "Ask questions in plain English. Get answers grounded in your actual campaign data.",
      points: [
        "Conversational AI interface",
        "Data-grounded answers",
        "Confidence indicators",
        "Actionable next steps"
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      color: '#8B5CF6'
    },
    {
      id: 'learn',
      label: 'Learn',
      title: "The system learns from your decisions",
      description: "Every approval, rejection, and deferral helps AdgrowAI understand your preferences.",
      points: [
        "Learns your risk tolerance",
        "Adapts to your style",
        "Improves over time",
        "Builds institutional knowledge"
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
          <path d="M9 22v-1"/>
          <path d="M15 22v-1"/>
          <path d="M9 18h6"/>
        </svg>
      ),
      color: '#F59E0B'
    }
  ];

  const DURATION = 3000;
  const PROGRESS_INTERVAL = 50;

  useEffect(() => {
    if (isPaused) return;
    setProgress(0);

    progressRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + (100 / (DURATION / PROGRESS_INTERVAL));
      });
    }, PROGRESS_INTERVAL);

    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [activeIndex, isPaused]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % features.length);
    }, DURATION);

    return () => clearInterval(timer);
  }, [isPaused, features.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  const currentFeature = features[activeIndex];

  return (
    <>
      {/* HERO */}
      <section className="mkt-hero" style={{ paddingBottom: '40px' }}>
        <div className="mkt-container">
          <span className="mkt-hero-badge">
            <span>&#x2728;</span>
            <span>Features</span>
          </span>
          <h1 className="mkt-hero-title">
            Built for <span>clarity</span>, not chaos
          </h1>
          <p className="mkt-hero-subtitle">
            Every feature is designed to help you make better decisions — not just more changes.
          </p>
        </div>
      </section>

      {/* SLIDESHOW */}
      <section className="mkt-section" style={{ paddingTop: 0 }}>
        <div className="mkt-container">
          <div
            className="mkt-slideshow-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="mkt-slideshow-steps">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  className={`mkt-slideshow-step ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'completed' : ''}`}
                  onClick={() => goToSlide(index)}
                  style={{ '--accent-color': feature.color }}
                >
                  <div className="mkt-slideshow-step-icon">
                    {feature.icon}
                  </div>
                  <span className="mkt-slideshow-step-label">{feature.label}</span>
                  <div className="mkt-slideshow-step-progress">
                    <div
                      className="mkt-slideshow-step-progress-fill"
                      style={{
                        width: index === activeIndex ? `${progress}%` : index < activeIndex ? '100%' : '0%',
                        backgroundColor: feature.color
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="mkt-slideshow-content">
              <div className="mkt-slideshow-text" key={currentFeature.id}>
                <h2 className="mkt-slideshow-title">{currentFeature.title}</h2>
                <p className="mkt-slideshow-description">{currentFeature.description}</p>
                <ul className="mkt-slideshow-points">
                  {currentFeature.points.map((point, i) => (
                    <li key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                      <CheckIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mkt-slideshow-visual">
                <div
                  className="mkt-slideshow-visual-placeholder"
                  style={{ borderColor: `${currentFeature.color}30` }}
                >
                  <div className="mkt-slideshow-visual-icon" style={{ color: currentFeature.color }}>
                    {currentFeature.icon}
                  </div>
                  <span className="mkt-slideshow-visual-label">{currentFeature.label.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE DEEP-DIVES */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="mkt-section-header">
            <p className="mkt-section-label">Deep Dive</p>
            <h2 className="mkt-section-title">See what AdgrowAI can do</h2>
            <p className="mkt-section-description">
              Each feature is built to save you time, money, and guesswork.
            </p>
          </div>

          <FeatureDeepDive
            label="Waste Prevention"
            title="Stop Bleeding Money on Bad Search Terms"
            description="AdgrowAI continuously scans your search term reports and flags queries that waste budget. Get specific negative keyword recommendations with estimated savings."
            points={[
              "Automatic search term analysis across all campaigns",
              "Identifies irrelevant, competitor, and low-intent queries",
              "Shows estimated monthly savings for each recommendation",
              "One-click add to negative keyword lists",
              "Learns from your approval patterns over time"
            ]}
            illustration={<WastePreventionIllustration />}
            accentColor="#EF4444"
          />

          <FeatureDeepDive
            label="Budget Optimization"
            title="Know Exactly When to Scale"
            description="See which campaigns are leaving money on the table. AdgrowAI identifies impression share losses and quantifies the traffic you're missing — so you can scale with confidence."
            points={[
              "Real-time impression share monitoring",
              "Calculates missed clicks and potential conversions",
              "Budget increase recommendations with projected impact",
              "Alerts when high-performers are limited by budget",
              "Historical trend analysis to validate scaling decisions"
            ]}
            illustration={<BudgetOptimizationIllustration />}
            accentColor="#10B981"
            reverse={true}
          />

          <FeatureDeepDive
            label="AI Strategy Coach"
            title="Ask Anything About Your Campaigns"
            description="Chat with an AI that actually knows your data. Ask questions in plain English and get answers grounded in your real campaign performance — not generic advice."
            points={[
              "Natural language interface - no technical jargon needed",
              "Answers based on YOUR actual campaign data",
              "Confidence indicators on every recommendation",
              "Remembers context across conversations",
              "Suggests follow-up questions you should ask"
            ]}
            illustration={<StrategyCoachIllustration />}
            accentColor="#4C6FFF"
          />

          <FeatureDeepDive
            label="Transparent AI"
            title="Know How Certain the AI Is"
            description="Every recommendation comes with a confidence score and explanation. When the AI isn't sure, it tells you to wait — no blind automation, no guessing."
            points={[
              "Confidence percentage on every recommendation",
              "Plain-English explanation of reasoning",
              "Data sources cited for each insight",
              "Low-confidence alerts prevent premature action",
              "Audit trail of all AI decisions"
            ]}
            illustration={<ConfidenceLayerIllustration />}
            accentColor="#F59E0B"
            reverse={true}
          />

          <FeatureDeepDive
            label="Personalized Intelligence"
            title="An AI That Learns What You Like"
            description="Every time you approve, reject, or defer a recommendation, AdgrowAI learns your preferences. Over time, it understands your risk tolerance and decision-making style."
            points={[
              "Remembers every decision you make",
              "Learns your risk tolerance over time",
              "Prioritizes recommendations you're likely to approve",
              "Adapts to your business goals and style",
              "Gets smarter the more you use it"
            ]}
            illustration={<LearnsStyleIllustration />}
            accentColor="#8B5CF6"
          />
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="mkt-section" style={{ background: 'rgba(76, 111, 255, 0.03)' }}>
        <div className="mkt-container">
          <div className="mkt-section-header">
            <p className="mkt-section-label">Comparison</p>
            <h2 className="mkt-section-title">How AdgrowAI stacks up</h2>
            <p className="mkt-section-description">
              See why businesses are switching from agencies and DIY management.
            </p>
          </div>

          <div className="mkt-comparison-table-wrapper">
            <table className="mkt-comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>DIY / Manual</th>
                  <th>Marketing Agency</th>
                  <th>Other AI Tools</th>
                  <th className="highlight">AdgrowAI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Cost</td>
                  <td className="neutral">Your time</td>
                  <td className="neutral">$3,000 - $10,000+</td>
                  <td className="neutral">$50 - $500</td>
                  <td className="highlight"><strong>$99</strong></td>
                </tr>
                <tr>
                  <td>Explains recommendations</td>
                  <td className="neutral">N/A</td>
                  <td className="neutral">Sometimes</td>
                  <td><span className="no">&#x2715;</span></td>
                  <td className="highlight"><span className="yes">&#x2713;</span></td>
                </tr>
                <tr>
                  <td>Requires your approval</td>
                  <td><span className="yes">&#x2713;</span></td>
                  <td className="neutral">Varies</td>
                  <td><span className="no">&#x2715;</span></td>
                  <td className="highlight"><span className="yes">&#x2713;</span></td>
                </tr>
                <tr>
                  <td>Confidence scores</td>
                  <td><span className="no">&#x2715;</span></td>
                  <td><span className="no">&#x2715;</span></td>
                  <td><span className="no">&#x2715;</span></td>
                  <td className="highlight"><span className="yes">&#x2713;</span></td>
                </tr>
                <tr>
                  <td>24/7 monitoring</td>
                  <td><span className="no">&#x2715;</span></td>
                  <td><span className="no">&#x2715;</span></td>
                  <td><span className="yes">&#x2713;</span></td>
                  <td className="highlight"><span className="yes">&#x2713;</span></td>
                </tr>
                <tr>
                  <td>Learns your preferences</td>
                  <td><span className="no">&#x2715;</span></td>
                  <td className="neutral">Slowly</td>
                  <td><span className="no">&#x2715;</span></td>
                  <td className="highlight"><span className="yes">&#x2713;</span></td>
                </tr>
                <tr>
                  <td>Cross-platform (Google + Meta)</td>
                  <td className="neutral">Manual</td>
                  <td><span className="yes">&#x2713;</span></td>
                  <td className="neutral">Varies</td>
                  <td className="highlight"><span className="yes">&#x2713;</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="mkt-section-header">
            <p className="mkt-section-label">Who It's For</p>
            <h2 className="mkt-section-title">Built for businesses that care about ROI</h2>
            <p className="mkt-section-description">
              Whether you're running your own ads or managing multiple accounts, AdgrowAI helps.
            </p>
          </div>

          <div className="mkt-use-cases-grid">
            <div className="mkt-use-case">
              <div className="mkt-use-case-icon">&#x1F3EA;</div>
              <h3>Small Business Owners</h3>
              <p>Running ads yourself but don't have time to optimize daily? AdgrowAI watches your campaigns 24/7 and tells you exactly what to fix.</p>
            </div>

            <div className="mkt-use-case">
              <div className="mkt-use-case-icon">&#x1F4C8;</div>
              <h3>Growing E-commerce</h3>
              <p>Scaling from $5k to $50k/month in ad spend? Get the intelligence of an in-house media buyer without the $80k salary.</p>
            </div>

            <div className="mkt-use-case">
              <div className="mkt-use-case-icon">&#x1F3AF;</div>
              <h3>Marketing Managers</h3>
              <p>Managing multiple accounts and need a second opinion? AdgrowAI spots opportunities you might miss and explains every recommendation.</p>
            </div>

            <div className="mkt-use-case">
              <div className="mkt-use-case-icon">&#x1F3E2;</div>
              <h3>Agencies</h3>
              <p>Scale your client management without scaling headcount. White-label reporting and multi-account oversight in one platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to see it in action?"
        subtitle="Join the waitlist and be first to experience AI that actually explains itself."
        primaryCta="Join Waitlist"
        primaryLink="/waitlist"
        secondaryCta="View Pricing"
        secondaryLink="/pricing"
      />
    </>
  );
};

export default FeaturesPage;
