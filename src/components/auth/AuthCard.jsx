import Link from 'next/link';
import { Mark } from '@/components/layout/Logo';
import styles from './Auth.module.css';

/** Centred card with the Adgrow mark, used by the sign in and sign up pages. */
export default function AuthCard({ title, subtitle, children }) {
  return (
    <section className={`grid-bg grid-bg--fine ${styles.section}`}>
      <div className={styles.card}>
        <div className={styles.head}>
          <span className={styles.markCircle}>
            <Mark className={styles.mark} />
          </span>
          <h1 className={`display ${styles.title}`}>{title}</h1>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
        {children}
      </div>
    </section>
  );
}

/** Shown in place of the form once it has gone through. */
export function AuthSuccess({ title }) {
  return (
    <div className={styles.success}>
      <span className={styles.successIcon}>
        <i className="bi bi-check-lg" />
      </span>
      <span className={styles.successTitle}>{title}</span>
      <Link href="/" className={styles.backLink}>BACK TO HOME →</Link>
    </div>
  );
}
