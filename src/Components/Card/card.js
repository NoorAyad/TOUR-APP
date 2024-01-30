import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
import Pic from "/public/pic1.jpg";
// import { BsBookmarkHeartFill } from "react-icons/bs";
 import { IoHeartOutline } from "react-icons/io5";
 import { IoArrowUndoOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
const Card = ({Pic}) => {
  return (
    <div className={styles.Card}>
      <div className={styles.header}>
        <IoHeartOutline className={styles.mark} />
        <Link href={"/"}><IoArrowUndoOutline  className={styles.share}/></Link>
        
      </div>
      <div className={styles.img}>
        <Image src={Pic} />
      </div>
      <div className={styles.footer}>
        <div className={styles.tid1}>
        <h4 className={styles.city}>اسطنبول</h4>
        <h5 className={styles.price}>200$</h5>
</div>
        <div className={styles.tid2}>
          <h6 className={styles.country}> < MdLocationOn className={styles.loc}/>تركيا</h6>
          <span><b>12</b>-نوفمبر الى <b>18</b>-نوفمبر</span>
          
        </div>
      </div>
    </div>
  );
};
export default Card;
