"use client";
import styles from "./page.module.css";
import Container from "@/Components/Container/Container";
function page() {
  return (
    <main className={styles.pay}>
      <Container>
        <div className={styles.content}>
          <div class="modal">
            <form className={styles.form}>
              <div className={styles.paymentoptions}>
                <button name="paypal" type="button"></button>
                <button name="apple-pay" type="button"></button>
                <button name="google-pay" type="button"></button>
              </div>
              <div className={styles.separator}>
                <hr className={styles.line}></hr>
                <p>or pay using credit card</p>
                <hr className={styles.line}></hr>
              </div>
              <div className={styles.creditcardinfoform}>
                <div className={styles.inputcontainer}>
                  <label for="password_field" className={styles.inputlabel}>
                    Card holder full name
                  </label>
                  <input
                    id="password_field"
                    className={styles.inputfield}
                    type="text"
                    name="input-name"
                    title="Inpit title"
                    placeholder="Enter your full name"
                  ></input>
                </div>
                <div className={styles.inputcontainer}>
                  <label for="password_field" className={styles.inputlabel}>
                    Card Number
                  </label>
                  <input
                    id="password_field"
                    className={styles.inputfield}
                    type="number"
                    name="input-name"
                    title="Inpit title"
                    placeholder="0000 0000 0000 0000"
                  ></input>
                </div>
                <div className={styles.input_container}>
                  <label for="password_field" className={styles.inputlabel}>
                    Expiry Date / CVV
                  </label>
                  <div class="split">
                    <input
                      id="password_field"
                      className={styles.inputfield}
                      type="text"
                      name="input-name"
                      title="Expiry Date"
                      placeholder="01/23"
                    ></input>
                    <input
                      id="password_field"
                      className={styles.inputfield}
                      type="number"
                      name="cvv"
                      title="CVV"
                      placeholder="CVV"
                    ></input>
                  </div>
                </div>
              </div>
              <button className={styles.purchasebtn}>Checkout</button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
export default page;
