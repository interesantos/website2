import Hero from '@/components/home/Hero';

export default function TermsPage() {
  return (
    <main>
      <Hero 
        headline="Terms & Conditions"
        subheadline="Our terms of service for SamuiWater.com"
        showButtons={false}
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg">
          <h2>1. General Terms</h2>
          <p>
            By accessing and using SamuiWater.com, you accept and agree to be bound by these Terms.
            Our water delivery service is available to customers in Koh Samui, Thailand.
          </p>

          <h2>2. Ordering & Delivery</h2>
          <p>
            Delivery times are estimates only. We deliver within 24-48 hours for most areas in Koh Samui.
            Please ensure someone is available to receive your water delivery.
          </p>

          <h2>3. Payments</h2>
          <p>
            We accept Visa, Mastercard, and bank transfers via 2C2P secure payment gateway.
            All prices are in Thai Baht (THB) and include applicable taxes.
          </p>

          <h2>4. Subscriptions</h2>
          <p>
            Subscriptions renew automatically each month. You may cancel anytime by contacting us
            at least 3 business days before your next billing date.
          </p>

          <h2>5. Returns & Refunds</h2>
          <p>
            Due to the nature of our products, we do not accept returns of opened water bottles.
            Refunds may be issued for undelivered or damaged products.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: May 14, 2025
          </p>
        </div>
      </div>
    </main>
  );
}
