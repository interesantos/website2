'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import ProductSchema from '@/components/seo/ProductSchema';
import SubscriptionDetails from '@/components/subscriptions/SubscriptionDetails';
import { SubscriptionProduct } from '@/types/products';

const subscriptionPlans: SubscriptionProduct[] = [
  {
    id: 'subscription-monthly-0.5L',
    name: 'Monthly 90L Delivery Subscription (0.5L x 180 Bottles)',
    description: 'For households & families: 90L of premium FDA-approved water delivered monthly to your Koh Samui home/villa',
    price: 800,
    savings: 'Save 20%',
    image: '/images/30-days-2.webp',
    monthlyVolumeLiters: 90,
    bottleSizeLiters: 0.5,
    frequency: 'Monthly',
    category: 'subscription',
    isSubscription: true,
    subscriptionFrequency: 'monthly',
    perDeliveryBottles: 180,
    perMonthBottles: 180,
    deliveryVolumeLiters: 90,
    bottleCount: '180 Bottles'
  },
  {
    id: 'subscription-monthly-1.5L',
    name: 'Monthly 90L Delivery Subscription (1.5L x 60 Bottles)',
    description: 'Households & families: 90L of high-quality bottled water delivered monthly to your Koh Samui residence/villa',
    price: 800,
    savings: 'Save 20%',
    image: '/images/30-days-1.webp',
    monthlyVolumeLiters: 90,
    bottleSizeLiters: 1.5,
    frequency: 'Monthly',
    category: 'subscription',
    isSubscription: true,
    subscriptionFrequency: 'monthly',
    perDeliveryBottles: 60,
    perMonthBottles: 60,
    deliveryVolumeLiters: 90,
    bottleCount: '60 Bottles'
  },
  {
    id: 'subscription-every-two-weeks-0.5L',
    name: 'Every Two Weeks 45L Delivery Subscription (0.5L x 90 Bottles)',
    description: 'Couples & small families: 45L of pure, safe bottled water delivered every two weeks to your Koh Samui location',
    price: 900,
    savings: 'Save 25%',
    image: '/images/14-days-2.webp',
    monthlyVolumeLiters: 90,
    bottleSizeLiters: 0.5,
    frequency: 'Every Two Weeks',
    category: 'subscription',
    isSubscription: true,
    subscriptionFrequency: 'bi-weekly',
    perDeliveryBottles: 90,
    perMonthBottles: 180,
    deliveryVolumeLiters: 45,
    bottleCount: '90 Bottles'
  },
  {
    id: 'subscription-every-two-weeks-1.5L',
    name: 'Every Two Weeks 45L Delivery Subscription (1.5L x 30 Bottles)',
    description: 'Couples & small households: 45L of premium quality water delivered bi-weekly to your Koh Samui accommodation',
    price: 900,
    savings: 'Save 25%',
    image: '/images/14-days-1.webp',
    monthlyVolumeLiters: 90,
    bottleSizeLiters: 1.5,
    frequency: 'Every Two Weeks',
    category: 'subscription',
    isSubscription: true,
    subscriptionFrequency: 'bi-weekly',
    perDeliveryBottles: 30,
    perMonthBottles: 60,
    deliveryVolumeLiters: 45,
    bottleCount: '30 Bottles'
  },
  {
    id: 'subscription-weekly-0.5L',
    name: 'Weekly 18L Delivery Subscription (0.5L x 36 Bottles)',
    description: 'Individuals: 18L of fresh, clean bottled water delivered weekly to your Koh Samui hotel/villa/apartment',
    price: 1100,
    savings: 'Save 30%',
    image: '/images/7-days-2.webp',
    monthlyVolumeLiters: 72,
    bottleSizeLiters: 0.5,
    frequency: 'Weekly',
    category: 'subscription',
    isSubscription: true,
    subscriptionFrequency: 'weekly',
    perDeliveryBottles: 36,
    perMonthBottles: 144,
    deliveryVolumeLiters: 18,
    bottleCount: '36 Bottles'
  },
  {
    id: 'subscription-weekly-1.5L',
    name: 'Weekly 18L Delivery Subscription (1.5L x 12 Bottles)',
    description: 'Single users: 18L of high-quality drinking water delivered weekly to your Koh Samui residence/vacation rental',
    price: 1100,
    savings: 'Save 30%',
    image: '/images/7-days-1.webp',
    monthlyVolumeLiters: 72,
    bottleSizeLiters: 1.5,
    frequency: 'Weekly',
    category: 'subscription',
    isSubscription: true,
    subscriptionFrequency: 'weekly',
    perDeliveryBottles: 12,
    perMonthBottles: 48,
    deliveryVolumeLiters: 18,
    bottleCount: '12 Bottles'
  }
];

export default function SubscriptionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const subscription = subscriptionPlans.find(plan => {
    const generatedSlug = plan.name.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/\(/g, '')
      .replace(/\)/g, '');
    return generatedSlug === decodeURIComponent(slug);
  });

  if (!subscription) return notFound();

  return (
    <>
      <ProductSchema product={{
        ...subscription,
        image: subscription.image.replace('/images/', ''),
        category: 'subscription' as const,
        isSubscription: true as const,
        subscriptionFrequency: subscription.subscriptionFrequency as 'weekly' | 'bi-weekly' | 'monthly'
      }} />
      <SubscriptionDetails subscription={subscription as SubscriptionProduct} />
    </>
  );
}