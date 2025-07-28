import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import config from '@/lib/config';
import { links } from '@/lib/links';
import { FaSquareFacebook } from 'react-icons/fa6';
import Menu from './Menu';
import MobileNav from './MobileNav';

function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      {/* Single navbar with logo and navigation */}
      <nav className="w-full transition-all duration-300 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between transition-all duration-300 bg-white shadow-lg rounded-full py-3 px-8">
            {/* Left side - Logo and mobile menu */}
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <div className="md:hidden">
                <MobileNav />
              </div>

              <div>

                {/* Logo */}
                <Link href="/" className="flex items-center group/item whitespace-nowrap">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full transition-all duration-300 bg-blue-100 ring-2 ring-blue-200">
                    <Image
                      src={links.logo}
                      alt="Poh association Malaysia logo"
                      width={40}
                      height={40}
                      className="object-contain transition-transform duration-300 group-hover/item:scale-110"
                    />
                  </div>
                  <div className="ml-3">
                    <h1 className="text-lg font-semibold font-cn transition-colors duration-300 text-blue-900">
                      马来西亚傅氏总会
                    </h1>
                    <p className="text-xs tracking-wider transition-colors duration-300 text-blue-700">
                      POH ASSOCIATION
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center - Main navigation */}
            <div className="hidden md:block">
              <Menu />
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-3">

              {/* Facebook link */}
              <Link
                href={config.facebookUrl}
                className="p-2 rounded-full transition-all duration-300 bg-gray-100 text-blue-600 hover:bg-gray-200"
                target="_blank"
                aria-label="Facebook"
              >
                <FaSquareFacebook size={20} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
