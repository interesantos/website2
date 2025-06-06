'use client';
import { Product } from '@/types/products';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  products: Product[];
  currentProductId: string;
}

export default function RelatedProducts({ products, currentProductId }: Props) {
  const { addToCart } = useCart();
  const router = useRouter();
  const { lang } = useParams();
  const filteredProducts = products.filter(p => p.id !== currentProductId).slice(0, 5);
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
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
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
            {filteredProducts.map((product) => {
              const productRoute = product.category === 'water'
                ? `/${lang}/bottled-drinking-water-delivery/${product.name.toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-')
                    .replace(/\(/g, '')
                    .replace(/\)/g, '')}`
                : `/${lang}/bottled-drinking-water-delivery-subscription/${product.name.toLowerCase()
                    .replace(/[^\w\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-')
                    .replace(/\(/g, '')
                    .replace(/\)/g, '')}`;

              return (
                <div key={product.id} className="w-72 md:w-80 flex-shrink-0 bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                  <Link href={productRoute} className="block mb-4">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <Image
                        src={product.image.startsWith('/') ? product.image : `/images/${product.image}`}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold line-clamp-2">
                      <Link href={productRoute} className="hover:text-blue-600 transition">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-blue-600 text-xl font-bold">{product.price} THB</p>
                    {product.description && (
                      <p className="text-gray-700 line-clamp-2">{product.description}</p>
                    )}
                    <button
                      onClick={() => {
                        addToCart(product);
                        router.push('/cart');
                      }}
                      className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
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