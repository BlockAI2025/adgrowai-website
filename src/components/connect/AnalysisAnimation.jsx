'use client';

import { useRef } from 'react';
import { clamp01, easeInOutCubic } from '@/lib/animation';
import { setText, useScrollStartedLoop } from './useScrollStartedLoop';
import styles from './AnalysisAnimation.module.css';

// What gets scanned, how many, and what was found.
const SCAN = [
  { label: 'Campaigns', count: '6', result: '2 FINDINGS' },
  { label: 'Keywords', count: '1,912', result: 'OK' },
  { label: 'Search terms', count: '4,388', result: '23 WASTEFUL' },
  { label: 'Conversion tracking', count: '5 actions', result: '1 NOT RECORDING' },
];

const LOOP_SECONDS = 14;
const WASTE_FOUND = 322;

// Timeline: scan bars fill one by one (0.3–5s) → cross-fade to the results (5s) → charts draw in → back to the scan (13.3s).
function animate(find, seconds) {
  const t = seconds % LOOP_SECONDS;
  const toResults = clamp01((t - 5) / 0.6);
  const backToScan = clamp01((t - 13.3) / 0.6);
  const results = toResults * (1 - backToScan);

  const bars = find('[data-scan-bar]');
  const statuses = find('[data-scan-status]');
  SCAN.forEach((row, i) => {
    const p = t > 5.6 ? 0 : clamp01((t - 0.3 - i * 0.9) / 1.3);
    const done = p >= 1;
    const color = done ? (row.result === 'OK' ? 'var(--acc)' : 'var(--warn)') : 'var(--fg3)';
    bars[i].style.width = `${(p * 100).toFixed(2)}%`;
    bars[i].style.background = color;
    setText(statuses[i], done ? row.result : p > 0 ? `SCANNING ${Math.round(p * 100)}%` : 'QUEUED');
    statuses[i].style.color = color;
  });

  const [scanningHeading, readyHeading] = find('[data-heading]');
  scanningHeading.style.opacity = 1 - results;
  readyHeading.style.opacity = results;

  const [scanPane, resultsPane] = find('[data-pane]');
  scanPane.style.opacity = 1 - results;
  resultsPane.style.opacity = results;
  resultsPane.style.transform = `translateY(${((1 - toResults) * 10).toFixed(2)}px)`;

  const showing = t >= 5;
  const [working, wasted] = find('[data-pie]');
  working.style.strokeDasharray = `${(76 * (showing ? easeInOutCubic((t - 5.5) / 1.1) : 0)).toFixed(2)} 100`;
  wasted.style.strokeDasharray = `${(22 * (showing ? easeInOutCubic((t - 6.5) / 0.6) : 0)).toFixed(2)} 100`;

  const lineProgress = showing ? easeInOutCubic((t - 5.8) / 1.6) : 0;
  const callsTag = showing ? clamp01((t - 7.1) / 0.4) : 0;
  const [line] = find('[data-line]');
  const [area] = find('[data-area]');
  line.style.strokeDashoffset = (1 - lineProgress).toFixed(4);
  area.style.opacity = lineProgress;
  for (const el of [...find('[data-band]'), ...find('[data-drop]'), ...find('[data-calls-tag]')]) el.style.opacity = callsTag;

  const [waste] = find('[data-waste]');
  setText(waste, `$${Math.round(WASTE_FOUND * (showing ? easeInOutCubic((t - 6) / 1.4) : 0))}`);
}

const CONVERSIONS_PATH =
  'M0 49.2 L23.5 42.4 L47.1 45.8 L70.6 35.6 L94.1 39 L117.6 28.8 L141.2 32.2 L164.7 25.4 L188.2 28.8 L211.8 22 L235.3 59.4 L258.8 62.8 L282.4 59.4 L305.9 25.4 L329.4 18.6 L352.9 22 L376.5 15.2 L400 11.8';

/** Step 2: scanning the account, then the analysis results. */
export default function AnalysisAnimation() {
  const ref = useRef(null);
  useScrollStartedLoop(ref, animate);

  return (
    <div ref={ref} data-reveal="1" className="panel">
      <div className="panel-bar">
        <span className={styles.headings}>
          <span data-heading className={styles.heading}>
            <span className="dot dot--sm" />
            SCANNING
          </span>
          <span data-heading className={`${styles.heading} ${styles.headingReady}`}>
            <span className="dot dot--sm dot--steady" />
            ANALYSIS READY
          </span>
        </span>
        <span>DEMO ACCOUNT</span>
      </div>

      <div className={styles.panes}>
        {/* Scan progress */}
        <div data-pane className={styles.scanPane}>
          {SCAN.map((row) => (
            <div key={row.label} className={styles.scanRow}>
              <div className={styles.scanHead}>
                <span className={styles.scanLabel}>
                  {row.label} <span className={styles.scanCount}>· {row.count}</span>
                </span>
                <span data-scan-status className={styles.scanStatus}>QUEUED</span>
              </div>
              <div className={styles.scanTrack}>
                <div data-scan-bar className={styles.scanBar} />
              </div>
            </div>
          ))}
        </div>

        {/* Results */}
        <div data-pane className={styles.resultsPane}>
          <div className={styles.result}>
            <span className={styles.resultLabel}>SPEND · 30 DAYS</span>
            <div className={styles.pieRow}>
              <svg viewBox="0 0 100 100" className={styles.pie}>
                <circle cx="50" cy="50" r="40" className={styles.pieTrack} />
                <circle data-pie cx="50" cy="50" r="40" pathLength="100" className={styles.pieWorking} />
                <circle data-pie cx="50" cy="50" r="40" pathLength="100" className={styles.pieWasted} />
              </svg>
              <div className={styles.pieLegend}>
                <span className={styles.pieKey}>
                  <span className={`${styles.swatch} ${styles.swatchWorking}`} />
                  77% WORKING
                </span>
                <span className={styles.pieKey}>
                  <span className={`${styles.swatch} ${styles.swatchWasted}`} />
                  23% WASTED
                </span>
              </div>
            </div>
          </div>

          <div className={`${styles.result} ${styles.wasteResult}`}>
            <span className={styles.resultLabel}>WASTE FOUND</span>
            <span data-waste className={styles.wasteValue}>${WASTE_FOUND}</span>
            <span className={styles.wasteNote}>23 SEARCH TERMS · 0 CONVERSIONS</span>
          </div>

          <div className={`${styles.result} ${styles.chartResult}`}>
            <div className={styles.chartHead}>
              <span>CONVERSIONS · 90 DAYS</span>
              <span data-calls-tag className={styles.callsTag}>● CALLS NOT COUNTED</span>
            </div>
            <svg viewBox="0 0 400 90" className={styles.chart}>
              <rect data-band x="223" y="0" width="71" height="90" className={styles.band} />
              <path d="M0 89.5 H400" className={styles.baseline} />
              <path data-area d={`${CONVERSIONS_PATH} L400 90 L0 90 Z`} className={styles.area} />
              <path data-line d={CONVERSIONS_PATH} pathLength="1" className={styles.line} />
              <circle data-drop cx="258.8" cy="62.8" r="4" className={styles.drop} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
