import Header from '@/components/signin/Header';
import Footer from '@/components/signin/Footer';
import EmailRecovery from '@/components/forgot-password/EmailRecovery';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
            <EmailRecovery />
        </div>
      </main>
      <Footer />
    </div>
  );
}