'use client';

import React from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import cn from 'classnames';
import { Portal } from '@radix-ui/react-portal';
import { AnimatePresence, motion } from 'framer-motion';
import { IoCloseOutline } from 'react-icons/io5';
import { navItems } from '@/lib/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { links } from '@/lib/links';
import config from '@/lib/config';
import { FaSquareFacebook } from 'react-icons/fa6';
import { HiChevronDown } from 'react-icons/hi';
import * as Accordion from '@radix-ui/react-accordion';

interface NavItemProps {
  name: string;
  href: string;
}

function NavItem({ name, href }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn('w-full p-4 transition-colors rounded-md my-1', {
        'bg-blue-500 text-white': isActive,
        'text-neutral-700 hover:bg-gray-100': !isActive,
      })}
    >
      {name}
    </Link>
  );
}

interface NavDropdownProps {
  name: string;
  items: {
    name: string;
    href: string;
  }[];
}

function NavDropdown({ name, items }: NavDropdownProps) {
  const pathname = usePathname();

  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value={name} className="my-1 rounded-md overflow-hidden">
        <Accordion.Trigger className="w-full p-4 cursor-pointer flex justify-between items-center text-neutral-700 hover:bg-gray-100 transition-colors rounded-md">
          <span>{name}</span>
          <HiChevronDown className="transition-transform duration-300 ease-in-out data-[state=open]:rotate-180" />
        </Accordion.Trigger>
        <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp bg-gray-50 rounded-b-md">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block w-full p-4 transition-colors',
                  {
                    'bg-blue-500 text-white': isActive,
                    'text-neutral-700 hover:bg-gray-100': !isActive,
                  },
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

interface MobileNavProps {
  scrolled: boolean;
}

function MobileNav({ scrolled }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(s => !s);

  return (
    <>
      <button
        className={cn(
          'p-2 rounded-full transition-all duration-300',
          scrolled
            ? 'bg-gray-100 text-blue-700 hover:bg-gray-200'
            : 'bg-white/10 text-white hover:bg-white/20',
        )}
        onClick={toggle}
        aria-label="Menu"
      >
        <RiMenu4Line size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <Portal>
            <div className="block md:hidden">
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Slide-in menu */}
              <motion.div
                className="fixed top-0 right-0 h-screen w-[85%] max-w-[350px] bg-gradient-to-br from-white to-blue-50 shadow-xl z-[1000] overflow-y-auto"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="bg-white/10 rounded-full p-1.5">
                        <Image
                          src={links.logo}
                          alt="Poh association Malaysia logo"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <button
                      className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close menu"
                    >
                      <IoCloseOutline size={24} />
                    </button>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold font-cn">马来西亚傅氏总会</h2>
                    <p className="text-sm text-blue-100">POH ASSOCIATION OF MALAYSIA</p>
                  </div>
                </div>

                {/* Menu items */}
                <div className="flex flex-col p-4">
                  {navItems.map((item) => {
                    if (item.href) {
                      return (
                        <NavItem
                          key={item.name}
                          href={item.href}
                          name={item.name}
                        />
                      );
                    }
                    if (item.items) {
                      return (
                        <NavDropdown
                          key={item.name}
                          name={item.name}
                          items={item.items}
                        />
                      );
                    }
                  })}
                </div>

                {/* Footer */}
                <div className="mt-auto p-4 border-t border-gray-200">
                  <div className="flex justify-center space-x-4">
                    <Link
                      href={config.facebookUrl}
                      className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <FaSquareFacebook size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
