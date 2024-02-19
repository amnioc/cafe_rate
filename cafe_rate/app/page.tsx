import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>This will be homepage</h1>
      <Link href="/cafes">Caf List</Link>
    </main>
  );
}
