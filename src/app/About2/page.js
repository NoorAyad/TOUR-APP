"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import pic1 from "../../../public/pic1.jpg";
import pic2 from "../../../public/pic2.jpg";
import pic3 from "../../../public/pic3.jpg";
import Link from "next/link";
import Pic from "../../../public/pic1.jpg";
import Header from "@/Components/Header/header";
import Button from "@/Components/Button/Button";
import Footer from "@/Components/Footer/footer";
import Container from "@/Components/Container/Container";
import Card from "@/Components/Card/card";
import { useRouter } from "next/navigation";
 
import { FaStar } from "react-icons/fa";
const Page = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  function showSlides() {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
  }
  const router = useRouter();
  return (
    <div className={styles.about}>  
    <Header />
      <div className={styles.content}>
      
        <Container>
          <div className={styles.slideshowcontainer}>
            <div className={` ${slideIndex === 0 ? "" : styles.mySlides} `}>
              <div className={styles.div}>
                <div className={styles.numbertext}>1 / 3</div>
                <Image src={pic1} alt="Nature" className={styles.img} />
                <div className={styles.text}>Caption Text</div>
              </div>
            </div>

            <div className={` ${slideIndex === 1 ? "" : styles.mySlides}`}>
              <div className={styles.div}>
                <div className={styles.numbertext}>2 / 3</div>
                <Image src={pic2} alt="Snow" className={styles.img} />
                <div className={styles.text}>Caption Two</div>
              </div>
            </div>

            <div className={`   ${slideIndex === 2 ? "" : styles.mySlides}`}>
              <div className={styles.div}>
                {" "}
                <div className={styles.numbertext}>3 / 3</div>
                <Image src={pic3} alt="Mountains" className={styles.img} />
                <div className={styles.text}>Caption Three</div>
              </div>
            </div>
          </div>
          <br />

          <div style={{ textAlign: "center" }}>
            <span
              className={`${styles.dot} ${
                slideIndex === 0 ? styles.active : ""
              }`}
            >
              {" "}
              <Image src={pic1} alt="Snow" className={styles.img2} />
            </span>
            <span
              className={`${styles.dot} ${
                slideIndex === 1 ? styles.active : ""
              }`}
            >
              {" "}
              <Image src={pic2} alt="Snow" className={styles.img2} />
            </span>

            <span
              className={`${styles.dot} ${
                slideIndex === 2 ? styles.active : ""
              }`}
            >
              {" "}
              <Image src={pic3} alt="Snow" className={styles.img2} />
            </span>
          </div>
          <div className={styles.header}>
          <h3>اسطنبول</h3> <h3><ff>$350</ff></h3></div>
          <p>
            <span> <FaStar /><FaStar/><FaStar/><FaStar/><FaStar/><FaStar className={styles.star}/><FaStar className={styles.star}/></span> <br />
           
 تاريخ الرحلة <br />
            03/22-03/30 <br />
          </p>

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
            <h5> شركة ارض الرافدين</h5>
            
            <h5>07712345678</h5>
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
      
          <div className={styles.Button}>
          <Link href={"/Signup"}>
            {" "}
            <button>حجــز </button>
          </Link>
          
          
          </div>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
