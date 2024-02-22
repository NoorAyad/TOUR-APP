"use client";
import Container from "@/Components/Container/Container";
import styles from "./page.module.css";
import Form1 from "@/Components/Form/Form1";
import pic3 from "../../../public/authentication.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInfo } from "@/globalVars";
import React from "react";
import OtpInput from "react-otp-input";
import { redirect } from "next/navigation";

function page() {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [steps, setSteps] = useState(1);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(null);
  const {
    number,
    setNumber,
    email,
    setEmail,
    setPassword,
    password,
    name,
    image,
  } = useInfo();

  const signup = async () => {
    const formdata = new FormData();
    formdata.append("foo", image, URL.createObjectURL(image));
    formdata.append("name", name);
    formdata.append("phoneNum", number);
    formdata.append("email", email);
    formdata.append("password", password);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://tourism-api-6hcg.onrender.com/tourism-api/v1/user/signup",
        requestOptions
      );

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("userInfo", JSON.stringify(result.user[0]));
        console.log("test:", localStorage.getItem("userInfo"));
        setUser(result.user[0]);
        setIsLoading(false);
        setSteps(3);
      } else {
        setError(true);
        setIsLoading(false);
        console.error(result.message);
        setSteps(2);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(true);
      setSteps(2);
    }
  };

  const verify = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      otp: otp,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const id = JSON.parse(localStorage.getItem("userInfo"));
      console.log(id.userid);
      const response = await fetch(
        `https://tourism-api-6hcg.onrender.com/tourism-api/v1/user/verify/${id.userid}`,
        requestOptions
      );
      const result = await response.json();
      if (result.success) {
        localStorage.setItem("tourismToken", result.token);
        setVerified(result);
        setIsLoading(false);
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const tourismToken =
      typeof window !== "undefined"
        ? localStorage.getItem("tourismToken")
        : false;
    if (tourismToken) {
      localStorage.setItem("visited", true);
      redirect("/Home");
    }
    if (verified !== null) {
      localStorage.setItem("visited", true);
      redirect("/Home");
    }
  }, [verified]);

  return (
    <main className={!isLoading ? styles.main : styles.loading}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
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
                <div className={styles.form}>
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
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    type="password"
                    name=""
                    id=""
                    placeholder="كلمـة الســر "
                  />

                  <span className={styles.span}>
                    إضــغــط على زر الإرســال ليصلك رمز التأكيـــد على بريدك{" "}
                  </span>
                  <button
                    onClick={() => {
                      if (number !== "" && email !== "" && password !== "") {
                        signup();
                        setIsLoading(true);
                      }
                    }}
                    className={styles.login_button}
                    style={{
                      backgroundColor:
                        number !== "" && email !== "" && password !== ""
                          ? "#00a0b1"
                          : "#009fb18f",
                      borderColor:
                        number !== "" && email !== "" && password !== ""
                          ? "#00a0b1"
                          : "#fff",
                    }}
                    name="send"
                    id="send"
                    type="submit"
                    value="إرســـال"
                  >
                    إرســـال
                  </button>
                </div>
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
                          alt={"image"}
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
                        onChange={(otp) => setOtp(otp)}
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
                            verify();
                            setIsLoading(true);
                          }
                        }}
                        name="varify"
                        id="varify"
                        className={styles.login_button}
                        style={{
                          backgroundColor: otp !== "" ? "#00a0b1" : "#009fb18f",
                          borderColor: password !== "" ? "#00a0b1" : "#fff",
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
                  backgroundColor:
                    name && image !== "" ? "#00a0b1" : "#009fb18f",
                  borderColor: name && image !== "" ? "#00a0b1" : "#fff",
                }}
              >
                التالي
              </button>
            </div>
          ) : null}
        </>
      )}
    </main>
  );
}

export default page;
