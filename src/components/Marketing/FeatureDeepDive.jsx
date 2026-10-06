import React from 'react';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const FeatureDeepDive = ({
  label,
  title,
  description,
  points,
  illustration, // NEW: Pass SVG component
  reverse = false,
  accentColor = '#4C6FFF'
}) => {
  return (
    <div className={`mkt-feature-deep ${reverse ? 'reverse' : ''}`}>
      <div className="mkt-feature-deep-content">
        <span className="mkt-feature-deep-label" style={{ color: accentColor }}>
          {label}
        </span>
        <h3 className="mkt-feature-deep-title">{title}</h3>
        <p className="mkt-feature-deep-description">{description}</p>
        <ul className="mkt-feature-deep-points">
          {points.map((point, i) => (
            <li key={i}>
              <CheckIcon />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mkt-feature-deep-visual">
        <div className="mkt-feature-deep-image-wrapper" style={{ borderColor: `${accentColor}40` }}>
          {illustration || (
            <div className="mkt-feature-deep-placeholder">
              <span>Illustration coming soon</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureDeepDive;
