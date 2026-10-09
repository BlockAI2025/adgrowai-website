'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signUp } from '@/lib/auth';
import { AuthSuccess } from './AuthCard';
import { IconInput, PasswordInput } from './AuthFields';
import styles from './Auth.module.css';

export default function SignUpForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | done
  const [error, setError] = useState(null);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get('password') !== form.get('confirmPassword')) {
      setPasswordMismatch(true);
      return;
    }
    setStatus('submitting');
    setError(null);
    try {
      await signUp({
        name: form.get('name'),
        email: form.get('email'),
        website: form.get('website'),
        password: form.get('password'),
        confirmPassword: form.get('confirmPassword'),
      });
      setStatus('done');
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('idle');
    }
  }

  if (status === 'done') return <AuthSuccess title="Account created" />;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <IconInput
        id="su-name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="John Doe"
        required
        label="FULL NAME"
        icon="bi-person"
      />
      <IconInput
        id="su-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
        label="EMAIL ADDRESS"
        icon="bi-envelope"
      />
      <div className={styles.fieldGroup}>
        <IconInput
          id="su-website"
          name="website"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="https://yourwebsite.com"
          label={
            <>
              BUSINESS WEBSITE <span className="faint">(OPTIONAL)</span>
            </>
          }
          icon="bi-globe"
        />
        <span className={styles.hint}>We&apos;ll scan it to pre-fill your business profile</span>
      </div>
      <PasswordInput id="su-password" name="password" autoComplete="new-password" label="PASSWORD" />
      <div className={styles.fieldGroup}>
        <PasswordInput
          id="su-confirm-password"
          name="confirmPassword"
          autoComplete="new-password"
          label="CONFIRM PASSWORD"
          onInput={() => setPasswordMismatch(false)}
        />
        {passwordMismatch && (
          <span role="alert" className="form-error">
            <i className="bi bi-exclamation-circle" aria-hidden="true" />
            Passwords don&apos;t match
          </span>
        )}
      </div>

      <label className={`${styles.checkbox} ${styles.checkboxTop}`}>
        <input type="checkbox" name="agree" required className={styles.checkboxInput} />
        <span>
          I agree to the{' '}
          {/* New tab, so the half-filled form isn't lost */}
          <Link href="/terms" target="_blank" className={styles.inlineLink}>Terms &amp; Conditions</Link>{' '}
          and{' '}
          <Link href="/privacy" target="_blank" className={styles.inlineLink}>Privacy Policy</Link>
        </span>
      </label>

      {error && (
        <p role="alert" className="form-error">
          <i className="bi bi-exclamation-circle" aria-hidden="true" />
          {error}
        </p>
      )}
      <button type="submit" disabled={status === 'submitting'} className={styles.submit}>CREATE ACCOUNT →</button>

      <span className={styles.switch}>
        Already have an account? <Link href="/signin" className={styles.switchLink}>Sign in</Link>
      </span>
    </form>
  );
}
