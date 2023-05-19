import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold pb-9">App routing playground home</h1>
      <ul className="flex flex-col text-2xl">
        <li className="hover:underline">
          <Link href="/dashboard">Dashboard &gt;</Link>
        </li>
      </ul>
    </main>
  );
}
