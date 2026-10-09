import BlogPost from '@/components/blog/BlogPost';
import styles from '@/components/blog/BlogPost.module.css';
import { getPost } from '@/content/posts';

const post = getPost('hidden-cost-of-set-and-forget-google-ads');

export const metadata = {
  title: post.title,
  description: post.description,
};

const SEARCH_TERMS = [
  { term: '[competitor name] reviews', note: 'people researching competitors, not buying' },
  { term: '[product] DIY', note: 'people trying to avoid buying' },
  { term: '[product] free', note: 'people who will never pay' },
  { term: '[product] jobs', note: 'people looking for employment' },
];

const WASTE = [
  { issue: 'Search term bleed', cost: '~$2,800' },
  { issue: 'Budget misallocation', cost: '~$1,200 (opportunity cost)' },
  { issue: 'Ad fatigue', cost: '~$900' },
];

const RECOMMENDATIONS = [
  '“You\'re wasting $287/month on these 12 search terms. Add them as negative keywords?”',
  '“Campaign X is missing 38% of traffic due to budget. Increase by $500/month to capture it.”',
  '“Ad fatigue detected. CTR dropped 18% in 30 days. Here are 3 new headlines to test.”',
];

export default function SetAndForgetPost() {
  return (
    <BlogPost
      post={post}
      title={<>The Hidden Cost of <span className="accent">‘Set and Forget’</span> Google Ads</>}
    >
      <p className={styles.standfirst}>You&apos;ve heard it before: “Just turn on Smart Bidding and let Google do the work.”</p>
      <p>It sounds great. Set up your campaigns, enable automated bidding, and watch the conversions roll in while you focus on running your business.</p>
      <p className={styles.emphasis}>But here&apos;s what nobody tells you: “set and forget” is slowly draining your budget.</p>
      <p>Not in obvious ways. Not in ways that show up in your headline metrics. But in dozens of small leaks that add up to thousands of dollars per month — money that could be driving actual growth.</p>

      <h2>The Myth of “Automated = Optimized”</h2>
      <p>Google&apos;s automated bidding is genuinely impressive. It processes millions of signals in real-time to adjust your bids. It&apos;s far better than manual bidding for most advertisers.</p>
      <p>But here&apos;s the critical distinction most people miss:</p>
      <blockquote>
        Automated bidding optimizes your <span className="accent">BIDS.</span> It doesn&apos;t optimize your{' '}
        <span className="accent">CAMPAIGNS.</span>
      </blockquote>
      <p>Smart Bidding will happily spend your entire budget on search terms that will never convert. It will keep showing ads to audiences that don&apos;t buy. It will continue running creative that stopped working months ago.</p>
      <p>Why? Because that&apos;s not its job. Its job is to get you the best price for the clicks you&apos;re already paying for.</p>
      <p className={styles.emphasis}>The ‘what you&apos;re paying for’? That&apos;s still on you.</p>

      <h2>Where the Money Actually Goes</h2>
      <p>Let&apos;s look at a hypothetical example, based on issues many businesses face. A mid-sized e-commerce business spending $15,000/month on Google Ads. Smart Bidding enabled. Conversion tracking set up correctly. Everything “by the book.”</p>
      <p>Here&apos;s what a review of an account like this would typically uncover:</p>

      <Point index="01" title="Search Term Bleed" figure="~$2,800/MONTH WASTED" />
      <p>The search term report would typically be full of queries like:</p>
      <ul className={styles.terms}>
        {SEARCH_TERMS.map(({ term, note }) => (
          <li key={term}>
            <span className={styles.term}>{term}</span>
            <span className={styles.termNote}>— {note}</span>
          </li>
        ))}
      </ul>
      <p className={styles.emphasis}>These aren&apos;t edge cases. They can make up roughly 20% of total spend.</p>
      <p>Smart Bidding sees these clicks and thinks: “These are cheap! Let&apos;s get more!” Because the algorithm optimizes for your target metric, and if you&apos;re targeting conversions, it doesn&apos;t know these searches can&apos;t convert — until you&apos;ve wasted enough money to prove it.</p>

      <Point index="02" title="Budget Misallocation" figure="~$1,200/MONTH IN MISSED OPPORTUNITY" />
      <p>The best-performing campaign might have an impression share of around 60%. That means it&apos;s missing approximately 40% of searches from people actively looking for the product.</p>
      <p>Meanwhile, a brand campaign (people searching the company name) could be getting close to 90% impression share — burning budget on people who would have found the business anyway.</p>
      <p>The fix is obvious: shift around $800/month from brand to the high-intent campaign. But “set and forget” doesn&apos;t catch this. You would have to figure things like this out for yourself.</p>

      <Point index="03" title="Ad Fatigue" figure="~25% CTR DECLINE OVER 3 MONTHS" />
      <p>Top-performing ads often run unchanged for months on end. In months 1-4, an ad might hold a CTR of around 4%. By month 7? Around 3%.</p>
      <p>That&apos;s roughly a 25% decline. Not because the ad is bad — it may well be great. But audiences get tired. They&apos;ve seen it before. They scroll past.</p>

      <h2>The Real Cost of “Set and Forget”</h2>
      <p>Add it up:</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th scope="col">ISSUE</th>
            <th scope="col">MONTHLY WASTE (EST.)</th>
          </tr>
        </thead>
        <tbody>
          {WASTE.map(({ issue, cost }) => (
            <tr key={issue}>
              <td>{issue}</td>
              <td>{cost}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>~$4,900/month</td>
          </tr>
        </tfoot>
      </table>
      <p className={styles.note}>Figures are illustrative estimates for a typical account of this size.</p>
      <p>On $15,000/month in spend, that&apos;s <strong>about a third of the budget</strong>. Not because these businesses are bad at advertising — because they trust automation to do a job it was never designed to do.</p>

      <h2>What “Monitoring” Actually Means</h2>
      <p>Here&apos;s the thing: you don&apos;t need to become a Google Ads expert. You don&apos;t need to spend hours per day in the platform. You don&apos;t need to hire an agency.</p>
      <p>You need three things:</p>

      <Point index="01" title="Weekly Search Term Reviews" />
      <p>Spend 15 minutes per week looking at what people actually searched before clicking your ads. Add negative keywords for anything irrelevant.</p>
      <p className={styles.emphasis}>This alone can save a significant proportion of wasted spend.</p>

      <Point index="02" title="Monthly Budget Audits" />
      <p>Check impression share on your top campaigns. If profitable campaigns are losing impression share to budget, reallocate from lower-performing campaigns.</p>

      <Point index="03" title="Creative Refresh Every 60-90 Days" />
      <p>Don&apos;t wait for ads to die. Proactively test new headlines and descriptions. When you find a winner, know that it has a shelf life.</p>

      <h2>Or: Let Adgrow Do It (The Right Way)</h2>
      <p>We&apos;ll be honest — most business owners don&apos;t have time for this. That&apos;s why we&apos;re building Adgrow.</p>
      <p>Not to replace Google&apos;s automation. To fill the gaps it leaves behind.</p>
      <p>Adgrow is being built to monitor your campaigns 24/7 and tell you exactly what&apos;s wrong:</p>
      <div className={styles.recommendations}>
        {RECOMMENDATIONS.map((text) => (
          <div key={text} className={styles.recommendation}>
            <span className={styles.recommendationLabel}>
              <span className="dot dot--sm dot--steady" />
              ADGROW · EXAMPLE RECOMMENDATION
            </span>
            <span className={styles.recommendationText}>{text}</span>
          </div>
        ))}
      </div>
      <p>Every recommendation comes with an explanation. Every action requires your approval. <strong>Adgrow makes recommendations. You decide.</strong></p>

      <h2>The Bottom Line</h2>
      <p className={styles.emphasis}>“Set and forget” isn&apos;t a strategy. It&apos;s wishful thinking.</p>
      <p>Automated bidding is a powerful tool — when combined with human oversight. Without it, you&apos;re not running ads. You&apos;re hoping.</p>
      <p>Your competitors are watching their campaigns. They&apos;re catching the leaks. They&apos;re reallocating budget to what works.</p>
      <p className={styles.closing}>
        The question isn&apos;t whether you can afford to monitor your ads.{' '}
        <span className="accent">It&apos;s whether you can afford not to.</span>
      </p>
    </BlogPost>
  );
}

/** Numbered subheading, with an optional figure (e.g. the cost) after it. */
function Point({ index, title, figure }) {
  return (
    <h3 className={styles.point}>
      <span className={styles.pointIndex}>{index}</span>
      <span className={styles.pointTitle}>{title}</span>
      {figure && <span className={styles.pointFigure}>{figure}</span>}
    </h3>
  );
}
