import '../styles/globals.css';
import { Inter } from '@next/font/google';
import MainHeader from '../components/MainHeader';

const inter = Inter({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className}>
      <head></head>
      <body>
        <MainHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
