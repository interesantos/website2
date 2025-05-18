'use client';

import ProductHighlights from '@/components/home/ProductHighlights';
import Hero from '@/components/home/Hero';
import ShopSchema from '@/components/seo/ShopSchema';
import { WaterProduct } from '@/types/products';
import { useParams } from 'next/navigation';

const products: WaterProduct[] = [
  {
    id: 'product-1.5L-7day',
    name: '7-Day 18L Pack (1.5L x 12 Bottles)',
    description: 'Ideal for 7-day Koh Samui getaways, this pack delivers 12 1,5L bottles',
    price: 400,
    image: '/images/7-days-1.webp',
    category: 'water' as const,
    volume: 18,
    bottleSize: 1.5,
    durationDays: 7
  },
  {
    id: 'product-0.5L-7day',
    name: '7-Day 18L Pack (0.5L x 36 Bottles)',
    description: 'Great for 7-day vacations, these 0,5L bottles are compact and portable',
    price: 400,
    image: '/images/7-days-2.webp',
    category: 'water' as const,
    volume: 18,
    bottleSize: 0.5,
    durationDays: 7
  },
  {
    id: 'product-1.5L-14day',
    name: '14-Day 45L Pack (1.5L x 30 Bottles)',
    description: 'Ideal for 14-day Koh Samui getaways, this pack delivers 30 1,5L bottles',
    price: 600,
    image: '/images/14-days-1.webp',
    category: 'water' as const,
    volume: 45,
    bottleSize: 1.5,
    durationDays: 14
  },
  {
    id: 'product-0.5L-14day',
    name: '14-Day 45L Pack (0.5L x 90 Bottles)',
    description: 'Great for 14-day vacations, these 0,5L bottles are compact and portable',
    price: 600,
    image: '/images/14-days-2.webp',
    category: 'water' as const,
    volume: 45,
    bottleSize: 0.5,
    durationDays: 14
  },
  {
    id: 'product-1.5L-30day',
    name: '30-Day 90L Pack (1.5L x 60 Bottles)',
    description: 'Perfect for long-term stays, this monthly pack delivers 60 1,5L bottles',
    price: 1000,
    image: '/images/30-days-1.webp',
    category: 'water' as const,
    volume: 90,
    bottleSize: 1.5,
    durationDays: 30
  },
  {
    id: 'product-0.5L-30day',
    name: '30-Day 90L Pack (0.5L x 180 Bottles)',
    description: 'Compact and convenient for long-term stays, this monthly pack delivers 180 0,5L bottles',
    price: 1000,
    image: '/images/30-days-2.webp',
    category: 'water' as const,
    volume: 90,
    bottleSize: 0.5,
    durationDays: 30
  }
];

export default function ShopPage() {
  const { lang } = useParams();
  
  return (
    <main>
      <ShopSchema products={products} />
      <Hero
        headline="Shop Our Water Selection"
        subheadline="Choose from our range of FDA-approved bottled water options"
        showButtons={false}
      />
      <ProductHighlights lang={lang as string} />
    </main>
  );
}
