import React from "react";
import Image from "next/image";

import image from "/public/gigad.png";
import styles from "../Army.module.css";
import Damage from "/svg/Damage/Damage";

const Gigad = () => {
  return (
    <div className="relative -top-16">
      <div className="relative -left-8">
        <Image src={image}/>
      </div>
      <div className={styles.monster + ' flex justify-center'}>GIGAD</div>
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

export default Gigad;
