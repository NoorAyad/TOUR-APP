import React from "react";
import SetAvatar from "../Avatar/Avatar";
import Input from "../Input/Input";
import { useInfo } from "@/globalVars";
import styles from "./Form.module.css"
const Form1 = () => {
  const { setName, name } = useInfo();
  return (
    
        <main className={styles.main}>
        <div className={styles.content}>
         
        <h3>إنشاء حساب</h3>
              <p>
                انضم إلينا الآن لتستفيد من تجارب سفر لا مثيل لها 
                قم بإنشاء حساب جديد وابدأ رحلتك معنا بأسرع
           وقت ممكن
              </p>
          
          <div className={styles.SetAvatar}>
          <SetAvatar   />  
          </div>
          <div className={styles.divinput}>
          <Input 
        value={name !== "" ? name : null}
        onChange={(e) => setName(e.target.value)}
 className={styles.input}
 placeholder={"اســم المسـتـخـدم"}
 
      />
  
      
          </div>
        </div>
      </main>
  );
};

export default Form1;