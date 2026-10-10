import styles from './ScalingDemo.module.css';

// Chart coordinates use a 120 × 60 viewBox stretched to fit; 63.64% across is week 8.
const GRIDLINES = [
  { value: 15, top: '21.4%' },
  { value: 10, top: '57.1%' },
  { value: 5, top: '92.9%' },
];

const WEEKS = [
  { label: 'WK 1', style: { left: 0 } },
  { label: 'WK 4', style: { left: '27.27%', transform: 'translateX(-50%)' } },
  { label: 'WK 8', style: { left: '63.64%', transform: 'translateX(-50%)' } },
  { label: 'WK 12', style: { right: 0 } },
];

/**
 * F-02: a budget-limited campaign gets more budget and conversions climb to
 * the projection. `step` counts ticks since the demo started (-1 = not running).
 */
export default function ScalingDemo({ on, step }) {
  const approved = step > 2; // +$25/day approved
  const climbing = step > 4; // conversions start rising
  const done = step > 13; // gap closed

  const [status, statusTone] = done
    ? ['+6 CONVERSIONS / WEEK', 'accent']
    : approved
      ? ['BUDGET LIMITED · RAISING SPEND', 'warn']
      : on
        ? ['MEASURING…', 'muted']
        : ['NOT MONITORED', 'warn'];

  return (
    <div data-reveal="1" className={`panel ${styles.panel}`} data-approved={approved} data-climbing={climbing} data-done={done}>
      <div className="panel-bar">
        <span>EMERGENCY CALLOUTS · CONVERSIONS / WEEK</span>
        <span className={statusTone}>{status}</span>
      </div>

      <div className={styles.chartArea}>
        <div className={styles.chart}>
          {GRIDLINES.map(({ value, top }) => (
            <div key={value} className={styles.gridline} style={{ top }}>
              <span className={styles.gridValue}>{value}</span>
            </div>
          ))}

          <svg viewBox="0 0 120 60" preserveAspectRatio="none" className={styles.svg}>
            {/* Gap between projected and actual: weeks 1–8, then 8–12 until the budget lifts it */}
            <path d="M0 42.86 L76.36 23.36 L76.36 38.57 L65.45 37.71 L54.55 39 L43.64 37.29 L32.73 38.14 L21.82 37.71 L10.91 40.29 Z" className={styles.gapPast} />
            <path d="M76.36 23.36 L120 12.21 L120 38.57 L109.09 37.71 L98.18 39 L87.27 38.14 L76.36 38.57 Z" className={styles.gapFuture} />
            <path d="M0 42.86 L120 12.21" className={styles.projected} />
            <path d="M0 42.86 L10.91 40.29 L21.82 37.71 L32.73 38.14 L43.64 37.29 L54.55 39 L65.45 37.71 L76.36 38.57" className={styles.actual} />
            <path d="M76.36 38.57 L87.27 38.14 L98.18 39 L109.09 37.71 L120 38.57" className={`${styles.actual} ${styles.actualCapped}`} />
          </svg>

          {/* The climb after the budget increase, revealed left to right */}
          <div className={styles.climb}>
            <svg viewBox="0 0 120 60" preserveAspectRatio="none" className={styles.svg}>
              <path d="M76.36 38.57 L87.27 27.43 L98.18 19.71 L109.09 15.43 L120 12.43 L120 38.57 L109.09 37.71 L98.18 39 L87.27 38.14 Z" className={styles.climbArea} />
              <path d="M76.36 38.57 L87.27 27.43 L98.18 19.71 L109.09 15.43 L120 12.43" className={styles.climbLine} />
            </svg>
          </div>

          <div className={styles.marker} />
          <span className={styles.markerLabel}>+$25/DAY · APPROVED</span>
          <span className={styles.projectedLabel}>PROJECTED</span>
          <span className={styles.actualLabel}>ACTUAL</span>
          <span className={styles.gapLabel}>{done ? 'ACTUALIZED' : 'UNREALIZED POTENTIAL'}</span>
        </div>

        <div className={styles.weeks}>
          {WEEKS.map(({ label, style }) => (
            <span key={label} style={style}>{label}</span>
          ))}
        </div>
      </div>

      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>DAILY BUDGET</span>
          <span className={`${styles.metricValue} ${styles.budget}`}>{done ? '$65' : '$40'}</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.metricLabel}>CONVERSIONS / WEEK</span>
          <span className={`${styles.metricValue} ${styles.conversions}`}>{done ? '15' : '9'}</span>
        </div>
      </div>
    </div>
  );
}
