'use client';

import { use } from 'react';
import Layout from "@/components/layout/Layout";
import { CartProvider } from "@/context/CartContext";

export default function LangLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = use(params);
  return (
    <CartProvider>
      <Layout params={params}>
        {children}
      </Layout>
    </CartProvider>
  )
}
