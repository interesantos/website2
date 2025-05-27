import Hero from '@/components/home/Hero';
import ContactSchema from '@/components/seo/ContactSchema';

export default function ContactPage() {
  return (
    <>
      <ContactSchema
        name="SamuiWater"
        description="English-speaking water delivery service in Koh Samui"
        telephone="+66 83 8391 461"
        email="support@samuiwater.com"
        address="9 Moo 1, Bophut, Koh Samui, Surat Thani 84320, Thailand"
        openingHours="Mo-Sa 09:00-18:00"
        image="/images/logo.png"
      />
      <main>
      <Hero 
        headline="Contact Us"
        subheadline="Get in touch with our English-speaking support team"
        showButtons={false}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>support@samuiwater.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+66 83 8391 461</p>
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p>9 Moo 1, Bophut, Koh Samui, Surat Thani 84320, Thailand</p>
              </div>
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p>Monday-Saturday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl mb-6">Connect With Us</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <a href="https://line.me/ti/p/~@samuiwater" target="_blank" rel="noopener noreferrer">
                  <img src="/images/line.png" alt="Line" className="h-8 w-8" />
                </a>
                <a href="https://wa.me/66838391461" target="_blank" rel="noopener noreferrer">
                  <img src="/images/whatsapp.png" alt="WhatsApp" className="h-8 w-8" />
                </a>
                <a href="https://instagram.com/samuiwater" target="_blank" rel="noopener noreferrer">
                  <img src="/images/instagram.png" alt="Instagram" className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
