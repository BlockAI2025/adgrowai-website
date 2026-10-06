import React from 'react';

export default function VideoPlaceholder({ caption }) {
  return (
    <div className="mkt-video-placeholder">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
      {caption && <span>{caption}</span>}
    </div>
  );
}
