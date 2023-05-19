import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'App Router Playground',
  description: 'Next.js app router playground',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Link href="/" className="absolute bottom-4 right-4 p-2 rounded-full bg-slate-100 border">
          Go to main page
        </Link>
      </body>
    </html>
  );
}
