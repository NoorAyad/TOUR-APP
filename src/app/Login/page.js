"use client";
import Container from "@/Components/Container/Container";
import styles from "./page.module.css";
import Input from "@/Components/Input/Input";
import Button from "@/Components/Button/Button";
import Image from "next/image";
import img from "../../../public/pic6.jpg";
import Signup from "@/Components/Signup/signup";
import Login from "@/Components/login/login";
// import img from "../../../public/undraw_aircraft_re_m05i.svg";
import img2 from "../../../public/logo_aon_210.png";
const page = () => {
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.content}>
  <h3>! يــا هــــــــلا </h3>
        <p> مرحباً بك في تطبيق رحلات <br />
          المكان الذي يمكّنك من اكتشاف جمال العراق وما وراءه  
          انضم إلينا لتصبح جزءاً من مجتمع يربط بين المسافرين وشركات السياحة
          <br /> اختر رحلتك، احجز بسهولة، وشارك تجاربك، لنبني سوياً رحلات تمتلك
           طابعًا ثقافياً استثنائياً
           </p>
  
        <Image src={img} alt={"img"}  className={styles.img} />
 
     
     
      
          
          <div className={styles.Button}>
          
         
                 <Signup />
                 <br/>
              <Login/>
           
        </div>
      </div>
      </Container>
    </main>
  );
};

export default page;
