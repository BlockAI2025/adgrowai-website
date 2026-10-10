'use client';

import { useState } from 'react';
import { clockTime } from '@/lib/animation';
import styles from './RecommendationsDemo.module.css';

const RECOMMENDATIONS = [
  {
    id: 'r1',
    tag: 'WASTE',
    campaign: 'Search · Emergency Callouts',
    impact: 'SAVES ~$38/WK',
    title: "You're paying for people looking for plumbing jobs.",
    body: "14 clicks from searches like 'plumbing jobs' cost $38.60 this week. None became customers. These people want a job, not a plumber.",
    change: "Add 'jobs' as a negative keyword",
  },
  {
    id: 'r2',
    tag: 'TRACKING',
    campaign: 'All campaigns',
    impact: 'BETTER BIDDING',
    title: "Phone calls from your ads aren't being counted.",
    body: "Most of your customers call rather than fill in a form, but calls aren't set up as conversions. Google can't see which clicks become customers, so it can't bid for more of them.",
    change: 'Turn on call conversion tracking',
  },
  {
    id: 'r3',
    tag: 'BUDGET',
    campaign: 'Search · Emergency Callouts',
    impact: '+~22 CLICKS/WK',
    title: 'Your budget runs out before lunch.',
    body: 'On most days this campaign spends its whole budget by 11:40am, so your ads disappear for the afternoon while people are still searching.',
    change: "Move $15/day from 'Display · Remarketing'",
  },
];

/** Interactive approve/dismiss demo in the home page's "Recommendations" section. */
export default function RecommendationsDemo() {
  const [decisions, setDecisions] = useState({}); // id → { kind: 'approved' | 'dismissed', time }

  const decide = (id, kind) => setDecisions((current) => ({ ...current, [id]: { kind, time: clockTime() } }));
  const pendingCount = RECOMMENDATIONS.filter((rec) => !decisions[rec.id]).length;
  const approvedCount = RECOMMENDATIONS.filter((rec) => decisions[rec.id]?.kind === 'approved').length;

  return (
    <div className={styles.grid}>
      <div data-reveal="0" className={styles.intro}>
        <h2 className="display display--section">
          Plain language. <span className="accent">Your call.</span>
        </h2>
        <p className={`lead ${styles.introText}`}>
          Each finding says what&apos;s wrong, why it matters and what the change will do. Every change to your account
          requires your explicit approval before it is applied.
        </p>
        <div className={styles.counters}>
          <div className={styles.counter}>
            <span className={styles.counterLabel}>AWAITING YOU</span>
            <span className={`${styles.counterValue} warn`}>{pendingCount}</span>
          </div>
          <div className={styles.counter}>
            <span className={styles.counterLabel}>APPROVED</span>
            <span className={`${styles.counterValue} accent`}>{approvedCount}</span>
          </div>
        </div>
      </div>

      <div className={styles.list}>
        {RECOMMENDATIONS.map((rec) => {
          const decision = decisions[rec.id];
          return (
            <div key={rec.id} className={styles.card} data-decision={decision?.kind}>
              <div className={styles.meta}>
                <span className={styles.tag} data-tag={rec.tag}>{rec.tag}</span>
                <span className={styles.campaign}>{rec.campaign}</span>
                <span className="accent">{rec.impact}</span>
              </div>
              <span className={styles.title}>{rec.title}</span>
              <span className={styles.body}>{rec.body}</span>
              <div className={styles.footer}>
                <span className={styles.change}>
                  <span className={styles.changeLabel}>CHANGE →</span> {rec.change}
                </span>
                {decision ? (
                  <span className={styles.outcome} data-decision={decision.kind}>
                    {decision.kind === 'approved' ? `✓ APPROVED · APPLIED ${decision.time}` : 'DISMISSED · NO CHANGE MADE'}
                  </span>
                ) : (
                  <div className={styles.actions}>
                    <button type="button" className={styles.dismiss} onClick={() => decide(rec.id, 'dismissed')}>DISMISS</button>
                    <button type="button" className={styles.approve} onClick={() => decide(rec.id, 'approved')}>APPROVE</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <button type="button" className={styles.reset} onClick={() => setDecisions({})}>RESET DEMO ↺</button>
      </div>
    </div>
  );
}
