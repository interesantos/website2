import Link from 'next/link';

interface FinalCTAProps {
  lang?: string;
}

export default function FinalCTA({ lang = 'en' }: FinalCTAProps) {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl mb-6">Stay Refreshed in Koh Samui's Paradise</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Whether you're here for a 7-day escape, a 14-day adventure, or a long-term expat journey, SamuiWater.com makes hydration simple and safe. Order now to enjoy pure water at your hotel, villa, or home.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={`/${lang}/bottled-drinking-water-delivery`}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition"
          >
            Shop One-Time Packs
          </Link>
          <Link
            href={`/${lang}/bottled-drinking-water-delivery-subscription`}
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-blue-600 transition"
          >
            Start Your Subscription
          </Link>
        </div>
      </div>
    </section>
  );
}
