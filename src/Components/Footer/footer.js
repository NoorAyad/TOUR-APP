import styles from "./footer.module.css";
import  Container  from "../Container/Container";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
// import { PiBookmarksSimpleDuotone } from "react-icons/pi";
import { TbHearts } from "react-icons/tb";
// import { IoHeartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
 const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.content}>
        <Link href={"/Home"}><HiHome /></Link>
          

          <Link href={"/ "}>
            {/* <PiBookmarksSimpleDuotone /> */}
            {/* <IoHeartOutline/> */}
            <TbHearts/>
          </Link>

          <Link href={"/Profile"}>
            <FaRegUser />
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default Footer;