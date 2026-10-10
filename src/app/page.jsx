import Link from 'next/link';
import ActivityTicker from '@/components/home/ActivityTicker';
import RadarScanner from '@/components/home/RadarScanner';
import RecommendationsDemo from '@/components/home/RecommendationsDemo';
import Waitlist from '@/components/layout/Waitlist';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionHeader from '@/components/ui/SectionHeader';
import { PRINCIPLES } from '@/content/principles';
import styles from './page.module.css';

// "Three places your budget leaks"
const AREAS = [
  {
    code: 'A-01',
    kind: 'STRUCTURE',
    title: 'Campaigns',
    text: 'Budgets, bids and ads are compared against how each campaign has performed before, so drift is caught early.',
    checks: ['Budget pacing', 'Bid strategy', 'Ad performance', 'Landing pages'],
  },
  {
    code: 'A-02',
    kind: 'INTENT',
    title: 'Keywords',
    text: 'Every search term that triggers your ads is reviewed. The ones that cost money and never convert are flagged.',
    checks: ['Non-converting search terms', 'Match types', 'Negative keywords', 'Overlap between campaigns'],
  },
  {
    code: 'A-03',
    kind: 'MEASUREMENT',
    title: 'Conversion tracking',
    text: 'If tracking is broken, Google bids blind. Adgrow checks that the actions you care about are actually being recorded.',
    checks: ['Tags firing', 'Calls and forms counted', 'Duplicate conversions', 'Conversion values'],
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className={`grid-bg ${styles.hero}`}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Eyebrow>AI-POWERED GOOGLE ADS MANAGEMENT FOR SMALL BUSINESSES</Eyebrow>
            <h1 className={`display ${styles.heroTitle}`}>
              The Digital Marketing Software <span className="accent">Every Small Business Needs</span>
            </h1>
            <p className={`lead ${styles.heroLead}`}>
              Adgrow connects to your Google Ads account to analyse your campaigns, keywords and conversion tracking, then
              explains what to change in plain language.
            </p>
            <div className={styles.heroActions}>
              <Link href="/mission" className={styles.heroButton}>SEE HOW IT WORKS</Link>
              <Link href="/connect" className={`${styles.heroButton} ${styles.heroButtonPrimary}`}>CONNECT →</Link>
            </div>
            <div className={styles.heroChecks}>
              <span>[✓] YOU APPROVE EVERY CHANGE</span>
              <span>[✓] PLAIN-LANGUAGE ADVICE</span>
              <span>[✓] 24/7 MONITORING</span>
            </div>
          </div>
          <RadarScanner />
        </div>
      </section>

      <ActivityTicker />

      {/* [01] What we analyse */}
      <section className="section section--lg">
        <div className="container stack gap-48">
          <SectionHeader
            index="01"
            title="WHAT WE ANALYSE"
            aside={<Link href="/mission" className="accent">OUR MISSION →</Link>}
          />
          <div data-reveal="0" className="intro-split">
            <h2 className="display display--section">Three places your budget leaks.</h2>
            <p className={`lead ${styles.measure50}`}>
              Wasted spend in a small account is rarely dramatic. It&apos;s a handful of bad search terms, a budget that runs
              dry by lunch, or tracking that quietly stopped working. Adgrow checks all three, all the time.
            </p>
          </div>
          <div className={`hairline-grid ${styles.areas}`}>
            {AREAS.map((area, i) => (
              <div key={area.code} data-reveal={i} className={styles.area}>
                <div className={styles.areaHead}>
                  <span className="accent">{area.code}</span>
                  <span className={styles.areaKind}>{area.kind}</span>
                </div>
                <h3 className={styles.areaTitle}>{area.title}</h3>
                <p className={styles.areaText}>{area.text}</p>
                <div className={styles.areaChecks}>
                  {area.checks.map((check) => (
                    <span key={check}>→ {check}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [02] Recommendations */}
      <section className="section section--lg">
        <div className="container stack gap-48">
          <SectionHeader index="02" title="RECOMMENDATIONS" aside={<span>TRY IT</span>} />
          <RecommendationsDemo />
          <div className={styles.principles}>
            {PRINCIPLES.map((principle, i) => (
              <div key={principle.title} data-reveal={i} className={styles.principle}>
                <span className={styles.principleIndex}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.principleTitle}>{principle.title}</span>
                <span className={styles.principleText}>{principle.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Waitlist />
    </main>
  );
}
