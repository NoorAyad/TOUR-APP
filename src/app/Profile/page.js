"use client";
import { BiSolidMessageAltError } from "react-icons/bi";
import Link from "next/link";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";
import styles from "./page.module.css";
import Header from "@/Components/Header/header";
import { BsFillSendFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import Image from "next/image";
import { IoMdLogOut } from "react-icons/io";

import Footer from "@/Components/Footer/footer";
import Container from "@/Components/Container/Container";
import img from "../../../public/pic3.jpg"
import React, { useState } from "react";
import Editable from "@/Components/Editor/editable";
import calender from "../../../public/calendar (1).png"
import settings from "../../../public/machine.png"
 function Profile () {
  const [task, setTask] = useState("");
    return (
<div className={styles.profile}>
    
    <Container>
        <div className={styles.content} >
<div className={styles.header}>
      <div className={styles.pinfo}><h3>لانا اسامة</h3>
      
      <h6>منذ 2024 </h6></div>
      
      <Image src={img} className={styles.img}/>
      </div>
        
        <div className={styles.flex}>
     
      <p>   <Editable
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
    </Editable> <PiPhoneCallFill className={styles.icon}/> </p>
      <p>example@gmail.com<MdMarkEmailUnread className={styles.icon}/></p>
       <p>قسيمة الدفع <RiSecurePaymentLine className={styles.icon}/></p>
        <p>شارك اصدقائك التطبيق<BsFillSendFill className={styles.icon}/></p>
         <p>من نحن<BiSolidMessageAltError className={styles.icon}/></p>
        <p>الاعدادات<Image src={settings} className={styles.calender}/></p>
        <p>رحلاتك السابقة< Image src={calender} className={styles.calender}/></p>
        <p>تسجيل الخروج<IoMdLogOut className={styles.icon}/></p>
</div>
        </div>
    </Container>
    <Header/>
</div>
    );
};
export default Profile;