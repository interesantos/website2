import Hero from '@/components/home/Hero';
import ContactSchema from '@/components/seo/ContactSchema';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <ContactSchema
        name="SamuiWater"
        description="English-speaking water delivery service in Koh Samui"
        telephone="+66 83 8391 461"
        email="support@samuiwater.com"
        address="73, 6, Koh Samui, Surat Thani 84320, Thailand"
        openingHours="Mo-Su 09:00-18:00"
        image="/images/logo.png"
      />
      <main>
      <Hero 
        headline="Contact Us"
        subheadline="Get in touch with our English-speaking support team"
        showButtons={false}
      />
      <div className="container mx-auto px-4 py-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
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
                <p>73, 6, Koh Samui, Surat Thani 84320, Thailand</p>
              </div>
              <div>
                <h3 className="font-semibold">Delivery Hours</h3>
                <p>Monday-Sunday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl mb-6">Connect With Us</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <a href="https://line.me/ti/p/~@samuiwater" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/line.png" alt="Line" width={32} height={32} className="h-8 w-8" />
                </a>
                <a href="https://wa.me/66838391461" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/whatsapp.png" alt="WhatsApp" width={32} height={32} className="h-8 w-8" />
                </a>
                <a href="https://instagram.com/samuiwater" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/instagram.png" alt="Instagram" width={32} height={32} className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7869.644911330965!2d100.04121491455706!3d9.52414973177449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xae8de8153f6cc345%3A0xa35ac351ad9a8d7!2sSamui%20Water!5e0!3m2!1sen!2sth!4v1748925551256!5m2!1sen!2sth"
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </main>
    </>
  );
}
