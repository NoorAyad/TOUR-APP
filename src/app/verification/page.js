import styles from "./page.module.css"
import Container from "@/Components/Container/Container";
import pic3 from "../../../public/var.png";
import Image from "next/image";
function verification () {
    return(
<div>
  <Container>
    <div className={styles.content}>
<form className={styles.form} >
  <p  className={styles.heading}>تـوثـيـق</p>
 <Image src={pic3} className={styles.check}/> 
  <div className={styles.box} >
  <input className={styles.input} type="text" maxLength="6" minLength="6"    alt="img scure"/>
 
  </div>
  <button className={styles.btn1} type="submit">تأكــيد</button>
 
</form></div>
</Container>
</div>

    );
}
export default verification;