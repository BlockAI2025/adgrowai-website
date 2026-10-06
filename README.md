# AdgrowAI website

The public marketing website for AdgrowAI, served at www.adgrowai.com. The product itself runs at app.adgrowai.com, built from a separate private repository; nothing here talks to it except the login and register links.

This repository is public. Never commit keys, tokens, `.env` files, internal URLs or customer data.

## Running it

```
npm install
npm start        # http://localhost:3000
npm run build    # production build in build/
```

## Paths that must keep working

Google and Meta may have these URLs registered for app verification, and links elsewhere point to them. A redesign may change how they look, but every path must still resolve.

| Path | Page |
|---|---|
| `/` | Home |
| `/features`, `/pricing`, `/about`, `/contact`, `/waitlist` | Marketing pages |
| `/blog`, `/blog/:slug` | Blog |
| `/terms` | Terms of service |
| `/privacy-marketing` | Privacy policy (marketing version) |
| `/privacy`, `/privacy-policy` | Privacy policy (compliance version) |
| `/delete-data`, `/data-deletion` | Meta data-deletion instructions and request form |
| `/privacy.html`, `/terms.html` | Static copies in `public/` |
| `/login`, `/register` | Redirect to https://app.adgrowai.com/login and /register |
| `/website` | Redirects to `/` |

Unknown paths redirect to `/`.

## Forms

The waitlist and contact forms post to Formspree. Form IDs are public by design (every visitor's browser sees them), so they live in the code.

## Changes

Open a pull request against `main`; direct pushes are blocked. Each pull request gets a Vercel preview link to check before merging.
