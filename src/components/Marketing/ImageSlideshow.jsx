import React, { useState, useEffect } from 'react';

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const ImageSlideshow = ({ images, autoPlay = true, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goTo = (index) => setCurrentIndex(index);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="mkt-slideshow">
      <div
        className="mkt-slideshow-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="mkt-slideshow-image"
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button className="mkt-slideshow-nav prev" onClick={goPrev}>
        <ChevronLeft />
      </button>
      <button className="mkt-slideshow-nav next" onClick={goNext}>
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="mkt-slideshow-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`mkt-slideshow-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;
