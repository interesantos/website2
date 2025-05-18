'use client';

import SubscriptionPlans from '@/components/subscriptions/SubscriptionPlans';
import ProductSchema from '@/components/seo/ProductSchema';
import { SubscriptionProduct } from '@/types/products';
import Hero from '@/components/home/Hero';

export default function SubscriptionsPage({ params }: { params: { lang: string } }) {
  const subscriptionProduct: SubscriptionProduct = {
    id: 'subscription-plans-overview',
    name: 'Subscription Plans',
    description: 'Premium water delivery subscriptions for Koh Samui residents and visitors',
    image: '30-days-1.webp',
    price: 800,
    category: 'subscription',
    isSubscription: true,
    subscriptionFrequency: 'monthly',
    savings: 'Save up to 30%'
  } as const;

  return (
    <main>
      <ProductSchema product={subscriptionProduct} />
      <Hero
        headline="Water Delivery Subscriptions"
        subheadline="Convenient recurring deliveries with savings up to 30%"
        showButtons={false}
      />
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <SubscriptionPlans params={Promise.resolve(params)} />
        </div>
      </div>
    </main>
  );
}
