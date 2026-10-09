'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Pages that don't render the <Waitlist /> section.
const PAGES_WITHOUT_WAITLIST = ['/signin', '/signup', '/privacy', '/terms'];

/** Links to the waitlist section on this page, or on the home page if this page has none. */
export default function WaitlistLink({ children, className }) {
  const pathname = usePathname();
  const href = PAGES_WITHOUT_WAITLIST.includes(pathname) ? '/#waitlist' : '#waitlist';
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
