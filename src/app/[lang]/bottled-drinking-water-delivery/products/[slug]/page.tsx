import { notFound } from 'next/navigation';
// Product type imported in lib/products
import { getProductBySlug, getAllProducts } from '@/lib/products';
import ProductDetails from '@/components/products/ProductDetails';
import ProductSchema from '@/components/seo/ProductSchema';
import { use } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: generateSlug(product.name),
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <>
      <ProductSchema product={product} />
      <ProductDetails product={product} />
    </>
  );
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}