import Image from 'next/image';
import Link from 'next/link';

export default function Resources() {
  return (
    <section className="py-16 bg-white hidden md:block">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Water Resources & Tips</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resource 1 */}
          <Link href="/resources/refreshment-for-your-island-adventures" className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-64 bg-blue-100 relative">
              <Image
                src="/images/happy_tourist-min.webp"
                alt="Tourist enjoying water at Ang Thong Marine Park"
                fill
                className="object-cover object-bottom"
                quality={90}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Refreshment for Your Island Adventures</h3>
              <p className="text-gray-700">
                Make your 7–14 day Koh Samui trip unforgettable with our 1,5L bottles. Perfect for hiking, beach days, or temple visits, these FDA-approved bottles keep you hydrated on the go. Order a 7-day pack and have it delivered to your hotel or Airbnb in just 24–48 hours, so you can explore without worry.
              </p>
            </div>
          </Link>

          {/* Resource 2 */}
          <Link href="/resources/pure-water-for-your-vacation-home" className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-64 bg-blue-100 relative">
              <Image
                src="/images/smiling_couple-min.webp"
                alt="Couple enjoying water in their villa kitchen"
                fill
                className="object-cover object-bottom"
                quality={90}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pure Water for Your Vacation Home</h3>
              <p className="text-gray-700">
                Staying in a Koh Samui villa for a week or two? Our 1,5L bottles provide ample safe water for drinking, cooking, or entertaining. Delivered directly to your door, they save you time and effort, letting you focus on relaxing in paradise with family or friends.
              </p>
            </div>
          </Link>

          {/* Resource 3 */}
          <Link href="/resources/stress-free-subscriptions-for-expats" className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-64 bg-blue-100 relative">
              <Image
                src="/images/delivery_person-min.webp"
                alt="Expat couple receiving weekly water delivery"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Stress-Free Subscriptions for Expats</h3>
              <p className="text-gray-700">
                Living in Koh Samui? Our subscriptions deliver 90L of premium water monthly, tailored to your expat lifestyle. Save up to 25% and enjoy the convenience of never running out. Customize your plan to fit your household, from small condos to large homes.
              </p>
            </div>
          </Link>

          {/* Resource 4 */}
          <Link href="/resources/shop-with-total-confidence" className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-64 bg-blue-100 relative">
              <Image
                src="/images/checkout_laptop-min.webp"
                alt="Secure checkout process on laptop"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Shop with Total Confidence</h3>
              <p className="text-gray-700">
                Order with ease using our secure, English-friendly website. Pay via Visa, Mastercard, or bank transfer through our encrypted 2C2P gateway, trusted by millions. Your data is protected under Thailand's PDPA, and our English support team is here to assist via Line or email.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
