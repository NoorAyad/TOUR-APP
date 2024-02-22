"use client";
import styles from "./page.module.css";

const page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.heading}>تسجيــل الــدخول</div>
        <form action="" className={styles.form} autoComplete="">
          <input
            required=""
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            className={styles.input}
            name="email"
            id="email"
            placeholder="بريدك الإلكتروني"
          />

          <input
            required=""
            className={styles.input}
            type="password"
            name=""
            id=""
            placeholder="كلمـة الســر "
          />
          <input
            required=""
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

          <input
            className={styles.login_button}
            // style={{
            //   backgroundColor:
            //     number !== "" &&
            //     email !== "" &&
            //     Password !== ""

            //       ? "#00a0b1"
            //       : "#009fb18f",
            //   borderColor:
            //     number !== "" && email !== "" && Password !== ""
            //       ? "#00a0b1"
            //       : "#fff",
            // }}
            name="send"
            id="send"
            type="submit"
            value="دخـول"
          />
        </form>
      </div>
    </main>
  );
};

export default page;
