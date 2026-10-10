'use client';

import { useState } from 'react';
import { clockTime } from '@/lib/animation';
import styles from './ApprovalQueue.module.css';

const QUEUE = [
  { id: 'q1', title: "Add 'jobs' as a negative keyword", campaign: 'Search · Emergency Callouts', impact: 'saves ~$38/wk' },
  { id: 'q2', title: 'Pause 3 ads pointing to a broken page', campaign: 'Search · Local Services', impact: 'saves ~$22/wk' },
];

/** Step 4: approve or dismiss queued changes; approved ones appear in the change log. */
export default function ApprovalQueue() {
  const [decisions, setDecisions] = useState({}); // id → { kind: 'approved' | 'dismissed', time }

  const decide = (id, kind) => setDecisions((current) => ({ ...current, [id]: { kind, time: clockTime() } }));
  const applied = QUEUE.filter((item) => decisions[item.id]?.kind === 'approved');

  return (
    <div data-reveal="1" className="panel">
      <div className="panel-bar">
        <span>APPROVAL QUEUE</span>
        <button type="button" className={styles.reset} onClick={() => setDecisions({})}>RESET ↺</button>
      </div>

      <div className={styles.items}>
        {QUEUE.map((item) => {
          const decision = decisions[item.id];
          return (
            <div key={item.id} className={styles.item} data-decision={decision?.kind}>
              <div className={styles.itemText}>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={styles.itemMeta}>
                  {item.campaign} · <span className="accent">{item.impact}</span>
                </span>
              </div>
              {!decision && (
                <div className={styles.actions}>
                  <button type="button" className={styles.dismiss} onClick={() => decide(item.id, 'dismissed')}>DISMISS</button>
                  <button type="button" className={styles.approve} onClick={() => decide(item.id, 'approved')}>APPROVE</button>
                </div>
              )}
              {decision?.kind === 'dismissed' && <span className={`${styles.outcome} faint`}>DISMISSED · NO CHANGE MADE</span>}
              {decision?.kind === 'approved' && <span className={`${styles.outcome} ok`}>APPROVED ✓</span>}
            </div>
          );
        })}
      </div>

      <div className={styles.log}>
        <span className={styles.logLabel}>CHANGES MADE TO YOUR ACCOUNT</span>
        {applied.length === 0 ? (
          <span className="muted">None yet. Nothing is applied until you approve it.</span>
        ) : (
          applied.map((item) => (
            <span key={item.id} className={styles.logLine}>
              <span className="faint">{decisions[item.id].time}</span> <span className="accent">APPLIED</span> {item.title}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
