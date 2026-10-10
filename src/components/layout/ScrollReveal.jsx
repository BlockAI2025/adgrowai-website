'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const EASE = 'cubic-bezier(.2,.7,.2,1)';

/**
 * Fades and lifts elements marked with data-reveal as they scroll into view.
 * The attribute's value staggers the start (×90ms), e.g. data-reveal="2".
 * Elements already on screen when a page opens are left as they are.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const hidden = [];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    // Wait a frame so the new page has rendered and scrolled into place.
    const frame = requestAnimationFrame(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
        const delay = Number(el.dataset.reveal || 0) * 90;
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        el.style.transition = `opacity .8s ${EASE} ${delay}ms, transform .8s ${EASE} ${delay}ms`;
        hidden.push(el);
        observer.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      // Never leave an element stuck invisible.
      for (const el of hidden) {
        el.style.opacity = '';
        el.style.transform = '';
        el.style.transition = '';
      }
    };
  }, [pathname]);

  return null;
}
