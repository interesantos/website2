'use client';
import BaseSchema from './BaseSchema';
import { Product } from '@/types/products';

interface Props {
  product: Product;
}

export default function ProductSchema({ product }: Props) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `https://samuiwater.com/images/${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": "SamuiWater"
    }
  };

  const offerSchema = {
    ...baseSchema,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "THB",
      "availability": "https://schema.org/InStock",
      ...(product.category === 'water' && {
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": product.price,
          "priceCurrency": "THB",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": product.volume,
            "unitCode": "LTR"
          }
        }
      }),
      ...(product.category === 'subscription' && {
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "billingDuration": product.subscriptionFrequency === 'weekly' ? 'P1W' : 'P1M',
          "priceType": "Subscription"
        }
      })
    }
  };

  return <BaseSchema schema={offerSchema} />;
}