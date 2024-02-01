'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import { navItems } from '@lib/navigation';

function Menu() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap justify-center h-full">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            'text-white font-medium font-cn text-center h-full flex items-center hover:bg-blue-500 transition-colors px-4 whitespace-nowrap',
            {
              'bg-blue-500': pathname === item.href,
            },
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Menu;
