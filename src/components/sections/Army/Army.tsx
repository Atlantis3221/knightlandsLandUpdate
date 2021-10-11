import React from "react";
import styles from "./styles.module.css";

import { GAMEPLAY } from "common/constants/HeaderLinks";
import Damage from "components/svg/Damage/Damage";
import Text from "components/common/Text/Text";

interface IArmy {
  src: string;
  title: string;
  damage: {
    value: number;
    description: string;
    isPercent?: boolean
  }[]
}

const army:IArmy[] = [
  {src: '/army/aphylia.png', title: 'Aphylia', damage: [{value: 3, isPercent: true, description: ' damage per Light troop'}, {value: 100, isPercent: true, description: 'when Skor is a general'}]},
  {src: '/army/scor.png', title: 'Skor', damage: [{value: 300, isPercent: true, description: '300% to dwarf troops'}, {value: 500, description: 'damage'}]},
  {src: '/army/dalton.png', title: 'Dalton', damage: [{value: 45, description: 'Damage per Knight troop in reserve'}, {value: 50, description: 'damage to dark element generals'}]},
  {src: '/army/orkgre.png', title: 'Orkgre', damage: [{value: 40, description: 'damage to orcs per orc troop in reserve'}, {value: 78, isPercent: true, description: 'against Dream Slime raid'}]},
  {src: '/army/lucius.png', title: 'Lucius', damage: [{value: 20, description: 'damage to all troops per angel troop'}, {value: 100, isPercent: true, description: 'against Dream Slime raid'}]},
]

const Army = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center mb-36" id={GAMEPLAY}>
      <div className="flex flex-col text-center max-w-3xl mb-5 mx-2">
        <Text type="h2">Build your own Army and win raids</Text>
        <Text type="h4" color="#8A978C">
          Unite soldiers to join forces against the boss.
          Make the raid public and invite friends from our community to
          joint it and defeat monsters
        </Text>
      </div>
      <div className={styles.removeScrollbar + " flex w-full justify-start overflow-scroll md:justify-center max-w-8xl"}>
        {army.map((monster, i) => (
          <div key={i} className="px-1 lg:mx-0">
            <img className={styles.img} src={monster.src}/>
            <Text type="h5" fontWeight="bold" className="flex justify-center text-center xl:text-left mt-6 mb-4 uppercase">{monster.title}</Text>
            <div className="ml-3 lg:ml-5">
              {monster.damage.map((damage, i) => {
                return (
                  <div key={i} className={`flex ${i === 0 ? 'mb-1.5' : ''} items-start max-h-40`}>
                    <Damage value={`${damage.value}`} isPercent={damage.isPercent}/>
                    <div className={styles.damageDescription}>{damage.description}</div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Army;