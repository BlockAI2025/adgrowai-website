/**
 * Site-wide settings: navigation, outbound links, form endpoints and tags.
 * Change these here rather than in the components that use them.
 */

/** Main navigation, left to right. */
export const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/mission', label: 'MISSION' },
  { href: '/connect', label: 'CONNECT' },
  { href: '/pricing', label: 'PRICING' },
];

/** Links in the nav's "OTHER" dropdown. */
export const OTHER_LINKS = [
  { href: '/about', label: 'ABOUT' },
  { href: '/about#blog', label: 'BLOG' },
  { href: '/about#contact', label: 'CONTACT' },
];

export const CONTACT_EMAIL = 'admin@adgrowai.com';

/**
 * Sign in and sign up happen in the app (AdgrowAI-frontend), which talks to the
 * backend. The nav's SIGN IN and SIGN UP add ?theme= so the app opens in the same
 * theme; /signin, /login, /signup and /register redirect there (next.config.mjs).
 * Set NEXT_PUBLIC_APP_URL (e.g. in .env.local) to use a local copy of the app.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.adgrowai.com';

/** Formspree endpoints that receive form submissions. */
export const FORM_ENDPOINTS = {
  // Same Formspree form the current site's waitlist uses.
  waitlist: 'https://formspree.io/f/maqddere',
  // Same Formspree form the current site's contact page uses.
  contact: 'https://formspree.io/f/xoejveqn',
  // Data deletion requests (/delete-data); same form the current site uses.
  deletion: 'https://formspree.io/f/mwlvplka',
};

/** Google Ads tag carried over from the current site; records waitlist sign-ups. Set to null to disable. */
export const GOOGLE_ADS_TAG_ID = 'AW-18014488365';
