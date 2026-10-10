import AuthCard from '@/components/auth/AuthCard';
import SignUpForm from '@/components/auth/SignUpForm';

export const metadata = {
  title: 'Create your account',
};

export default function SignUpPage() {
  return (
    <main>
      <AuthCard title="Create Your Account" subtitle="Start growing your business with AI">
        <SignUpForm />
      </AuthCard>
    </main>
  );
}
