'use client';
import { SubscriptionProduct } from '@/types/products';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import RelatedProducts from '../products/RelatedProducts';
import { useEffect, useState } from 'react';

interface Props {
  subscription: SubscriptionProduct;
}

export default function SubscriptionDetails({ subscription }: Props) {
  const { addToCart } = useCart();
  const [relatedSubscriptions, setRelatedSubscriptions] = useState<SubscriptionProduct[]>([]);

  useEffect(() => {
    const subscriptionPlans: SubscriptionProduct[] = [
      {
        id: 'subscription-monthly-0.5L',
        name: 'Monthly 90L Delivery Subscription (0.5L x 180 Bottles)',
        description: 'Get 180 bottles of 0.5L delivered monthly',
        price: 800,
        image: '/images/30-days-2.webp',
        category: 'subscription',
        isSubscription: true,
        subscriptionFrequency: 'monthly',
        savings: 'Save 10%',
        monthlyVolumeLiters: 90,
        bottleSizeLiters: 0.5,
        frequency: 'Monthly',
        perDeliveryBottles: 180,
        perMonthBottles: 180,
        deliveryVolumeLiters: 90
      },
      {
        id: 'subscription-monthly-1.5L',
        name: 'Monthly 90L Delivery Subscription (1.5L x 60 Bottles)',
        description: 'Get 60 bottles of 1.5L delivered monthly',
        price: 800,
        image: '/images/30-days-1.webp',
        category: 'subscription',
        isSubscription: true,
        subscriptionFrequency: 'monthly',
        savings: 'Save 10%',
        monthlyVolumeLiters: 90,
        bottleSizeLiters: 1.5,
        frequency: 'Monthly',
        perDeliveryBottles: 60,
        perMonthBottles: 60,
        deliveryVolumeLiters: 90
      },
      {
        id: 'subscription-every-two-weeks-0.5L',
        name: 'Every Two Weeks 45L Delivery Subscription (0.5L x 90 Bottles)',
        description: 'Get 90 bottles of 0.5L delivered every two weeks',
        price: 900,
        image: '/images/14-days-2.webp',
        category: 'subscription',
        isSubscription: true,
        subscriptionFrequency: 'bi-weekly',
        savings: 'Save 5%',
        monthlyVolumeLiters: 90,
        bottleSizeLiters: 0.5,
        frequency: 'Every Two Weeks',
        perDeliveryBottles: 90,
        perMonthBottles: 180,
        deliveryVolumeLiters: 45
      },
      {
        id: 'subscription-every-two-weeks-1.5L',
        name: 'Every Two Weeks 45L Delivery Subscription (1.5L x 30 Bottles)',
        description: 'Get 30 bottles of 1.5L delivered every two weeks',
        price: 900,
        image: '/images/14-days-1.webp',
        category: 'subscription',
        isSubscription: true,
        subscriptionFrequency: 'bi-weekly',
        savings: 'Save 5%',
        monthlyVolumeLiters: 90,
        bottleSizeLiters: 1.5,
        frequency: 'Every Two Weeks',
        perDeliveryBottles: 30,
        perMonthBottles: 60,
        deliveryVolumeLiters: 45
      },
      {
        id: 'subscription-weekly-0.5L',
        name: 'Weekly 18L Delivery Subscription (0.5L x 36 Bottles)',
        description: 'Get 36 bottles of 0.5L delivered weekly',
        price: 1100,
        image: '/images/7-days-2.webp',
        category: 'subscription',
        isSubscription: true,
        subscriptionFrequency: 'weekly',
        savings: 'Save 2%',
        monthlyVolumeLiters: 72,
        bottleSizeLiters: 0.5,
        frequency: 'Weekly',
        perDeliveryBottles: 36,
        perMonthBottles: 144,
        deliveryVolumeLiters: 18
      },
      {
        id: 'subscription-weekly-1.5L',
        name: 'Weekly 18L Delivery Subscription (1.5L x 12 Bottles)',
        description: 'Get 12 bottles of 1.5L delivered weekly',
        price: 1100,
        image: '/images/7-days-1.webp',
        category: 'subscription',
        isSubscription: true,
        subscriptionFrequency: 'weekly',
        savings: 'Save 2%',
        monthlyVolumeLiters: 72,
        bottleSizeLiters: 1.5,
        frequency: 'Weekly',
        perDeliveryBottles: 12,
        perMonthBottles: 48,
        deliveryVolumeLiters: 18
      }
    ];

    setRelatedSubscriptions(
      subscriptionPlans
        .filter(p => p.id !== subscription.id)
        .slice(0, 5)
    );
  }, [subscription.id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="grid md:grid-cols-[60%_40%] gap-8 p-6">
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <div className="absolute inset-0 z-10">
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xl font-bold px-3 py-1 rounded-full">
                  {subscription.savings}
                </div>
              </div>
              <Image
                src={subscription.image.startsWith('/') ? subscription.image : `/images/${subscription.image}`}
                alt={subscription.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <div className="space-y-8 p-4">
            <div className="border-b pb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{subscription.name}</h1>
              <p className="text-blue-600 text-3xl font-bold mb-4">{subscription.price} THB / Month</p>
              <p className="text-gray-700 text-lg leading-relaxed">{subscription.description}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Frequency</p>
                  <p className="font-medium">{subscription.frequency}</p>
                </div>
                <div>
                  <p className="text-gray-600">Bottle Size</p>
                  <p className="font-medium">{subscription.bottleSizeLiters} L</p>
                </div>
                <div>
                  <p className="text-gray-600">Delivery Volume</p>
                  <p className="font-medium">{subscription.deliveryVolumeLiters} L</p>
                </div>
                <div>
                  <p className="text-gray-600">Delivery Amount</p>
                  <p className="font-medium">{subscription.perDeliveryBottles} Bottles</p>
                </div>
                <div>
                  <p className="text-gray-600">Monthly Volume</p>
                  <p className="font-medium">{subscription.monthlyVolumeLiters} L</p>
                </div>
                <div>
                  <p className="text-gray-600">Monthly Amount</p>
                  <p className="font-medium">{subscription.perMonthBottles} Bottles</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => addToCart(subscription)}
                className="w-full px-6 py-4 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 text-lg"
              >
                Add to Cart
              </button>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free delivery in Samui area</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedSubscriptions.length > 0 && (
        <RelatedProducts 
          products={relatedSubscriptions}
          currentProductId={subscription.id}
        />
      )}
    </div>
  );
}