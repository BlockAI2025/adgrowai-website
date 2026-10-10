'use client';

import { useEffect, useEffectEvent, useRef, useState } from 'react';
import ConfidenceDemo from './ConfidenceDemo';
import ScalingDemo from './ScalingDemo';
import SearchTermsDemo from './SearchTermsDemo';
import StrategyCoachDemo from './StrategyCoachDemo';
import styles from './FixShowcase.module.css';

/** The demos advance on a shared clock that ticks every 150ms. */
const TICK_MS = 150;
/** The chat answer types out this many characters per tick. */
const CHARS_PER_TICK = 9;

const FEATURES = [
  {
    code: 'F-01',
    label: 'SEARCH TERMS',
    title: 'Stop Bleeding Money on Bad Search Terms',
    text: 'Adgrow continuously scans your search term reports and flags queries that waste budget. Get specific negative keyword recommendations with estimated savings.',
    points: [
      'Automatic search term analysis across all campaigns',
      'Identifies irrelevant, competitor, and low-intent queries',
      'Shows estimated monthly savings for each recommendation',
      'One-click add to negative keyword lists',
      'Learns from your approval patterns over time',
    ],
  },
  {
    code: 'F-02',
    label: 'SCALING',
    title: 'Know Exactly When to Scale',
    text: "See which campaigns are leaving money on the table. Adgrow identifies impression share losses and quantifies the traffic you're missing — so you can scale with confidence.",
    points: [
      'Real-time impression share monitoring',
      'Calculates missed clicks and potential conversions',
      'Budget increase recommendations with projected impact',
      'Alerts when high-performers are limited by budget',
      'Historical trend analysis to validate scaling decisions',
    ],
  },
  {
    code: 'F-03',
    label: 'STRATEGY COACH',
    title: 'Ask Anything About Your Campaigns',
    text: 'Chat with an AI that actually knows your data. Ask questions in plain English and get answers grounded in your real campaign performance — not generic advice.',
    points: [
      'Natural language interface - no technical jargon needed',
      'Answers based on YOUR actual campaign data',
      'Confidence indicators on every recommendation',
      'Remembers context across conversations',
      'Suggests follow-up questions you should ask',
    ],
  },
  {
    code: 'F-04',
    label: 'TRANSPARENT AI',
    title: 'Know How Certain the AI Is',
    text: "Every recommendation comes with a confidence score and explanation. When the AI isn't sure, it tells you to wait — no blind automation, no guessing.",
    points: [
      'Confidence percentage on every recommendation',
      'Plain-English explanation of reasoning',
      'Data sources cited for each insight',
      'Low-confidence alerts prevent premature action',
      'Audit trail of all AI decisions',
    ],
  },
];

/**
 * "The fix": an on/off switch for Adgrow above four feature rows. Each row's
 * demo plays once Adgrow is on and the row has scrolled into view. The switch
 * turns itself on shortly after it first appears, unless the visitor got there first.
 */
export default function FixShowcase() {
  const [tick, setTick] = useState(0);
  const [adgrow, setAdgrow] = useState({ on: false, since: 0, touched: false }); // since = tick it was last switched
  const [rowSeenAt, setRowSeenAt] = useState({}); // row index → tick it first came into view
  const [chat, setChat] = useState({ question: 0, askedAt: -1 });
  const boxRef = useRef(null);
  const switchRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), TICK_MS);
    return () => clearInterval(id);
  }, []);

  const switchOnAutomatically = useEffectEvent(() => {
    if (!adgrow.touched && !adgrow.on) setAdgrow({ on: true, since: tick, touched: false });
  });
  const markRowSeen = useEffectEvent((row) => {
    setRowSeenAt((seen) => (seen[row] != null ? seen : { ...seen, [row]: tick }));
  });

  useEffect(() => {
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(() => switchOnAutomatically(), 1400);
      },
      { threshold: 0.6 },
    );
    observer.observe(switchRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          markRowSeen(Number(entry.target.dataset.fixrow));
        }
      },
      { threshold: 0.3 },
    );
    boxRef.current.querySelectorAll('[data-fixrow]').forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  function toggle() {
    setAdgrow((current) => ({ on: !current.on, since: tick, touched: true }));
    setChat((current) => ({ ...current, askedAt: -1 }));
  }

  // Ticks since a row's demo started, or -1 while Adgrow is off or the row hasn't been seen.
  const step = (row) => (adgrow.on && rowSeenAt[row] != null ? tick - Math.max(adgrow.since, rowSeenAt[row]) : -1);

  const chatStart = Math.max(adgrow.since, rowSeenAt[2] ?? 0, chat.askedAt) + 4;
  const typed = step(2) >= 0 ? Math.max(0, (tick - chatStart) * CHARS_PER_TICK) : 0;

  return (
    <div ref={boxRef} className={styles.box} data-on={adgrow.on}>
      <div className={styles.switchBar}>
        <div className={styles.switchLabel}>
          <span className={styles.switchName}>ADGROW</span>
          <span className={styles.switchStatus}>
            <span className={`dot dot--lg ${styles.statusDot}`} />
            {adgrow.on ? 'On · watching 24/7' : 'Off · nobody watching'}
          </span>
        </div>
        <button
          ref={switchRef}
          type="button"
          className={styles.switch}
          aria-label="Turn Adgrow on or off"
          aria-pressed={adgrow.on}
          onClick={toggle}
        >
          <span className={styles.switchOff}>OFF</span>
          <span className={styles.switchOn}>ON</span>
          <span className={styles.knob}>{adgrow.on ? 'ON' : 'OFF'}</span>
        </button>
      </div>

      <FeatureRow row={0} feature={FEATURES[0]}>
        <SearchTermsDemo on={adgrow.on} step={step(0)} />
      </FeatureRow>
      <FeatureRow row={1} feature={FEATURES[1]}>
        <ScalingDemo on={adgrow.on} step={step(1)} />
      </FeatureRow>
      <FeatureRow row={2} feature={FEATURES[2]}>
        <StrategyCoachDemo
          active={step(2) >= 0}
          question={chat.question}
          typed={typed}
          onAsk={(question) => setChat({ question, askedAt: tick })}
        />
      </FeatureRow>
      <FeatureRow row={3} feature={FEATURES[3]}>
        <ConfidenceDemo on={adgrow.on} step={step(3)} />
      </FeatureRow>
    </div>
  );
}

function FeatureRow({ row, feature, children }) {
  return (
    <div data-fixrow={row} className={styles.row}>
      <div data-reveal="0" className={styles.copy}>
        <div className={styles.code}>
          <span className="accent">{feature.code}</span>
          <span className={styles.codeLabel}>{feature.label}</span>
        </div>
        <h3 className={`display ${styles.title}`}>{feature.title}</h3>
        <p className={styles.text}>{feature.text}</p>
        <div className={styles.points}>
          {feature.points.map((point) => (
            <span key={point} className={styles.point}>
              <span className="accent">→</span>
              <span>{point}</span>
            </span>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
