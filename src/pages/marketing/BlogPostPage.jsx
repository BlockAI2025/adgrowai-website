import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

// Blog post content - in production, this would come from a CMS or markdown files
const blogPosts = {
  'hidden-cost-set-forget-google-ads': {
    title: "The Hidden Cost of 'Set and Forget' Google Ads",
    subtitle: "Why automated bidding isn't enough — and what's really happening to your ad spend",
    date: "February 2024",
    readTime: "8 min read",
    category: "Google Ads",
    content: `
      <p>You've heard it before: "Just turn on Smart Bidding and let Google do the work."</p>

      <p>It sounds great. Set up your campaigns, enable automated bidding, and watch the conversions roll in while you focus on running your business.</p>

      <p>But here's what nobody tells you: <strong>"set and forget" is slowly draining your budget.</strong></p>

      <p>Not in obvious ways. Not in ways that show up in your headline metrics. But in dozens of small leaks that add up to thousands of dollars per month — money that could be driving actual growth.</p>

      <h2>The Myth of "Automated = Optimized"</h2>

      <p>Google's automated bidding is genuinely impressive. It processes millions of signals in real-time to adjust your bids. It's far better than manual bidding for most advertisers.</p>

      <p>But here's the critical distinction most people miss:</p>

      <p><strong>Automated bidding optimizes your BIDS. It doesn't optimize your CAMPAIGNS.</strong></p>

      <p>Smart Bidding will happily spend your entire budget on search terms that will never convert. It will keep showing ads to audiences that don't buy. It will continue running creative that stopped working months ago.</p>

      <p>Why? Because that's not its job. Its job is to get you the best price for the clicks you're already paying for.</p>

      <p>The <em>what</em> you're paying for? That's still on you.</p>

      <h2>Where the Money Actually Goes</h2>

      <p>Let's look at a real example. A mid-sized e-commerce company spending $15,000/month on Google Ads. Smart Bidding enabled. Conversion tracking set up correctly. Everything "by the book."</p>

      <p>When we audited their account, here's what we found:</p>

      <h3>1. Search Term Bleed: $2,847/month wasted</h3>

      <p>Their search term report was full of queries like:</p>

      <ul>
        <li><strong>[competitor name] reviews</strong> — people researching competitors, not buying</li>
        <li><strong>[product] DIY</strong> — people trying to avoid buying</li>
        <li><strong>[product] free</strong> — people who will never pay</li>
        <li><strong>[product] jobs</strong> — people looking for employment</li>
      </ul>

      <p>These weren't edge cases. They were <strong>19% of total spend</strong>.</p>

      <p>Smart Bidding saw these clicks and thought: "These are cheap! Let's get more!" Because the algorithm optimizes for your target metric, and if you're targeting conversions, it doesn't know these searches <em>can't</em> convert — until you've wasted enough money to prove it.</p>

      <h3>2. Budget Misallocation: $1,200/month in missed opportunity</h3>

      <p>Their best-performing campaign had an impression share of 62%. That means they were missing <strong>38% of searches</strong> from people actively looking for their product.</p>

      <p>Meanwhile, a brand campaign (people searching their company name) was getting 95% impression share — burning budget on people who would have found them anyway.</p>

      <p>The fix was obvious: shift $800/month from brand to the high-intent campaign. But "set and forget" doesn't catch this. You have to look.</p>

      <h3>3. Ad Fatigue: 23% CTR decline over 3 months</h3>

      <p>Their top-performing ad had been running unchanged for 7 months. In months 1-4, it had a 4.2% CTR. By month 7? 3.2%.</p>

      <p>That's a 23% decline. Not because the ad was bad — it was great. But audiences get tired. They've seen it. They scroll past.</p>

      <h2>The Real Cost of "Set and Forget"</h2>

      <p>Add it up:</p>

      <table>
        <thead>
          <tr><th>Issue</th><th>Monthly Waste</th></tr>
        </thead>
        <tbody>
          <tr><td>Search term bleed</td><td>$2,847</td></tr>
          <tr><td>Budget misallocation</td><td>$1,200 (opportunity cost)</td></tr>
          <tr><td>Ad fatigue</td><td>~$900 (estimated)</td></tr>
          <tr><td><strong>Total</strong></td><td><strong>$4,947/month</strong></td></tr>
        </tbody>
      </table>

      <p>On $15,000/month in spend, that's <strong>33% waste</strong>. Not because they were bad at advertising — because they trusted automation to do a job it was never designed to do.</p>

      <h2>What "Monitoring" Actually Means</h2>

      <p>Here's the thing: you don't need to become a Google Ads expert. You don't need to spend hours per day in the platform. You don't need to hire an agency.</p>

      <p>You need three things:</p>

      <h3>1. Weekly Search Term Reviews</h3>
      <p>Spend 15 minutes per week looking at what people actually searched before clicking your ads. Add negative keywords for anything irrelevant.</p>
      <p>This alone can save 10-20% of wasted spend.</p>

      <h3>2. Monthly Budget Audits</h3>
      <p>Check impression share on your top campaigns. If profitable campaigns are losing impression share to budget, reallocate from lower-performing campaigns.</p>

      <h3>3. Creative Refresh Every 60-90 Days</h3>
      <p>Don't wait for ads to die. Proactively test new headlines and descriptions. When you find a winner, know that it has a shelf life.</p>

      <h2>Or: Let AI Do It (The Right Way)</h2>

      <p>I'll be honest — most business owners don't have time for this. That's why we built AdgrowAI.</p>

      <p>Not to replace Google's automation. To fill the gaps it leaves behind.</p>

      <p>AdgrowAI monitors your campaigns 24/7 and tells you exactly what's wrong:</p>

      <ul>
        <li><strong>"You're wasting $287/month on these 12 search terms. Add them as negative keywords?"</strong></li>
        <li><strong>"Campaign X is missing 38% of traffic due to budget. Increase by $500/month to capture it."</strong></li>
        <li><strong>"Ad fatigue detected. CTR dropped 18% in 30 days. Here are 3 new headlines to test."</strong></li>
      </ul>

      <p>Every recommendation comes with an explanation. Every action requires your approval. The AI suggests. You decide.</p>

      <h2>The Bottom Line</h2>

      <p>"Set and forget" isn't a strategy. It's wishful thinking.</p>

      <p>Automated bidding is a powerful tool — when combined with human oversight. Without it, you're not running ads. You're hoping.</p>

      <p>Your competitors are watching their campaigns. They're catching the leaks. They're reallocating budget to what works.</p>

      <p><strong>The question isn't whether you can afford to monitor your ads. It's whether you can afford not to.</strong></p>
    `
  }
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <section className="mkt-section">
        <div className="mkt-container" style={{ textAlign: 'center' }}>
          <h1>Post not found</h1>
          <Link to="/blog" className="mkt-btn mkt-btn-primary">Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="mkt-hero" style={{ paddingBottom: '40px' }}>
        <div className="mkt-container">
          <div className="mkt-blog-post-header">
            <Link to="/blog" className="mkt-blog-back-link">
              &larr; Back to Blog
            </Link>
            <span className="mkt-blog-post-category">{post.category}</span>
            <h1 className="mkt-blog-post-title">{post.title}</h1>
            <p className="mkt-blog-post-subtitle">{post.subtitle}</p>
            <div className="mkt-blog-post-meta">
              <span>{post.date}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mkt-section" style={{ paddingTop: 0 }}>
        <div className="mkt-container">
          <article
            className="mkt-blog-post-content"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          />

          <div className="mkt-blog-post-cta">
            <h2>See Where Your Ads Are Leaking</h2>
            <p>AdgrowAI analyzes your campaigns and shows you exactly where money is being wasted.</p>
            <Link to="/waitlist" className="mkt-btn mkt-btn-primary">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
