import { useState } from "react";
import styles from "../styles/reserv.module.css";
import CancledBtn from "./CancledBtn";
import ImpoBtn from "./ImpoBtn";

function ApplyBtn({onclick}) {
    return (
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <button className={styles.apply__btn} onClick={()=>{onclick((e)=>!e)}}>
          신청
        </button>
      </div>
    );
  }

  export default ApplyBtn;