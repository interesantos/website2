'use client';
import BaseSchema from './BaseSchema';

interface Props {
  name: string;
  description: string;
  telephone: string;
  email: string;
  address: string;
  openingHours: string;
  image?: string;
}

export default function ContactSchema({
  name,
  description,
  telephone,
  email,
  address,
  openingHours,
  image = '/images/contact-placeholder.jpg'
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "telephone": telephone,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address
    },
    "openingHours": openingHours,
    "image": `https://samuiwater.com${image}`,
    "logo": "https://samuiwater.com/logo.png",
    "sameAs": [
      "https://instagram.com/samuiwater",
      "https://line.me/ti/p/~@samuiwater"
    ]
  };

  return <BaseSchema schema={schema} />;
}