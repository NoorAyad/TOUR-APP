"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/Components/Header/header";
import Image from "next/image";
import Footer from "@/Components/Footer/footer";
import Container from "@/Components/Container/Container";
import Card from "@/Components/Card/card";
import pic1 from "../../../public/pic1.jpg"
import pic2 from "../../../public/pic2.jpg";
import pic3 from "../../../public/pic3.jpg";
import pic4 from "../../../public/plane.png";
import pic5 from "../../../public/beach.png";
import pic6 from "../../../public/praying.png";

import { usePathname } from 'next/navigation'

function page() {  
  const pathname = usePathname()
  return (
    <main className={styles.home}>
      <Header currentPath= {pathname} />
      <Container>
       <div className={styles.content} >
         

 
        <div className={styles.section}  >        
          <p >رحلة سياحية</p>

          <div className={styles.Cards}>
          <Link href={"/About"}><Card Pic={pic3}   /></Link>
             <Link href={"/About"}><Card Pic={pic2} /></Link>
             <Link href={"/About"}><Card Pic={pic1}/></Link>
          <Link href={"/About"}><Card Pic={pic3}/></Link>
             <Link href={"/About"}><Card Pic={pic2}/></Link>
             <Link href={"/About"}><Card Pic={pic1}/></Link>
          <Link href={"/About"}><Card Pic={pic3}/></Link>
             <Link href={"/About"}><Card Pic={pic2}/></Link>
             <Link href={"/About"}><Card Pic={pic1}/></Link>
            
          
          </div>
        </div>
    
        <div className={styles.section}>
          <p>رحلة دينية</p>
          <div className={styles.Cards}>
          <Link href={"/About"}><Card Pic={pic3}/></Link>
             <Link href={"/About"}><Card Pic={pic2}/></Link>
             <Link href={"/About"}><Card Pic={pic1}/></Link>
          <Link href={"/About"}><Card Pic={pic3}/></Link>
             <Link href={"/About"}><Card Pic={pic2}/></Link>
             <Link href={"/About"}><Card Pic={pic1}/></Link>
          <Link href={"/About"}><Card Pic={pic3}/></Link>
             <Link href={"/About"}><Card Pic={pic2}/></Link>
             <Link href={"/About"}><Card Pic={pic1}/></Link>
          </div>
        </div>
      
        <div className={styles.section}>
          <p>احجز تذكرة </p>
          <div className={styles.Cards}>
          <Link href={"/About"}><Card Pic={pic3}/></Link>
             <Link href={"/About"}><Card Pic={pic2}/></Link>
             <Link href={"/About"}><Card Pic={pic1}/></Link>
          <Link href={"/About"}><Card Pic={pic3}/></Link>
             <Link href={"/About"}><Card Pic={pic2}/></Link>
             <Link href={"/About"}><Card Pic={pic1}/></Link>
          <Link href={"/About"}><Card Pic={pic3}/></Link>
             <Link href={"/About"}><Card Pic={pic2}/></Link>
             <Link href={"/About"}><Card Pic={pic1}/></Link>
          </div>
        </div>
       
         </div>
      </Container>
     <Footer  currentPath= {pathname} />
    </main>
  );
}
export default page;
