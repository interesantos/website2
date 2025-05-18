import { notFound } from 'next/navigation';
import { Product } from '@/types/products';
import { getProductBySlug, getAllProducts } from '@/lib/products';
import ProductDetails from '@/components/products/ProductDetails';
import ProductSchema from '@/components/seo/ProductSchema';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: generateSlug(product.name),
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = params;
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