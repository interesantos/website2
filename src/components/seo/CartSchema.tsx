'use client';
import BaseSchema from './BaseSchema';
import { CartItem } from '@/context/CartContext';

interface Props {
  items?: CartItem[];
  isCheckoutComplete?: boolean;
  orderNumber?: string;
  total?: number;
}

export default function CartSchema({
  items = [],
  isCheckoutComplete = false,
  orderNumber,
  total
}: Props) {
  // Default breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Cart",
      "item": "https://samuiwater.com/cart"
    }]
  };

  if (!isCheckoutComplete) {
    return <BaseSchema schema={breadcrumbSchema} />;
  }

  // Order confirmation schema
  const orderSchema = {
    "@context": "https://schema.org",
    "@type": "Order",
    "orderNumber": orderNumber,
    "priceCurrency": "THB",
    "price": total,
    "acceptedOffer": items.map(item => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": item.name,
        "productID": item.id
      },
      "price": item.price,
      "priceCurrency": "THB",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": item.quantity
      }
    }))
  };

  return (
    <>
      <BaseSchema schema={breadcrumbSchema} />
      <BaseSchema schema={orderSchema} />
    </>
  );
}