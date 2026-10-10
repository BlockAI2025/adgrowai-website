import { FORM_ENDPOINTS } from './site';

async function submitForm(endpoint, formData) {
  if (!endpoint) throw new Error('This form is not connected to an endpoint yet.');
  const response = await fetch(endpoint, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) throw new Error(`Form submission failed (${response.status}).`);
}

/** Adds an email address to the waitlist and reports the sign-up to Google Ads. */
export async function joinWaitlist(formData) {
  await submitForm(FORM_ENDPOINTS.waitlist, formData);
  window.gtag?.('event', 'sign_up', { method: 'waitlist' });
}

/** Sends a data deletion request from /delete-data. Rejects unless Formspree accepted it. */
export async function sendDeletionRequest(formData) {
  await submitForm(FORM_ENDPOINTS.deletion, formData);
}

/** Sends a message from the contact form on the About page. */
export async function sendContactMessage(formData) {
  await submitForm(FORM_ENDPOINTS.contact, formData);
}
