/**
 * Small helpers shared by the canvas drawings and DOM animations.
 */

/** Canvas colours per theme (canvas drawing can't use CSS variables directly). */
export const CANVAS_COLORS = {
  dark: { ink: '230,234,242', acc: '#3BE0F0', warn: '#F5B544', ok: '#4ADE80', surface: '#0D121C' },
  light: { ink: '11,18,32', acc: '#0AAFC4', warn: '#D98A00', ok: '#15803D', surface: '#FFFFFF' },
};

export const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);

export function easeInOutCubic(x) {
  x = clamp01(x);
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export function easeOutBack(x) {
  x = clamp01(x);
  const c = 1.70158;
  return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2);
}

/** '#RRGGBB' + alpha → 'rgba(r,g,b,a)' */
export function hexA(hex, alpha) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`;
}

/** Current wall-clock time as HH:MM:SS. */
export const clockTime = () => new Date().toTimeString().slice(0, 8);

/**
 * Matches a canvas's pixel buffer to its on-screen size (capped at 2× DPR)
 * and clears it. Returns null while the canvas has no size yet.
 */
export function prepareCanvas(canvas) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (!width || !height) return null;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
  }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  return { ctx, width, height };
}

let monoFamily;

/** Canvas font string in the site's mono typeface, e.g. monoFont(500, 10). */
export function monoFont(weight, size) {
  monoFamily ??= getComputedStyle(document.documentElement).getPropertyValue('--mono').trim() || 'monospace';
  return `${weight} ${size}px ${monoFamily}`;
}
