'use client';

import { useRef } from 'react';
import { CANVAS_COLORS, clamp01, hexA } from '@/lib/animation';
import { getTheme } from '@/lib/theme';
import { setText, useScrollStartedLoop } from './useScrollStartedLoop';
import styles from './StepsBattery.module.css';

const STEPS = ['CONNECT', 'ANALYSE', 'EXPLAIN', 'APPROVE'];
const LOOP_SECONDS = 7.6;
const SECONDS_PER_CELL = 0.85;

// Cells fill one after another, the battery glows when full, then it resets.
function animate(find, seconds) {
  const t = seconds % LOOP_SECONDS;
  const fade = clamp01((t - 6.3) / 0.5);
  const full = t >= SECONDS_PER_CELL * STEPS.length;
  const lit = full && fade < 1;
  const edges = find('[data-edge]');
  let charge = 0;

  find('[data-fill]').forEach((fill, i) => {
    const p = clamp01((t - i * SECONDS_PER_CELL) / SECONDS_PER_CELL);
    charge += p;
    fill.style.clipPath = `inset(0 ${(100 - p * 100).toFixed(2)}% 0 0)`;
    fill.style.opacity = 1 - fade;
    edges[i].style.left = `calc(${(p * 100).toFixed(2)}% - 1px)`;
    edges[i].style.opacity = p > 0 && p < 1 ? 0.9 : 0;
  });

  const [status] = find('[data-status]');
  setText(status, full ? 'READY · 4 STEPS' : `CHARGING ${Math.round(charge * 25)}%`);
  status.style.color = full ? 'var(--ok)' : 'var(--fg3)';

  const [nub] = find('[data-nub]');
  nub.style.background = lit ? 'var(--ok)' : 'var(--line2)';

  const [shell] = find('[data-shell]');
  shell.style.borderColor = lit ? 'var(--ok)' : 'var(--line2)';
  shell.style.boxShadow = lit
    ? `0 0 ${(22 + 10 * Math.sin(t * 4)).toFixed(1)}px ${hexA(CANVAS_COLORS[getTheme()].ok, 0.28 * (1 - fade))}`
    : 'none';
}

/** Four-cell "battery" in the Connect hero that charges through the steps. */
export default function StepsBattery() {
  const ref = useRef(null);
  useScrollStartedLoop(ref, animate);

  return (
    <div ref={ref} className={styles.battery}>
      <div className={styles.body}>
        <div data-shell className={styles.shell}>
          {STEPS.map((step, i) => (
            <div key={step} className={styles.cell}>
              <div className={styles.cellContent}>
                <span className={styles.cellNumber}>0{i + 1}</span>
                <span className={styles.cellLabel}>{step}</span>
              </div>
              <div data-fill className={`${styles.cellContent} ${styles.cellFill}`} aria-hidden="true">
                <span className={styles.cellNumber}>0{i + 1}</span>
                <span className={styles.cellLabel}>{step}</span>
              </div>
              <span data-edge className={styles.cellEdge} />
            </div>
          ))}
        </div>
        <span data-nub className={styles.nub} />
      </div>
      <span data-status className={styles.status}>CHARGING 0%</span>
    </div>
  );
}
