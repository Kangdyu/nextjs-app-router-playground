'use client';

import { Avatar } from '@/components/Avatar';
import { Counter } from '@/components/Counter';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ROUTES = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'dashboard',
    href: '/dashboard',
  },
  {
    name: 'users',
    href: '/dashboard/users',
  },
  {
    name: 'articles',
    href: '/dashboard/articles',
  },
];

export function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col min-h-screen fixed border-r w-72 p-8 gap-4">
      <div className="flex items-center">
        <Avatar className="mr-4" />
        <span className="text-lg">User</span>
      </div>

      {/* Counter state will be preserved if SideNav is in layout.tsx
       * When using template.tsx instead of layout.tsx, counter state will be reset.
       * https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates
       */}
      <Counter />

      <ul className="w-full">
        {ROUTES.map((route) => (
          <li key={route.href} className="w-full border-b hover:bg-slate-50">
            <Link
              href={route.href}
              className={`w-full p-4 block ${
                pathname === route.href ? 'text-blue-500' : 'text-black'
              }`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
