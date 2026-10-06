import React from 'react';

const HeroDashboard = () => {
  return (
    <div className="mkt-hero-dashboard">
      <div className="mkt-hero-video-container">
        <video
          className="mkt-hero-video"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src="https://res.cloudinary.com/dvmotrzjq/video/upload/v1772070884/demo-video.mp4_njou4l.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroDashboard;
