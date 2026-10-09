/* eslint-disable @next/next/no-img-element -- small fixed-size logos; next/image adds nothing here */

/*
 * Adgrow logos from the design. Each comes in a light and a dark colourway;
 * the one that suits the current theme is shown. Files live in public/assets/.
 */

/** Full "ADGROW /AI" wordmark (nav bar and footer). */
export function Wordmark({ className = '' }) {
  return (
    <>
      <img src="/assets/adgrow-logo-for-dark-theme.png" alt="Adgrow" className={`only-dark ${className}`} />
      <img src="/assets/adgrow-logo-for-light-theme.png" alt="Adgrow" className={`only-light ${className}`} />
    </>
  );
}

/** Icon-only "A" mark (sign-in/up cards and the Connect animation): white on dark, black on light. */
export function Mark({ className = '' }) {
  return (
    <>
      <img src="/assets/adgrow-icon-white.svg" alt="Adgrow" className={`only-dark ${className}`} />
      <img src="/assets/adgrow-icon-black.svg" alt="Adgrow" className={`only-light ${className}`} />
    </>
  );
}
