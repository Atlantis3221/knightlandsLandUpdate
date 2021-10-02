import React from "react";
import Image from "next/image";

import image from "/public/fatherTime.png";
import styles from "../Army.module.css";
import Damage from "/svg/Damage/Damage";

const FatherTime = () => {
  return (
    <div className="relative -top-20">
      <Image src={image}/>
      <div className={styles.monster + ' flex justify-center'}>FATHER TIME</div>
      <div className="flex mb-1.5 items-center">
        <Damage value="9"/>
        <div className={styles.damageDescription}>damage for each general 1⭐</div>
      </div>
      <div className="flex">
        <Damage value="33" isPercent={true}/>
        <div className={styles.damageDescription}>damage when Gsorc is in legion</div>
      </div>
    </div>
  )
}

export default FatherTime;
