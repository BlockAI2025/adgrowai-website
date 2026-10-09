'use client';

import { useEffect, useRef } from 'react';
import styles from './ActivityTicker.module.css';

const EVENTS = [
  { time: '09:14:02', kind: 'WASTE', message: "'plumbing jobs' · 14 clicks · 0 conv · Search · Emergency Callouts" },
  { time: '09:14:31', kind: 'FIXED', message: "Negative keyword 'jobs' approved and applied" },
  { time: '09:15:10', kind: 'WASTE', message: 'Budget exhausted 11:40 · PMax · Online Store' },
  { time: '09:15:44', kind: 'CHECK', message: 'Conversion tracking · 4 of 5 actions recording' },
  { time: '09:16:20', kind: 'FIXED', message: '3 ads paused · landing page returning 404' },
  { time: '09:16:58', kind: 'WASTE', message: 'CPC +41% vs 14-day baseline · Search · Brand' },
];

const SPEED = 30; // px per second

/** Endless strip of account activity under the home hero. */
export default function ActivityTicker() {
  const trackRef = useRef(null);

  // The events are rendered twice; scrolling by half the width loops seamlessly.
  useEffect(() => {
    const track = trackRef.current;
    let x = 0;
    let last = null;
    let frame = requestAnimationFrame(function step(now) {
      frame = requestAnimationFrame(step);
      const dt = last === null ? 0 : Math.min(0.1, (now - last) / 1000);
      last = now;
      x -= SPEED * dt;
      const half = track.scrollWidth / 2;
      if (half && -x >= half) x += half;
      track.style.transform = `translate3d(${x}px,0,0)`;
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={styles.ticker}>
      <div ref={trackRef} className={styles.track}>
        {[...EVENTS, ...EVENTS].map((event, i) => (
          <div key={i} className={styles.item} aria-hidden={i >= EVENTS.length || undefined}>
            <span className={styles.time}>{event.time}</span>
            <span className={styles.kind} data-kind={event.kind}>{event.kind}</span>
            <span className={styles.message}>{event.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
