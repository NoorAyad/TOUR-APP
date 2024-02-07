"use client";
import Container from "@/Components/Container/Container";
import styles from "./page.module.css";
import Form1 from "@/Components/Form/Form1";
import Button from "@/Components/Button/Button";
import pic3 from "../../../public/authentication.svg";
import Image from "next/image";
import { useState } from "react";
import { useInfo } from "@/globalVars";
import React from "react";
import OtpInput from "react-otp-input";
function page() {
  const [match, setMatch] = useState("");
  const [check, setCheck] = useState(false);

  const [steps, setSteps] = useState(1);
  const [otp, setOtp] = useState("");
  const {
    number,
    setNumber,
    email,
    setEmail,
    setPassword,
    Password,
    name,
    image,
  } = useInfo();

  return (
    <main className={styles.main}>
      <div
        className={styles.progress}
        style={{
          width:
            steps === 1
              ? "33.33%"
              : steps === 2
              ? "66.67%"
              : steps === 3
              ? "100%"
              : "33.33%",
          display: steps > 3 ? "none" : null,
        }}
      ></div>

      <div className={styles.content}>
        {steps === 1 ? (
          <Form1 />
        ) : steps === 2 ? (
          <div className={styles.container}>
            <div className={styles.heading}>إنـشــاء حـســـاب</div>
            <form action="" className={styles.form} autoComplete="">
              <input
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type={"email"}
                className={styles.input}
                name="email"
                id="email"
                placeholder="بريدك الإلكتروني"
              />

              <input
                required=""
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className={styles.input}
                type="tel"
                name="mobile"
                id="mobile"
                placeholder="رقم الهاتف"
              />
              <input
            
                required=""
                onChange={(e) => setMatch(e.target.value)}
                className={styles.input}
                type="password"
                name=""
                id=""
                placeholder="كلمـة الســر "
              />
              <input
           
                required=""
                onChange={(e) => {
                  if (e.target.value === match) {
                    setPassword(match);
                    setCheck(true);
                  }
                }}
                className={styles.input}
                type="password"
                name=""
                id=""
                // style={{
                //   outline:
                //     check !== true && Password != "" ? "red solid 1px" : "none",
                // }}
                placeholder="اعد ادخال كلمة السـر "
              />

              <span className={styles.span}>
                إضــغــط على زر الإرســال ليصلك رمز التأكيـــد على بريدك{" "}
              </span>
              <input
                onClick={() => {
                  if (number !== "" && email !== "" && Password !== "") {
                    setSteps(steps + 1);
                    const info = { number, email,Password};
                  } else {
                    alert(
                      `user with this information: no match
                       `
                    );
                    setSteps(steps);
                  }
                }}
                className={styles.login_button}
                style={{
                  backgroundColor:
                    number !== "" &&
                    email !== "" &&
                    Password !== "" 
                    
                      ? "#00a0b1"
                      : "#009fb18f",
                  borderColor:
                    number !== "" && email !== "" && Password !== ""
                      ? "#00a0b1"
                      : "#fff",
                }}
                name="send"
                id="send"
                type="submit"
                value="إرســـال"
              />
            </form>
          </div>
        ) : (
          <div>
            <Container>
              <div className={styles.container}>
                <form className={styles.form}>
                  <div className={styles.heading2}>توثــيـق</div>
                  <div className={styles.img}>
                    {" "}
                    <Image
                      src={pic3}
                      className={styles.check2}
                      name="img"
                      id="img"
                    />
                  </div>
                  <span className={styles.span}>ادخل رمز التأكيـــد </span>
                  <OtpInput
                    containerStyle={{
                      display: "block",
                      textAlign: "center",
                      margin: "auto",
                      width: "100%",
                      backgroundColor: "white",
                      border: "none",
                      paddingBlock: "15px",
                      borderRadius: "20px",
                      marginTop: " 58px",
                      webkitBoxShadow: "#00a0b154 0px 10px 10px -5px",
                      boxShadow: " #00a0b154 0px 10px 10px -5px",
                      position: "relative",

                      caretColor: "#00a0b1",
                      color: "red",
                      direction: "ltr",
                    }}
                    value={otp}
                    required=""
                    onChange={setOtp}
                    numInputs={6}
                    renderInput={(props) => (
                      <input
                        {...props}
                        className={styles.OtpInput}
                        placeholder={""}
                        required=""
                      />
                    )}
                  />
                  <button
                    onClick={() => {
                      if (otp !== "") {
                        setSteps(steps + 1);
                        const info = { otp };
                      }
                    }}
                    name="varify"
                    id="varify"
                    className={styles.login_button}
                    style={{
                      backgroundColor: otp !== "" ? "#00a0b1" : "#009fb18f",
                      borderColor: Password !== "" ? "#00a0b1" : "#fff",
                    }}
                    type="submit"
                  >
                    تأكــيد
                  </button>
                </form>
              </div>
            </Container>
          </div>
        )}
      </div>
      {steps === 1 ? (
        <div className={styles.divnext}>
          <button
            onClick={() => {
              if (name && image !== "") {
                setSteps(steps + 1);
              }
            }}
            className={styles.next}
            style={{
              backgroundColor: name && image !== "" ? "#00a0b1" : "#009fb18f",
              borderColor: name && image !== "" ? "#00a0b1" : "#fff",
            }}
          >
            التالي
          </button>
        </div>
      ) : null}
    </main>
  );
}

export default page;
