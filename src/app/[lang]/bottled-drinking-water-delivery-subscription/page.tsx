import SubscriptionPlans from '@/components/subscriptions/SubscriptionPlans';
import ProductSchema from '@/components/seo/ProductSchema';
import { SubscriptionProduct } from '@/types/products';
import Hero from '@/components/home/Hero';
import { use } from 'react';

interface PageProps {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default function SubscriptionsPage({ params, searchParams }: PageProps) {
  const { lang } = use(params);
  const search = searchParams ? use(searchParams) : undefined;
  const subscriptionProduct: SubscriptionProduct = {
    id: 'subscription-plans-overview',
    name: 'Subscription Plans',
    description: 'Premium water delivery subscriptions for Koh Samui residents and visitors',
    image: '30-days-1.webp',
    price: 800,
    category: 'subscription',
    isSubscription: true,
    subscriptionFrequency: 'monthly',
    savings: 'Save up to 30%',
    monthlyVolumeLiters: 60,
    bottleSizeLiters: 20,
    frequency: 'monthly',
    perDeliveryBottles: 3,
    perMonthBottles: 3,
    deliveryVolumeLiters: 60,
    bottleCount: '3 Bottles'
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
          <SubscriptionPlans params={{ lang }} />
        </div>
      </div>
    </main>
  );
}
