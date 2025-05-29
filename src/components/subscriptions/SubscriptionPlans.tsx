'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

interface SubscriptionPlansProps {
  params: { lang: string };
}

export default function SubscriptionPlans({ params }: SubscriptionPlansProps) {
  const { lang } = params;
  const { addToCart, setClickedItem } = useCart();
  const router = useRouter();

  const plans = [
    // Monthly Subscriptions (90L total)
    {
      id: 'subscription-monthly-0.5L',
      name: 'Monthly 90L Delivery Subscription (0.5L x 180 Bottles)',
      description: 'For households & families: 90L of premium TFDA-approved water delivered monthly to your Koh Samui home/villa',
      price: 800,
      savings: 'Save 20%',
      image: '/images/30-days-2.webp',
      bottleCount: '180 Bottles'
    },
    {
      id: 'subscription-monthly-1.5L',
      name: 'Monthly 90L Delivery Subscription (1.5L x 60 Bottles)',
      description: 'Households & families: 90L of high-quality bottled water delivered monthly to your Koh Samui residence/villa',
      price: 800,
      savings: 'Save 20%',
      image: '/images/30-days-1.webp',
      bottleCount: '60 Bottles'
    },
    // Every Two Weeks Subscriptions (45L x 2 = 90L monthly)
    {
      id: 'subscription-every-two-weeks-0.5L',
      name: 'Every Two Weeks 45L Delivery Subscription (0.5L x 90 Bottles)',
      description: 'Couples & small families: 45L of pure, safe bottled water delivered every two weeks to your Koh Samui location',
      price: 900,
      savings: 'Save 25%',
      image: '/images/14-days-2.webp',
      bottleCount: '90 Bottles'
    },
    {
      id: 'subscription-every-two-weeks-1.5L',
      name: 'Every Two Weeks 45L Delivery Subscription (1.5L x 30 Bottles)',
      description: 'Couples & small households: 45L of premium quality water delivered bi-weekly to your Koh Samui accommodation',
      price: 900,
      savings: 'Save 25%',
      image: '/images/14-days-1.webp',
      bottleCount: '30 Bottles'
    },
    // Weekly Subscriptions (18L x 4 = 72L monthly)
    {
      id: 'subscription-weekly-0.5L',
      name: 'Weekly 18L Delivery Subscription (0.5L x 36 Bottles)',
      description: 'Individuals: 18L of fresh, clean bottled water delivered weekly to your Koh Samui hotel/villa/apartment',
      price: 1100,
      savings: 'Save 30%',
      image: '/images/7-days-2.webp',
      bottleCount: '36 Bottles'
    },
    {
      id: 'subscription-weekly-1.5L',
      name: 'Weekly 18L Delivery Subscription (1.5L x 12 Bottles)',
      description: 'Single users: 18L of high-quality drinking water delivered weekly to your Koh Samui residence/vacation rental',
      price: 1100,
      savings: 'Save 30%',
      image: '/images/7-days-1.webp',
      bottleCount: '12 Bottles'
    }
  ];

  return (
    <div>
      <h2 className="text-3xl text-center mb-12">Choose Your Subscription Plan</h2>
      <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
        Enjoy the convenience of regular deliveries and save up to 30% with our premium water subscriptions.
        All plans include free delivery to your Koh Samui location and can be paused or canceled anytime.
        We partner with top brands to deliver unmatched quality, backed by fast 24–48 hour delivery.
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition py-4">
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              <Link
                href={`/[lang]/bottled-drinking-water-delivery-subscription/${plan.name.toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/\(/g, '')
                  .replace(/\)/g, '')}`}
                as={`/${lang}/bottled-drinking-water-delivery-subscription/${plan.name.toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/\(/g, '')
                  .replace(/\)/g, '')}`}
              >
                <Image
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  priority
                />
              </Link>
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xl font-bold px-3 py-1 rounded-full">
                {plan.savings}
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              <Link
                href={`/[lang]/bottled-drinking-water-delivery-subscription/${plan.name.toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/\(/g, '')
                  .replace(/\)/g, '')}`}
                as={`/${lang}/bottled-drinking-water-delivery-subscription/${plan.name.toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/\(/g, '')
                  .replace(/\)/g, '')}`}
                className="hover:text-blue-600 transition"
              >
                {plan.name}
              </Link>
            </h3>
            <p className="text-blue-600 text-xl font-bold mb-4">{plan.price} THB / Month</p>
            <p className="text-gray-700 mb-4 line-clamp-4">{plan.description}</p>
            <button
              onClick={() => {
                addToCart({
                  id: plan.id,
                  name: plan.name,
                  price: plan.price,
                  image: plan.image,
                  isSubscription: true,
                  subscriptionFrequency: plan.id.includes('weekly') ? 'weekly' : 'monthly'
                });
                setClickedItem(plan.id);
                router.push('/cart');
              }}
              className="w-full py-2 px-4 rounded transition font-semibold cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
