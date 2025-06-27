import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { links } from '@/lib/links';
import { navItems } from '@/lib/navigation';
import { FaSquareFacebook } from 'react-icons/fa6';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import config from '@/lib/config';

function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6 mt-16">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Association info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src={links.logo}
                alt="Poh association Malaysia logo"
                width={60}
                height={60}
                className="object-contain mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold font-cn">马来西亚傅氏总会</h3>
                <p className="text-xs text-gray-300 uppercase">POH ASSOCIATION OF MALAYSIA</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Persatuan Keturunan Poh Malaysia adalah organisasi yang didedikasikan untuk mempromosikan warisan dan budaya keluarga Poh di Malaysia.
            </p>
            <div className="flex items-center">
              <Link
                href={config.facebookUrl}
                className="text-white hover:text-blue-400 transition-colors mr-4"
                target="_blank"
                aria-label="Facebook"
              >
                <FaSquareFacebook size={28} />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">快速链接</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 5).map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href || '#'}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MdLocationOn className="text-blue-400 mt-1 mr-2 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-300">
                  {config.address.gombak}
                </span>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-blue-400 mr-2 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-300">
                  {config.phone}
                  {' '}
                  (Eve)
                </span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-blue-400 mr-2 flex-shrink-0" size={18} />
                <a
                  href={`mailto:${config.email}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {config.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src={links.pohLogo}
              alt="Poh association Malaysia logo"
              width={120}
              height={120}
              className="object-contain mb-4"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>
            ©
            {new Date().getFullYear()}
            {' '}
            马来西亚傅氏总会 (Poh Association of Malaysia). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
