'use client';

import { use } from 'react';
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Resources from "@/components/home/Resources";
import ProductHighlights from "@/components/home/ProductHighlights";
import Subscriptions from "@/components/home/Subscriptions";
import HowItWorks from "@/components/home/HowItWorks";
import FinalCTA from "@/components/home/FinalCTA";
import HomeSchema from "@/components/seo/HomeSchema";

export default function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = use(params);
  
  return (
    <>
      <HomeSchema />
      <Hero lang={lang as string} />
      <ProductHighlights lang={lang as string} />
      <WhyChooseUs />
      <Subscriptions />
      <HowItWorks />
      <Resources />
      <FinalCTA lang={lang as string} />
    </>
  );
}
