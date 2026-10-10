'use client';

import { useState } from 'react';
import { sendDeletionRequest } from '@/lib/forms';
import { CONTACT_EMAIL } from '@/lib/site';
import styles from '@/components/about/ContactForm.module.css';

/**
 * Data deletion request form on /delete-data. Deletion is done by hand, so the
 * request is only confirmed once Formspree has accepted it.
 */
export default function DeletionForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [reference, setReference] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const ref = `ADG-DEL-${Date.now()}`;
    formData.append('reference', ref);
    formData.append('_subject', `Data deletion request ${ref}`);
    formData.append('requested_at', new Date().toISOString());
    setStatus('sending');
    try {
      await sendDeletionRequest(formData);
      setReference(ref);
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
          <span className={styles.sentTitle}>Request received</span>
          <span className={styles.sentText}>
            Your reference is {reference}. We&apos;ll delete your data within 30 days and email you when it&apos;s done.
            Questions? Email {CONTACT_EMAIL} and quote your reference.
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="d-user-id" className="field">
            <span className="field-label">FACEBOOK APP-SCOPED USER ID</span>
            <input id="d-user-id" type="text" name="app_scoped_user_id" required className="input" />
          </label>
          <label htmlFor="d-email" className="field">
            <span className="field-label">CONTACT EMAIL</span>
            <input id="d-email" type="email" name="email" autoComplete="email" required className="input" />
          </label>
          <label htmlFor="d-info" className="field">
            <span className="field-label">ADDITIONAL INFORMATION (OPTIONAL)</span>
            <textarea id="d-info" name="additional_information" rows={4} className={`input ${styles.textarea}`} />
          </label>
          <button type="submit" disabled={status === 'sending'} className={styles.submit}>
            {status === 'sending' ? 'SENDING…' : 'SEND DELETION REQUEST →'}
          </button>
          {status === 'error' && (
            <p role="alert" className="form-error">
              <i className="bi bi-exclamation-circle" aria-hidden="true" />
              Your request couldn&apos;t be sent. Please try again, or email us at {CONTACT_EMAIL}.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
