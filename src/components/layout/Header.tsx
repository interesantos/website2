'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

export default function Header({ params }: { params: { lang: string } }) {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <Link href={`/${params.lang}`} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="SamuiWater.com"
            width={180}
            height={40}
            priority={true}
          />
        </Link>

        {/* Main Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <Link href={`/${params.lang}/bottled-drinking-water-delivery`} className="text-gray-700 hover:text-blue-600">Shop Now</Link>
          <Link href={`/${params.lang}/bottled-drinking-water-delivery-subscription`} className="text-gray-700 hover:text-blue-600">Subscriptions</Link>
          <Link href={`/${params.lang}/why-us`} className="text-gray-700 hover:text-blue-600">Why Us</Link>
          <Link href={`/${params.lang}/reviews`} className="text-gray-700 hover:text-blue-600">Reviews</Link>
          <Link href={`/${params.lang}/resources`} className="text-gray-700 hover:text-blue-600">Resources</Link>
          <Link href={`/${params.lang}/contact`} className="text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 py-6 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        >
          <div className="flex flex-col items-center space-y-8 px-4">
            <Link href="/[lang]/shop" as={`/${params.lang}/shop`} className="text-2xl text-gray-700 hover:text-blue-600 py-3 w-full text-center">Shop Now</Link>
            <Link href="/[lang]/bottled-drinking-water-delivery-subscription" as={`/${params.lang}/bottled-drinking-water-delivery-subscription`} className="text-2xl text-gray-700 hover:text-blue-600 py-3 w-full text-center">Subscriptions</Link>
            <Link href="/[lang]/why-us" as={`/${params.lang}/why-us`} className="text-2xl text-gray-700 hover:text-blue-600 py-3 w-full text-center">Why Us</Link>
            <Link href="/[lang]/reviews" as={`/${params.lang}/reviews`} className="text-2xl text-gray-700 hover:text-blue-600 py-3 w-full text-center">Reviews</Link>
            <Link href="/[lang]/resources" as={`/${params.lang}/resources`} className="text-2xl text-gray-700 hover:text-blue-600 py-3 w-full text-center">Resources</Link>
            <Link href="/[lang]/contact" as={`/${params.lang}/contact`} className="text-2xl text-gray-700 hover:text-blue-600 py-3 w-full text-center">Contact</Link>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="relative">
          <button
            className="flex items-center text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            EN
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <div className="py-1">
              <Link href="/en" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">English</Link>
              <Link href="/de" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Deutsch</Link>
              <Link href="/fr" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Français</Link>
              <Link href="/es" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Español</Link>
              <Link href="/it" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Italiano</Link>
              <Link href="/ru" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Русский</Link>
              <Link href="/th" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">ไทย</Link>
              <Link href="/zh" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">中文</Link>
            </div>
          </div>
        </div>

          {/* Cart */}
          <div className="ml-4">
            <Link href="/[lang]/cart" as={`/${params.lang}/cart`} className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <span>Your Water Awaits ({itemCount})</span>
            </Link>
          </div>
      </div>
    </header>
  );
}
