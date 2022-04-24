import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";
import classNames from "classnames";

interface IArmy {
  src: string;
  title: string;
}

const army: IArmy[] = [
  { src: "/army/mushroom_knight.png", title: "Mushroom Knight" },
  { src: "/army/forest_creature.png", title: "Forest Creature" },
  // { src: "/army/crocodile_e.png", title: "Crocodile" },
  // { src: "/army/archer_r.png", title: "Archer" },
  // { src: "/army/drowned_d.png", title: "Drowned" },
  // { src: "/army/ice_creature.png", title: "Ice Creature" },
];

const ArmyDesktop = () => {
  const elementRef = useRef(null);

  const [elHeight, setElHeight] = useState(0);

  const handleMouseEnter = () => {
    useEffect(() => {
      setElHeight(elementRef.current.clientHeight);
      
    }, [elementRef.current]);
    return { elHeight, elementRef };
  };

  return (
    <div className=" flex justify-between">
      {army.map((monster, i) => (
        <div
          className={styles.slide + " w-1/6"}
          ref={elementRef}
          onMouseEnter={handleMouseEnter}
        >
          <div className={styles.monster_card}>
            <div key={i} className={styles.card_inner}>
              <div className={styles.img_frame}>
                <img className={styles.img} src={monster.src} />
                <img className={styles.play_icon + " absolute + bottom-1/6 left-1/2"} src={}/>
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

export default ArmyDesktop;
