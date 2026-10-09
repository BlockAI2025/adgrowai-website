/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Privacy policy URLs from the previous site, which may be registered with Google/Meta.
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/privacy-marketing', destination: '/privacy', permanent: true },
      // Static legal pages from the previous site, which may be registered with Google/Meta.
      { source: '/privacy.html', destination: '/privacy', permanent: true },
      { source: '/terms.html', destination: '/terms', permanent: true },
      // Data deletion URL from the previous site, which may be registered with Meta.
      { source: '/data-deletion', destination: '/delete-data', permanent: true },
    ];
  },
};

export default nextConfig;
