import Link from 'next/link';
import { Wordmark } from './Logo';
import WaitlistLink from './WaitlistLink';
import styles from './Footer.module.css';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Wordmark className={styles.logo} />
            <span className={styles.tagline}>AI-powered Google Ads management for small businesses.</span>
          </div>
          <div className={styles.columns}>
            <div className={styles.column}>
              <span className={styles.heading}>PRODUCT</span>
              <Link href="/mission">Mission</Link>
              <Link href="/connect">Connect</Link>
              <Link href="/pricing">Pricing</Link>
            </div>
            <div className={styles.column}>
              <span className={styles.heading}>COMPANY</span>
              <Link href="/about">About</Link>
              <WaitlistLink>Waitlist</WaitlistLink>
            </div>
            <div className={styles.column}>
              <span className={styles.heading}>LEGAL</span>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {YEAR} ADGROW</span>
        </div>
        <div className={styles.wordmark} aria-hidden="true">ADGROW</div>
      </div>
    </footer>
  );
}
