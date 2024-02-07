import styles from "./header.module.css";
import  Container  from "../Container/Container";
import {SlBell } from "react-icons/sl";
import { HiHome } from "react-icons/hi2";
import { TbHearts } from "react-icons/tb";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
 
 const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>


          <Link href={"/Profile"}>

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          /> 
          
            <FaRegUser />
          </Link><input
  type="text"
  className={styles.srchbtn}
  placeholder="  &#xF002;    اختر وجهتك   "
/>
          <Link href={"/Home"}><HiHome /></Link>
          

          <Link href={"/ "}>
       
            <TbHearts/>
          </Link>
          <b><SlBell className={styles.bell} ></SlBell></b>
        </div>
      </Container>
    </div>
  );
};
export default Header;