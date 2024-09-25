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
}

function NavItem({ name, href }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      key={name}
      href={href}
      className={cn(
        'text-white font-medium font-cn text-center h-full flex items-center hover:bg-blue-500 transition-colors px-4 whitespace-nowrap',
        {
          'bg-blue-500':
            pathname === href || (href !== '/' && pathname.startsWith(href)),
        },
      )}
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

function NavDropdown({ items, name }: NavDropdownProps) {
  const pathname = usePathname();

  return (
    <div className="group relative cursor-pointer">
      <div
        className={cn(
          'text-white gap-2 font-medium font-cn text-center h-full flex items-center group-hover:bg-blue-500 transition-colors px-4 whitespace-nowrap',
          {
            'bg-blue-500': items.some((item) => pathname === item.href),
          },
        )}
      >
        <span>{name}</span>
        <HiChevronDown />
      </div>
      <div className="group-hover:block w-full hidden transition absolute bottom-0 left-0 translate-y-full pt-1 shadow-md rounded-sm">
        <div className="bg-neutral-700">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn('block px-6 py-3 hover:bg-blue-500 text-white', {
                'bg-blue-500': pathname === item.href,
              })}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="flex flex-wrap justify-center h-full gap-[1px]">
      {navItems.map((item) => {
        if (item.href) {
          return <NavItem key={item.name} href={item.href} name={item.name} />;
        }
        if (item.items) {
          return (
            <NavDropdown key={item.name} name={item.name} items={item.items} />
          );
        }
      })}
    </div>
  );
}

export default Menu;
