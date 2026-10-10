import { IBM_Plex_Mono, Saira } from 'next/font/google';
import Script from 'next/script';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import './globals.css';
import Footer from '@/components/layout/Footer';
import Nav from '@/components/layout/Nav';
import ScrollReveal from '@/components/layout/ScrollReveal';
import { GOOGLE_ADS_TAG_ID } from '@/lib/site';
import { DEFAULT_THEME, themeInitScript } from '@/lib/theme';

const saira = Saira({ subsets: ['latin'], axes: ['wdth'], variable: '--font-saira' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex-mono' });

export const metadata = {
  title: {
    default: 'Adgrow · AI-powered Google Ads management for small businesses',
    template: '%s · Adgrow',
  },
  description:
    'Adgrow connects to your Google Ads account to analyse your campaigns, keywords and conversion tracking, then explains what to change in plain language.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      data-scroll-behavior="smooth"
      className={`${saira.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <ScrollReveal />
        {GOOGLE_ADS_TAG_ID && process.env.NODE_ENV === 'production' && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_TAG_ID}`} strategy="afterInteractive" />
            <Script id="google-ads-tag" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ADS_TAG_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
