'use client';
import BaseSchema from './BaseSchema';
import { Product } from '@/types/products';

interface Props {
  products: Product[];
}

export default function ShopSchema({ products }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "SamuiWater Shop",
    "description": "Browse our selection of water products",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "url": `https://samuiwater.com/products/${product.id}`,
          "name": product.name,
          "image": `https://samuiwater.com/images/${product.image}`,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "THB"
          }
        }
      }))
    }
  };

  return <BaseSchema schema={schema} />;
}