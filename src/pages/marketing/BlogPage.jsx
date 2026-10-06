import React from 'react';
import { Link } from 'react-router-dom';
import CTABanner from '../../components/Marketing/CTABanner';

const blogPosts = [
  {
    slug: 'hidden-cost-set-forget-google-ads',
    title: "The Hidden Cost of 'Set and Forget' Google Ads",
    excerpt: "Why automated bidding isn't enough — and what's really happening to your ad spend. Smart Bidding optimizes your bids. It doesn't optimize your campaigns.",
    date: "February 2024",
    readTime: "8 min read",
    category: "Google Ads"
  }
];

const BlogPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="mkt-hero">
        <div className="mkt-container">
          <span className="mkt-hero-badge">
            <span>&#x1F4DD;</span>
            <span>Blog</span>
          </span>
          <h1 className="mkt-hero-title">
            Insights for <span>smarter</span> advertising
          </h1>
          <p className="mkt-hero-subtitle">
            Practical guides, strategies, and insights to help you get more from your ad spend.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mkt-section">
        <div className="mkt-container">
          <div className="mkt-blog-grid">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="mkt-blog-card"
              >
                <div className="mkt-blog-card-content">
                  <span className="mkt-blog-card-category">{post.category}</span>
                  <h2 className="mkt-blog-card-title">{post.title}</h2>
                  <p className="mkt-blog-card-excerpt">{post.excerpt}</p>
                  <div className="mkt-blog-card-meta">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <span className="mkt-blog-card-arrow">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to stop guessing?"
        subtitle="Join the waitlist for early access and see where your ads are leaking money."
        primaryCta="Start Now"
        primaryLink="/waitlist"
      />
    </>
  );
};

export default BlogPage;
