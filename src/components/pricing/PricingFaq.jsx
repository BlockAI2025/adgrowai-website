'use client';

import { useId, useState } from 'react';
import styles from './PricingFaq.module.css';

const FAQS = [
  {
    question: 'Do you take a percentage of my ad spend?',
    answer: 'No. You pay a flat monthly fee based on how much ad spend you want Adgrow to watch.',
  },
  {
    question: 'Can Adgrow change my account without asking?',
    answer: 'No. Every change to your account requires your explicit approval before it is applied.',
  },
  {
    question: 'What if my spend goes over my plan?',
    answer: 'Adgrow keeps watching and lets you know. You can move up a plan whenever you like.',
  },
  {
    question: 'Can I cancel at any time?',
    answer: 'Yes. Monthly plans can be cancelled at any time. Annual plans run to the end of the billing year.',
  },
];

/** Accordion of pricing questions; one answer open at a time. */
export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState(0);
  const id = useId();

  return (
    <div className={styles.faq}>
      {FAQS.map(({ question, answer }, i) => {
        const open = openIndex === i;
        return (
          <div key={question} className={styles.item}>
            <button
              type="button"
              className={styles.question}
              aria-expanded={open}
              aria-controls={`${id}-${i}`}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              <span>{question}</span>
              <span className={styles.sign}>{open ? '−' : '+'}</span>
            </button>
            {open && (
              <p id={`${id}-${i}`} className={styles.answer}>
                {answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
