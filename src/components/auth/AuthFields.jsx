'use client';

import { useState } from 'react';
import styles from './Auth.module.css';

/** Labelled text input with a leading Bootstrap icon (e.g. icon="bi-envelope"). */
export function IconInput({ id, label, icon, ...inputProps }) {
  return (
    <label htmlFor={id} className="field">
      <span className="field-label">{label}</span>
      <span className={styles.control}>
        <i className={`bi ${icon} ${styles.icon}`} aria-hidden="true" />
        <input id={id} className="input input--icon" {...inputProps} />
      </span>
    </label>
  );
}

/** Labelled password input with a show/hide button. */
export function PasswordInput({ id, label, ...inputProps }) {
  const [visible, setVisible] = useState(false);

  return (
    <label htmlFor={id} className="field">
      <span className="field-label">{label}</span>
      <span className={styles.control}>
        <i className={`bi bi-lock ${styles.icon}`} aria-hidden="true" />
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          placeholder="••••••••"
          required
          className="input input--icon input--toggle"
          {...inputProps}
        />
        <button
          type="button"
          className={styles.reveal}
          aria-label={visible ? 'Hide password' : 'Show password'}
          onClick={() => setVisible((v) => !v)}
        >
          <i className={`bi ${visible ? 'bi-eye-slash' : 'bi-eye'}`} />
        </button>
      </span>
    </label>
  );
}
