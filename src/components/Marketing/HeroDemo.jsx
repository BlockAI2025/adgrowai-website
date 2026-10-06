import React from 'react';

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const HeroDemo = ({ screenshotUrl, onPlay }) => {
  return (
    <div className="mkt-hero-demo">
      <div className="mkt-hero-demo-wrapper">
        {/* Browser chrome */}
        <div className="mkt-demo-browser-bar">
          <div className="mkt-demo-browser-dot" />
          <div className="mkt-demo-browser-dot" />
          <div className="mkt-demo-browser-dot" />
          <div className="mkt-demo-browser-url">
            app.adgrowai.com/dashboard
          </div>
        </div>

        {/* Demo content area */}
        <div className="mkt-demo-content">
          {screenshotUrl ? (
            <img
              src={screenshotUrl}
              alt="AdgrowAI Dashboard"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div className="mkt-demo-placeholder">
              <div className="mkt-demo-scan-line" />
            </div>
          )}

          {/* Play button overlay */}
          <div className="mkt-demo-play-overlay" onClick={onPlay}>
            <div className="mkt-demo-play-btn">
              <PlayIcon />
            </div>
            <span className="mkt-demo-caption">
              Watch 2-minute product tour
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDemo;
