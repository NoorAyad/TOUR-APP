"use client";
import { IoArrowBackCircle } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSolidMessageAltError } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import Container from "@/Components/Container/Container";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import img from "../../../public/pic3.jpg";
import React, { useState } from "react";
import Editable from "@/Components/Editor/editable";
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
 
function Profile() {   const router = useRouter();
 
  return (
    <div className={styles.profile}>
      <Container>
        <div className={styles.content}>


     
 

  
 
          <button
            type="button"
            className={styles.back}
            onClick={() => router.back()}
          >
            <IoArrowBackCircle />
          </button>
          <div className={styles.header}>
            <div className={styles.pinfo}>
            <Image src={img} className={styles.img} alt={'image'} />
              <h3>لانا اسامة</h3>

              <h6>منذ 2024 </h6>
            </div>

          </div>

          <div className={styles.flex}>
            {/* <p>   <Editable
      text={task}
      placeholder="Mobile Number ✏️"
      type="text"
    >
      <input
        type="text"
        name="task"
        placeholder="Mobile Number ✏️"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
    </Editable> <PiPhoneCallFill className={styles.icon}/> </p> */}
            <p>
            
              <PiPhoneCallFill className={styles.icon} />  07715291073
            </p>
            <p>  <MdMarkEmailUnread className={styles.icon} />
              example@gmail.com
            
            </p>
            <p>
          <RiSecurePaymentLine className={styles.icon} />    قسيمة الدفع 
            </p>
            <p>     <BsFillSendFill className={styles.icon} />
              شارك اصدقائك التطبيق
         
            </p>
            <p>  <BiSolidMessageAltError className={styles.icon} />
              من نحن
            
            </p>
            <p><LuCalendarClock className={styles.icon} />
              رحلاتك السابقة
              
            </p>
            <p>    <IoSettings className={styles.icon} />
              الاعدادات
          
            </p>
            <p>  <IoMdLogOut className={styles.icon} />
              تسجيل الخروج
            
            </p>
          </div>
        </div>
      </Container>
 
    </div>
  );
}
export default Profile;
