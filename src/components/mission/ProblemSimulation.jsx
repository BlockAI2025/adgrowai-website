'use client';

import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { drawDaySimulation, simulationPhase } from './daySimulationCanvas';
import styles from './ProblemSimulation.module.css';

// Callouts over the chart. "before" ones appear during the unwatched day
// (`at` = seconds into the loop); "after" ones once Adgrow's scan has passed
// (`at` = scan progress, 0–1). DOM order matters: later ones sit on top.
const CALLOUTS = [
  { leak: 'waste', phase: 'before', at: 1.6, tone: 'warn', position: 'first', title: '01 · $23 OF EVERY $100', text: 'spent on searches that will never become customers' },
  { leak: 'tracking', phase: 'before', at: 2.2, tone: 'accent', position: 'second', title: '03 · 4 CALLS · 0 RECORDED', text: "Google can't see which clicks brought customers" },
  { leak: 'budget', phase: 'before', at: 3.2, tone: 'warn', position: 'middle', title: '02 · BUDGET GONE AT 11:40', text: 'Your ads are off for the next 11 hours while people keep searching.' },
  { leak: 'waste', phase: 'after', at: 0.12, tone: 'accent', position: 'first', title: '01 · $4 OF EVERY $100', text: 'wasted, down from $23. Bad search terms are blocked.' },
  { leak: 'tracking', phase: 'after', at: 0.32, tone: 'accent', position: 'second', title: '03 · 4 CALLS · 4 RECORDED', text: 'Google can now see which clicks bring customers' },
  { leak: 'budget', phase: 'after', at: 0.42, tone: 'accent', position: 'third', title: '02 · ADS ON UNTIL 23:00', text: 'The budget lasts the whole day instead of running out at 11:40' },
];

const LEGEND = [
  { swatch: 'demand', label: 'PEOPLE SEARCHING' },
  { swatch: 'ads', label: 'YOUR ADS SHOWING' },
  { swatch: 'waste', label: 'WASTED ON BAD SEARCH TERMS' },
  { swatch: 'adsOff', label: 'ADS OFF · BUDGET GONE' },
  { swatch: 'call', label: 'CUSTOMER CALL · NOT RECORDED' },
  { swatch: 'scan', label: 'ADGROW SCAN' },
  { swatch: 'opportunity', label: 'OPPORTUNITY · PROJECTED' },
];

const LEAKS = [
  {
    id: 'waste',
    code: 'L-01',
    stat: '$23 OF EVERY $100',
    title: 'Bad search terms',
    text: 'Your ads show for searches that will never become customers, like people looking for plumbing jobs. Every click still costs money.',
  },
  {
    id: 'budget',
    code: 'L-02',
    stat: 'ADS OFF FROM 11:40',
    title: 'Budget gone by lunch',
    text: "The day's budget is spent by late morning, so your ads disappear while customers are still searching.",
  },
  {
    id: 'tracking',
    code: 'L-03',
    stat: '0 OF 4 CALLS COUNTED',
    title: 'Tracking blind',
    text: "Calls from your ads aren't recorded as conversions, so Google can't tell which clicks bring customers and bids blind.",
  },
];

// How often the header and callouts catch up with the animation.
const UPDATE_SECONDS = 0.15;
const START = { tau: 0, rx: 0, sx: 0, p2: false, od: 0 };

const pad = (n) => String(Math.floor(n)).padStart(2, '0');
const clock = (minutes) => `${pad(Math.floor(minutes / 60) % 24)}:${pad(minutes % 60)}`;

function calloutOpacity(callout, phase, focus) {
  const { tau, sx, p2 } = phase;
  if (callout.phase === 'before') {
    if (p2) return 0;
    if (focus) return focus === callout.leak ? 1 : 0.15;
    return tau > callout.at ? 1 : 0;
  }
  if (!p2 || tau > 19.4) return 0;
  if (focus) return focus === callout.leak ? 1 : 0.15;
  return sx > callout.at ? 1 : 0;
}

/** "The problem": a day in an unwatched account, then the same day with Adgrow. */
export default function ProblemSimulation() {
  const canvasRef = useRef(null);
  const [focus, setFocus] = useState(null); // leak highlighted by the cards below the chart
  const [phase, setPhase] = useState(START);

  const drawFrame = useEffectEvent((frame) => drawDaySimulation(canvasRef.current, frame, focus));

  useEffect(() => {
    let start = null;
    let lastUpdate = -Infinity;
    let raf = requestAnimationFrame(function loop(now) {
      raf = requestAnimationFrame(loop);
      const t = now / 1000;
      start ??= t;
      const frame = simulationPhase(t, start);
      drawFrame(frame);
      if (t - lastUpdate >= UPDATE_SECONDS) {
        lastUpdate = t;
        setPhase({ tau: frame.tau, rx: frame.rx, sx: frame.sx, p2: frame.p2, od: frame.od });
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const { rx, sx, p2, od } = phase;
  const budgetGone = !p2 && rx >= 1 / 3;
  const status = p2 ? (od > 0 ? '2 OPPORTUNITIES FOUND' : 'ADGROW ON · ADS LIVE') : budgetGone ? 'BUDGET GONE · ADS OFF' : 'ADS LIVE · SPENDING';

  return (
    <>
      <div data-reveal="0" className="panel">
        <div className={styles.bar}>
          <span className={styles.barTitle}>
            <span className={`dot dot--sm ${p2 ? '' : 'dot--warn'}`} />
            {p2 ? 'THE SAME DAY WITH ADGROW · DAILY BUDGET $100' : 'A DAY IN AN UNWATCHED ACCOUNT · DAILY BUDGET $100'}
          </span>
          <span className={styles.barStatus}>
            <span className={budgetGone ? 'warn' : 'accent'}>{status}</span>
            <span className={styles.clock}>{clock(360 + (p2 ? sx : rx) * 1020)}</span>
          </span>
        </div>

        <div className={styles.scroller}>
          <div className={styles.stage}>
            <canvas ref={canvasRef} className={styles.canvas} />
            {CALLOUTS.map((callout) => (
              <div
                key={callout.title}
                className={`${styles.callout} ${styles[callout.position]}`}
                data-tone={callout.tone}
                style={{ opacity: calloutOpacity(callout, phase, focus) }}
              >
                <span className={styles.calloutTitle}>{callout.title}</span>
                <span className={styles.calloutText}>{callout.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.legend}>
          {LEGEND.map((item) => (
            <span key={item.label} className={styles.legendItem}>
              <span className={`${styles.swatch} ${styles[item.swatch]}`} />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div data-reveal="0" className={styles.leaks}>
        <span className={styles.leaksHint}>THREE LEAKS · SELECT ONE TO HIGHLIGHT IT ABOVE</span>
        <div className={`hairline-grid ${styles.leakGrid}`}>
          {LEAKS.map((leak) => (
            <button
              key={leak.id}
              type="button"
              className={styles.leak}
              aria-pressed={focus === leak.id}
              onClick={() => setFocus((current) => (current === leak.id ? null : leak.id))}
            >
              <span className={styles.leakHead}>
                <span className="warn">{leak.code}</span>
                <span className={styles.leakStat}>{leak.stat}</span>
              </span>
              <span className={styles.leakTitle}>{leak.title}</span>
              <span className={styles.leakText}>{leak.text}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
