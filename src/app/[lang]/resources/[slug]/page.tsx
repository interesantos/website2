import { notFound } from 'next/navigation';
import Image from 'next/image';
import ArticleSchema from '@/components/seo/ArticleSchema';

const posts = [
  {
    id: '1',
    title: "Refreshment for Your Island Adventures",
    content: `
      <p>Make your 7–14 day Koh Samui trip unforgettable with our 1,5L bottles. Perfect for hiking, beach days, or temple visits, these FDA-approved bottles keep you hydrated on the go.</p>
      <p>Order a 7-day pack and have it delivered to your hotel or Airbnb in just 24–48 hours, so you can explore without worry.</p>
    `,
    date: "2025-05-15",
    image: "/images/happy_tourist-min.webp",
    slug: "refreshment-for-your-island-adventures"
  },
  {
    id: '2',
    title: "Pure Water for Your Vacation Home",
    content: `
      <p>Staying in a Koh Samui villa for a week or two? Our 1,5L bottles provide ample safe water for drinking, cooking, or entertaining.</p>
      <p>Delivered directly to your door, they save you time and effort, letting you focus on relaxing in paradise with family or friends.</p>
    `,
    date: "2025-05-15",
    image: "/images/smiling_couple-min.webp",
    slug: "pure-water-for-your-vacation-home"
  },
  {
    id: '3',
    title: "Stress-Free Subscriptions for Expats",
    content: `
      <p>Living in Koh Samui? Our subscriptions deliver 90L of premium water monthly, tailored to your expat lifestyle.</p>
      <p>Save up to 25% and enjoy the convenience of never running out. Customize your plan to fit your household, from small condos to large homes.</p>
    `,
    date: "2025-05-15",
    image: "/images/delivery_person-min.webp",
    slug: "stress-free-subscriptions-for-expats"
  },
  {
    id: '4',
    title: "Shop with Total Confidence",
    content: `
      <p>Order with ease using our secure, English-friendly website. Pay via Visa, Mastercard, or bank transfer through our encrypted 2C2P gateway, trusted by millions.</p>
      <p>Your data is protected under Thailand's PDPA, and our English support team is here to assist via Line or email.</p>
    `,
    date: "2025-05-15",
    image: "/images/checkout_laptop-min.webp",
    slug: "shop-with-total-confidence"
  }
];

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.content.replace(/<[^>]*>/g, '').substring(0, 160)}
        datePublished={post.date}
        image={post.image}
      />
      <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <article>
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <div className="flex items-center text-gray-500 mb-6">
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
    </>
  );
}
