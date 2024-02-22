"use client";
import { useInfo } from "@/globalVars";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { json } from "react-router-dom";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [res, setRes] = useState("");
  const [error, setError] = useState(false);
  const { setNumber, number, setPassword, password } = useInfo();
  const Login = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      phoneNum: number,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "https://tourism-api-6hcg.onrender.com/tourism-api/v1/user/login",
        requestOptions
      );
      const result = await response.json();
      if (result.success) {
        localStorage.setItem("tourismToken", result.token);
        setRes(result.user);
        console.log(result.user);
        const userInfo = JSON.stringify(result.user);
        localStorage.setItem("userInfo", useInfo);
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
      redirect("/");
    }
    if (res !== "") {
      localStorage.setItem("visited", true);
      console.log(res);
      redirect("/");
    }
  }, [res]);

  return (
    <main className={isLoading ? styles.main : null}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={!isLoading ? styles.container : styles.loading}>
          <div className={styles.heading}>تسجيــل الــدخول</div>
          <div className={styles.form}>
            <input
              required
              maxLength="11"
              onChange={(e) => setNumber(e.target.value)}
              type={"text"}
              className={styles.input}
              placeholder="رقم الهاتف"
            />
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              type="password"
              placeholder="كلمـة الســر "
            />
            <input
              className={styles.login_button}
              type="submit"
              value="دخـول"
              onClick={() => {
                if (number !== "" && password !== "") {
                  setIsLoading(true);
                  Login();
                } else {
                }
              }}
            />
          </div>
          <div className={styles.msg}>
            <p style={error === false ? { display: "none" } : null}>
              رقم هاتف او كلمة مرور غير صحيحة
            </p>
          </div>
          <div className={styles.linkBox}>
            <div>
              <p>او قم بانشاء</p>
              <Link href="/Signup">حساب جديد</Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default page;
