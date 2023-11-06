'use client';

import '../styles/globals.css';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';

import Navbar from '@/components/Layout/navbar';
import Footer from '@/components/Layout/footer';
export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showNavbar = !pathname.includes('auth') && !pathname.includes('user');
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ThemeProvider enableSystem={true} attribute='class'>
          {showNavbar && <Navbar />}
          <div
            className={`${
              pathname !== '/' ? 'mt-20 smLaptop:mt-24' : ''
            } bg-homepage/50 dark:bg-grey`}
          >
            {children}
          </div>
          {showNavbar && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}
