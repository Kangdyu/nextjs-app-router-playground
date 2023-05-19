import { SideNav } from '@/app/dashboard/components/SideNav';
import { ReactNode } from 'react';

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen">
      <SideNav />
      <section className="ml-72 p-8">{children}</section>
    </main>
  );
}

export default DashboardLayout;
