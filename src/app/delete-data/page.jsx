import LegalPage from '@/components/legal/LegalPage';
import DeletionForm from '@/components/legal/DeletionForm';
import styles from '@/components/legal/LegalPage.module.css';

// Wording carried over from the previous site's /delete-data page
// (adgrowai-website main, src/components/Compliance/DeleteData.js).
// /data-deletion redirects here (next.config.mjs).

export const metadata = {
  title: 'Data Deletion Request',
  description: 'Request deletion of the personal data associated with your Facebook login to the AdgrowAI app.',
};

export default function DeleteDataPage() {
  return (
    <LegalPage title="Data Deletion Request" dates={['Requests are completed within 30 days']}>
      <p>This page lets you request deletion of the personal data associated with your Facebook login to the AdgrowAI app, in compliance with Facebook Platform Policy.</p>

      <h2>Your App-Scoped User ID</h2>
      <p>Your App-Scoped User ID is the unique identifier Facebook provides to our app. This ID does not reveal your identity but allows us to locate and delete your data.</p>

      <DeletionForm />

      <h2>Facebook data that will be deleted</h2>
      <ul>
        <li><strong>Facebook profile data:</strong> name, email and profile picture obtained through Facebook Login.</li>
        <li><strong>App-Scoped User ID:</strong> your unique identifier provided by Facebook for this app.</li>
        <li><strong>Facebook page access:</strong> any connected Facebook business pages or advertising accounts.</li>
        <li><strong>Platform usage data:</strong> how you&apos;ve used Facebook features within our app.</li>
      </ul>

      <div className={styles.callout}>
        <p><strong>What happens next.</strong> We delete your data within 30 days and email you at the address you give us when it&apos;s done. Questions? Email <a href="mailto:admin@adgrowai.com">admin@adgrowai.com</a> and quote your reference.</p>
      </div>
    </LegalPage>
  );
}
