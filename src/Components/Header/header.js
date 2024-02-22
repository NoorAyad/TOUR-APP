import styles from "./header.module.css";
import Container from "../Container/Container";
import Image from "next/image";
import { HiHome } from "react-icons/hi2";
import Link from "next/link";
import logo4 from "/public/logo4.svg";
import { RiHeartsFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { useRouter } from "next/navigation";
const Header = ({ currentPath }) => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          {" "}
          <div className={styles.logo}>
            {" "}
            <Image
              src={logo4}
              height={35}
              width={35}
              alt={"img"}
              className={styles.svglogo}
            />{" "}
            <p className={styles.sublogo}>هُد</p>
            <p>هد</p>
          </div>
          <Link href={"/Profile"}>
            <FaUser
              className={styles.prof}
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
            <GoBellFill
              className={styles.bell}
              style={{ color: currentPath === "/" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
          <Link href={"/ "}>
            <RiHeartsFill
              className={styles.fav}
              style={{ color: currentPath === "/" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
          <Link href={"/Home"}>
            <HiHome
              className={styles.home}
              style={{ color: currentPath === "/Home" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default Header;
