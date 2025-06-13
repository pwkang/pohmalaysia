'use client';

import { ReactNode, useEffect, useState } from 'react';

interface NavHeaderProps {
  children: ReactNode;
}

export default function NavHeader({ children }: NavHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div data-scrolled={scrolled} className="group">
      { children}
    </div>
  );
}
