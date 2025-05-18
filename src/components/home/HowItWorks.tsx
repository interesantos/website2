import { FaShoppingCart, FaCreditCard, FaHome } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Hydration Made Simple in 3 Easy Steps</h2>
        
        <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
          At SamuiWater.com, we've eliminated the hassle of getting safe water in Koh Samui, so you can focus on enjoying your vacation or expat life. Our English-friendly platform is built for foreigners, offering a seamless way to order FDA-approved bottled water from trusted brands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FaShoppingCart className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Choose Your Perfect Pack</h3>
            <p className="text-gray-700">
              Browse our 7-day packs for short trips, 5-packs for 14-day stays, or subscriptions for expats. Every option is FDA-approved for your safety.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FaCreditCard className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Order with Confidence</h3>
            <p className="text-gray-700">
              Use our intuitive English website to check out securely with Visa, Mastercard, or bank transfer. Our 2C2P gateway ensures your data is protected.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FaHome className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Relax with Fast Delivery</h3>
            <p className="text-gray-700">
              Your water arrives at your hotel, villa, or home in 24–48 hours, handled by our reliable FDA-licensed delivery partners. Sit back, sip, and enjoy Koh Samui!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
