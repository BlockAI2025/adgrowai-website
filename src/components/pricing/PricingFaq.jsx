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
    question: 'Can Adgrow spend more than I am willing to allocate?',
    answer: 'No, it may recommend increasing budget on certain campaigns if it believes that would be beneficial, but it will not increase expenditure without your explicit approval.',
  },
  {
    question: 'Can I cancel at any time?',
    answer: 'Yes. Monthly plans can be cancelled at any time. Annual plans run to the end of the billing year.',
  },
];

/** Grid of pricing questions, each answered in its own card. */
export default function PricingFaq() {
  return (
    <div data-reveal="1" className={styles.faq}>
      {FAQS.map(({ question, answer }, i) => (
        <div key={question} className={styles.card}>
          <span className={styles.number}>Q.{String(i + 1).padStart(2, '0')}</span>
          <h3 className={styles.question}>{question}</h3>
          <p className={styles.answer}>{answer}</p>
        </div>
      ))}
    </div>
  );
}
