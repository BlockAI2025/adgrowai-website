'use client';

import Link from 'next/link';
import { useState } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import { ANNUAL_DISCOUNT, GROWTH_MONTHLY_PRICE } from '@/content/pricing';
import styles from './PricingPlans.module.css';

const ENTERPRISE = {
  limits: ['Ad spend above $15,000 / mo', 'Multiple Google Ads accounts'],
  features: ['Everything in Growth', 'Custom alert rules', 'Multi-account view', 'Priority support'],
};

const GROWTH = {
  limits: ['Up to $15,000 / mo ad spend', 'Up to 2 Google Ads accounts'],
  features: [
    '24/7 monitoring',
    'Plain-language recommendations',
    'Approval before every change',
    'Instant waste alerts',
    'Conversion tracking health check',
    'Weekly email report',
  ],
};

/** Pricing hero (with the monthly/annual toggle) and the plan cards it controls. */
export default function PricingPlans() {
  const [annual, setAnnual] = useState(false);
  const growthPrice = annual ? Math.round(GROWTH_MONTHLY_PRICE * (1 - ANNUAL_DISCOUNT)) : GROWTH_MONTHLY_PRICE;

  return (
    <>
      <section className="page-hero page-hero--short grid-bg">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <Eyebrow>PRICING</Eyebrow>
            <h1 className="display display--page balance">
              Transparent AI. <span className="accent">Transparent Pricing.</span>
            </h1>
            <p className={`lead ${styles.heroText}`}>
              It only works for us if it works for you. Monthly fixed flat fee with no long term commitment. Annual plans are
              paid upfront but can be cancelled at any time.
            </p>
            <div className={styles.billing} role="group" aria-label="Billing period">
              <button type="button" aria-pressed={!annual} onClick={() => setAnnual(false)}>MONTHLY</button>
              <button type="button" aria-pressed={annual} onClick={() => setAnnual(true)}>
                ANNUAL −{Math.round(ANNUAL_DISCOUNT * 100)}%
              </button>
            </div>
            <span className={styles.note}>INDICATIVE PRICING · FINAL PRICES AT LAUNCH</span>
          </div>
        </div>
      </section>

      <section className={styles.plansSection}>
        <div className={`container ${styles.plans}`}>
          <Plan
            featured
            reveal={0}
            code="P-01"
            name="Growth"
            tagline="Round-the-clock watch for growing spend."
            price={`$${growthPrice}`}
            priceNote={annual ? '/ MO · BILLED YEARLY' : '/ MONTH'}
            {...GROWTH}
          >
            <a href="#waitlist" className={`${styles.cta} ${styles.ctaPrimary}`}>JOIN WAITLIST</a>
          </Plan>
          <Plan
            reveal={1}
            code="P-02"
            name="Enterprise"
            tagline="For bigger budgets or many accounts."
            price="Custom"
            priceNote="/ TAILORED PLAN"
            {...ENTERPRISE}
          >
            <Link href="/about#contact" className={styles.cta}>TALK TO US →</Link>
          </Plan>
        </div>
      </section>
    </>
  );
}

function Plan({ featured = false, reveal, code, name, tagline, price, priceNote, limits, features, children }) {
  return (
    <div data-reveal={reveal} className={`${styles.plan} ${featured ? styles.planFeatured : ''}`}>
      <div className={styles.planHead}>
        <span className={styles.planCode}>{code}</span>
        <span className={styles.planName}>{name}</span>
        <span className={styles.planTagline}>{tagline}</span>
      </div>
      <div className={styles.price}>
        <span className={styles.priceAmount}>{price}</span>
        <span className={styles.priceNote}>{priceNote}</span>
      </div>
      <div className={styles.limits}>
        {limits.map((limit) => (
          <span key={limit}>{limit}</span>
        ))}
      </div>
      <div className={styles.features}>
        {features.map((feature) => (
          <span key={feature}>
            <span className="accent">✓</span> {feature}
          </span>
        ))}
      </div>
      {children}
    </div>
  );
}
