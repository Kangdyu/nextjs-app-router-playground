import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold pb-9 text-center">App Routing Playground</h1>
      <ul className="flex flex-col text-2xl">
        <li className="flex flex-col gap-4">
          <Link href="/dashboard" className="hover:underline">
            &gt; Dashboard
          </Link>
          <Link href="/route-group" className="hover:underline">
            &gt; Route Group
          </Link>
        </li>
      </ul>
    </main>
  );
}
