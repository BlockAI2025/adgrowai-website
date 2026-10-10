'use client';

import { useEffect, useRef, useState } from 'react';
import { clockTime } from '@/lib/animation';
import { createRadar } from './radarCanvas';
import styles from './RadarScanner.module.css';

const cents = (n) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const dollars = (n) => '$' + Math.round(n).toLocaleString('en-US');

/** Hero radar: sweeps a demo account, locks onto wasted spend and "fixes" it. */
export default function RadarScanner() {
  const canvasRef = useRef(null);
  const [lock, setLock] = useState(null); // latest leak the radar locked onto
  const [caught, setCaught] = useState(0); // weekly waste found
  const [saved, setSaved] = useState(0); // weekly waste fixed
  const [signals, setSignals] = useState(18240);

  useEffect(() => {
    const draw = createRadar(canvasRef.current, {
      onLock: (leak) => {
        setLock({ ...leak, time: clockTime() });
        setCaught((total) => total + leak.v);
      },
      onFix: (leak) => setSaved((total) => total + leak.v),
    });
    let frame = requestAnimationFrame(function loop(now) {
      frame = requestAnimationFrame(loop);
      draw(now / 1000);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // "Signals checked" keeps counting up.
  useEffect(() => {
    const id = setInterval(() => setSignals((n) => n + 1 + Math.floor(Math.random() * 4)), 750);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.panel}>
      <div className={styles.screen}>
        <canvas ref={canvasRef} className={styles.canvas} />
        <div className={`${styles.corner} ${styles.cornerLeft}`} />
        <div className={`${styles.corner} ${styles.cornerRight}`} />
        <div className={styles.hud}>
          <span className={styles.hudTitle}>
            <span className={styles.hudStrong}>SCAN // DEMO ACCOUNT</span>
            <span>RANGE 30D</span>
          </span>
          <span className={styles.live}>
            <span className="dot dot--sm" />
            LIVE
          </span>
        </div>
        {lock && (
          <div className={styles.lock}>
            <div className={styles.lockHead}>
              <span>TARGET LOCK</span>
              <span>{lock.time}</span>
            </div>
            <div className={styles.lockQuery}>{lock.q}</div>
            <div className={styles.lockCampaign}>{lock.camp}</div>
            <div className={styles.lockFoot}>
              <span className="warn">−{cents(lock.v)}/wk</span>
              <span className="accent">{lock.a}</span>
            </div>
          </div>
        )}
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>SIGNALS CHECKED</span>
          <span className={styles.statValue}>{signals.toLocaleString('en-US')}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>WASTE CAUGHT</span>
          <span className={`${styles.statValue} warn`}>{cents(caught)}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>SAVED / WEEK</span>
          <span className={`${styles.statValue} accent`}>{dollars(saved)}</span>
        </div>
      </div>
    </div>
  );
}
