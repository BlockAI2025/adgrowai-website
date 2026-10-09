/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Privacy policy URLs from the previous site, which may be registered with Google/Meta.
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/privacy-marketing', destination: '/privacy', permanent: true },
      // Sign in and sign up happen in the app; the forms here aren't connected to it.
      // Not permanent, so they can come back once they are.
      { source: '/signin', destination: 'https://app.adgrowai.com/login', permanent: false },
      { source: '/signup', destination: 'https://app.adgrowai.com/register', permanent: false },
      // Static legal pages from the previous site, which may be registered with Google/Meta.
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true },
      // Data deletion URL from the previous site, which may be registered with Meta.
      { source: '/data-deletion', destination: '/delete-data', permanent: true },
    ];
  },
};

export default nextConfig;
