import Header from '@/components/signin/Header';
import SignInOptions from '@/components/signin/SignInOptions';
import Footer from '@/components/signin/Footer';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <SignInOptions />
        </div>
      </main>
      <Footer />
    </div>
  );
}