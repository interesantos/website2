'use client';
import { Article } from '@/types/articles';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  articles: Article[];
  currentArticleId?: string;
}

export default function RelatedResources({ articles, currentArticleId }: Props) {
  const { lang } = useParams();
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

  const filteredArticles = currentArticleId 
    ? articles.filter(a => a.id !== currentArticleId).slice(0, 5)
    : articles.slice(0, 5);

  return (
    <div className="mt-12 px-4 relative">
      <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
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
            {filteredArticles.map((article) => (
              <div key={article.id} className="w-72 md:w-80 flex-shrink-0 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <Link href={`/${lang}/resources/${article.slug}`} className="block mb-4">
                  <div className="relative h-48 overflow-hidden rounded-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold line-clamp-2">
                    <Link href={`/${lang}/resources/${article.slug}`} className="hover:text-blue-600 transition">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {article.content.replace(/<[^>]*>/g, '').split('\n').slice(0, 3).join(' ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}