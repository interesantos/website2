import { Product } from '@/types/products';

const products: Product[] = [
  // 7-Day Packs
  {
    id: '7-day-1.5L',
    name: '7-Day 18L Pack (1.5L x 12 Bottles)',
    description: 'Ideal for 7-day Koh Samui getaways, this pack delivers 12 1,5L bottles—perfect for solo travelers or couples exploring beaches, markets, or waterfalls.',
    price: 400,
    image: '7-days-1.webp',
    category: 'water',
    volume: 18,
    bottleSize: 1.5,
    durationDays: 7
  },
  {
    id: '7-day-0.5L',
    name: '7-Day 18L Pack (0.5L x 36 Bottles)',
    description: 'Great for 7-day vacations, these 0,5L bottles are compact and portable, keeping you hydrated during island tours or poolside lounging.',
    price: 400,
    image: '7-days-2.webp',
    category: 'water',
    volume: 18,
    bottleSize: 0.5,
    durationDays: 7
  },
  
  // 14-Day Packs
  {
    id: '14-day-1.5L',
    name: '14-Day 45L Pack (1.5L x 30 Bottles)',
    description: 'Perfect for 2-week stays, this 45L pack provides 30 1,5L bottles for families or groups enjoying extended vacations.',
    price: 600,
    image: '14-days-1.webp',
    category: 'water',
    volume: 45,
    bottleSize: 1.5,
    durationDays: 14
  },
  {
    id: '14-day-0.5L',
    name: '14-Day 45L Pack (0.5L x 90 Bottles)',
    description: 'Ideal for 2-week stays, these 0,5L bottles are convenient for families or groups with varying hydration needs.',
    price: 900,
    image: '14-days-2.webp',
    category: 'water',
    volume: 45,
    bottleSize: 0.5,
    durationDays: 14
  },
  
  // 30-Day Packs
  {
    id: '30-day-1.5L',
    name: '30-Day 90L Pack (1.5L x 60 Bottles)',
    description: 'For long-term stays, this 90L pack provides 60 1,5L bottles - perfect for extended vacations or digital nomads.',
    price: 1000,
    image: '30-days-1.webp',
    category: 'water',
    volume: 90,
    bottleSize: 1.5,
    durationDays: 30
  },
  {
    id: '30-day-0.5L',
    name: '30-Day 90L Pack (0.5L x 180 Bottles)',
    description: 'For long-term stays, these 0,5L bottles offer maximum flexibility for individuals or groups with varying needs.',
    price: 1600,
    image: '30-days-2.webp',
    category: 'water',
    volume: 90,
    bottleSize: 0.5,
    durationDays: 30
  },
  
  // Subscription Plans
  {
    id: 'sub-weekly-1.5L',
    name: 'Weekly 18L Delivery Subscription (1.5L x 12 Bottles)',
    description: 'Weekly delivery of 12 1,5L bottles - perfect for regular visitors or residents who prefer larger bottles.',
    price: 350,
    image: '7-days-1.webp',
    category: 'subscription',
    isSubscription: true,
    subscriptionFrequency: 'weekly',
    savings: 'Save 15%'
  },
  {
    id: 'sub-monthly-1.5L',
    name: 'Monthly 90L Delivery Subscription (1.5L x 60 Bottles)',
    description: 'Monthly delivery of 60 1,5L bottles - ideal for households or long-term residents.',
    price: 1500,
    image: '30-days-1.webp',
    category: 'subscription',
    isSubscription: true,
    subscriptionFrequency: 'monthly',
    savings: 'Save 25%'
  }
];

export async function getAllProducts(): Promise<Product[]> {
  return products.map(p => ({
    ...p,
    image: `/images/${p.image}`
  }));
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = products.find((p) =>
    generateSlug(p.name) === slug
  );
  return product ? {
    ...product,
    image: `/images/${product.image}`
  } : null;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}