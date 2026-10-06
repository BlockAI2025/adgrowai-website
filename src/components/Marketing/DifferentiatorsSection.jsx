import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const DifferentiatorsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const differentiators = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
      ),
      title: "Explains, Never Just Acts",
      text: "Every recommendation shows reasoning and confidence level.",
      vsOthers: "Other tools automate blindly"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: "You Stay in Control",
      text: "Approve, defer, or dismiss. Nothing happens without your consent.",
      vsOthers: "Other tools make changes silently"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
          <path d="M10 22v-3"/>
          <path d="M14 22v-3"/>
        </svg>
      ),
      title: "Gets Smarter Over Time",
      text: "Learns from your decisions to improve future recommendations.",
      vsOthers: "Other tools don't learn from you"
    }
  ];

  return (
    <section className="mkt-section" style={{ background: 'rgba(76, 111, 255, 0.03)' }}>
      <div className="mkt-container">
        <div className="mkt-section-header">
          <p className="mkt-section-label">Why AdgrowAI</p>
          <h2 className="mkt-section-title">Built different from the start</h2>
        </div>

        <div
          ref={ref}
          className={`mkt-differentiators mkt-stagger-children ${isVisible ? 'visible' : ''}`}
        >
          {differentiators.map((item, index) => (
            <div key={index} className="mkt-differentiator">
              <div className="mkt-differentiator-icon">
                {item.icon}
              </div>
              <h3 className="mkt-differentiator-title">{item.title}</h3>
              <p className="mkt-differentiator-text">{item.text}</p>
              <p className="mkt-vs-others">
                <s>{item.vsOthers}</s>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
