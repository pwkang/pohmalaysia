import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
