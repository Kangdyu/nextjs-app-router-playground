import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface Props extends LinkProps {
  children: ReactNode;
}

export function Anchor({ children, ...props }: Props) {
  return (
    <Link className="text-blue-500 hover:underline mt-4" {...props}>
      {children}
    </Link>
  );
}
