import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/welcome"}>welcome</Link>
      <br />
      <Link href={"/Signup"}>Sign up </Link>
      <br />
      <Link href={"/Login"}>login </Link>
      <br />
      <Link href={"/Home"}>Home Page</Link>
      <br />
      <Link href={"/About"}>about</Link>
      <br />

      <Link href={"/Profile"}>profile </Link>
      <br />
      <Link href={"/pay"}>PAY </Link>

      <br />
    </main>
  );
}
