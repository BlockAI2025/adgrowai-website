'use client';

import { useRef } from 'react';
import { Mark } from '@/components/layout/Logo';
import { clamp01, easeInOutCubic, easeOutBack } from '@/lib/animation';
import { useScrollStartedLoop } from './useScrollStartedLoop';
import styles from './ConnectAnimation.module.css';

const LOOP_SECONDS = 9;

// Timeline: plug slides in (0.8–1.8s) → connecting → syncing (1.8–3.8s) → connected ✓ → fade and repeat.
function animate(find, seconds) {
  const t = seconds % LOOP_SECONDS;
  const slide = easeInOutCubic((t - 0.8) / 1);
  const plugAt = 34 + 16 * slide; // % across the wire
  const socketAt = 66 - 16 * slide;
  const connected = t >= 1.8;
  const done = t >= 3.8;
  const lineColor = connected ? 'var(--ok)' : 'var(--fg3)';

  const [stage] = find('[data-stage]');
  stage.style.opacity = Math.min(clamp01(t / 0.4), 1 - clamp01((t - 8.4) / 0.4));

  const [plug] = find('[data-plug]');
  plug.style.left = `${plugAt}%`;
  plug.style.borderColor = lineColor;
  plug.style.color = lineColor;

  const [socket] = find('[data-socket]');
  socket.style.left = `${socketAt}%`;
  socket.style.borderColor = lineColor;

  const [leftCable, rightCable] = find('[data-cable]');
  leftCable.style.width = `${plugAt}%`;
  rightCable.style.left = `${socketAt}%`;
  for (const cable of [leftCable, rightCable]) cable.style.background = connected ? 'var(--ok)' : 'var(--line2)';

  // Ring pulse at the moment of connection
  const ringProgress = clamp01((t - 1.8) / 0.6);
  const [ring] = find('[data-ring]');
  ring.style.opacity = connected && ringProgress < 1 ? (1 - ringProgress).toFixed(3) : 0;
  ring.style.transform = `scale(${(0.4 + ringProgress * 1.6).toFixed(3)})`;

  // Data dots flowing along the wire (slower once connected)
  const flow = t < 3.8 ? (t - 1.8) * 1.2 : 2.4 + (t - 3.8) * 0.35;
  find('[data-pulse]').forEach((dot, i) => {
    const f = (((flow + i / 3) % 1) + 1) % 1;
    dot.style.left = `${(f * 100).toFixed(2)}%`;
    dot.style.opacity = connected ? (Math.sin(f * Math.PI) * (done ? 0.55 : 1)).toFixed(3) : 0;
  });

  const [progress] = find('[data-progress]');
  progress.style.width = `${(clamp01((t - 1.8) / 2) * 100).toFixed(2)}%`;
  progress.style.background = done ? 'var(--ok)' : 'var(--acc)';

  const currentLabel = t < 0.8 ? 0 : t < 1.8 ? 1 : t < 3.8 ? 2 : 3;
  find('[data-label]').forEach((label, i) => {
    label.style.opacity = i === currentLabel ? 1 : 0;
  });

  const [check] = find('[data-check]');
  check.style.transform = `scale(${(done ? easeOutBack((t - 3.8) / 0.45) : 0).toFixed(3)})`;

  find('[data-tile]').forEach((tile, i) => {
    tile.style.borderColor = done ? 'var(--ok)' : 'var(--line2)';
    if (i === 1) tile.style.background = done ? 'color-mix(in srgb, var(--ok) 10%, var(--bg))' : 'var(--bg)';
  });
}

/** Step 1: Google Ads gets plugged into Adgrow. */
export default function ConnectAnimation() {
  const ref = useRef(null);
  useScrollStartedLoop(ref, animate);

  return (
    <div ref={ref} data-reveal="1" className="panel">
      <div className="panel-bar">
        <span>CONNECT ACCOUNT</span>
        <span>STEP 1 OF 4</span>
      </div>
      <div data-stage className={styles.stage}>
        <div className={styles.link}>
          <div data-tile className={styles.tile} role="img" aria-label="Google Ads">
            <i className={`bi bi-google ${styles.googleIcon}`} />
          </div>
          <div className={styles.wire}>
            <span data-cable className={`${styles.cable} ${styles.cableLeft}`} />
            <span data-cable className={`${styles.cable} ${styles.cableRight}`} />
            <span data-plug className={styles.plug}>
              <span className={`${styles.prong} ${styles.prongTop}`} />
              <span className={`${styles.prong} ${styles.prongBottom}`} />
            </span>
            <span data-socket className={styles.socket}>
              <span className={`${styles.hole} ${styles.holeTop}`} />
              <span className={`${styles.hole} ${styles.holeBottom}`} />
            </span>
            <span data-pulse className={styles.pulse} />
            <span data-pulse className={styles.pulse} />
            <span data-pulse className={styles.pulse} />
            <span data-ring className={styles.ring} />
          </div>
          <div data-tile className={styles.tile} role="img" aria-label="Adgrow">
            <Mark className={styles.mark} />
          </div>
        </div>

        <div className={styles.progressTrack}>
          <div data-progress className={styles.progress} />
        </div>

        <div className={styles.statusRow}>
          <div className={styles.labels}>
            <span data-label className={styles.label}>READY TO CONNECT</span>
            <span data-label className={`${styles.label} ${styles.labelActive}`}>CONNECTING…</span>
            <span data-label className={`${styles.label} ${styles.labelActive}`}>SYNCING · 6 CAMPAIGNS · 90 DAYS</span>
            <span data-label className={`${styles.label} ${styles.labelDone}`}>Connected</span>
          </div>
          <span data-check className={styles.check}>✓</span>
        </div>
      </div>
    </div>
  );
}
