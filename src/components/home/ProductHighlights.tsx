'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

interface ProductHighlightsProps {
  lang: string;
}

export default function ProductHighlights({ lang }: ProductHighlightsProps) {
  const { addToCart, setClickedItem } = useCart();
  const router = useRouter();
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Premium Bottled Water for Every Koh Samui Moment</h2>
        
        <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
          In a tropical climate, it's recommended to drink at least <strong>3 liters of water daily</strong>. High temperatures and humidity increase sweating, leading to faster dehydration. Proper hydration supports metabolism, regulates body temperature, and boosts energy. Carry a reusable bottle and sip water throughout the day.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Card 1 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="h-48 bg-white mb-4 rounded-lg overflow-hidden">
              <Link href={`/${lang}/bottled-drinking-water-delivery/${'7-Day 18L Pack (1.5L x 12 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
                <Image
                  src="/images/7-days-1.webp"
                  alt="1.5L 7-Day Pack"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
            <Link href={`/${lang}/bottled-drinking-water-delivery/${'7-Day 18L Pack (1.5L x 12 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition">7-Day 18L Pack (1.5L x 12 Bottles)</h3>
            </Link>
            <p className="text-blue-600 text-xl font-bold mb-4">400 THB</p>
            <p className="text-gray-700 mb-4 line-clamp-6">
              Ideal for 7-day Koh Samui getaways, this pack delivers 12 1,5L bottles—perfect for solo travelers or couples exploring beaches, markets, or waterfalls. TFDA-approved and lightweight, it's your go-to for safe hydration. Delivered to your hotel or Airbnb in 24–48 hours.
            </p>
            <button 
              className="w-full px-6 py-3 rounded-md cursor-pointer font-semibold bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
              onClick={() => {
                addToCart({
                  id: 'product-1.5L-7day',
                  name: '7-Day 18L Pack (1.5L x 12 Bottles)',
                  price: 400,
                  image: '/images/7-days-1.webp' // Already correct
                });
                setClickedItem('product-1.5L-7day');
                router.push('/cart');
              }}
            >
              Add to Cart
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="h-48 bg-white mb-4 rounded-lg overflow-hidden">
              <Link href={`/${lang}/bottled-drinking-water-delivery/${'7-Day 18L Pack (0.5L x 36 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
                <Image
                  src="/images/7-days-2.webp"
                  alt="0.5L 7-Day Pack"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
            <Link href={`/${lang}/bottled-drinking-water-delivery/${'7-Day 18L Pack (0.5L x 36 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition">7-Day 18L Pack (0.5L x 36 Bottles)</h3>
            </Link>
            <p className="text-blue-600 text-xl font-bold mb-4">400 THB</p>
            <p className="text-gray-700 mb-4 line-clamp-6">
              Great for 7-day vacations, these 0,5L bottles are compact and portable, keeping you hydrated during island tours or poolside lounging. Sourced from TFDA-licensed suppliers, they ensure safety and quality. Get them delivered to your accommodation with ease.
            </p>
            <button 
              className="w-full px-6 py-3 rounded-md cursor-pointer font-semibold bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
              onClick={() => {
                addToCart({
                  id: 'product-0.5L-7day',
                  name: '7-Day 18L Pack (0.5L x 36 Bottles)',
                  price: 400,
                  image: '/images/7-days-2.webp' // Already correct
                });
                setClickedItem('product-0.5L-7day');
                router.push('/cart');
              }}
            >
              Add to Cart
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="h-48 bg-white mb-4 rounded-lg overflow-hidden">
              <Link href={`/${lang}/bottled-drinking-water-delivery/${'14-Day 45L Pack (1.5L x 30 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
                <Image
                  src="/images/14-days-1.webp"
                  alt="1.5L 14-Day Pack"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
            <Link href={`/${lang}/bottled-drinking-water-delivery/${'14-Day 45L Pack (1.5L x 30 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition">14-Day 45L Pack (1.5L x 30 Bottles)</h3>
            </Link>
            <p className="text-blue-600 text-xl font-bold mb-4">600 THB</p>
            <p className="text-gray-700 mb-4 line-clamp-6">
              Ideal for 14-day Koh Samui getaways, this pack delivers 30 1,5L bottles—perfect for solo travelers or couples exploring beaches, markets, or waterfalls. TFDA-approved and lightweight, it's your go-to for safe hydration. Delivered to your hotel or Airbnb in 24–48 hours.
            </p>
            <button 
              className="w-full px-6 py-3 rounded-md cursor-pointer font-semibold bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
              onClick={() => {
                addToCart({
                  id: 'product-1.5L-14day',
                  name: '14-Day 45L Pack (1.5L x 30 Bottles)',
                  price: 600,
                  image: '/images/14-days-1.webp' // Already correct
                });
                setClickedItem('product-1.5L-14day');
                router.push('/cart');
              }}
            >
              Add to Cart
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="h-48 bg-white mb-4 rounded-lg overflow-hidden">
              <Link href={`/${lang}/bottled-drinking-water-delivery/${'14-Day 45L Pack (0.5L x 90 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
                <Image
                  src="/images/14-days-2.webp"
                  alt="0.5L 14-Day Pack"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
            <Link href={`/${lang}/bottled-drinking-water-delivery/${'14-Day 45L Pack (0.5L x 90 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition">14-Day 45L Pack (0.5L x 90 Bottles)</h3>
            </Link>
            <p className="text-blue-600 text-xl font-bold mb-4">600 THB</p>
            <p className="text-gray-700 mb-4 line-clamp-6">
              Great for 14-day vacations, these 0,5L bottles are compact and portable, keeping you hydrated during island tours or poolside lounging. Sourced from TFDA-licensed suppliers, they ensure safety and quality. Get them delivered to your accommodation with ease.
            </p>
            <button 
              className="w-full px-6 py-3 rounded-md cursor-pointer font-semibold bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
              onClick={() => {
                addToCart({
                  id: 'product-0.5L-14day',
                  name: '14-Day 45L Pack (0.5L x 90 Bottles)',
                  price: 600,
                  image: '/images/14-days-2.webp' // Already correct
                });
                setClickedItem('product-0.5L-14day');
                router.push('/cart');
              }}
            >
              Add to Cart
            </button>
          </div>

          {/* Card 5 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="h-48 bg-white mb-4 rounded-lg overflow-hidden">
              <Link href={`/${lang}/bottled-drinking-water-delivery/${'30-Day 90L Pack (1.5L x 60 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
                <Image
                  src="/images/30-days-1.webp"
                  alt="Expat Subscription 1.5L"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
            <Link href={`/${lang}/bottled-drinking-water-delivery/${'30-Day 90L Pack (1.5L x 60 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition">30-Day 90L Pack (1.5L x 60 Bottles)</h3>
            </Link>
            <p className="text-blue-600 text-xl font-bold mb-4">1000 THB</p>
            <p className="text-gray-700 mb-4 line-clamp-6">
              Perfect for long-term stays, this monthly pack delivers 60 1,5L bottles—ideal for expats or long-term visitors. TFDA-approved and delivered on a recurring schedule, it ensures you never run out of safe hydration. Save 25% compared to one-time orders.
            </p>
            <button 
              className="w-full px-6 py-3 rounded-md cursor-pointer font-semibold bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
              onClick={() => {
                addToCart({
                  id: 'product-1.5L-30day',
                  name: '30-Day 90L Pack (1.5L x 60 Bottles)',
                  price: 1000,
                  image: '/images/30-days-1.webp' // Already correct
                });
                setClickedItem('product-1.5L-30day');
                router.push('/cart');
              }}
            >
              Add to Cart
            </button>
          </div>

          {/* Card 6 */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="h-48 bg-white mb-4 rounded-lg overflow-hidden">
              <Link href={`/${lang}/bottled-drinking-water-delivery/${'30-Day 90L Pack (0.5L x 180 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
                <Image
                  src="/images/30-days-2.webp"
                  alt="0.5L 30-Day Pack"
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
            <Link href={`/${lang}/bottled-drinking-water-delivery/${'30-Day 90L Pack (0.5L x 180 Bottles)'.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')}`}>
              <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition">30-Day 90L Pack (0.5L x 180 Bottles)</h3>
            </Link>
            <p className="text-blue-600 text-xl font-bold mb-4">1000 THB</p>
            <p className="text-gray-700 mb-4 line-clamp-6">
              Compact and convenient for long-term stays, this monthly pack delivers 180 0,5L bottles—perfect for expats or long-term visitors who prefer smaller bottles. TFDA-approved and delivered on a recurring schedule, ensuring you always have portable hydration.
            </p>
            <button 
              className="w-full px-6 py-3 rounded-md cursor-pointer font-semibold bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
              onClick={() => {
                addToCart({
                  id: 'product-0.5L-30day',
                  name: '30-Day 90L Pack (0.5L x 180 Bottles)',
                  price: 1000,
                  image: '/images/30-days-2.webp' // Already correct
                });
                setClickedItem('product-0.5L-30day');
                router.push('/cart');
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
