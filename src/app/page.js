import Image from "next/image";
 
import Link from "next/link";

export default function Home() {
  return (
    <main  >
      <Link href={"/welcome"}>welcome</Link>
      <br />
      <Link href={"/Signup"}>Sign up click here</Link><br/>
      <Link href={"/Home"}>Home Page</Link><br/>
     
      <Link href={"/try"}>try Page</Link><br/>
      <Link href={"/About"}>About </Link><br/>
      <Link href={"/pay"}>PAY </Link><br/>
      <Link href={"/About2"}>About2222 </Link><br/>
   
      <Link href={"/Profile"}>profile </Link><br/>
  
    </main>
  );
}
