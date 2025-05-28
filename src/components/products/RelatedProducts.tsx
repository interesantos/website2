'use client';
import { Product } from '@/types/products';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useParams, useRouter } from 'next/navigation';

interface Props {
  products: Product[];
  currentProductId: string;
}

export default function RelatedProducts({ products, currentProductId }: Props) {
  const { addToCart } = useCart();
  const router = useRouter();
  const { lang } = useParams();
  const filteredProducts = products.filter(p => p.id !== currentProductId).slice(0, 5);

  return (
    <div className="mt-12 px-4">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="relative">
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 md:gap-6 w-max">
            {filteredProducts.map((product) => {
              const productRoute = product.category === 'water' 
                ? `/${lang}/bottled-drinking-water-delivery/products/${product.id}`
                : `/${lang}/bottled-drinking-water-delivery-subscription/${product.id}`;

              return (
                <div key={product.id} className="w-72 md:w-80 flex-shrink-0 bg-white rounded-lg shadow-sm p-4">
                  <Link href={productRoute} className="block mb-3">
                    <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
                      <Image
                        src={product.image.startsWith('/') ? product.image : `/images/${product.image}`}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 line-clamp-1">
                      <Link href={productRoute}>{product.name}</Link>
                    </h3>
                    <p className="text-blue-600 text-xl font-bold">
                      {product.price} THB / Month
                    </p>
                    <button
                      onClick={() => {
                        addToCart(product);
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