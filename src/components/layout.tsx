import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Banner />
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
