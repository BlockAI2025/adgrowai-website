import { useEffect } from 'react';

/**
 * Runs `animate(find, seconds)` every frame, with the clock starting once the
 * element has scrolled into view. `find(selector)` returns the (cached)
 * matching elements inside it, so animations can style them directly without
 * re-rendering React 60 times a second.
 */
export function useScrollStartedLoop(ref, animate) {
  useEffect(() => {
    const root = ref.current;
    const cache = new Map();
    const find = (selector) => {
      if (!cache.has(selector)) cache.set(selector, Array.from(root.querySelectorAll(selector)));
      return cache.get(selector);
    };

    let start = null;
    let frame = requestAnimationFrame(function loop(now) {
      frame = requestAnimationFrame(loop);
      const t = now / 1000;
      if (start === null) {
        const rect = root.getBoundingClientRect();
        if (rect.top > window.innerHeight * 0.85 || rect.bottom < 0) return;
        start = t;
      }
      animate(find, t - start);
    });
    return () => cancelAnimationFrame(frame);
  }, [ref, animate]);
}

/** Sets an element's text only when it changes. */
export function setText(el, text) {
  if (el && el.textContent !== text) el.textContent = text;
}
