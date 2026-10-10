import styles from './StrategyCoachDemo.module.css';

const QUESTIONS = [
  {
    question: "Why aren't my calls counted as conversions?",
    answer: "Your 'Calls from ads' conversion action hasn't recorded a call in 30 days, even though your ads received calls. Google can't tell which clicks bring customers, so it bids blind. Turning on call reporting for Emergency Callouts would fix this.",
    confidence: 92,
    source: 'CONVERSION ACTIONS · LAST 30 DAYS',
  },
  {
    question: 'Why did my calls drop last week?',
    answer: 'Your Emergency Callouts campaign ran out of budget before midday on 5 of the last 7 days, so your ads were off during your busiest call hours. Raising its daily budget by $25 should recover around 38 clicks a week.',
    confidence: 86,
    source: 'CAMPAIGN REPORT · CALLS · LAST 7 DAYS',
  },
  {
    question: 'Which search terms are wasting money?',
    answer: "Four search terms cost $322 last month without a single conversion, including 'plumbing jobs' and 'plumber salary'. Adding them as negative keywords would stop that spend.",
    confidence: 94,
    source: 'SEARCH TERMS REPORT · LAST 30 DAYS',
  },
  {
    question: 'Should I pause my Display campaign?',
    answer: "Not yet. Display · Remarketing has only 9 days of data since its last change, which isn't enough to judge. I'd wait about two more weeks before deciding.",
    confidence: 41,
    source: 'CAMPAIGN REPORT · LAST 9 DAYS',
  },
];

// The Google Ads reports a business owner would otherwise have to dig through.
const REPORTS = [
  'Campaigns', 'Ad groups', 'Keywords', 'Search terms', 'Auction insights', 'Conversions', 'Assets',
  'Audiences', 'Locations', 'Devices', 'Ad schedule', 'Landing pages', 'Budgets', 'Change history',
];

/**
 * F-03: with Adgrow off there's no one to ask; once on, an answer types out
 * (`typed` characters so far) and the visitor can pick a follow-up question.
 */
export default function StrategyCoachDemo({ active, question, typed, onAsk }) {
  const current = QUESTIONS[question];
  const finished = typed >= current.answer.length;
  const lowConfidence = current.confidence < 70;

  return (
    <div data-reveal="1" className={`panel ${styles.panel}`}>
      <div className="panel-bar">
        <span>STRATEGY COACH</span>
        <span className={active ? 'accent' : 'faint'}>{active ? '● CONNECTED TO YOUR DATA' : 'OFFLINE'}</span>
      </div>

      {active ? (
        <div className={styles.chat}>
          <div className={styles.question}>{current.question}</div>
          <div className={styles.answer}>
            <span className={styles.answerLabel}>ADGROW</span>
            <span className={styles.answerText} data-pending={!typed}>
              {typed ? current.answer.slice(0, typed) : 'Checking your campaign data…'}
            </span>
            {finished && (
              <div className={styles.answerMeta}>
                <span className={lowConfidence ? 'warn' : 'accent'}>
                  {lowConfidence ? 'LOW CONFIDENCE · ' : 'CONFIDENCE '}
                  {current.confidence}%
                </span>
                <span className="muted">SOURCE · {current.source}</span>
              </div>
            )}
          </div>
          <div className={styles.followUps}>
            <span className={styles.followUpsLabel}>SUGGESTED FOLLOW-UPS</span>
            <div className={styles.chips}>
              {QUESTIONS.map((item, i) =>
                i === question ? null : (
                  <button key={item.question} type="button" className={styles.chip} onClick={() => onAsk(i)}>
                    {item.question} →
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.offline}>
          <span className={styles.offlineLabel}>NO ONE TO ASK</span>
          <span className={styles.offlineText}>The answer is in your account somewhere, spread across 14 different reports.</span>
          <div className={styles.reports}>
            {REPORTS.map((report) => (
              <span key={report} className={styles.report}>{report}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
