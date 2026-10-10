'use client';

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from '@/lib/auth';
import { AuthSuccess } from './AuthCard';
import { IconInput, PasswordInput } from './AuthFields';
import styles from './Auth.module.css';

export default function SignInForm() {
  const [status, setStatus] = useState('idle'); // idle | submitting | done
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus('submitting');
    setError(null);
    try {
      await signIn({
        email: form.get('email'),
        password: form.get('password'),
        rememberEmail: form.get('remember') === 'on',
      });
      setStatus('done');
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('idle');
    }
  }

  if (status === 'done') return <AuthSuccess title="Signed in" />;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <IconInput
        id="si-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
        label="EMAIL ADDRESS"
        icon="bi-envelope"
      />
      <PasswordInput id="si-password" name="password" autoComplete="current-password" label="PASSWORD" />

      <div className={styles.optionsRow}>
        <label className={styles.checkbox}>
          <input type="checkbox" name="remember" className={styles.checkboxInput} />
          Remember email
        </label>
        {/* TODO(backend): link to the password reset flow */}
        <a href="#" onClick={(e) => e.preventDefault()} className={styles.textLink}>Forgot password?</a>
      </div>

      {error && (
        <p role="alert" className="form-error">
          <i className="bi bi-exclamation-circle" aria-hidden="true" />
          {error}
        </p>
      )}
      <button type="submit" disabled={status === 'submitting'} className={styles.submit}>SIGN IN →</button>

      <div className={styles.divider}>
        <span />
        OR CONTINUE WITH
        <span />
      </div>
      {/* TODO(backend): social sign-in */}
      <div className={styles.social}>
        <button type="button" className={styles.socialButton}>
          <i className="bi bi-google" aria-hidden="true" />
          Google
        </button>
        <button type="button" className={styles.socialButton}>
          <i className="bi bi-facebook" aria-hidden="true" />
          Facebook
        </button>
      </div>

      <span className={styles.switch}>
        Don&apos;t have an account? <Link href="/signup" className={styles.switchLink}>Sign up</Link>
      </span>
    </form>
  );
}
