import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  showButtons?: boolean;
}

export default function Hero({ 
  headline = "Pure Water, Delivered Seamlessly to Your Koh Samui Stay",
  subheadline = "Enjoy safe, FDA-approved bottled water from trusted brands, delivered to your hotel, villa, or home in 24–48 hours. Perfect for 7–14 day vacations or expat life, our English-friendly service offers one-time orders and flexible subscriptions, backed by secure payments and dedicated support. Stay hydrated with ease and confidence.",
  showButtons = true 
}: HeroProps) {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-min.webp"
          alt=""
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-blue-900/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row gap-8">
        {/* Text Content */}
        <div className="max-w-2xl bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg md:w-1/2">
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-4 font-normal">
            {headline}
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            {subheadline}
          </p>
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/shop" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Shop One-Time Packs
              </Link>
              <Link 
                href="/subscriptions" 
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 border border-blue-600 rounded-lg text-center transition-colors"
              >
                Explore Subscriptions
              </Link>
            </div>
          )}
        </div>

        {/* Trust Signals */}
        <div className="max-w-2xl bg-white/90 backdrop-blur-sm rounded-lg shadow-lg md:w-1/2 md:mt-0 self-start">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-2xl font-bold text-blue-600 mr-2">4.9/5</span>
                <span className="text-gray-700">from 600+ Customers Worldwide</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl font-bold text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">FDA-Licensed Suppliers for Guaranteed Safety</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl font-bold text-blue-600 mr-2">🔒</span>
                <span className="text-gray-700">Secure Checkout with 2C2P Encryption</span>
              </li>
              <li className="flex items-center">
                <span className="text-2xl font-bold text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Registered with ETDA for Your Peace of Mind</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
