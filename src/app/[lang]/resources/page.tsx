import BlogCard from '@/components/blog/BlogCard';
import ArticleSchema from '@/components/seo/ArticleSchema';

const posts = [
  {
    id: '1',
    title: "Refreshment for Your Island Adventures",
    excerpt: "Make your 7–14 day Koh Samui trip unforgettable with our 1,5L bottles",
    date: "2025-05-15",
    image: "/images/happy_tourist-min.webp",
    slug: "refreshment-for-your-island-adventures"
  },
  {
    id: '2',
    title: "Pure Water for Your Vacation Home",
    excerpt: "Our 1,5L bottles provide ample safe water for drinking, cooking, or entertaining",
    date: "2025-05-15",
    image: "/images/smiling_couple-min.webp",
    slug: "pure-water-for-your-vacation-home"
  },
  {
    id: '3',
    title: "Stress-Free Subscriptions for Expats",
    excerpt: "Our subscriptions deliver 90L of premium water monthly, tailored to your expat lifestyle",
    date: "2025-05-15",
    image: "/images/delivery_person-min.webp",
    slug: "stress-free-subscriptions-for-expats"
  },
  {
    id: '4',
    title: "Shop with Total Confidence",
    excerpt: "Order with ease using our secure, English-friendly website",
    date: "2025-05-15",
    image: "/images/checkout_laptop-min.webp",
    slug: "shop-with-total-confidence"
  }
];

export default function BlogListPage() {
  return (
    <>
      {posts.map((post) => (
        <ArticleSchema
          key={post.id}
          title={post.title}
          description={post.excerpt}
          datePublished={post.date}
          image={post.image}
        />
      ))}
      <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-center mb-12">Water Resources & Tips</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
