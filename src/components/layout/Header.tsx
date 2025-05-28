'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { path: 'bottled-drinking-water-delivery', label: 'Shop Now' },
  { path: 'bottled-drinking-water-delivery-subscription', label: 'Subscriptions' },
  { path: 'why-us', label: 'Why Us' },
  { path: 'reviews', label: 'Reviews' },
  { path: 'resources', label: 'Resources' },
  { path: 'contact', label: 'Contact' }
];

export default function Header({ params }: { params: { lang: string } }) {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      closeMenu();
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 p-4 -m-4"
          onClick={toggleMenu}
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              href={`/${params.lang}/${link.path}`}
              className="text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 z-40"
            onClick={handleBackdropClick}
          >
            <div 
              ref={menuRef}
              className="fixed top-16 left-0 right-0 bg-white shadow-lg z-50 py-6 transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center space-y-4 px-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    href={`/${params.lang}/${link.path}`}
                    className="text-2xl text-gray-700 hover:text-blue-600 py-3 w-full text-center"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Language Toggle */}
        <div className="relative">
          <button
            className="flex items-center text-gray-700 hover:text-blue-600"
            onClick={() => setIsLangOpen(!isLangOpen)}
          >
            <span ref={langRef} className="flex items-center">
              EN
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {isLangOpen && (
            <div className="absolute left-0 mt-1 w-24 bg-white rounded-md shadow-lg z-50">
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
          )}
        </div>

        {/* Cart */}
        <div className="ml-4">
          <Link href="/[lang]/cart" as={`/${params.lang}/cart`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 whitespace-nowrap">
            Cart ({itemCount})
          </Link>
        </div>
      </div>
    </header>
  );
}
