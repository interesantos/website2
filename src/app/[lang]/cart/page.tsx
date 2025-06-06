'use client';

import { use } from 'react';

import { useState, useEffect } from 'react';
import PaymentModal from '@/components/cart/PaymentModal';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import DeliveryAddress from '@/components/cart/DeliveryAddress';
import ReceiptEmail from '@/components/cart/ReceiptEmail';
import CartSchema from '@/components/seo/CartSchema';

export default function CartPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [receiptEmail, setReceiptEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [allFieldsValid, setAllFieldsValid] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handlePaymentSubmit = () => {
    setShowPaymentModal(false);
    // Process payment logic would go here
    alert('Payment Gate is not responding, try later');
  };

  useEffect(() => {
    const isValid = Boolean(deliveryAddress.trim()) && 
                   Boolean(receiptEmail.trim()) && 
                   isEmailValid;
    setAllFieldsValid(isValid);
    console.log('Validation updated:', {
      deliveryAddress,
      receiptEmail, 
      isEmailValid,
      isValid
    });
  }, [deliveryAddress, receiptEmail, isEmailValid]);

  return (
    <div className="container mx-auto px-4 py-8">
      <CartSchema items={cartItems} total={cartTotal} />
      <h1 className="text-3xl mb-8">Your Water Order</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link 
            href={`/${lang}/bottled-drinking-water-delivery`}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="divide-y divide-gray-200">
                {[...cartItems].sort((a, b) => b.isSubscription ? 1 : -1).map((item) => (
                  <div key={item.id} className="p-2 flex justify-between items-center">
                    <div className="flex items-center space-x-4 w-full max-w-[calc(100%-120px)]">
                      <div className="w-16 h-16 sm:w-12 sm:h-12 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || '/images/placeholder-product.jpg'}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="min-w-[80px] sm:min-w-[200px]">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-lg font-medium">
                            {item.name}
                          </h3>
                          {item.isSubscription && (
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded self-start">
                              Subscription
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600">
                          {item.price} THB
                          {item.isSubscription && ' / month'}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-y-4 gap-x-4 mt-2 justify-center">
                      <div className="flex items-center border rounded-md">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <DeliveryAddress onAddressChange={setDeliveryAddress} />
            <ReceiptEmail 
              onEmailChange={setReceiptEmail}
              onValidationChange={setIsEmailValid}
            />
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.some(item => item.isSubscription) && (
                  <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-800">
                    Your subscription will be automatically renewed each month
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{cartTotal} THB</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>{cartTotal} THB</span>
                </div>
              </div>
              <button 
                onClick={() => setShowPaymentModal(true)}
                className={`w-full py-3 px-4 rounded-md mt-6 transition-colors duration-200 ${
                  allFieldsValid 
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
                }`}
                disabled={!allFieldsValid}
              >
                Proceed to Payment
              </button>
              {showPaymentModal && (
                <PaymentModal
                  onClose={() => setShowPaymentModal(false)}
                  onPaymentSubmit={handlePaymentSubmit}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
