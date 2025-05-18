'use client';

import { useState } from 'react';

export default function ReceiptEmail({ 
  onEmailChange,
  onValidationChange
}: {
  onEmailChange: (email: string) => void,
  onValidationChange: (isValid: boolean) => void
}) {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (value: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valid = re.test(value);
    setIsValid(valid);
    onEmailChange(value);
    onValidationChange(valid);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Receipt Email <span className="text-red-500">*</span></h2>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          id="receipt-email"
          placeholder="Enter email for receipt"
          className={`w-full p-3 border rounded-md ${
            (!email || !isValid) ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {!isValid && email && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
        )}
      </div>
    </div>
  );
}
