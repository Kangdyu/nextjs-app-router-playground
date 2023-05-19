import Image from 'next/image';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
}

export function Avatar({ src, alt, className, ...props }: Props) {
  return (
    <div
      className={`flex justify-center items-center rounded-full border w-12 h-12 overflow-hidden relative ${className}`}
      {...props}
    >
      <Image src={src ?? '/user-avatar-default.png'} alt={alt ?? 'avatar'} fill />
    </div>
  );
}
