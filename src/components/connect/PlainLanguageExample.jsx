import { Fragment } from 'react';
import styles from './PlainLanguageExample.module.css';

// The raw Google Ads data behind the recommendation.
const RAW_SIGNAL = [
  { key: 'search_term', value: '"plumbing jobs"' },
  { key: 'clicks', value: '14' },
  { key: 'conversions', value: '0', warn: true },
  { key: 'cost_7d', value: '$38.60', warn: true },
  { key: 'campaign', value: 'Search · Emergency Callouts' },
];

/** Step 3: a raw data point turned into a plain-language recommendation. */
export default function PlainLanguageExample() {
  return (
    <div data-reveal="1" className={styles.example}>
      <div className={styles.raw}>
        <span className={styles.rawLabel}>RAW SIGNAL</span>
        <div className={styles.rawGrid}>
          {RAW_SIGNAL.map(({ key, value, warn }) => (
            <Fragment key={key}>
              <span>{key}</span>
              <span className={warn ? 'warn' : styles.rawValue}>{value}</span>
            </Fragment>
          ))}
        </div>
      </div>
      <span className={styles.arrow}>↓ ADGROW</span>
      <div className={styles.plain}>
        <span className={styles.plainLabel}>IN PLAIN LANGUAGE</span>
        <span className={styles.plainText}>
          People searching &quot;plumbing jobs&quot; want work, not a plumber. They&apos;ve cost you $38.60 this week. Adding
          &quot;jobs&quot; as a negative keyword stops your ads showing for them.
        </span>
      </div>
    </div>
  );
}
