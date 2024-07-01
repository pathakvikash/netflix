import { Inter } from 'next/font/google';
import './globals.css';
import { lazy } from 'react';
import { UserProvider } from '@/contexts/UserContext';
const inter = Inter({ subsets: ['latin'] });
const Footer = lazy(() => import('../components/Footer'));
const Nav = lazy(() => import('../components/Nav'));
export const metadata = {
  title: 'Netflix',
  description: 'A Netflix clone',
  keywords: ['netflix', 'clone', 'nextjs'],
};

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Netflix</title>
      </head>

      <UserProvider>
        <body className={inter.className}>
          <Nav />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}

export default RootLayout;
