import React, { useState } from 'react';

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mkt-faq-list">
      {items.map((item, index) => (
        <div key={index} className="mkt-faq-item">
          <button
            className={`mkt-faq-question ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggle(index)}
          >
            <span>{item.question}</span>
            <ChevronDown />
          </button>
          {openIndex === index && (
            <div className="mkt-faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
