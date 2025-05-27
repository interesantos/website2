'use client';

import { useState } from 'react';

export default function DeliveryAddress({ onAddressChange }: { onAddressChange: (address: string) => void }) {
  const [address, setAddress] = useState('');

  // Address changes handled directly in input onChange
  // No need for separate handler function

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">Delivery Address <span className="text-red-500">*</span></h2>
      <div className="space-y-4">
        <button 
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  setAddress(`Near ${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
                },
                (error) => {
                  console.error('Geolocation error:', error);
                  alert('Could not get your location. Please enter address manually.');
                }
              );
            } else {
              alert('Geolocation is not supported by your browser');
            }
          }}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700"
        >
          Use current location
        </button>
        <div className="text-center text-gray-500">or</div>
        <input
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            onAddressChange(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Tab' && !e.shiftKey && address.trim()) {
              e.preventDefault();
              const emailInput = document.getElementById('receipt-email');
              emailInput?.focus();
            }
          }}
          placeholder="Enter your delivery address"
          className={`w-full p-3 border rounded-md ${
            !address && 'border-red-500'
          }`}
        />
        {!address && address !== '' && (
          <p className="text-red-500 text-sm mt-1">
            Please enter a delivery address
          </p>
        )}
        <div className="h-48 bg-gray-100 rounded-md overflow-hidden">
          {/* Google Maps iframe - replace with your actual API integration */}
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=99.9297%2C9.4095%2C100.0659%2C9.6396&layer=mapnik&marker=9.5126%2C99.9984"
            className="border-0"
          ></iframe>
          <div className="text-center mt-2">
            <small>
              <a href="https://www.openstreetmap.org/?mlat=9.5126&mlon=99.9984#map=12/9.5126/99.9984" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline"
              >
                View Larger Map
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
