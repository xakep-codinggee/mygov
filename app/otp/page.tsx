import Header from '@/components/signin/Header';
import Footer from '@/components/signin/Footer';
import OtpForm from '@/components/otp/OtpForm';

export default function OtpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
            <OtpForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}