"use client";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/Components/Header/header";
import Footer from "@/Components/Footer/footer";
import Container from "@/Components/Container/Container";
import Card from "@/Components/Card/card";
import pic1 from "../../../public/pic1.jpg";
import pic2 from "../../../public/pic2.jpg";
import pic3 from "../../../public/pic3.jpg";
import pic4 from "../../../public/plane.png";
import pic5 from "../../../public/beach.png";
import pic6 from "../../../public/praying.png";
import Image from "next/image";
function page1() {
  return (
    <main className={styles.home}>
      <Header />
      <Container>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.content}>
             
           
                  <Link href={"/About"}>
                    <Card Pic={pic3} />
                  </Link>
            </div>
          </div> <div className={styles.col}>
            <div className={styles.content}>
             
                  <Link href={"/About"}>
                    <Card Pic={pic2} />
                  </Link>
            </div>
          </div> <div className={styles.col}>
            <div className={styles.content}>
             
                  <Link href={"/About"}>
                    <Card Pic={pic1} />
                  </Link>
            </div>
          </div> <div className={styles.col}>
            <div className={styles.content}>
             
                  <Link href={"/About"}>
                    <Card Pic={pic3} />
                  </Link>
            </div>
          </div> <div className={styles.col}>
            <div className={styles.content}>
             

                  <Link href={"/About"}>
                    <Card Pic={pic1} />
                  </Link>
            </div>
          </div> <div className={styles.col}>
            <div className={styles.content}>
             
                  <Link href={"/About"}>
                    <Card Pic={pic1} />
                  </Link>
          
            </div>
          </div>
        </div>

        {/* <div className={styles.section}>
          <div className={styles.Cardss}>
            <Link href={"/About"} className={styles.d1}>
              <Image src={pic4} /> <h6>تذاكر</h6>{" "}
            </Link>
            <Link href={"/About"} className={styles.d2}>
              <Image src={pic5} /> <h6>سياحة</h6>
            </Link>
            <Link href={"/About"} className={styles.d3}>
              <Image src={pic6} />
              <h6>زيارة</h6>
            </Link>
          </div>
        </div> */}
      </Container>
    </main>
  );
}
export default page1;
