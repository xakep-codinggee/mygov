"use client"

import Link from 'next/link';
import { useState } from 'react';

type FormInputProps = {
  id: string;
  label: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  forgotLink?: {
    text: string;
    href: string;
  };
  showToggle?: boolean;
};

export default function FormInput({ id, label, type, value, onChange, forgotLink, showToggle = false }: FormInputProps) {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="block text-md font-medium text-black font-bolder">
          {label}
        </label>
      </div>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={inputType}
          value={value}
          onChange={onChange}
          required
          className="w-full px-3 py-2 border border-black shadow-sm focus:outline-none focus:ring-blue-500 focus:border-black-500"
        />
        {showToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="underline absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-600"
          >
            {inputType === 'password' ? 'Show' : 'Hide'}
          </button>
        )}
      </div>
      {forgotLink && (
          <Link href={forgotLink.href} className="text-sm text-[#172f50] underline hover:bg-[#172f50] hover:text-white">
            {forgotLink.text}
          </Link>
        )}
    </div>
  );
}