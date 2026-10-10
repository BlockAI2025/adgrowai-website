'use client';

import { useState } from 'react';
import { sendContactMessage } from '@/lib/forms';
import { CONTACT_EMAIL } from '@/lib/site';
import styles from './ContactForm.module.css';

const SUBJECTS = ['General Enquiry', 'Partnership', 'Support', 'Enterprise Sales', 'Other'];

/** Contact form on the About page. Submits through lib/forms.js. */
export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus('sending');
    try {
      await sendContactMessage(formData);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className={styles.box}>
      {status === 'sent' ? (
        <div className={styles.sent}>
          <span className={styles.sentIcon}>
            <i className="bi bi-check-lg" />
          </span>
          <span className={styles.sentTitle}>Message sent</span>
          <span className={styles.sentText}>We&apos;ll reply to the email address you provided.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <label htmlFor="c-name" className={`field ${styles.half}`}>
              <span className="field-label">NAME</span>
              <input id="c-name" type="text" name="name" autoComplete="name" required className="input" />
            </label>
            <label htmlFor="c-email" className={`field ${styles.half}`}>
              <span className="field-label">EMAIL</span>
              <input id="c-email" type="email" name="email" autoComplete="email" required className="input" />
            </label>
          </div>
          <label htmlFor="c-subject" className="field">
            <span className="field-label">SUBJECT</span>
            <span className={styles.selectWrap}>
              <select id="c-subject" name="subject" className={`input ${styles.select}`}>
                {SUBJECTS.map((subject) => (
                  <option key={subject}>{subject}</option>
                ))}
              </select>
              <svg viewBox="0 0 10 6" aria-hidden="true" className={styles.chevron}>
                <path d="M1 1l4 4 4-4" />
              </svg>
            </span>
          </label>
          <label htmlFor="c-message" className="field">
            <span className="field-label">MESSAGE</span>
            <textarea id="c-message" name="message" rows={6} required className={`input ${styles.textarea}`} />
          </label>
          <button type="submit" disabled={status === 'sending'} className={styles.submit}>SEND MESSAGE →</button>
          {status === 'error' && (
            <p role="alert" className="form-error">
              <i className="bi bi-exclamation-circle" aria-hidden="true" />
              Your message couldn&apos;t be sent. Please email us at {CONTACT_EMAIL}.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
