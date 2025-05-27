export default function TrustAndCompliance() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Confidence, Our Commitment</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            SamuiWater.com is more than just water delivery—it's a promise of quality, safety, and care for Koh Samui's visitors and expats.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Safety & Quality</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>FDA-certified suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Regular quality testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Hygienic handling procedures</span>
                </li>
              </ul>
            </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Compliance & Security</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <img src="/images/etda.png" alt="ETDA" className="h-6 w-12 mr-2" />
                    <span>Registered with ETDA</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/images/pdpa.png" alt="PDPA" className="h-6 w-12 mr-2" />
                    <span>PDPA compliant data protection</span>
                  </li>
                  <li className="flex items-start">
                    <img src="/images/2c2p.png" alt="2C2P" className="h-6 w-12 mr-2" />
                    <span>2C2P secure payments</span>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
