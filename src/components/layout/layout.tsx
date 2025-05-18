import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Montserrat } from 'next/font/google';

// Define the Montserrat font with specific subsets
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={`flex flex-col min-h-screen ${montserrat.variable} font-sans`}>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
