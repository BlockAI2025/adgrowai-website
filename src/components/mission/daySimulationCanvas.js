import { CANVAS_COLORS, clamp01, hexA, monoFont, prepareCanvas } from '@/lib/animation';
import { getTheme } from '@/lib/theme';

/** Length of one full loop of the simulation, in seconds. */
const LOOP_SECONDS = 20;

// People searching through the day, 06:00 → 23:00 (one value per hour, % of peak).
const DEMAND = [18, 30, 48, 62, 70, 74, 72, 68, 66, 68, 72, 76, 80, 78, 68, 52, 36, 24];
// Customer calls, in hours after 06:00.
const CALLS = [1.33, 2.75, 4.08, 5.17];
// Opportunity windows Adgrow finds, as fractions of the day.
const OPPORTUNITIES = [[3 / 17, 6 / 17], [10 / 17, 13.5 / 17]];
// The budget runs out a third of the way through the day (11:40).
const BUDGET_GONE = 1 / 3;

/**
 * Where the loop is at time t:
 *  rx   0→1  the unwatched day plays out (0.4s–7.4s)
 *  sx   0→1  Adgrow's scan sweeps the same day (8.4s–14.4s); p2 is true from then on
 *  od   0→1  opportunity lines draw in;  ol 0→1 the lift they bring
 *  fade 1→0  fade out before the loop restarts
 */
export function simulationPhase(t, start) {
  const tau = (((t - start) % LOOP_SECONDS) + LOOP_SECONDS) % LOOP_SECONDS;
  return {
    tau,
    rx: clamp01((tau - 0.4) / 7),
    sx: clamp01((tau - 8.4) / 6),
    p2: tau >= 8.4,
    od: clamp01((tau - 14.8) / 0.8),
    ol: clamp01((tau - 15.6) / 1.2),
    fade: tau > 19.4 ? clamp01(1 - (tau - 19.4) / 0.6) : 1,
  };
}

/**
 * Draws one frame of "a day in an unwatched account" and then the same day
 * with Adgrow switched on. `focus` ('waste' | 'budget' | 'tracking' | null)
 * dims everything except the selected leak.
 */
export function drawDaySimulation(canvas, phase, focus) {
  const frame = prepareCanvas(canvas);
  if (!frame) return;
  const { ctx, width: W, height: H } = frame;
  const P = CANVAS_COLORS[getTheme()];
  const ink = (a) => `rgba(${P.ink},${a})`;
  const A = P.acc;
  const WR = P.warn;
  const BG = P.surface;
  const { rx, sx, p2, od, ol, fade } = phase;

  // Chart area and scales
  const x0 = 44;
  const x1 = W - 20;
  const y0 = H - 34;
  const y1 = 92;
  const cw = x1 - x0;
  const ch = y0 - y1;
  const X = (fr) => x0 + fr * cw;
  const Y = (v) => y0 - (v / 100) * ch;
  const demand = (fr) => {
    const hh = Math.max(0, Math.min(17, fr * 17));
    const i = Math.min(16, Math.floor(hh));
    const m = (1 - Math.cos((hh - i) * Math.PI)) / 2;
    return DEMAND[i] * (1 - m) + DEMAND[i + 1] * m;
  };

  const N = 200;
  const dim = (leak) => (!focus || focus === leak ? 1 : 0.15);
  const baseAlpha = focus ? 0.15 : 1;
  const constant = (v) => () => v;
  const xs = X(sx);
  const smoothstep = (a, b, x) => {
    const u = clamp01((x - a) / (b - a));
    return u * u * (3 - 2 * u);
  };
  const lift = ol * ol * (3 - 2 * ol);
  const bump = (fr) => Math.max(...OPPORTUNITIES.map(([a, b]) => smoothstep(a - 0.03, a + 0.01, fr) * (1 - smoothstep(b - 0.01, b + 0.03, fr))));

  // Fills the band between lo(fr) and hi(fr) (fractions of demand) from `from` to `to`.
  const band = (from, to, lo, hi, fill) => {
    ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const fr = from + ((to - from) * i) / N;
      if (i) ctx.lineTo(X(fr), Y(demand(fr) * hi(fr)));
      else ctx.moveTo(X(fr), Y(demand(fr) * hi(fr)));
    }
    for (let i = N; i >= 0; i--) {
      const fr = from + ((to - from) * i) / N;
      ctx.lineTo(X(fr), Y(demand(fr) * lo(fr)));
    }
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
  };
  const label = (text, x, y, color) => {
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.fillText(text, x, y);
  };

  // Hour grid and axis
  ctx.font = monoFont(500, 10);
  ctx.textBaseline = 'top';
  for (let hh = 6; hh <= 21; hh += 3) {
    const x = X((hh - 6) / 17);
    ctx.strokeStyle = ink(0.07);
    ctx.beginPath();
    ctx.moveTo(x, y1 - 10);
    ctx.lineTo(x, y0);
    ctx.stroke();
    ctx.fillStyle = ink(0.5);
    ctx.textAlign = hh === 6 ? 'left' : 'center';
    ctx.fillText(String(hh).padStart(2, '0') + ':00', x, y0 + 12);
  }
  ctx.textAlign = 'right';
  ctx.fillText('23:00', x1, y0 + 12);
  ctx.strokeStyle = ink(0.3);
  ctx.beginPath();
  ctx.moveTo(x0, y0 + 0.5);
  ctx.lineTo(x1, y0 + 0.5);
  ctx.stroke();

  // The unwatched day (once Adgrow's scan starts, only the part right of the scan line)
  ctx.save();
  if (p2) {
    ctx.beginPath();
    ctx.rect(xs, 0, W - xs, H);
    ctx.clip();
  }
  const adsEnd = Math.min(rx, BUDGET_GONE);
  if (adsEnd > 0) {
    ctx.globalAlpha = fade * baseAlpha;
    band(0, adsEnd, constant(0), constant(0.77), hexA(A, 0.34));
    ctx.globalAlpha = fade * dim('waste');
    band(0, adsEnd, constant(0.77), constant(1), hexA(WR, 0.9));
    ctx.globalAlpha = fade * baseAlpha;
    label('YOUR ADS', X(0.012), y0 - 8, ink(0.85));
  }
  if (rx > BUDGET_GONE) {
    // Budget gone: hatched area under the demand curve
    ctx.globalAlpha = fade * dim('budget');
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(X(BUDGET_GONE), y0);
    for (let i = 0; i <= N; i++) {
      const fr = BUDGET_GONE + ((rx - BUDGET_GONE) * i) / N;
      ctx.lineTo(X(fr), Y(demand(fr)));
    }
    ctx.lineTo(X(rx), y0);
    ctx.closePath();
    ctx.fillStyle = hexA(WR, 0.07);
    ctx.fill();
    ctx.clip();
    ctx.strokeStyle = hexA(WR, 0.38);
    for (let x = X(BUDGET_GONE) - ch; x < X(rx); x += 9) {
      ctx.beginPath();
      ctx.moveTo(x, y0);
      ctx.lineTo(x + ch, y1 - ch * 0.1);
      ctx.stroke();
    }
    ctx.restore();
    ctx.strokeStyle = WR;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(X(BUDGET_GONE), Y(demand(BUDGET_GONE)));
    ctx.lineTo(X(BUDGET_GONE), y0);
    ctx.stroke();
    ctx.strokeStyle = A;
    ctx.beginPath();
    ctx.moveTo(X(BUDGET_GONE), y0 - 1);
    ctx.lineTo(X(rx), y0 - 1);
    ctx.stroke();
    ctx.lineWidth = 1;
    if (rx > BUDGET_GONE + 0.04) label('YOUR ADS · $0 LEFT', X(BUDGET_GONE) + 8, y0 - 8, A);
  }
  ctx.restore();

  // The same day with Adgrow, left of the scan line
  if (p2 && sx > 0) {
    const level = (fr) => 0.8 + 0.1 * lift * bump(fr);
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, xs, H);
    ctx.clip();
    ctx.globalAlpha = fade * baseAlpha;
    band(0, 1, constant(0), level, hexA(A, 0.34));
    ctx.globalAlpha = fade * dim('waste');
    band(0, 1, level, (fr) => level(fr) + 0.04, hexA(WR, 0.9));
    ctx.globalAlpha = fade * baseAlpha;
    label('YOUR ADS', X(0.012), y0 - 8, ink(0.85));
    ctx.restore();
  }

  // People searching (dashed demand curve)
  ctx.globalAlpha = fade;
  ctx.strokeStyle = ink(0.9);
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 5]);
  ctx.beginPath();
  for (let i = 0; i <= N; i++) {
    const fr = (rx * i) / N;
    if (i) ctx.lineTo(X(fr), Y(demand(fr)));
    else ctx.moveTo(X(fr), Y(demand(fr)));
  }
  if (rx > 0) ctx.stroke();
  ctx.setLineDash([]);
  ctx.lineWidth = 1;
  if (rx > 0.8) label('PEOPLE SEARCHING', X(0.8) + 6, Y(demand(0.8)) - 8, ink(0.9));

  // Opportunities (dotted)
  if (od > 0) {
    ctx.globalAlpha = fade * baseAlpha;
    ctx.strokeStyle = A;
    ctx.lineWidth = 2;
    ctx.setLineDash([2, 4]);
    OPPORTUNITIES.forEach(([a, b]) => {
      const end = a + (b - a) * od;
      ctx.beginPath();
      for (let i = 0; i <= 60; i++) {
        const fr = a + ((end - a) * i) / 60;
        const y = Y(demand(fr) * 0.94);
        if (i) ctx.lineTo(X(fr), y);
        else ctx.moveTo(X(fr), y);
      }
      ctx.stroke();
    });
    ctx.setLineDash([]);
    ctx.lineWidth = 1;
    ctx.globalAlpha = fade * baseAlpha * od;
    ctx.font = monoFont(600, 10);
    ctx.fillStyle = A;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    OPPORTUNITIES.forEach(([a, b]) => {
      const mid = (a + b) / 2;
      ctx.fillText('OPPORTUNITY', X(mid), Y(demand(mid)) - 10);
    });
  }

  // Customer calls: "?" until Adgrow's scan passes, then a tick
  ctx.font = monoFont(600, 11);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  CALLS.forEach((hh) => {
    const fr = hh / 17;
    if (fr > rx) return;
    const x = X(fr);
    const y = Y(demand(fr) * 0.42);
    const recorded = p2 && fr < sx;
    const alpha = recorded ? Math.max(0, 1 - ((sx - fr) * 6) / 0.9) : 1;
    if (alpha <= 0) return;
    ctx.globalAlpha = fade * dim('tracking') * alpha;
    ctx.beginPath();
    ctx.arc(x, y, 9, 0, Math.PI * 2);
    if (recorded) {
      ctx.fillStyle = A;
      ctx.fill();
      ctx.strokeStyle = BG;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x - 4, y);
      ctx.lineTo(x - 1, y + 3);
      ctx.lineTo(x + 4.5, y - 3.5);
      ctx.stroke();
    } else {
      ctx.fillStyle = BG;
      ctx.fill();
      ctx.strokeStyle = A;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fillStyle = A;
      ctx.fillText('?', x, y + 0.5);
    }
    ctx.lineWidth = 1;
  });

  // Playhead (unwatched day) or Adgrow's scan line
  ctx.font = monoFont(500, 10);
  if (!p2 && rx > 0 && rx < 1) {
    ctx.globalAlpha = fade;
    const x = X(rx);
    ctx.strokeStyle = ink(0.45);
    ctx.beginPath();
    ctx.moveTo(x, y1 - 10);
    ctx.lineTo(x, y0);
    ctx.stroke();
  }
  if (p2 && sx > 0 && sx < 1) {
    ctx.globalAlpha = fade;
    const g = ctx.createLinearGradient(xs - 70, 0, xs, 0);
    g.addColorStop(0, hexA(A, 0));
    g.addColorStop(1, hexA(A, 0.16));
    ctx.fillStyle = g;
    ctx.fillRect(xs - 70, y1 - 10, 70, y0 - y1 + 10);
    ctx.strokeStyle = A;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(xs, y1 - 10);
    ctx.lineTo(xs, y0);
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.font = monoFont(600, 10);
    label('ADGROW', xs + 6, Y(demand(sx)) - 10, A);
  }
  ctx.globalAlpha = 1;
}
