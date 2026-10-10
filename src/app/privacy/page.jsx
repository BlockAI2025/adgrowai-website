import LegalPage from '@/components/legal/LegalPage';
import styles from '@/components/legal/LegalPage.module.css';

// Copied word for word from the previous site (AdgrowAI-frontend src/pages/marketing/PrivacyPage.jsx).

export const metadata = {
  title: 'Privacy Policy',
  description: 'How AdgrowAI collects, uses, and protects your information when you use our services.',
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" dates={['Effective date: April 9, 2026', 'Last updated: April 9, 2026']}>
      <p>AdgrowAI Limited (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website <a href="https://www.adgrowai.com">www.adgrowai.com</a> and the platform at <a href="https://app.adgrowai.com">app.adgrowai.com</a>. This Privacy Policy describes how we collect, use, and protect your information when you use our services.</p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Account Information:</strong> Name, email address, and password when you create an account.</li>
        <li><strong>Business Profile Data:</strong> Business name, industry, website URL, target audience, advertising budget, and campaign objectives provided during onboarding.</li>
        <li><strong>Advertising Platform Data:</strong> When you connect your Google Ads or Meta Ads accounts via OAuth, we access campaign performance data (impressions, clicks, conversions, cost, keyword metrics). We do NOT store your Google or Meta login credentials.</li>
        <li><strong>Usage Data:</strong> Pages visited, features used, actions taken, timestamps, device and browser information.</li>
        <li><strong>Cookies:</strong> Essential httpOnly session cookies for authentication. We may use analytics cookies to improve our services.</li>
        <li><strong>LLM Processing Data:</strong> When you use our AI features (Strategy Coach, keyword suggestions, decision recommendations), campaign data, business profile details, and performance metrics are sent to OpenAI&apos;s API for processing. OpenAI does not use API data to train their models.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, operate, and improve the AdgrowAI platform.</li>
        <li>Analyze advertising campaign performance and generate optimization recommendations.</li>
        <li>Communicate about your account, service updates, and support requests.</li>
        <li>Send periodic reports and insights about campaign performance (you may opt out at any time).</li>
        <li>Ensure the security and integrity of the platform.</li>
        <li>Comply with legal obligations.</li>
      </ul>
      <p className={styles.spaced}>We do not use data from connected advertising platforms (Google Ads, Meta Ads) for advertising or marketing to end users, for building user profiles, or for any purpose unrelated to the services you requested.</p>

      <h2>3. How We Use Google Ads Data</h2>
      <div className={styles.callout}>
        <p>We access Google Ads data solely to display campaign metrics, generate insights, and suggest optimizations within the AdgrowAI dashboard.</p>
        <ul>
          <li>We do <strong>not</strong> sell, share, or transfer Google Ads data to any third party.</li>
          <li>We do <strong>not</strong> use Google Ads data for purposes unrelated to the services you requested.</li>
          <li>You may disconnect your Google Ads account at any time through your account settings.</li>
        </ul>
        <p className={styles.spaced}>Our use and transfer of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements.</p>
      </div>

      <h2>4. How We Use Meta Platform Data</h2>
      <div className={styles.callout}>
        <p>We access data from Meta Ads accounts (Facebook and Instagram advertising) solely to display campaign metrics, generate insights, and suggest optimizations within the AdgrowAI dashboard.</p>
        <ul>
          <li>We do <strong>not</strong> sell, share, or transfer Meta platform data to any third party.</li>
          <li>We do <strong>not</strong> use Meta platform data for purposes unrelated to the services you requested.</li>
          <li>We do <strong>not</strong> use Meta platform data for advertising or marketing to end users.</li>
          <li>We do <strong>not</strong> use Meta platform data to build user profiles or identify individuals.</li>
          <li>You may disconnect your Meta Ads account at any time through your account settings, which will stop all further data access.</li>
          <li>Upon account deletion or disconnection, Meta platform data is deleted from our systems within 30 days.</li>
        </ul>
        <p className={styles.spaced}>Our use of information received from Meta Platforms adheres to the <a href="https://developers.facebook.com/terms/" target="_blank" rel="noopener noreferrer">Meta Platform Terms</a> and <a href="https://developers.facebook.com/devpolicy/" target="_blank" rel="noopener noreferrer">Developer Policies</a>.</p>
      </div>

      <h2>5. Data Controller</h2>
      <p>AdgrowAI Limited is the data controller responsible for your personal data.</p>
      <p className={styles.spaced}><strong>AdgrowAI Limited</strong></p>
      <p>NZ Company Number: 9418222</p>
      <p>NZBN: 9429053564504</p>
      <p>Registered office: 117 Wiseley Road, West Harbour, Auckland 0618, New Zealand</p>
      <p>Email: <a href="mailto:admin@adgrowai.com">admin@adgrowai.com</a></p>
      <p className={styles.spaced}>For any questions about how your data is handled, or to exercise your data rights, contact us at <a href="mailto:admin@adgrowai.com">admin@adgrowai.com</a>.</p>

      <h2>6. Legal Basis for Processing (GDPR)</h2>
      <p>For users in the European Economic Area (EEA) and United Kingdom, we process your personal data on the following legal bases:</p>
      <ul>
        <li><strong>Contract:</strong> Processing necessary to provide the AdgrowAI service you have signed up for (account data, campaign optimization, platform features).</li>
        <li><strong>Legitimate Interest:</strong> Processing necessary for our legitimate business interests, such as improving the platform, analyzing aggregate usage patterns, and preventing fraud or abuse, where these interests are not overridden by your rights.</li>
        <li><strong>Consent:</strong> Processing based on your consent where required, such as optional analytics or marketing communications. You may withdraw consent at any time.</li>
        <li><strong>Legal Obligation:</strong> Processing necessary to comply with applicable laws.</li>
      </ul>

      <h2>7. Data Sharing and Disclosure</h2>
      <p>We do <strong>not</strong> sell personal data. We may share information in the following circumstances:</p>
      <ul>
        <li><strong>AI Processing Providers:</strong> OpenAI processes campaign and business data to generate AI-powered recommendations. OpenAI acts as a data processor under their API Terms and does not use this data to train their models.</li>
        <li><strong>Service Providers:</strong> Third-party services (cloud hosting, email delivery, analytics) that process data on our behalf under strict confidentiality agreements.</li>
        <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation.</li>
        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with notice to affected users.</li>
      </ul>

      <h2>8. Data Security</h2>
      <p>We implement industry-standard security measures to protect your data:</p>
      <ul>
        <li>Encrypted connections (HTTPS/TLS).</li>
        <li>HttpOnly authentication cookies.</li>
        <li>Input validation and rate limiting.</li>
        <li>Role-based access controls.</li>
      </ul>
      <p className={styles.spaced}>No method of transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>

      <h2>9. Data Retention</h2>
      <p>We retain your data for the following periods:</p>
      <ul>
        <li><strong>Account data (name, email, business profile):</strong> Retained while your account is active, and for 90 days after account deletion to allow for recovery.</li>
        <li><strong>Advertising platform data (Google Ads, Meta Ads metrics):</strong> Retained while the connection is active. Deleted within 30 days of account disconnection or deletion.</li>
        <li><strong>Execution plans and optimization history:</strong> Retained for 12 months to enable learning and performance tracking, then anonymized or deleted.</li>
        <li><strong>Support communications:</strong> Retained for 24 months for quality and training purposes.</li>
        <li><strong>Legal and compliance records:</strong> Retained as required by applicable law, typically up to 7 years.</li>
      </ul>
      <p className={styles.spaced}>You may request immediate deletion of your data at any time using our <a href="/delete-data">data deletion form</a> or by emailing <a href="mailto:admin@adgrowai.com">admin@adgrowai.com</a>. Some data may be retained where required by law or for legitimate business purposes such as fraud prevention.</p>

      <h2>10. International Data Transfers</h2>
      <p>AdgrowAI Limited is based in New Zealand. Our service providers may be located in the United States, European Union, and other jurisdictions. This means your personal data may be transferred to, stored in, and processed in countries outside your country of residence.</p>
      <p className={styles.spaced}>When we transfer personal data internationally, we rely on appropriate safeguards, including:</p>
      <ul>
        <li>Standard Contractual Clauses approved by the European Commission for transfers from the EEA.</li>
        <li>Data processing agreements with all third-party providers.</li>
        <li>New Zealand&apos;s privacy laws, which provide protections comparable to GDPR principles.</li>
      </ul>
      <p className={styles.spaced}>Our primary service providers include: OpenAI (United States), Railway (United States), Vercel (United States), MongoDB Atlas (United States), Resend (United States), Formspree (United States), Cloudflare (United States), Google (United States), and Meta (United States).</p>

      <h2>11. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of inaccurate or incomplete data.</li>
        <li>Request deletion of your personal data.</li>
        <li>Object to or restrict certain processing of your data.</li>
        <li>Request portability of your data in a machine-readable format.</li>
        <li>Withdraw consent where processing is based on consent.</li>
      </ul>
      <p className={styles.spaced}>To exercise any of these rights, contact us at <a href="mailto:admin@adgrowai.com">admin@adgrowai.com</a>.</p>
      <p className={styles.spaced}>For users in California, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what categories of personal information we collect, the right to request deletion, and the right to opt out of the sale of personal information. AdgrowAI Limited does not sell personal information as defined by the CCPA.</p>
      <p className={styles.spaced}>For users in the EEA and UK, you have the right to lodge a complaint with your local data protection authority if you believe we have not handled your data appropriately.</p>

      <h2>12. Third-Party Services</h2>
      <p>Our platform integrates with the following third-party services, each governed by their own privacy policies:</p>
      <ul>
        <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Ads</a></li>
        <li><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Meta Ads</a></li>
        <li><a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">OpenAI</a></li>
        <li><a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Formspree</a>, which receives the contact, waitlist and data deletion forms on this website and emails them to us.</li>
        <li><a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare</a>, which provides DNS, security and content delivery for adgrowai.com and processes visitors&apos; IP addresses and requests to do so.</li>
      </ul>
      <p className={styles.spaced}>We encourage you to review the privacy policies of these services.</p>

      <h2>13. Children&apos;s Privacy</h2>
      <p>AdgrowAI is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from children.</p>

      <h2>14. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy with a revised effective date. Continued use of our services after changes constitutes acceptance.</p>

      <h2>15. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, contact us at:</p>
      <p className={styles.spaced}><strong>AdgrowAI Limited</strong></p>
      <p>NZ Company No. 9418222 | NZBN 9429053564504</p>
      <p>Registered office: 117 Wiseley Road, West Harbour, Auckland 0618, New Zealand</p>
      <p>Email: <a href="mailto:admin@adgrowai.com">admin@adgrowai.com</a></p>
      <p>Website: <a href="https://www.adgrowai.com">www.adgrowai.com</a></p>

      <h2>16. Governing Law</h2>
      <p>This Privacy Policy is governed by the laws of New Zealand. Any disputes arising from this policy will be subject to the jurisdiction of the courts of New Zealand, without prejudice to the rights of users in other jurisdictions to bring claims under their local consumer protection laws.</p>
    </LegalPage>
  );
}
