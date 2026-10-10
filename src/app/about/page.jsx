import Link from 'next/link';
import ContactForm from '@/components/about/ContactForm';
import Waitlist from '@/components/layout/Waitlist';
import Eyebrow from '@/components/ui/Eyebrow';
import SectionHeader from '@/components/ui/SectionHeader';
import { POSTS, postHref } from '@/content/posts';
import { PRINCIPLES } from '@/content/principles';
import { GROWTH_MONTHLY_PRICE } from '@/content/pricing';
import { CONTACT_EMAIL } from '@/lib/site';
import styles from './page.module.css';

export const metadata = {
  title: 'About',
  description:
    'Adgrow gives small businesses the constant attention of a Google Ads specialist: it analyses campaigns, explains what to change in plain language, and never touches the account without approval.',
};

// Typical monthly agency retainer, for the cost comparison in "Our story".
const AGENCY_MONTHLY_COST = 5000;

const VALUES = [
  {
    icon: 'bi-eye',
    title: 'Transparent and Explainable',
    text: 'We show you exactly what the AI is thinking and why. No black boxes, no magic claims.',
  },
  {
    icon: 'bi-hand-index-thumb',
    title: 'Control in your fingertips',
    text: 'The AI advises based on metrics, information and trends, you ultimately hold control - no decisions without your explicit approval.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Safety Before Speed',
    text: 'We prioritize keeping your campaigns safe over making aggressive changes. This is why we confidence scores, to allow the software time to collect and analyse the right sort of data and apply it with confidence you can trust.',
  },
];

const share = GROWTH_MONTHLY_PRICE / AGENCY_MONTHLY_COST;

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section id="about" className="page-hero grid-bg">
        <div className="container stack gap-28">
          <Eyebrow>ABOUT ADGROW</Eyebrow>
          <h1 className={`display display--page balance ${styles.title}`}>
            Businesses Deserve <span className="accent">Clarity</span> In Digital Marketing
          </h1>
          <p className={`lead lead--lg ${styles.heroText}`}>
            Most small businesses run Google Ads without an agency or a specialist. Adgrow gives them the same constant
            attention: it analyses campaigns, keywords and conversion tracking, explains what to change in plain language, and
            never touches the account without approval.
          </p>
        </div>
      </section>

      {/* [01] What we believe */}
      <section className="section section--md">
        <div className="container stack gap-40">
          <SectionHeader index="01" title="WHAT WE BELIEVE" />
          <div className={`hairline-grid ${styles.beliefs}`}>
            {PRINCIPLES.map((principle, i) => (
              <div key={principle.title} data-reveal={i} className={styles.belief}>
                <span className={styles.beliefIndex}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.beliefTitle}>{principle.title}</span>
                <span className={styles.beliefText}>{principle.text}</span>
              </div>
            ))}
          </div>
          <figure data-reveal="0" className={styles.quote}>
            <span aria-hidden="true" className={styles.quoteMark}>“</span>
            <div className={styles.quoteBody}>
              <blockquote className={styles.quoteText}>
                We&apos;re building the intelligence layer that should have existed from day one - one that explains,
                educates, and empowers rather than obscures and automates blindly
                <span aria-hidden="true" className={`${styles.quoteMark} ${styles.quoteMarkClose}`}>”</span>
              </blockquote>
              <figcaption className={styles.quoteCaption}>
                <span className={styles.quoteRule} />
                <span className={styles.quoteName}>AMAN SINGH</span>
                <span>·</span>
                <span>FOUNDER</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* [02] Our story */}
      <section className="section section--md">
        <div className="container stack gap-40">
          <SectionHeader index="02" title="OUR STORY" />
          <div className={styles.story}>
            <div data-reveal="0" className={styles.storyText}>
              <p className={styles.storyLead}>
                Adgrow was built after seeing how expensive agencies, confusing tools, and blind automation hurt growing
                businesses. Too many companies are paying ludicrous amounts like $5,000/month for agencies they can&apos;t
                afford, or making costly mistakes because they don&apos;t understand what to change.
              </p>
              <p className={styles.storyBody}>
                We wanted to build something different: an AI system that thinks, explains, and learns — while keeping humans
                in control of every decision.
              </p>
              <p className={styles.storyBody}>
                The result is Adgrow: a strategy and optimization intelligence layer that tells you what to change, why it
                matters, and how confident the system is before you act.
              </p>
            </div>

            <div data-reveal="1" className={styles.cost}>
              <div className={styles.costHead}>
                <span>MONTHLY COST</span>
                <span>INDICATIVE</span>
              </div>
              <CostRow label="MARKETING AGENCY" amount={`~$${AGENCY_MONTHLY_COST.toLocaleString('en-US')}`} barWidth="100%" />
              <CostRow label="ADGROW · GROWTH" amount={`$${GROWTH_MONTHLY_PRICE}`} barWidth={`${(share * 100).toFixed(2)}%`} highlight />
              <div className={styles.costFoot}>
                <span className="dot dot--lg dot--ok dot--steady" />
                <span>
                  ABOUT <span className="ok">{Math.round(share * 100)}%</span> OF A TYPICAL AGENCY RETAINER
                </span>
              </div>
            </div>
          </div>

          <div className={styles.connector}>
            <span />
          </div>

          <div data-reveal="0" className={styles.vision}>
            <div className={styles.visionHead}>
              <span className={styles.visionLabel}>
                <span className="dot dot--steady" />
                OUR VISION
              </span>
              <h2 className={`display ${styles.visionTitle}`}>Where we&apos;re heading</h2>
            </div>
            <p className={styles.visionText}>
              Adgrow is becoming the intelligence layer for paid ads — across platforms, industries, and business stages. Our
              goal is to make professional-grade marketing intelligence accessible to every business, not just those who can
              afford expensive agencies.
            </p>
          </div>
        </div>
      </section>

      {/* [03] Our values */}
      <section className="section section--md">
        <div className="container stack gap-40">
          <SectionHeader index="03" title="OUR VALUES" />
          <div className={styles.values}>
            {VALUES.map((value, i) => (
              <div key={value.title} data-reveal={i} className={styles.value}>
                <span aria-hidden="true" className={styles.valueIcon}>
                  <i className={`bi ${value.icon}`} />
                </span>
                <span className={styles.valueTitle}>{value.title}</span>
                <span className={styles.valueText}>{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [04] Blog */}
      <section id="blog" className={`section section--md ${styles.anchor}`}>
        <div className="container stack gap-40">
          <SectionHeader index="04" title="BLOG" />
          <div className={styles.posts}>
            {POSTS.map((post, i) => (
              <Link key={post.slug} data-reveal={i} href={postHref(post.slug)} className={styles.post}>
                <div className={styles.postBody}>
                  <span className={styles.postMeta}>
                    {post.category} · {post.date}
                  </span>
                  <span className={styles.postTitle}>{post.title}</span>
                  <span className={styles.postRead}>READ →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* [05] Contact */}
      <section id="contact" className={`section section--md ${styles.anchor}`}>
        <div className="container stack gap-40">
          <SectionHeader index="05" title="CONTACT" />
          <div data-reveal="0" className={styles.contact}>
            <ContactForm />
            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>EMAIL</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>{CONTACT_EMAIL}</a>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>REGISTERED ADDRESS</span>
                <div className={styles.address}>
                  <span className={styles.company}>AdgrowAI Limited</span>
                  <span className={styles.companyNumbers}>NZ Company No. 9418222 | NZBN 9429053564504</span>
                  <span>641 Pahi Rd, Pahi, Pahi 0571, New Zealand</span>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailLabel}>STATUS</span>
                <span className={styles.status}>
                  <span className="dot dot--lg" />
                  Building · waitlist open
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Waitlist />
    </main>
  );
}

function CostRow({ label, amount, barWidth, highlight = false }) {
  return (
    <div className={styles.costRow}>
      <span className={styles.costLabel}>{label}</span>
      <div className={styles.costPrice}>
        <span className={`${styles.costAmount} ${highlight ? styles.costAmountHighlight : ''}`}>{amount}</span>
        <span className={styles.costPer}>/ MONTH</span>
      </div>
      <div className={styles.costBar}>
        <div className={`${styles.costFill} ${highlight ? styles.costFillHighlight : ''}`} style={{ width: barWidth }} />
      </div>
    </div>
  );
}
