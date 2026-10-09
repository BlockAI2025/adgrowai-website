'use client';

import { useSyncExternalStore } from 'react';
import { DEFAULT_THEME, getTheme, setTheme } from '@/lib/theme';
import styles from './ThemeToggle.module.css';

// Re-render whenever data-theme on <html> changes.
function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => DEFAULT_THEME);

  return (
    <div className={styles.toggle}>
      <button type="button" aria-label="Dark mode" title="Dark mode" aria-pressed={theme === 'dark'} onClick={() => setTheme('dark')}>
        <i className="bi bi-moon-stars" />
      </button>
      <button type="button" aria-label="Light mode" title="Light mode" aria-pressed={theme === 'light'} onClick={() => setTheme('light')}>
        <i className="bi bi-sun" />
      </button>
    </div>
  );
}
