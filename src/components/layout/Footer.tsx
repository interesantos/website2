import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SamuiWater.com</h3>
            <p className="text-gray-600 mb-2">Data Fellas Co., Ltd.</p>
            <p className="text-gray-600 mb-2">Tax ID: 4839274937194</p>
            <p className="text-gray-600">
              9 Moo 1, Bophut, Koh Samui,<br />
              Surat Thani 84320, Thailand
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/[lang]/why-us" as="/en/why-us" className="text-gray-600 hover:text-blue-600">Why Us</Link></li>
              <li><Link href="/[lang]/terms" as="/en/terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</Link></li>
              <li><Link href="/[lang]/privacy" as="/en/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/[lang]/contact" as="/en/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">support@samuiwater.com</li>
              <li className="text-gray-600">+66 83 8391 461</li>
              <li className="flex space-x-4 mt-4">
                <Link href="https://line.me/ti/p/~@samuiwater" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/line.png" alt="Line" width={24} height={24} className="h-6" />
                </Link>
                <Link href="https://wa.me/66838391461" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/whatsapp.png" alt="WhatsApp" width={24} height={24} className="h-6" />
                </Link>
                <Link href="https://instagram.com/samuiwater" target="_blank" rel="noopener noreferrer">
                  <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} className="h-6" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
              <div className="flex space-x-4 items-center">
                <Image src="/images/visa.png" alt="Visa" width={32} height={32} className="h-8" />
                <Image src="/images/mastercard.png" alt="Mastercard" width={32} height={32} className="h-8" />
                <Image src="/images/2c2p.png" alt="2C2P" width={32} height={16} className="h-4 w-8" />
              </div>
            <p className="text-sm text-gray-500 mt-4">
              We use cookies to enhance your experience. Accept or adjust settings.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SamuiWater.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
