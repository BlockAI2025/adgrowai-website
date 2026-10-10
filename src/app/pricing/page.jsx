import Waitlist from '@/components/layout/Waitlist';
import PricingFaq from '@/components/pricing/PricingFaq';
import PricingPlans from '@/components/pricing/PricingPlans';
import SectionHeader from '@/components/ui/SectionHeader';
import styles from './page.module.css';

export const metadata = {
  title: 'Pricing',
  description:
    'A flat monthly fee with no long-term commitment — no percentage of your ad spend. Annual plans save 20% and can be cancelled at any time.',
};

export default function PricingPage() {
  return (
    <main>
      {/* Hero and plan cards (they share the monthly/annual toggle) */}
      <PricingPlans />

      {/* [01] Questions */}
      <section className="section section--md">
        <div className={`container ${styles.faq}`}>
          <div data-reveal="0" className={styles.faqIntro}>
            <SectionHeader index="01" title="QUESTIONS" rule={false} reveal={false} />
            <h2 className={`display ${styles.faqTitle}`}>Pricing questions</h2>
          </div>
          <PricingFaq />
        </div>
      </section>

      <Waitlist />
    </main>
  );
}
