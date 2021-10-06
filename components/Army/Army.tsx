import React from "react";
import styles from "./Army.module.css";
import { GAMEPLAY } from "../../common/constants/HeaderLinks";
import Damage from "../../components/svg/Damage/Damage";

const army = [
  {src: '/army/gigad.png', title: 'GIGAD'},
  {src: '/army/fatherTime.png', title: 'FATHER TIME'},
  {src: '/army/scarlet.png', title: 'SCARLET WYRM'},
  {src: '/army/gigad.png', title: 'GIGAD'},
  {src: '/army/scarlet.png', title: 'SCARLET WYRM'},
]

const Army = () => {
  return (
    <div className="flex w-full flex-col items-center mb-36" id={GAMEPLAY}>
      <div className="flex flex-col text-center max-w-3xl mb-5">
        <div className={styles.title}>Build your own Army and win raids</div>
        <div className={styles.description}>
          Unite soldiers to join forces against the boss.
          Make the raid public and invite friends from our community to
          joint it and defeat monsters
        </div>
      </div>
      <div className={styles.removeScrollbar + " flex w-full justify-start overflow-scroll md:justify-center"}>
        {army.map(monster => (
          <div className="mx-2 lg:mx-0">
            <img className={styles.img} src={monster.src}/>
            <div className={styles.monster + ' flex justify-center mt-6 mb-4'}>{monster.title}</div>
            <div className="flex mb-1.5 items-center">
              <Damage value="9"/>
              <div className={styles.damageDescription}>damage for each general 1⭐</div>
            </div>
            <div className="flex">
              <Damage value="33" isPercent={true}/>
              <div className={styles.damageDescription}>damage when Gsorc is in legion</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Army;