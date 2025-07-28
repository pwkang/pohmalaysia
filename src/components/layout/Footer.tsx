import Image from 'next/image';
import Link from 'next/link';
import { FaSquareFacebook } from 'react-icons/fa6';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import config from '@/lib/config';
import { links } from '@/lib/links';
import { navItems } from '@/lib/navigation';

function Footer() {
  return (
    <footer className="mt-16 bg-neutral-800 pt-12 pb-6 text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Association info */}
          <div>
            <div className="mb-4 flex items-center">
              <Image
                src={links.logo}
                alt="Poh association Malaysia logo"
                width={60}
                height={60}
                className="mr-4 object-contain"
              />
              <div>
                <h3 className="font-cn font-semibold text-xl">马来西亚傅氏总会</h3>
                <p className="text-gray-300 text-xs uppercase">POH ASSOCIATION OF MALAYSIA</p>
              </div>
            </div>
            <p className="mb-4 text-gray-400 text-sm">
              Persatuan Keturunan Poh Malaysia adalah organisasi yang didedikasikan untuk
              mempromosikan warisan dan budaya keluarga Poh di Malaysia.
            </p>
            <div className="flex items-center">
              <Link
                href={config.facebookUrl}
                className="mr-4 text-white transition-colors hover:text-blue-400"
                target="_blank"
                aria-label="Facebook"
              >
                <FaSquareFacebook size={28} />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 border-gray-700 border-b pb-2 font-semibold text-lg">快速链接</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href || '#'}
                    className="text-gray-300 text-sm transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 border-gray-700 border-b pb-2 font-semibold text-lg">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MdLocationOn className="mt-1 mr-2 flex-shrink-0 text-blue-400" size={18} />
                <span className="text-gray-300 text-sm">{config.address.gombak}</span>
              </li>
              <li className="flex items-center">
                <MdPhone className="mr-2 flex-shrink-0 text-blue-400" size={18} />
                <span className="text-gray-300 text-sm">{config.phone} (Eve)</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2 flex-shrink-0 text-blue-400" size={18} />
                <a
                  href={`mailto:${config.email}`}
                  className="text-gray-300 text-sm transition-colors hover:text-white"
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
              className="mb-4 object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-gray-700 border-t pt-6 text-center text-gray-400 text-sm">
          <p>
            ©{new Date().getFullYear()} 马来西亚傅氏总会 (Poh Association of Malaysia). All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
