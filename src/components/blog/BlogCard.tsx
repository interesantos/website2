import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }: { 
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    slug: string;
  }
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/resources/${post.slug}`}>
        <div className="relative h-48">
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
