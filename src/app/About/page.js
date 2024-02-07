"use client";
import Link from "next/link";
import Image from "next/image";
import Pic from "../../../public/pic1.jpg";
import styles from "./page.module.css";
import Header from "@/Components/Header/header";
import Button from "@/Components/Button/Button";
import Footer from "@/Components/Footer/footer";
import Container from "@/Components/Container/Container";
import Card from "@/Components/Card/card";
function About() {
  return (
    <div className={styles.about}>
      <Header />
      <Container>
        <div className={styles.content}>
          <div className={styles.Cards}>
            <Image src={Pic} className={styles.img} />

            <Image src={Pic} className={styles.img} />
            <Image src={Pic} className={styles.img} />
          </div>
          <p>
            {" "}
            اسطنبول (200$) <br />
            ⭐⭐⭐⭐⭐ <br />
            🕑 03/22-03/30 <br /> ⚆_⚆ عدد التذاكر المتبقية
          </p>

          <h3> مع شركة ارض الرافدين</h3>
          <p>
            استعد لرحلة ساحرة إلى إسطنبول، حيث ينتظرك تاريخ غني وثقافة فريدة. في
            اليوم الأول، استمتع بزيارة آيا صوفيا وجامع السلطان أحمد، وتسوق في
            بازار البهكتشي. يومك الثاني يتيح لك استكشاف قصر توبكابي ومتحف الآثار
            الفنية. اليوم الثالث، انطلق في رحلة بحرية وقم بزيارة قرية الصيد
            أورتاكوي. أختتم رحلتك بالتسوق في حي تقسيم والاستمتاع بحياة ليلية
            نابضة. يوم الخامس يخصص للاسترخاء في الحمامات التركية وجولة تسوق في
            البازار الكبير. استمتع بتنوع إسطنبول وتجربة لا تُنسى.
          </p>
          <div className={styles.Compdtlz}>
            <p>للتواصل مع الطاقم المنظم للرحلة </p>
            <h3>07712345678</h3>
            <Link href={"/"}>Facebook</Link>
          </div>
          <div className={styles.tid1}>
            <p>المقاعد المتبقية </p>
            <p> عدد الاشخاص</p>
          </div>
          <div className={styles.tid2}>
            <span>9</span>
            <div className={styles.counter}>
              <button>+</button>
              <span>6</span>
              <button>-</button>
            </div>
          </div>
          <div className={styles.tid3}>
            <Button
              type={"primary"}
              style={{
                width: "70%",
                margin: "8px",
                height: "40px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              احجز
            </Button>  
             
          </div>
        </div>
        
      </Container>
     
    </div>
  );
}
export default About;
