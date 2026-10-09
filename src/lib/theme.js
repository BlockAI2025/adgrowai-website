/**
 * Dark/light theme. The active theme is the data-theme attribute on <html>;
 * the CSS tokens in globals.css switch on it.
 */

export const THEME_STORAGE_KEY = 'adgrow-theme';
export const DEFAULT_THEME = 'dark';

/** Runs in <head> before the page paints so a saved light theme doesn't flash dark first. */
export const themeInitScript = `try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`;

export function getTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this visit.
  }
}
