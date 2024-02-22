"use client";

import styles from "./page.module.css";
import Image from "next/image";
import img from "../../../public/welcomepic.svg";
import Link from "next/link";
const page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h3> يــا هــــــــلا ! </h3>
        <p>
          {" "}
          مرحباً بك في تطبيق رحلات <br />
          المكان الذي يمكّنك من اكتشاف جمال العراق وما وراءه انضم إلينا لتصبح
          جزءاً من مجتمع يربط بين المسافرين وشركات السياحة اختر رحلتك، احجز
          بسهولة، وشارك تجاربك، لنبني سوياً رحلات تمتلك طابعًا ثقافياً
          استثنائياً
        </p>
        <div>
          <Image src={img} alt={"img"} className={styles.img} />
        </div>

        <div className={styles.Button}>
          <Link href={"/Signup"}>
            {" "}
            <button>إنشــاء حســاب</button>
          </Link>
          <Link href={"/Login"}>
            {" "}
            <button>تسجيــل الــدخول</button>
          </Link>
          <Link href={"/Home"}>
            {" "}
            <button>تخــطـــي </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
