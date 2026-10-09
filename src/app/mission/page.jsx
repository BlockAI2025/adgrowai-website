import Link from 'next/link';
import Waitlist from '@/components/layout/Waitlist';
import FixShowcase from '@/components/mission/FixShowcase';
import ProblemSimulation from '@/components/mission/ProblemSimulation';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './page.module.css';

export const metadata = {
  title: 'Our mission',
  description:
    'Most small businesses run Google Ads without a specialist watching. Adgrow catches wasted spend the day it starts and explains the fix in plain language.',
};

export default function MissionPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero grid-bg">
        <div className="container stack gap-28">
          <Eyebrow>OUR MISSION</Eyebrow>
          <h1 className={`display display--page balance ${styles.title}`}>
            Every Ad Dollar Should Be <span className="accent">Working For You</span>
          </h1>
          <p className={`lead lead--lg ${styles.heroText}`}>
            Most small businesses run Google Ads without a specialist watching. Money leaks out in small, quiet ways that are
            easy to miss. Adgrow exists to catch those leaks the day they start and explain the fix in plain language.
          </p>
          <div className={styles.jumpLinks}>
            <a href="#problem" className={styles.jumpLink}>
              <span className="warn">01</span> THE PROBLEM
            </a>
            <span className={styles.jumpArrow}>→</span>
            <a href="#fix" className={styles.jumpLink}>
              <span className="accent">02</span> THE FIX
            </a>
          </div>
        </div>
      </section>

      {/* [01] The problem */}
      <section id="problem" className={`section section--lg ${styles.anchor}`}>
        <div className="container stack gap-48">
          <SectionHeader
            index="01"
            tone="warn"
            title="THE PROBLEM"
            aside={
              <span className={styles.simulationTag}>
                <span className="dot dot--sm dot--warn" />
                SIMULATION
              </span>
            }
          />
          <div data-reveal="0" className="intro-split">
            <h2 className="display display--section">
              Ad spend leaks <span className="warn">quietly.</span>
            </h2>
            <p className={`lead ${styles.measure50}`}>
              Wasted spend in a small account is rarely dramatic. It&apos;s a handful of bad search terms, a budget that runs
              dry by lunch, or tracking that quietly stopped working. Nobody notices, because nobody is watching. This is one
              day in an account like that.
            </p>
          </div>
          <ProblemSimulation />
        </div>
      </section>

      {/* [02] The fix */}
      <section id="fix" className={`section section--lg ${styles.anchor}`}>
        <div className="container stack gap-48">
          <SectionHeader index="02" title="THE FIX" aside={<span>FLIP THE SWITCH</span>} />
          <div data-reveal="0" className="intro-split">
            <h2 className="display display--section">
              Watched. Explained. <span className="accent">Fixed.</span>
            </h2>
            <p className={`lead ${styles.measure50}`}>
              Adgrow monitors your account around the clock, locates leaks, frames the problem and solution in plain
              language. Nothing changes until you approve it.
            </p>
          </div>
          <FixShowcase />
          <div data-reveal="0" className={styles.cta}>
            <span className={styles.ctaText}>See what Adgrow finds in your own account.</span>
            <Link href="/connect" className={styles.ctaButton}>CONNECT →</Link>
          </div>
        </div>
      </section>

      <Waitlist />
    </main>
  );
}
