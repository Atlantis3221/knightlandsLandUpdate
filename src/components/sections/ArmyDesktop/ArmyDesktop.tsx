import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";

interface IArmy {
    src: string;
    title: string;
  }

const army: IArmy[] = [
    { src: "/army/mushroom_knight.png", title: "Mushroom Knight" },
    { src: "/army/forest_creature.png", title: "Forest Creature" },
    { src: "/army/crocodile_e.png", title: "Crocodile" },
    { src: "/army/archer_r.png", title: "Archer" },
    { src: "/army/drowned_d.png", title: "Drowned" },
    { src: "/army/ice_creature.png", title: "Ice Creature" },
  ];

const ArmyDesktop = () => {
  return (
    <div className=" flex">
      {army.map((monster, i) => (
        <div className={styles.slide + " w-1/6"}>
          <div className={styles.monster_card}>
            <div key={i} className={styles.card_inner}>
              <div className={styles.img_frame}>
                <img className={styles.img} src={monster.src} />
              </div>
              <Text type="h5" font="stoke" className="text-center ">
                {monster.title}
              </Text>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArmyDesktop