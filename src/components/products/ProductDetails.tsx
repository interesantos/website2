'use client';
import { Product } from '@/types/products';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { getAllProducts } from '@/lib/products';
import RelatedProducts from './RelatedProducts';
import { useEffect, useState } from 'react';

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const { cartItems, addToCart } = useCart();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadRelatedProducts() {
      const products = await getAllProducts();
      setRelatedProducts(products);
    }
    loadRelatedProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Main Product Section */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="grid md:grid-cols-[60%_40%] gap-8 p-6">
          {/* Media Column */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={product.image.startsWith('/') ? product.image : `/images/${product.image}`}
                alt={product.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Details Column */}
          <div className="space-y-8 p-4">
            <div className="border-b pb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-blue-600 text-3xl font-bold mb-4">{product.price} THB</p>
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
            </div>
            
            {/* Specifications */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.category === 'water' && (
                  <>
                    <div>
                      <p className="text-gray-600">Volume</p>
                      <p className="font-medium">{product.volume}L</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Bottle Size</p>
                      <p className="font-medium">{product.bottleSize}L</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Duration</p>
                      <p className="font-medium">{product.durationDays} days</p>
                    </div>
                  </>
                )}

                {product.category === 'subscription' && (
                  <>
                    <div>
                      <p className="text-gray-600">Frequency</p>
                      <p className="font-medium">{product.subscriptionFrequency}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Savings</p>
                      <p className="font-medium">{product.savings}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <button
                onClick={() => addToCart(product)}
                className="w-full px-6 py-4 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 text-lg"
              >
                Add to Cart
              </button>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free delivery in Samui area</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <RelatedProducts 
          products={relatedProducts}
          currentProductId={product.id}
        />
      )}
    </div>
  );
}