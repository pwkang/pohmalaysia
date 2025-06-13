import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import config from '@/lib/config';
import { links } from '@/lib/links';
import { FaSquareFacebook } from 'react-icons/fa6';
import Menu from './Menu';
import MobileNav from './MobileNav';
import { cn } from '@/lib/utils';
import NavHeader from './NavHeader';

function Navbar() {
  return (
    <NavHeader>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent',
        'group-data-[scrolled="false"]:bg-gradient-to-b group-data-[scrolled="false"]:from-black/80 group-data-[scrolled="false"]:via-black/50 group-data-[scrolled="false"]:to-transparent',
      )}
      >
        {/* Single navbar with logo and navigation */}
        <nav className="w-full transition-all duration-300 py-4">
          <div className="container mx-auto px-4">
            <div className={cn(
              'flex items-center justify-between transition-all duration-300',
              'group-data-[scrolled="true"]:bg-white group-data-[scrolled="true"]:shadow-md group-data-[scrolled="true"]:rounded-full group-data-[scrolled="true"]:py-2 group-data-[scrolled="true"]:px-6',
              'group-data-[scrolled="false"]:bg-transparent',
            )}
            >
              {/* Left side - Logo and mobile menu */}
              <div className="flex items-center gap-4">
                {/* Mobile menu button */}
                <div className="md:hidden">
                  <MobileNav />
                </div>

                <div>

                  {/* Logo */}
                  <Link href="/" className="flex items-center group/item whitespace-nowrap">
                    <div className={cn(
                      `relative w-10 h-10 overflow-hidden rounded-full transition-all duration-300`,
                      'group-data-[scrolled="true"]:bg-blue-50',
                      'group-data-[scrolled="false"]:bg-white/10',
                    )}
                    >
                      <Image
                        src={links.logo}
                        alt="Poh association Malaysia logo"
                        width={40}
                        height={40}
                        className="object-contain transition-transform duration-300 group-hover/item:scale-110"
                      />
                    </div>
                    <div className="ml-3">
                      <h1 className={cn(
                        `text-lg font-semibold font-cn transition-colors duration-300`,
                        'group-data-[scrolled="true"]:text-blue-900',
                        'group-data-[scrolled="false"]:text-white',
                      )}
                      >
                        马来西亚傅氏总会
                      </h1>
                      <p className={cn(
                        `text-xs tracking-wider transition-colors duration-300`,
                        'group-data-[scrolled="true"]:text-blue-700',
                        'group-data-[scrolled="false"]:text-white/90',
                      )}
                      >
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
                  className={cn(
                    `p-2 rounded-full transition-all duration-300`,
                    'group-data-[scrolled="true"]:bg-gray-100 group-data-[scrolled="true"]:text-blue-600 group-data-[scrolled="true"]:hover:bg-gray-200',
                    'group-data-[scrolled="false"]:bg-white/10 group-data-[scrolled="false"]:text-white group-data-[scrolled="false"]:hover:bg-white/20',
                  )}
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
    </NavHeader>
  );
}

export default Navbar;
