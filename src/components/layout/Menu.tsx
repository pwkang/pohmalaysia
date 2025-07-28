'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiChevronDown } from 'react-icons/hi';
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
      className={cn(
        'group relative mx-1 flex items-center whitespace-nowrap px-4 py-2 text-center font-cn font-medium text-sm transition-all duration-300',
        {
          'text-blue-900': isActive,
          'text-neutral-700 hover:text-blue-700': !isActive,
        },
      )}
    >
      {name}
      <span
        className={cn(
          'absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform transition-transform duration-300 group-hover/item:scale-x-100',
          {
            'scale-x-100 bg-blue-500': isActive,
            'bg-blue-400': !isActive,
          },
        )}
      />
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
  const isActive = items.some((item) => pathname === item.href);

  return (
    <div className="group/item relative">
      <div
        className={cn(
          'group relative mx-1 flex cursor-pointer items-center gap-1 whitespace-nowrap px-4 py-2 text-center font-cn font-medium text-sm transition-all duration-300',
          {
            'text-blue-900': isActive,
            'text-neutral-700 hover:text-blue-700': !isActive,
          },
        )}
      >
        <span>{name}</span>
        <HiChevronDown className="transition-transform duration-300 group-hover/item:rotate-180" />
        <span
          className={cn(
            'absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform transition-transform duration-300 group-hover/item:scale-x-100',
            {
              'scale-x-100 bg-blue-500': isActive,
              'bg-blue-400': !isActive,
            },
          )}
        />
      </div>
      <div className="invisible absolute left-0 z-50 min-w-[200px] translate-y-2 pt-2 opacity-0 transition-all duration-300 group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100">
        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white/95 shadow-xl backdrop-blur-sm">
          {items.map((item) => {
            const isItemActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'group/dropdown-item group/item relative block px-6 py-3 text-sm transition-all duration-300',
                  {
                    'bg-blue-50 text-blue-900': isItemActive,
                    'text-neutral-700 hover:bg-gray-50 hover:text-blue-700': !isItemActive,
                  },
                )}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className={cn(
                    'absolute top-0 left-0 h-full w-1 bg-blue-500 transition-all duration-300',
                    {
                      'opacity-100': isItemActive,
                      'opacity-0 group-hover/dropdown-item:opacity-100': !isItemActive,
                    },
                  )}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {navItems.map((item) => {
        if (item.href) {
          return <NavItem key={item.name} href={item.href} name={item.name} />;
        }
        if (item.items) {
          return <NavDropdown key={item.name} name={item.name} items={item.items} />;
        }
      })}
    </div>
  );
}

export default Menu;
