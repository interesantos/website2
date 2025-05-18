'use client';
import BaseSchema from './BaseSchema';

interface Props {
  title: string;
  description: string;
  datePublished: string;
  author?: string;
  image?: string;
}

export default function ArticleSchema({
  title,
  description,
  datePublished,
  author = 'SamuiWater',
  image = '/images/article-placeholder.jpg'
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Organization",
      "name": author
    },
    "datePublished": datePublished,
    "publisher": {
      "@type": "Organization",
      "name": "SamuiWater",
      "logo": {
        "@type": "ImageObject",
        "url": "https://samuiwater.com/logo.png"
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": `https://samuiwater.com${image}`,
      "width": "1200",
      "height": "630"
    }
  };

  return <BaseSchema schema={schema} />;
}