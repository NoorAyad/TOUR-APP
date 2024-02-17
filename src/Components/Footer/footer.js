import styles from "./footer.module.css";
import Container from "../Container/Container";
import Link from "next/link";
import { HiHome } from "react-icons/hi2";
import { RiHeartsFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import React, { useState } from "react";
import Profile from "@/app/Profile/page";
const Footer = ({ currentPath }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the clicked state
  };
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.content}>
          {" "}
          <Link href={"/Profile"}>
            <FaUser
              style={{ color: currentPath === "/Profile" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
          <Link href={"/"}>
            <GoBellFill
              style={{ color: currentPath === "/" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
          <Link href={"/ "}>
            <RiHeartsFill
              style={{ color: currentPath === "/" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
          <Link href={"/Home"}>
            <HiHome
              style={{ color: currentPath === "/Home" ? "#00A0B1" : "#aaa" }}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
