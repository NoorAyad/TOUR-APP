import styles from "./header.module.css";
import Container from "../Container/Container";
import Image from "next/image";
import { HiHome } from "react-icons/hi2";
import { IoArrowBackCircle } from "react-icons/io5";
import Link from "next/link";
import logo from "/public/logo2.svg";
import { RiHeartsFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { useRouter } from 'next/navigation'
const Header = ({ currentPath }) => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>  <Link href={"/Profile"}>
            <FaUser  className={styles.prof}
              style={{ color: currentPath === "/Profile" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />{" "}
          <input
            type="text"
            className={styles.srchbtn}
            placeholder="&#xF002;  اختر وجهتك"
          />
        
          <Link href={"/"}>
            <GoBellFill className={styles.bell}
              style={{ color: currentPath === "/" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
          <Link href={"/ "}>
            <RiHeartsFill className={styles.fav}
              style={{ color: currentPath === "/" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
          <Link href={"/Home"}>
            <HiHome className={styles.home}
              style={{ color: currentPath === "/Home" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
     <Image src={logo} height={30}  width={40} alt={"img"} />
        </div>
      </Container>
    </div>
  );
};
export default Header;
