'use client';

import '../styles/globals.css';
import { Inter } from '@next/font/google';
import MainHeader from '../components/MainHeader';
import { useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <html className={inter.className}>
      <head></head>
      <body className={`${mobileMenu ? 'overflow-hidden' : 'overflow-auto'}`}>
        <MainHeader mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <main>{children}</main>
      </body>
    </html>
  );
}
