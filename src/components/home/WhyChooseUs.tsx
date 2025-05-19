import { FaTruck, FaShieldAlt, FaSmile } from 'react-icons/fa';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Your Ultimate Hydration Partner in Koh Samui</h2>
        
        <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto text-center">
          SamuiWater.com delivers FDA-approved bottled water across Koh Samui. Order in English, pay securely, and enjoy fast delivery to your hotel, villa or condo. Our English-speaking team ensures a flawless experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fast Delivery */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FaTruck className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast, Reliable Delivery</h3>
            <p className="text-gray-700">
              Get your water in 24–48 hours, anywhere in Koh Samui—ideal for short-term visitors or busy expats who value convenience.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FaSmile className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Foreigner-Friendly Experience</h3>
            <p className="text-gray-700">
              Navigate our English website, pay securely, and contact our team via Line, WhatsApp, or email for instant, personalized support.
            </p>
          </div>

          {/* Safety */}
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="flex justify-center mb-4">
              <FaShieldAlt className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Uncompromising Safety</h3>
            <p className="text-gray-700">
              Every bottle is sourced from FDA-approved brands, ensuring pure, clean water for drinking, cooking, or travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
