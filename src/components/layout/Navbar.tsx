import Image from 'next/image';
import Link from 'next/link';
import { FaSquareFacebook } from 'react-icons/fa6';
import config from '@/lib/config';
import { links } from '@/lib/links';
import Menu from './Menu';
import MobileNav from './MobileNav';

function Navbar() {
  return (
    <header className="sticky top-0 right-0 left-0 z-50 bg-transparent transition-all duration-300">
      {/* Single navbar with logo and navigation */}
      <nav className="w-full py-4 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between rounded-full bg-white px-8 py-3 shadow-lg transition-all duration-300">
            {/* Left side - Logo and mobile menu */}
            <div className="flex items-center gap-4">
              {/* Mobile menu button */}
              <div className="md:hidden">
                <MobileNav />
              </div>

              <div>
                {/* Logo */}
                <Link href="/" className="group/item flex items-center whitespace-nowrap">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-blue-100 ring-2 ring-blue-200 transition-all duration-300">
                    <Image
                      src={links.logo}
                      alt="Poh association Malaysia logo"
                      width={40}
                      height={40}
                      className="object-contain transition-transform duration-300 group-hover/item:scale-110"
                    />
                  </div>
                  <div className="ml-3">
                    <h1 className="font-cn font-semibold text-blue-900 text-lg transition-colors duration-300">
                      马来西亚傅氏总会
                    </h1>
                    <p className="text-blue-700 text-xs tracking-wider transition-colors duration-300">
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
                className="rounded-full bg-gray-100 p-2 text-blue-600 transition-all duration-300 hover:bg-gray-200"
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
