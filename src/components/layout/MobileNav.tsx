'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { Portal } from '@radix-ui/react-portal';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { HiChevronDown } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { RiMenu4Line } from 'react-icons/ri';
import config from '@/lib/config';
import { links } from '@/lib/links';
import { navItems } from '@/lib/navigation';

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
      className={cn('my-1 w-full rounded-md px-4 py-2 transition-colors', {
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
      <Accordion.Item value={name} className="my-1 overflow-hidden rounded-md">
        <Accordion.Trigger className="flex w-full cursor-pointer items-center justify-between rounded-md px-4 py-2 text-neutral-700 transition-colors hover:bg-gray-100">
          <span>{name}</span>
          <HiChevronDown className="transition-transform duration-300 ease-in-out data-[state=open]:rotate-180" />
        </Accordion.Trigger>
        <Accordion.Content className="overflow-hidden rounded-b-md bg-gray-50 ps-4 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn('block w-full px-4 py-2 transition-colors', {
                  'bg-blue-500 text-white': isActive,
                  'text-neutral-700 hover:bg-gray-100': !isActive,
                })}
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

function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen((s) => !s);

  return (
    <>
      <button
        className="rounded-full bg-gray-100 p-2 text-blue-700 transition-all duration-300 hover:bg-gray-200"
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
                className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Slide-in menu */}
              <motion.div
                className="fixed top-0 left-0 z-[1000] h-screen w-[85%] max-w-[350px] overflow-y-auto bg-gradient-to-br from-white to-blue-50 shadow-xl"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="rounded-full bg-white/10 p-1.5">
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
                      className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close menu"
                    >
                      <IoCloseOutline size={24} />
                    </button>
                  </div>
                  <div>
                    <h2 className="font-cn font-semibold text-xl">马来西亚傅氏总会</h2>
                    <p className="text-blue-100 text-sm">POH ASSOCIATION OF MALAYSIA</p>
                  </div>
                </div>

                {/* Menu items */}
                <div className="flex flex-col p-4">
                  {navItems.map((item) => {
                    if (item.href) {
                      return <NavItem key={item.name} href={item.href} name={item.name} />;
                    }
                    if (item.items) {
                      return <NavDropdown key={item.name} name={item.name} items={item.items} />;
                    }
                  })}
                </div>

                {/* Footer */}
                <div className="mt-auto border-gray-200 border-t p-4">
                  <div className="flex justify-center space-x-4">
                    <Link
                      href={config.facebookUrl}
                      className="rounded-full bg-blue-100 p-2 text-blue-600 transition-colors hover:bg-blue-200"
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
