import React from "react";
import styles from "components/Army/styles.module.css";
import { GAMEPLAY } from "common/constants/HeaderLinks";
import Damage from "components/svg/Damage/Damage";
import Text from "components/common/Text/Text";

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
        <Text type="h2">Build your own Army and win raids</Text>
        <Text type="h4" color="#8A978C">
          Unite soldiers to join forces against the boss.
          Make the raid public and invite friends from our community to
          joint it and defeat monsters
        </Text>
      </div>
      <div className={styles.removeScrollbar + " flex w-full justify-start overflow-scroll md:justify-center"}>
        {army.map((monster, i) => (
          <div key={i} className="mx-2 lg:mx-0">
            <img className={styles.img} src={monster.src}/>
            <Text type="h5" fontWeight="bold" className="flex justify-center mt-6 mb-4">{monster.title}</Text>
            <div className="ml-3 lg:ml-4">
              <div className="flex mb-1.5 items-center">
                <Damage value="9"/>
                <div className={styles.damageDescription}>damage for each general 1⭐</div>
              </div>
              <div className="flex">
                <Damage value="33" isPercent={true}/>
                <div className={styles.damageDescription}>damage when Gsorc is in legion</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Army;