import { Nav } from '@/app/route-group/components/Nav/Nav';
import { Counter } from '@/components/Counter';
import { ReactNode } from 'react';

function ListGroupLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <span>list group layout</span>
      <Counter />
      <div className="border p-4">{children}</div>
      <Nav />
    </div>
  );
}

export default ListGroupLayout;
