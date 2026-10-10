'use client';

import { useState } from 'react';
import Eyebrow from '@/components/ui/Eyebrow';
import { joinWaitlist } from '@/lib/forms';
import { CONTACT_EMAIL } from '@/lib/site';
import styles from './Waitlist.module.css';

/** "Put your account on the radar" waitlist sign-up, shown at the end of every marketing page. */
export default function Waitlist() {
  const [status, setStatus] = useState('idle'); // idle | sending | joined | error

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setStatus('sending');
    try {
      await joinWaitlist(formData);
      setStatus('joined');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="waitlist" className={styles.section}>
      <div data-reveal="0" className={`container grid-bg grid-bg--fine ${styles.box}`}>
        <div className={`${styles.ring} ${styles.ringOuter}`} />
        <div className={`${styles.ring} ${styles.ringMiddle}`} />
        <div className={`${styles.ring} ${styles.ringInner}`} />

        <Eyebrow className={styles.layer}>EARLY ACCESS</Eyebrow>
        <h2 className={`display ${styles.title}`}>
          Put your account <span className="accent">on the radar.</span>
        </h2>
        <p className={styles.text}>Join the waitlist and we&apos;ll let you know as soon as your spot opens.</p>

        {status === 'joined' ? (
          <div className={styles.joined}>✓ You&apos;re on the list. We&apos;ll be in touch.</div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" name="name" required autoComplete="name" placeholder="Your name" aria-label="Contact name" className={styles.input} />
            <input type="email" name="email" required autoComplete="email" placeholder="you@business.com" aria-label="Email address" className={styles.input} />
            <input type="text" name="business_name" required autoComplete="organization" placeholder="Business name" aria-label="Business name" className={styles.input} />
            <input type="text" name="location" required placeholder="City or region" aria-label="Business location" className={styles.input} />
            <input type="url" name="website" placeholder="https://yourbusiness.com (optional)" aria-label="Website (optional)" className={`${styles.input} ${styles.full}`} />
            <textarea name="business_description" rows={3} placeholder="What does your business do? (optional)" aria-label="Business description (optional)" className={`${styles.input} ${styles.full}`} />
            <button type="submit" disabled={status === 'sending'} className={styles.button}>JOIN WAITLIST →</button>
            {status === 'error' && (
              <p role="alert" className={`form-error ${styles.error}`}>
                <i className="bi bi-exclamation-circle" aria-hidden="true" />
                Something went wrong. Please try again or email {CONTACT_EMAIL}.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
