import React, { useEffect, useRef } from 'react';
import CTABanner from '../../components/Marketing/CTABanner';

const AboutPage = () => {
  const canvasRef = useRef(null);

  // Animated background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      particles = [];
      const numParticles = 50;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw gradient orbs
      const gradient1 = ctx.createRadialGradient(
        canvas.offsetWidth * 0.3, canvas.offsetHeight * 0.3, 0,
        canvas.offsetWidth * 0.3, canvas.offsetHeight * 0.3, 200
      );
      gradient1.addColorStop(0, 'rgba(76, 111, 255, 0.15)');
      gradient1.addColorStop(1, 'rgba(76, 111, 255, 0)');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const gradient2 = ctx.createRadialGradient(
        canvas.offsetWidth * 0.7, canvas.offsetHeight * 0.6, 0,
        canvas.offsetWidth * 0.7, canvas.offsetHeight * 0.6, 150
      );
      gradient2.addColorStop(0, 'rgba(16, 185, 129, 0.1)');
      gradient2.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw and update particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(76, 111, 255, ${particle.opacity})`;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.offsetWidth;
        if (particle.x > canvas.offsetWidth) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.offsetHeight;
        if (particle.y > canvas.offsetHeight) particle.y = 0;
      });

      // Draw connecting lines between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(76, 111, 255, ${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const values = [
    {
      title: "Transparency Over Hype",
      description: "We show you exactly what the AI is thinking and why. No black boxes, no magic claims.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
      )
    },
    {
      title: "Explainable AI",
      description: "Every recommendation comes with reasoning you can understand and verify.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/>
          <line x1="10" y1="22" x2="14" y2="22"/>
        </svg>
      )
    },
    {
      title: "Safety Before Speed",
      description: "We prioritize keeping your campaigns safe over making aggressive changes.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {/* Hero with Animated Background */}
      <section className="mkt-about-hero">
        <canvas ref={canvasRef} className="mkt-about-hero-canvas" />

        <div className="mkt-container mkt-about-hero-content">
          <span className="mkt-hero-badge">
            <span>&#x1F44B;</span>
            <span>About Us</span>
          </span>
          <h1 className="mkt-hero-title">
            We believe businesses deserve<br />
            <span>clarity</span> in paid advertising
          </h1>
          <p className="mkt-hero-subtitle">
            Not black boxes. Not blind automation. Real understanding.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="mkt-about-quote">
            <div className="mkt-about-quote-mark">"</div>
            <blockquote>
              We're building the intelligence layer that should have existed from day one —
              one that explains, educates, and empowers rather than obscures and automates blindly.
            </blockquote>
            <div className="mkt-about-quote-author">
              <div className="mkt-about-quote-avatar">A</div>
              <div>
                <div className="mkt-about-quote-name">Aman Singh</div>
                <div className="mkt-about-quote-role">Founder, AdgrowAI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="mkt-section mkt-about-story">
        <div className="mkt-container">
          <div className="mkt-about-story-grid">
            <div className="mkt-about-story-content">
              <p className="mkt-section-label">Our Story</p>
              <h2 className="mkt-section-title" style={{ textAlign: 'left' }}>Why we built AdgrowAI</h2>
              <p>
                AdgrowAI was built after seeing how expensive agencies, confusing tools, and blind
                automation hurt growing businesses. Too many companies were either paying $5,000/month
                for agencies they couldn't afford, or making costly mistakes because they didn't
                understand what to change.
              </p>
              <p>
                We wanted to build something different: an AI system that thinks, explains, and learns —
                while keeping humans in control of every decision.
              </p>
              <p>
                The result is AdgrowAI: a strategy and optimization intelligence layer that tells you
                what to change, why it matters, and how confident the system is before you act.
              </p>
            </div>
            <div className="mkt-about-story-visual">
              <div className="mkt-about-story-card">
                <div className="mkt-about-story-stat">$5k+</div>
                <div className="mkt-about-story-stat-label">Typical agency cost/month</div>
              </div>
              <div className="mkt-about-story-card highlight">
                <div className="mkt-about-story-stat">$99</div>
                <div className="mkt-about-story-stat-label">AdgrowAI Growth plan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="mkt-section" style={{ background: 'rgba(76, 111, 255, 0.03)' }}>
        <div className="mkt-container">
          <div className="mkt-section-header">
            <p className="mkt-section-label">Our Vision</p>
            <h2 className="mkt-section-title">Where we're heading</h2>
          </div>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <p className="mkt-section-description">
              AdgrowAI is becoming the intelligence layer for paid ads — across platforms,
              industries, and business stages. Our goal is to make professional-grade
              marketing intelligence accessible to every business, not just those who can
              afford expensive agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="mkt-section-header">
            <p className="mkt-section-label">Our Values</p>
            <h2 className="mkt-section-title">What we believe</h2>
          </div>
          <div className="mkt-values-grid">
            {values.map((value, index) => (
              <div key={index} className="mkt-value-card">
                <div className="mkt-value-icon">
                  {value.icon}
                </div>
                <h3 className="mkt-value-title">{value.title}</h3>
                <p className="mkt-value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Entity */}
      <section className="mkt-section" style={{ paddingTop: 0 }}>
        <div className="mkt-container">
          <div style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '32px',
            color: 'var(--text-muted)',
            fontSize: '13px',
            lineHeight: '1.8'
          }}>
            <strong style={{ color: 'var(--text-secondary)' }}>AdgrowAI Limited</strong>
            {' '}&mdash; Registered in New Zealand<br />
            NZ Company No. 9418222 | NZBN 9429053564504<br />
            Registered office: 117 Wiseley Road, West Harbour, Auckland 0618, New Zealand<br />
            Contact: <a href="mailto:admin@adgrowai.com" style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}>admin@adgrowai.com</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Join us on this journey"
        subtitle="Be among the first to experience a better way to optimize your ads."
        primaryCta="Join Waitlist"
        primaryLink="/waitlist"
        secondaryCta="Get in Touch"
        secondaryLink="/contact"
      />
    </>
  );
};

export default AboutPage;
