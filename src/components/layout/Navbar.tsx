'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import config from '@lib/config';
import { links } from '@lib/links';
import { FaSquareFacebook } from 'react-icons/fa6';
import Menu from './Menu';
import MobileNav from './MobileNav';
import { cn } from '@lib/utils';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent", {
      'bg-gradient-to-b from-black/80 via-black/50 to-transparent': !scrolled,
    })}>
      {/* Single navbar with logo and navigation */}
      <nav className="w-full transition-all duration-300 py-4">
        <div className="container mx-auto px-4">
          <div className={cn(`flex items-center justify-between transition-all duration-300`, {
            'bg-white shadow-md rounded-full py-2 px-6': scrolled,
            'bg-transparent': !scrolled,
          })}>
            {/* Left side - Logo and mobile menu */}
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <div className="md:hidden">
                <MobileNav scrolled={scrolled} />
              </div>

              <div>

                {/* Logo */}
                <Link href="/" className="flex items-center group whitespace-nowrap">
                  <div className={cn(`relative w-10 h-10 overflow-hidden rounded-full transition-all duration-300`, {
                    'bg-blue-50': scrolled,
                    'bg-white/10': !scrolled,
                  })}>
                    <Image
                      src={links.logo}
                      alt="Poh association Malaysia logo"
                      width={40}
                      height={40}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="ml-3">
                    <h1 className={cn(`text-lg font-semibold font-cn transition-colors duration-300`, {
                      'text-blue-900': scrolled,
                      'text-white': !scrolled,
                    })}>马来西亚傅氏总会</h1>
                    <p className={cn(`text-xs tracking-wider transition-colors duration-300`, {
                      'text-blue-700': scrolled,
                      'text-white/90': !scrolled,
                    })}>POH ASSOCIATION</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center - Main navigation */}
            <div className="hidden md:block">
              <Menu scrolled={scrolled} />
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center space-x-3">

              {/* Facebook link */}
              <Link
                href={config.facebookUrl}
                className={cn(`p-2 rounded-full transition-all duration-300`, {
                  'bg-gray-100 text-blue-600 hover:bg-gray-200': scrolled,
                  'bg-white/10 text-white hover:bg-white/20': !scrolled,
                })}
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
