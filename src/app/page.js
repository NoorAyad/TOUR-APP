import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main  >
      <Link href={"/Login"}>Login click here</Link>
      <br />
      <Link href={"/Signup"}>Sign up click here</Link>
      <Link href={"/Home"}>/Home Page</Link>
  
    </main>
  );
}