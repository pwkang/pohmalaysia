import { Montserrat } from 'next/font/google';
import type React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

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
    <div className={`flex min-h-screen flex-col ${montserrat.variable} font-sans`}>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
