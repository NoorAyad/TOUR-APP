"use client";
import React, { useState } from "react";
import Modal from "react-modal";
import Input from "../Input/Input";
import styles from "./signup.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import img from "../../../public/pic3.jpg"
import { RxAvatar } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
const signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },

    content: {
      top: "80%",
      left: "50%",
      height: "fit-content",
      right: "auto",

      marginRight: "-50%",
      backgroundColor: 'white',
      transform: "translate(-50%, -50%)",
      paddingRight: "60px",
      paddingLeft: "50px",
      paddingBottom: "15%",
      paddingTop: "30px",
      transparent: "0.6",
      width: "100%",
      borderTopRightRadius: "150px 250px",
      borderTopLeftRadius: "150px 250px",
  
      
    },
   
  };
  return (
    <div className={styles.popup}>
      
      <Button
        onClick={() => setIsOpen(true)}
        type={"primary"}
        style={{
          width: "90%",
          height: "40px",
          fontWeight: "700",
          textAlign: "center",
          marginRight: "5%",
          marginLeft: "5%",
        }}
      >
     إنشــاء حســاب
      </Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className={styles.header}>
          {/* <button onClick={() => setIsOpen(false)}>X</button> */}
           
      {/* <Image src={img} className={styles.img}/> */}
      <div className={styles.img}>
          <RxAvatar className={styles.image1} />
          <div className={styles.box}>
            <LuUpload className={styles.image2} />
          </div>
          <span className={styles.text}>
            صورة شخصية
          </span>
        </div>
          <h3>خطــوة   <br/>  نحـو العـــالم  </h3>
        </div>
        <Input
          className={styles.input}
          type={"text"}
          placeholder={"اسم المستخدم"}
          style={{ width: "90%", margin: "8px", marginBottom: "20px" }}
        />{" "}
        <hr />
        <Input
          className={styles.input}
          type={"email"}
          placeholder={"بريدك الالكتروني"}
          style={{ width: "90%", margin: "8px", marginBottom: "20px" }}
        />{" "}
        <hr />
        <Input
          className={styles.input}
          placeholder={"+964"}
          style={{ width: "23%", marginRight: "5%", marginBottom: "10px" }}
        />
        <Input
          className={styles.input}
          placeholder={"رقم الهاتف"}
          style={{ width: "60%" }}
        />{" "}
        <hr />
        <Input
          className={styles.input}
          type={"password"}
          placeholder={"كلمة السر"}
          style={{ width: "90%", margin: "8px", marginBottom: "20px" }}
        /> 
        <hr/>
        <Button
          onClick={() => setIsOpen(true)}
          type={"primary"}
          style={{
            width: "90%",
            height: "40px",
            fontWeight: "700",
            textAlign: "center",
            marginRight: "5%",
            marginLeft: "5%",
          }}
        >
          إنشــاء حســاب
        </Button>
      </Modal>
    </div>
  );
};
export default signup;
