'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { navItems } from '@lib/navigation';
import { HiChevronDown } from 'react-icons/hi';

interface NavItemProps {
  name: string;
  href: string;
  scrolled: boolean;
}

function NavItem({ name, href, scrolled }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        'font-medium font-cn text-center flex items-center transition-all duration-300 px-4 py-2 mx-1 whitespace-nowrap text-sm relative group',
        {
          // Light mode (scrolled)
          'text-blue-900': scrolled && isActive,
          'text-neutral-700 hover:text-blue-700': scrolled && !isActive,

          // Dark mode (not scrolled)
          'text-white': !scrolled && isActive,
          'text-white/90 hover:text-white': !scrolled && !isActive,
        },
      )}
    >
      {name}
      <span className={cn(
        'absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300',
        {
          'bg-blue-500 scale-x-100': isActive,
          'bg-blue-400': !isActive,
        }
      )} />
    </Link>
  );
}

interface NavDropdownProps {
  name: string;
  items: {
    name: string;
    href: string;
  }[];
  scrolled: boolean;
}

function NavDropdown({ items, name, scrolled }: NavDropdownProps) {
  const pathname = usePathname();
  const isActive = items.some((item) => pathname === item.href);

  return (
    <div className="group relative">
      <div
        className={cn(
          'font-medium font-cn text-center flex items-center transition-all duration-300 px-4 py-2 mx-1 gap-1 whitespace-nowrap text-sm cursor-pointer relative group',
          {
            // Light mode (scrolled)
            'text-blue-900': scrolled && isActive,
            'text-neutral-700 hover:text-blue-700': scrolled && !isActive,

            // Dark mode (not scrolled)
            'text-white': !scrolled && isActive,
            'text-white/90 hover:text-white': !scrolled && !isActive,
          },
        )}
      >
        <span>{name}</span>
        <HiChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
        <span className={cn(
          'absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300',
          {
            'bg-blue-500 scale-x-100': isActive,
            'bg-blue-400': !isActive,
          }
        )} />
      </div>
      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 absolute left-0 pt-2 min-w-[200px] z-50">
        <div className={cn(
          'rounded-lg shadow-xl overflow-hidden border',
          scrolled ? 'bg-white/95 backdrop-blur-sm border-gray-100' : 'bg-white/10 backdrop-blur-md border-white/10'
        )}>
          {items.map((item) => {
            const isItemActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block px-6 py-3 transition-all duration-300 text-sm relative group/item',
                  {
                    // Light mode (scrolled)
                    'text-blue-900 bg-blue-50': scrolled && isItemActive,
                    'text-neutral-700 hover:bg-gray-50 hover:text-blue-700': scrolled && !isItemActive,

                    // Dark mode (not scrolled)
                    'text-white bg-white/20': !scrolled && isItemActive,
                    'text-white/90 hover:bg-white/10 hover:text-white': !scrolled && !isItemActive,
                  }
                )}
              >
                <span className="relative z-10">{item.name}</span>
                <span className={cn(
                  'absolute left-0 top-0 h-full w-1 bg-blue-500 transition-all duration-300',
                  {
                    'opacity-100': isItemActive,
                    'opacity-0 group-hover/item:opacity-100': !isItemActive,
                  }
                )} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface MenuProps {
  scrolled: boolean;
}

function Menu({ scrolled }: MenuProps) {
  return (
    <div className="flex items-center justify-center">
      {navItems.map((item) => {
        if (item.href) {
          return <NavItem key={item.name} href={item.href} name={item.name} scrolled={scrolled} />;
        }
        if (item.items) {
          return (
            <NavDropdown key={item.name} name={item.name} items={item.items} scrolled={scrolled} />
          );
        }
      })}
    </div>
  );
}

export default Menu;
