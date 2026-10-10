import AuthCard from '@/components/auth/AuthCard';
import SignInForm from '@/components/auth/SignInForm';

export const metadata = {
  title: 'Sign in',
};

export default function SignInPage() {
  return (
    <main>
      <AuthCard title="Welcome Back" subtitle="Sign in to continue to your account">
        <SignInForm />
      </AuthCard>
    </main>
  );
}
