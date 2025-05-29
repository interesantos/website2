'use client';
import { SubscriptionProduct } from '@/types/products';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  subscriptions: SubscriptionProduct[];
  currentSubscriptionId: string;
}

export default function RelatedSubscriptions({ subscriptions, currentSubscriptionId }: Props) {
  const { addToCart } = useCart();
  const router = useRouter();
  const { lang } = useParams();
  const filteredSubscriptions = subscriptions.filter(s => s.id !== currentSubscriptionId).slice(0, 5);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'right' ? 300 : -300;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="mt-12 px-4 relative">
      <h2 className="text-2xl font-bold mb-6">Related Subscriptions</h2>
      <div className="relative">
        {showLeftButton && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}
        {showRightButton && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        )}
        <div className="overflow-x-auto pb-4 scrollbar-hide" ref={containerRef}>
          <div className="flex gap-4 md:gap-6 w-max">
            {filteredSubscriptions.map((subscription) => {
              const subscriptionRoute = `/${lang}/bottled-drinking-water-delivery-subscription/${subscription.name.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .replace(/\(/g, '')
                .replace(/\)/g, '')}`;

              return (
                <div key={subscription.id} className="w-72 md:w-80 flex-shrink-0 bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <Link href={subscriptionRoute} className="block mb-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <Image
                        src={subscription.image.startsWith('/') ? subscription.image : `/images/${subscription.image}`}
                        alt={subscription.name}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {subscription.savings}
                      </span>
                    </div>
                  </Link>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold line-clamp-2">
                      <Link href={subscriptionRoute} className="hover:text-blue-600 transition">
                        {subscription.name}
                      </Link>
                    </h3>
                    <p className="text-blue-600 text-xl font-bold">{subscription.price} THB / Month</p>
                    <p className="text-gray-700 line-clamp-2">{subscription.description}</p>
                    <button
                      onClick={() => {
                        addToCart(subscription);
                        router.push('/cart');
                      }}
                      className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}