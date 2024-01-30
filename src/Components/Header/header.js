import styles from "./header.module.css";
import  Container  from "../Container/Container";
import {SlBell } from "react-icons/sl";
import { HiHome } from "react-icons/hi2";
// import { PiBookmarksSimpleDuotone } from "react-icons/pi";
import { TbHearts } from "react-icons/tb";
// import { IoHeartOutline } from "react-icons/io5";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
 const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link href={"/Profile"}>
            <FaRegUser />
          </Link>
          <Link href={"/Home"}><HiHome /></Link>
          

          <Link href={"/ "}>
            {/* <PiBookmarksSimpleDuotone /> */}
            {/* <IoHeartOutline/> */}
            <TbHearts/>
          </Link>

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          /> 
          
          <input
            type="text"
            className={styles.srchbtn}
            placeholder="   اختر وجهتك   &#xF002; "
          />
         
          {/* <LuSettings2  className={styles.filter} />  */}
<b><SlBell className={styles.bell} ></SlBell></b>
        </div>
      </Container>
    </div>
  );
};
export default Header;