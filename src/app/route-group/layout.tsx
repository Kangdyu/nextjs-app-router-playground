import { Anchor } from '@/app/route-group/components/Anchor';
import { Counter } from '@/components/Counter';
import { ReactNode } from 'react';

function RouteGroupLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <span>route group layout</span>
      <Counter />
      <div className="border p-4">{children}</div>
      <Anchor href="/route-group">home</Anchor>
    </div>
  );
}

export default RouteGroupLayout;
