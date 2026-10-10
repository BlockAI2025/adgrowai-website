import styles from './SearchTermsDemo.module.css';

// Monthly cost of each search term. Terms with a category are wasteful.
const TERMS = [
  { term: 'emergency plumber near me', cost: 176.4, conversions: 9 },
  { term: 'plumbing jobs', cost: 167.2, conversions: 0, category: 'IRRELEVANT' },
  { term: '24 hour plumber', cost: 128.6, conversions: 6 },
  { term: "dave's plumbing reviews", cost: 58.4, conversions: 0, category: 'COMPETITOR' },
  { term: 'how to unblock a drain diy', cost: 44.2, conversions: 0, category: 'LOW INTENT' },
  { term: 'plumber salary', cost: 52.4, conversions: 0, category: 'IRRELEVANT' },
];

const money = (n) => '$' + Math.round(n).toLocaleString('en-US');
const total = (terms) => terms.reduce((sum, t) => sum + t.cost, 0);

/**
 * F-01: wasteful search terms get blocked one by one once Adgrow is on.
 * `step` counts ticks since the demo started (-1 = not running).
 */
export default function SearchTermsDemo({ on, step }) {
  const rows = TERMS.map((t, i) => ({
    ...t,
    status: !t.category ? 'ok' : step > 2 + i * 2 ? 'blocked' : 'waste',
  }));
  const waste = total(rows.filter((r) => r.status === 'waste'));
  const saved = total(rows.filter((r) => r.status === 'blocked'));
  const flagged = rows.filter((r) => r.category).length;
  const [status, statusTone] = !on ? ['NOT REVIEWED', 'warn'] : waste ? ['SCANNING…', 'muted'] : [`${flagged} FLAGGED · ${flagged} BLOCKED`, 'accent'];

  return (
    <div data-reveal="1" className={`panel ${styles.panel}`}>
      <div className="panel-bar">
        <span>SEARCH TERMS · LAST 30 DAYS</span>
        <span className={statusTone}>{status}</span>
      </div>
      <div className={styles.terms}>
        {rows.map((row) => (
          <div key={row.term} className={styles.term} data-status={row.status}>
            <span className={styles.name}>
              <span className={styles.query}>{row.term}</span>
              <span className={styles.detail}>
                {row.status === 'blocked'
                  ? `${row.category} · SAVES ${money(row.cost)}/MO`
                  : `${row.conversions} ${row.conversions === 1 ? 'CONVERSION' : 'CONVERSIONS'}`}
              </span>
            </span>
            <span className={styles.cost}>{money(row.cost)}/mo</span>
            <span className={styles.tag}>{row.status === 'blocked' ? 'NEGATIVE ✓' : row.status === 'waste' ? 'NOT REVIEWED' : 'OK'}</span>
          </div>
        ))}
      </div>
      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>WASTE / MONTH</span>
          <span className={`${styles.metricValue} ${waste ? 'warn' : 'accent'}`}>{money(waste)}</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>EST. SAVINGS / MONTH</span>
          <span className={`${styles.metricValue} accent`}>{money(saved)}</span>
        </div>
      </div>
    </div>
  );
}
