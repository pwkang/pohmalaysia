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
      <div className="mb-12">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
