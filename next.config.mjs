import { APP_URL } from './src/lib/site.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Privacy policy URLs from the previous site, which may be registered with Google/Meta.
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/privacy-marketing', destination: '/privacy', permanent: true },
      // Sign in and sign up happen in the app. Not permanent, so they can change later.
      { source: '/signin', destination: `${APP_URL}/login`, permanent: false },
      { source: '/signup', destination: `${APP_URL}/register`, permanent: false },
      // Static legal pages from the previous site, which may be registered with Google/Meta.
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true },
      // Other addresses from the previous site, sent to the closest page here.
      { source: '/login', destination: `${APP_URL}/login`, permanent: true },
      { source: '/register', destination: `${APP_URL}/register`, permanent: false },
      { source: '/contact', destination: '/about#contact', permanent: true },
      { source: '/blog', destination: '/about#blog', permanent: true },
      { source: '/blog/hidden-cost-set-forget-google-ads', destination: '/blog/hidden-cost-of-set-and-forget-google-ads', permanent: true },
      { source: '/features', destination: '/mission', permanent: true },
      { source: '/waitlist', destination: '/#waitlist', permanent: true },
      { source: '/website', destination: '/', permanent: true },
      // Data deletion URL from the previous site, which may be registered with Meta.
      { source: '/data-deletion', destination: '/delete-data', permanent: true },
    ];
  },
};

export default nextConfig;
