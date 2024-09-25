'use client';

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import cn from 'classnames';
import { Portal } from '@radix-ui/react-portal';
import { AnimatePresence, motion } from 'framer-motion';
import { GoX } from 'react-icons/go';
import { navItems } from '@lib/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi';
import * as Accordion from '@radix-ui/react-accordion';

interface NavItemProps {
  name: string;
  href: string;
}

function NavItem({ name, href }: NavItemProps) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn('text-white w-full p-4 hover:bg-blue-500', {
        'bg-blue-500':
          pathname === href || (href !== '/' && pathname.startsWith(href)),
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
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value={name}>
        <Accordion.Trigger className="text-white w-full p-4 hover:bg-blue-500 cursor-pointer flex justify-between items-center">
          <span>{name}</span>
          <HiChevronDown />
        </Accordion.Trigger>
        <Accordion.Content className="ps-4 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
          {items.map((item) => (
            <Accordion.Item value={item.name} asChild key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  'block text-white w-full p-4 hover:bg-blue-500',
                  {},
                )}
              >
                {item.name}
              </Link>
            </Accordion.Item>
          ))}
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
      <div className="relative">
        <span
          className="text-white block md:hidden cursor-pointer hover:text-blue-500"
          onClick={toggle}
        >
          <AiOutlineMenu size={28} />
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <Portal asChild>
            <div className="block md:hidden">
              <motion.div
                className="fixed top-0 left-0 w-screen h-screen bg-black/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                className={cn(
                  'fixed top-0 left-0 transition-all z-[9999] ease-linear',
                )}
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{
                  duration: 0.3,
                }}
              >
                <div className="w-64 h-screen bg-black/85">
                  <div className="flex justify-end w-full p-6">
                    <span
                      className="text-white cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      <GoX size={32} />
                    </span>
                  </div>
                  <div className="flex flex-col p-4">
                    {navItems.map((item) => {
                      if (item.href)
                        return (
                          <NavItem
                            key={item.name}
                            href={item.href}
                            name={item.name}
                          />
                        );

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
