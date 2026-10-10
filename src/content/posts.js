/**
 * Blog posts, newest first. Listed in the About page's blog section; each
 * post's article lives at src/app/blog/<slug>/page.jsx.
 */
export const POSTS = [
  {
    slug: 'hidden-cost-of-set-and-forget-google-ads',
    category: 'GOOGLE ADS',
    date: 'FEBRUARY 2026',
    title: 'The Hidden Cost of ‘Set and Forget’ Google Ads',
    description:
      'Automated bidding optimizes your bids, not your campaigns. Where “set and forget” Google Ads quietly waste budget, and what to monitor instead.',
  },
];

export const postHref = (slug) => `/blog/${slug}`;

export const getPost = (slug) => POSTS.find((post) => post.slug === slug);
