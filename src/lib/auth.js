/**
 * Sign in / sign up — NOT connected to the AdgrowAI backend yet.
 *
 * The forms on /signin and /signup call these functions. When the returned
 * promise resolves they show their success state; when it rejects they show
 * the error's message and stay open. Hooking up the backend only means
 * replacing the two function bodies below. AdgrowAI-frontend's
 * src/services/api/auth.js (`login`, `register`) has the existing requests.
 */

/**
 * @param {{ email: string, password: string, rememberEmail: boolean }} details
 */
export async function signIn(details) {
  // TODO(backend): authenticate with the AdgrowAI API.
}

/**
 * @param {{ name: string, email: string, website: string, password: string, confirmPassword: string }} details
 */
export async function signUp(details) {
  // TODO(backend): create the account with the AdgrowAI API.
}
