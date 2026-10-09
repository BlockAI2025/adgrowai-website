'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { NAV_LINKS, OTHER_LINKS } from '@/lib/site';
import { Wordmark } from './Logo';
import ThemeToggle from './ThemeToggle';
import styles from './Nav.module.css';

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const progressRef = useRef(null);

  // Thin progress bar under the nav that fills as the page scrolls.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      progressRef.current.style.transform = `scaleX(${progress})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the "OTHER" menu on a click outside it or on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e) => {
      if (!menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const isCurrent = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  // Blog articles live under /blog but are listed on the About page.
  const otherIsCurrent = isCurrent('/blog') || OTHER_LINKS.some(({ href }) => isCurrent(href.split('#')[0]));

  return (
    <nav className={styles.nav}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logo}>
          <Wordmark className={styles.logoImage} />
        </Link>

        <div className={styles.links}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.link} aria-current={isCurrent(href) ? 'page' : undefined}>
              {label}
            </Link>
          ))}
          <div ref={menuRef} className={styles.menu}>
            <button
              type="button"
              className={styles.menuButton}
              data-current={otherIsCurrent}
              aria-haspopup="true"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              OTHER
              <svg viewBox="0 0 10 6" aria-hidden="true" className={styles.chevron}>
                <path d="M1 1l4 4 4-4" />
              </svg>
            </button>
            {menuOpen && (
              <div role="menu" className={styles.dropdown}>
                {OTHER_LINKS.map(({ href, label }) => (
                  <Link key={href} href={href} role="menuitem" className={styles.menuItem} onClick={() => setMenuOpen(false)}>
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/signin" className={styles.signIn}>SIGN IN</Link>
          <Link href="/signup" className={styles.signUp}>SIGN UP</Link>
        </div>
      </div>
      <div className={styles.progressTrack}>
        <div ref={progressRef} className={styles.progress} />
      </div>
    </nav>
  );
}
