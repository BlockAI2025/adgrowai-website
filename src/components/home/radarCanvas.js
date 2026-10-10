import { CANVAS_COLORS, hexA, monoFont, prepareCanvas } from '@/lib/animation';
import { getTheme } from '@/lib/theme';

const TAU = Math.PI * 2;

// Problems the radar "finds": the issue, campaign, weekly cost and the fix applied.
const LEAKS = [
  { q: "'plumbing jobs' · 0 conv", camp: 'Search · Emergency Callouts', v: 38.6, a: 'NEGATIVE ADDED' },
  { q: 'Budget out by 11:40', camp: 'PMax · Online Store', v: 64, a: 'RE-PACED' },
  { q: 'Landing page 404', camp: 'Search · Local Services', v: 22, a: '3 ADS PAUSED' },
  { q: 'CPC +41% vs baseline', camp: 'Search · Brand', v: 19.2, a: 'CPC CAP SET' },
  { q: 'CTR down 38%', camp: 'Display · Remarketing', v: 12.5, a: 'NEW COPY QUEUED' },
  { q: "'free quote template'", camp: 'Search · Local Services', v: 24.3, a: 'NEGATIVE ADDED' },
];

const normAngle = (a) => ((a % TAU) + TAU) % TAU;

function makeBlip(isLeak) {
  return {
    leak: isLeak,
    th: Math.random() * TAU, // bearing
    r: isLeak ? 0.28 + Math.random() * 0.52 : 0.05 + Math.random() * 0.93, // distance from centre (0–1)
    state: 'idle', // idle → lock → fixed
    armed: false, // must leave the beam before it can be locked
    ph: Math.random(), // pulse phase
    data: isLeak ? LEAKS[Math.floor(Math.random() * LEAKS.length)] : null,
  };
}

function drawBrackets(ctx, x, y, size, color) {
  const arm = 7;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (const [sx, sy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    ctx.moveTo(x + sx * size, y + sy * (size - arm));
    ctx.lineTo(x + sx * size, y + sy * size);
    ctx.lineTo(x + sx * (size - arm), y + sy * size);
  }
  ctx.stroke();
  ctx.lineWidth = 1;
}

/**
 * Radar sweep for the home page hero. Of its 34 blips, 6 are leaks: when the
 * beam passes one it locks on (onLock), marks it fixed a moment later (onFix),
 * then the blip respawns somewhere else. Returns draw(seconds) for each frame.
 */
export function createRadar(canvas, { onLock, onFix, speed = 1 }) {
  const blips = Array.from({ length: 34 }, (_, i) => makeBlip(i < 6));
  let sweep = -Math.PI / 2;
  let lastT = null;

  return function draw(t) {
    const frame = prepareCanvas(canvas);
    if (!frame) return;
    const { ctx, width: W, height: H } = frame;
    const P = CANVAS_COLORS[getTheme()];
    const ink = (a) => `rgba(${P.ink},${a})`;
    const A = P.acc;
    const WARN = P.warn;
    const cx = W / 2;
    const cy = H / 2 + 12;
    const R = Math.min(W, H) / 2 - 52;
    const dt = Math.min(0.1, t - (lastT ?? t));
    lastT = t;
    sweep += dt * 0.85 * speed;
    const sa = normAngle(sweep);

    // Range rings, spokes and the dashed inner ring
    ctx.lineWidth = 1;
    for (let k = 1; k <= 5; k++) {
      ctx.strokeStyle = ink(k === 5 ? 0.26 : 0.09);
      ctx.beginPath();
      ctx.arc(cx, cy, (R * k) / 5, 0, TAU);
      ctx.stroke();
    }
    ctx.strokeStyle = ink(0.05);
    for (let k = 0; k < 12; k++) {
      const a = (k * TAU) / 12;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
      ctx.stroke();
    }
    ctx.setLineDash([2, 7]);
    ctx.lineDashOffset = -t * 8;
    ctx.strokeStyle = ink(0.2);
    ctx.beginPath();
    ctx.arc(cx, cy, R * 0.62, 0, TAU);
    ctx.stroke();
    ctx.setLineDash([]);

    // Bearing ticks every 2°, labels every 30°, and range labels
    ctx.font = monoFont(500, 9);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let d = 0; d < 360; d += 2) {
      const a = (d * Math.PI) / 180 - Math.PI / 2;
      const len = d % 30 === 0 ? 9 : d % 10 === 0 ? 5 : 2.5;
      ctx.strokeStyle = ink(d % 30 === 0 ? 0.55 : 0.2);
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * (R + 4), cy + Math.sin(a) * (R + 4));
      ctx.lineTo(cx + Math.cos(a) * (R + 4 + len), cy + Math.sin(a) * (R + 4 + len));
      ctx.stroke();
      if (d % 30 === 0) {
        ctx.fillStyle = ink(0.5);
        ctx.fillText(String(d).padStart(3, '0'), cx + Math.cos(a) * (R + 24), cy + Math.sin(a) * (R + 24));
      }
    }
    ctx.textAlign = 'left';
    ctx.fillStyle = ink(0.35);
    ['6D', '12D', '18D', '24D', '30D'].forEach((label, i) => ctx.fillText(label, cx + 5, cy - (R * (i + 1)) / 5 + 9));

    // Sweep beam with a fading trail
    const trail = 1.1;
    const f = trail / TAU;
    if (ctx.createConicGradient) {
      const g = ctx.createConicGradient(sa - trail, cx, cy);
      g.addColorStop(0, hexA(A, 0));
      g.addColorStop(f * 0.995, hexA(A, 0.24));
      g.addColorStop(f, hexA(A, 0));
      g.addColorStop(1, hexA(A, 0));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, sa - trail, sa);
      ctx.closePath();
      ctx.fill();
    }
    ctx.strokeStyle = hexA(A, 0.95);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(sa) * R, cy + Math.sin(sa) * R);
    ctx.stroke();
    ctx.lineWidth = 1;

    // Blips
    let locking = blips.filter((b) => b.state === 'lock').length;
    for (const b of blips) {
      const x = cx + Math.cos(b.th) * b.r * R;
      const y = cy + Math.sin(b.th) * b.r * R;
      const d = normAngle(sa - b.th);
      const glow = Math.max(0, 1 - d / 2.2);

      if (!b.leak) {
        ctx.fillStyle = ink(0.16 + glow * 0.8);
        ctx.fillRect(x - 1.25, y - 1.25, 2.5, 2.5);
        continue;
      }

      if (d > 1.2) b.armed = true;

      if (b.state === 'idle') {
        ctx.fillStyle = hexA(WARN, 0.45 + glow * 0.55);
        ctx.beginPath();
        ctx.arc(x, y, 3.2, 0, TAU);
        ctx.fill();
        const pulse = (t * 1.2 + b.ph) % 1;
        ctx.strokeStyle = hexA(WARN, 0.55 * (1 - pulse));
        ctx.beginPath();
        ctx.arc(x, y, 4 + pulse * 12, 0, TAU);
        ctx.stroke();
        if (b.armed && d < 0.08 && locking < 2) {
          b.state = 'lock';
          b.t0 = t;
          locking++;
          onLock(b.data);
        }
        continue;
      }

      if (b.state === 'lock' && t - b.t0 > 2.6) {
        b.state = 'fixed';
        b.t1 = t;
        onFix(b.data);
      }
      const fixed = b.state === 'fixed';
      const alpha = fixed ? Math.max(0, 1 - (t - b.t1) / 2.4) : 1;
      if (fixed && alpha <= 0) {
        Object.assign(b, makeBlip(true));
        continue;
      }

      // Target brackets close in, then a typed-out label
      const color = fixed ? A : WARN;
      const e = Math.min(1, (t - b.t0) / 0.5);
      const s = 34 - 20 * (1 - Math.pow(1 - e, 3));
      drawBrackets(ctx, x, y, s, hexA(color, alpha));
      ctx.fillStyle = hexA(color, alpha);
      ctx.beginPath();
      ctx.arc(x, y, fixed ? 2.5 : 3.5, 0, TAU);
      ctx.fill();
      if (t - b.t0 > 0.35) {
        const dir = x < cx ? 1 : -1;
        const lx = x + dir * (s + 22);
        const ly = y - s - 12;
        ctx.strokeStyle = hexA(color, alpha * 0.8);
        ctx.beginPath();
        ctx.moveTo(x + dir * s, y - s);
        ctx.lineTo(lx, ly);
        ctx.lineTo(lx + dir * 10, ly);
        ctx.stroke();
        const chars = Math.floor((t - b.t0 - 0.35) * 45);
        const type = (str) => (fixed ? str : str.slice(0, chars));
        const tx = lx + dir * 14;
        ctx.textAlign = dir > 0 ? 'left' : 'right';
        ctx.font = monoFont(600, 10);
        ctx.fillStyle = hexA(color, alpha);
        ctx.fillText(fixed ? `FIXED · SAVED $${Math.round(b.data.v)}/WK` : type('WASTE DETECTED'), tx, ly - 8);
        ctx.font = monoFont(500, 10);
        ctx.fillStyle = ink(alpha * 0.92);
        ctx.fillText(fixed ? b.data.a : type(b.data.q), tx, ly + 6);
        ctx.fillStyle = ink(alpha * 0.55);
        ctx.fillText(fixed ? b.data.camp : type(`−$${b.data.v.toFixed(2)}/wk · ${b.data.camp}`), tx, ly + 19);
      }
    }

    // Centre crosshair
    ctx.strokeStyle = ink(0.5);
    ctx.beginPath();
    ctx.moveTo(cx - 8, cy);
    ctx.lineTo(cx + 8, cy);
    ctx.moveTo(cx, cy - 8);
    ctx.lineTo(cx, cy + 8);
    ctx.stroke();
    ctx.fillStyle = A;
    ctx.fillRect(cx - 2, cy - 2, 4, 4);
  };
}
