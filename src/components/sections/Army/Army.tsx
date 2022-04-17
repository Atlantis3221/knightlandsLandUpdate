import React from "react";
import styles from "./styles.module.css";

import Damage from "components/svg/Damage/Damage";
import Text from "components/common/Text/Text";
import { HeaderLink } from "common/constants/HeaderLinks";

interface IArmy {
  src: string;
  title: string;
}

const army: IArmy[] = [
  { src: '/army/Mushroom-Knight.png', title: 'Mushroom knight'},
  { src: '/army/Forest-Creature.png', title: 'Forest creature'},
  { src: '/army/Crocodile.png', title: 'Crocodile'},
  { src: '/army/Archer.png', title: 'Archer'},
  { src: '/army/Drowned.png', title: 'Drowned'},
  { src: '/army/Ice-Creature.png', title: 'Ice creature'},
]

const Army = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center self-center mb-36 max-w-6xl mx-auto pt-24" data-aos="fade-up">
      <div className="flex flex-col text-center max-w-3xl mx-2">
        <Text type="h1" font="stoke">Diverse World</Text>
      </div>
      <div className={styles.removeScrollbar + " flex w-full justify-start overflow-scroll md:justify-center max-w-8xl"}>
        {army.map((monster, i) => (
          <div key={i} className="px-1 lg:mx-0">
            <div className={styles.monsterCard + " flex justify-center items-center mt-20"}>
              <img className={styles.img} src={monster.src} />
            </div>
            <Text type="h4" font="stoke" className="flex items-center justify-center text-center mt-6 mb-4 uppercase">{monster.title}</Text>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Army;
