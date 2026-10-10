import styles from './ConfidenceDemo.module.css';

const DECISIONS = [
  { title: "Add 'plumbing jobs' as a negative keyword", confidence: 96, why: '0 conversions from 41 clicks in 30 days', source: 'Search terms report' },
  { title: 'Raise Emergency Callouts budget by $25/day', confidence: 84, why: 'Lost 46% of impressions to budget while converting at twice the account average', source: 'Impression share, 30 days' },
  { title: 'Pause Display · Remarketing', confidence: 41, why: 'Only 9 days of data since the last change, not enough to decide yet', source: 'Campaign report, 9 days' },
];

/** Recommendations at or above this confidence are ready to approve. */
const CONFIDENT = 70;

/**
 * F-04: blind "auto-applied" changes become explained recommendations with a
 * confidence score. `step` counts ticks since the demo started (-1 = not running).
 */
export default function ConfidenceDemo({ on, step }) {
  const items = DECISIONS.map((d, i) => ({ ...d, explained: step > 2 + i * 3, confident: d.confidence >= CONFIDENT }));
  const explained = items.filter((d) => d.explained).length;
  const allExplained = explained === items.length;
  const ready = items.filter((d) => d.confident).length;

  const statusTone = allExplained ? 'accent' : explained ? 'muted' : 'warn';
  const audit = allExplained
    ? `AUDIT TRAIL · ${items.length} DECISIONS LOGGED · ${ready} READY · ${items.length - ready} ON HOLD`
    : on
      ? 'AUDIT TRAIL · LOGGING…'
      : 'AUDIT TRAIL · NOTHING LOGGED';

  return (
    <div data-reveal="1" className={`panel ${styles.panel}`}>
      <div className="panel-bar">
        <span>RECOMMENDATIONS · WHY AND HOW SURE</span>
        <span className={statusTone}>{explained ? `${explained} OF ${items.length} EXPLAINED` : 'NO EXPLANATIONS'}</span>
      </div>
      <div className={styles.list}>
        {items.map((item) => (
          <div key={item.title} className={styles.item} data-explained={item.explained} data-confident={item.confident}>
            <div className={styles.head}>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.verdict}>
                {item.explained ? (item.confident ? 'READY TO APPROVE' : 'WAIT · LOW CONFIDENCE') : 'AUTO-APPLIED'}
              </span>
            </div>
            <div className={styles.meter}>
              <div className={styles.track}>
                <div className={styles.bar} style={{ width: item.explained ? `${item.confidence}%` : '0%' }} />
              </div>
              <span className={styles.percent}>{item.explained ? `${item.confidence}%` : '—'}</span>
            </div>
            <span className={styles.why}>{item.explained ? `${item.why}. Source: ${item.source}.` : 'No explanation given.'}</span>
          </div>
        ))}
      </div>
      <div className={`${styles.audit} ${allExplained ? 'accent' : 'faint'}`}>{audit}</div>
    </div>
  );
}
