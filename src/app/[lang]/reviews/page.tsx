import Hero from '@/components/home/Hero';
import CustomerStories from '@/components/home/CustomerStories';

export default function ReviewsPage() {
  return (
    <main>
      <Hero 
        headline="Customer Reviews"
        subheadline="See what our customers say about our water delivery service"
        showButtons={false}
      />
      <CustomerStories />
    </main>
  );
}
