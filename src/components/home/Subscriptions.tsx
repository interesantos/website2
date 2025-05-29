'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Subscriptions() {
  const { cartItems, addToCart, setClickedItem } = useCart();
  const router = useRouter();

  const plans = [
    // Monthly Subscriptions (90L total)
    {
      id: 'subscription-monthly-0.5L',
      name: 'Monthly 90L Delivery Subscription (0.5L x 180 Bottles)',
      description: 'For households & families: 90L of premium TFDA-approved water delivered monthly to your Koh Samui home/villa',
      price: 800,
      savings: 'Save 20%',
      image: '/images/30-days-2.webp'
    },
    {
      id: 'subscription-monthly-1.5L',
      name: 'Monthly 90L Delivery Subscription (1.5L x 60 Bottles)',
      description: 'Households & families: 90L of high-quality bottled water delivered monthly to your Koh Samui residence/villa',
      price: 800,
      savings: 'Save 20%',
      image: '/images/30-days-1.webp'
    },
    // Every Two Weeks Subscriptions (45L x 2 = 90L monthly)
    {
      id: 'subscription-every-two-weeks-0.5L',
      name: 'Every Two Weeks 45L Delivery Subscription (0.5L x 90 Bottles)',
      description: 'Couples & small families: 45L of pure, safe bottled water delivered every two weeks to your Koh Samui location',
      price: 900,
      savings: 'Save 25%',
      image: '/images/14-days-2.webp'
    },
    {
      id: 'subscription-every-two-weeks-1.5L',
      name: 'Every Two Weeks 45L Delivery Subscription (1.5L x 30 Bottles)',
      description: 'Couples & small households: 45L of premium quality water delivered bi-weekly to your Koh Samui accommodation',
      price: 900,
      savings: 'Save 25%',
      image: '/images/14-days-1.webp'
    },
    // Weekly Subscriptions (18L x 4 = 72L monthly)
    {
      id: 'subscription-weekly-0.5L',
      name: 'Weekly 18L Delivery Subscription (0.5L x 36 Bottles)',
      description: 'Individuals: 18L of fresh, clean bottled water delivered weekly to your Koh Samui hotel/villa/apartment',
      price: 1100,
      savings: 'Save 30%',
      image: '/images/7-days-2.webp'
    },
    {
      id: 'subscription-weekly-1.5L',
      name: 'Weekly 18L Delivery Subscription (1.5L x 12 Bottles)',
      description: 'Single users: 18L of high-quality drinking water delivered weekly to your Koh Samui residence/vacation rental',
      price: 1100,
      savings: 'Save 30%',
      image: '/images/7-days-1.webp'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Flexible Subscriptions for Koh Samui Living</h2>
        
        <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
Enjoy the convenience of regular deliveries and save up to 30% with our premium water subscriptions.
        All plans include free delivery to your Koh Samui location and <strong>can be paused or canceled anytime</strong>.
        We partner with top brands to deliver unmatched quality, backed by fast 24–48 hour delivery.        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="relative h-48 bg-white mb-4 rounded-lg overflow-hidden">
                <Link href={`/bottled-drinking-water-delivery-subscription/${plan.name.toLowerCase()
                  .replace(/[^\w\s-]/g, '')
                  .replace(/\s+/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/\(/g, '')
                  .replace(/\)/g, '')}`}>
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
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
                <Link href={`/bottled-drinking-water-delivery-subscription/${plan.name.toLowerCase()
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
              <p className="text-gray-700 mb-4 line-clamp-6">{plan.description}</p>
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
                className={`w-full px-6 py-3 rounded-md cursor-pointer font-semibold whitespace-nowrap ${
                  cartItems.some(item => item.id === plan.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
