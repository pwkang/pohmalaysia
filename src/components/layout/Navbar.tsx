import React from 'react';
import Link from 'next/link';
import config from '@lib/config';
import { FaSquareFacebook } from 'react-icons/fa6';
import Menu from './Menu';
import MobileNav from './MobileNav';

function Navbar() {
  return (
    <div className="w-full flex justify-between px-8 md:px-16 bg-neutral-700 border-b-blue-500 border-b-4">
      <div className="flex items-center py-3">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <Menu />
      </div>
      <div className="flex items-center py-3">
        <Link
          href={config.facebookUrl}
          className="text-white hover:text-blue-500 transition-colors"
          target="_blank"
        >
          <FaSquareFacebook size={28} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
