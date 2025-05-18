import Hero from '@/components/home/Hero';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TrustAndCompliance from '@/components/home/TrustAndCompliance';

export default function WhyUsPage() {
  return (
    <main>
      <Hero 
        headline="Why Choose SamuiWater.com"
        subheadline="Discover what makes us the preferred water delivery service in Koh Samui"
        showButtons={false}
      />
      <WhyChooseUs />
      <TrustAndCompliance />
    </main>
  );
}
