import Hero from '@/components/home/Hero';

export default function PrivacyPage() {
  return (
    <main>
      <Hero 
        headline="Privacy Policy" 
        subheadline="How we protect and use your personal information"
        showButtons={false}
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information when you place orders, including:
            name, contact details, delivery address, and payment information.
            We use cookies to improve your browsing experience.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to process orders, provide customer support,
            and improve our services. We do not sell or share your data with third parties
            except as necessary for order fulfillment (e.g., delivery partners).
          </p>

          <h2>3. Data Security</h2>
          <p>
            We implement security measures including 2C2P encrypted payments and
            comply with Thailand's PDPA regulations. However, no internet transmission
            is 100% secure.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data.
            Contact us at support@samuiwater.com for data-related requests.
          </p>

          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this policy periodically. Continued use of our services
            constitutes acceptance of the updated policy.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: May 14, 2025
          </p>
        </div>
      </div>
    </main>
  );
}
