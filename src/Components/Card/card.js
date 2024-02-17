import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
import Pic from "/public/pic1.jpg";
// import { BsBookmarkHeartFill } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import React from "react";

const Card = ({ Pic, pageUrl }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Your title here",
          text: "Your text here",
          url: pageUrl,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      console.log("Web Share API not supported");
    }
  };

  return (
    <div className={styles.Card}>
      <div className={styles.header}>
        <IoHeartOutline className={styles.mark} />
        <IoArrowUndoOutline className={styles.share} onClick={handleShare} />
      </div>
      <div className={styles.img}>
        <Image src={Pic} alt={"image"} />
      </div>
      <div className={styles.footer}>
        <div className={styles.tid1}>
          <h4 className={styles.city}>اسطنبول</h4>
          <h5 className={styles.price}>200$</h5>
        </div>
        <div className={styles.tid2}>
          <h6 className={styles.country}>
            {" "}
            <MdLocationOn className={styles.loc} />
            تركيا
          </h6>
          <span>
            <b>12</b>-نوفمبر الى <b>18</b>-نوفمبر
          </span>
        </div>
      </div>
    </div>
  );
};
export default Card;
