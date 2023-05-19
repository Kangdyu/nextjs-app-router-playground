'use client';

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-4 items-center">
      <button
        className="border rounded-full bg-slate-200 w-8 h-8"
        onClick={() => setCount((c) => c - 1)}
      >
        -
      </button>
      <span className="font-bold">{count}</span>
      <button
        className="border rounded-full bg-slate-200 w-8 h-8"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
    </div>
  );
}
