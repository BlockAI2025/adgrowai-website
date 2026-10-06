import React, { useState, useEffect } from 'react';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const FeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      )
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
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
          <polyline points="7.5 19.79 7.5 14.6 3 12"/>
          <polyline points="21 12 16.5 14.6 16.5 19.79"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      id: 'decide',
      label: 'Decide',
      title: "Make confident decisions with Strategy Coach",
      description: "Ask questions in plain English. Get answers grounded in your actual campaign data.",
      points: [
        "Conversational AI interface",
        "Data-grounded answers",
        "Confidence indicators on every recommendation",
        "Actionable next steps"
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
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
      )
    }
  ];

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, features.length]);

  const currentFeature = features[activeIndex];

  return (
    <div
      className="mkt-feature-showcase-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Progress indicators */}
      <div className="mkt-showcase-progress">
        {features.map((feature, index) => (
          <button
            key={feature.id}
            className={`mkt-showcase-progress-item ${index === activeIndex ? 'active' : ''} ${index < activeIndex ? 'completed' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="mkt-showcase-progress-icon">
              {feature.icon}
            </div>
            <span className="mkt-showcase-progress-label">{feature.label}</span>
            <div className="mkt-showcase-progress-bar">
              <div
                className="mkt-showcase-progress-fill"
                style={{
                  animationDuration: index === activeIndex && !isPaused ? '5s' : '0s',
                  animationPlayState: isPaused ? 'paused' : 'running'
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="mkt-showcase-content">
        <div className="mkt-showcase-text">
          <h3 className="mkt-showcase-title">{currentFeature.title}</h3>
          <p className="mkt-showcase-description">{currentFeature.description}</p>
          <ul className="mkt-showcase-points">
            {currentFeature.points.map((point, i) => (
              <li key={i}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mkt-showcase-visual">
          {/* Placeholder for screenshot/video - will be replaced with actual content */}
          <div className="mkt-showcase-placeholder">
            <div className="mkt-showcase-placeholder-inner">
              <div className="mkt-showcase-icon-large">
                {currentFeature.icon}
              </div>
              <span>{currentFeature.label}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
