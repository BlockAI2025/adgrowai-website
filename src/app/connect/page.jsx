import AnalysisAnimation from '@/components/connect/AnalysisAnimation';
import ApprovalQueue from '@/components/connect/ApprovalQueue';
import ConnectAnimation from '@/components/connect/ConnectAnimation';
import PlainLanguageExample from '@/components/connect/PlainLanguageExample';
import Step from '@/components/connect/Step';
import StepsBattery from '@/components/connect/StepsBattery';
import Waitlist from '@/components/layout/Waitlist';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './page.module.css';

export const metadata = {
  title: 'How it works',
  description:
    'Connect your Google Ads account, let Adgrow analyse it, read what to change in plain language, and approve every change before it is applied.',
};

const INCLUDED = [
  { title: '24/7 monitoring', text: 'Your account is checked continuously, not once a month.' },
  { title: 'Waste alerts', text: 'Hear about wasted spend while it is happening.' },
  { title: 'Search term review', text: 'Irrelevant searches are found and turned into negative keywords.' },
  { title: 'Budget pacing', text: 'Spot budgets that run out early or sit unused.' },
  { title: 'Tracking health check', text: 'Know your conversions are being counted correctly.' },
  { title: 'Weekly report', text: 'A short summary of what was found, approved and saved.' },
  { title: 'Winning campaign growth', text: 'Opportunities to optimise winning campaigns.' },
  { title: 'Seasonal budget shifts', text: 'Situationally move funds between campaigns to optimise for changing seasons.' },
];

export default function ConnectPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero grid-bg">
        <div className="container stack gap-28">
          <Eyebrow>CONNECT · HOW IT WORKS</Eyebrow>
          <h1 className={`display display--page ${styles.title}`}>
            Connect. Analyse. Explain. <span className="accent">Approve.</span>
          </h1>
          <p className={`lead lead--lg ${styles.heroText}`}>
            Adgrow connects to your Google Ads account to analyse your campaigns, keywords and conversion tracking, then
            explains what to change in plain language. Every change to your account requires your explicit approval before
            it is applied.
          </p>
          <StepsBattery />
        </div>
      </section>

      {/* The four steps */}
      <section className="section">
        <div className="container stack">
          <Step number={1} name="CONNECT" title="Link your Google Ads account" demo={<ConnectAnimation />}>
            Sign in with Google and choose the account you want Adgrow to look after. Adgrow starts by reading your campaigns
            and their history.
          </Step>
          <Step number={2} name="ANALYSE" title="Campaigns, keywords and conversion tracking" demo={<AnalysisAnimation />}>
            Adgrow reviews how your account is set up and how it is performing, then keeps checking it around the clock so new
            problems are caught the day they start.
          </Step>
          <Step number={3} name="EXPLAIN" title="What to change, in plain language" demo={<PlainLanguageExample />}>
            Raw Google Ads data is turned into a sentence you can act on: what&apos;s wrong, why it matters, and what the change
            will do. No jargon and no spreadsheets.
          </Step>
          <Step number={4} name="APPROVE" title="Nothing changes without you" demo={<ApprovalQueue />}>
            Every change to your account requires your explicit approval before it is applied. Approve a recommendation and
            Adgrow makes the change in Google Ads for you.
          </Step>
        </div>
      </section>

      {/* What's included */}
      <section className="section section--md">
        <div className="container stack gap-40">
          <SectionHeader index="+" title="WHAT'S INCLUDED" />
          <div className={`hairline-grid ${styles.included}`}>
            {INCLUDED.map((feature, i) => (
              <div key={feature.title} data-reveal={i % 3} className={styles.feature}>
                <span className={styles.featureCode}>F-{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.featureTitle}>{feature.title}</span>
                <span className={styles.featureText}>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Waitlist />
    </main>
  );
}
