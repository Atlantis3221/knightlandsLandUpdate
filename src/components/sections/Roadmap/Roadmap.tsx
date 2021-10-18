import React from "react";
import styles from "./styles.module.css";

import { useMatchMediaQuery } from "common/helpers/useMediaQuery";
import Text from "components/common/Text/Text";
import { Breakpoints } from "common/constants/Breakpoints";
import { HeaderLink } from "common/constants/HeaderLinks";

interface IRoad {
  step: string;
  description: string;
  isChecked?: boolean;
}

const road: {year: string, items: IRoad[]}[] = [
  {
    year: '2019',
    items: [
      {step: 'Q2', description: 'Start of the Knightlands development', isChecked: true},
      {step: 'Q3', description: 'Early Knightlands concept', isChecked: true},
      {step: 'Q4', description: 'First raids implemented', isChecked: true}
    ]
  },
  {
    year: '2020',
    items: [
      {step: 'Q1', description: 'More gameplay features', isChecked: true},
      {step: 'Q2', description: 'Pivot in art style into more modern look', isChecked: true},
      {step: 'Q3', description: 'Adding more competitive gameplay', isChecked: true},
      {step: 'Q4', description: 'Redone game balance', isChecked: true},
    ]
  },
  {
    year: '2021',
    items: [
      {step: 'Q1', description: 'Preparing to alpha test, improved blockchain interactions', isChecked: true},
      {step: 'Q2', description: 'Alpha public test, new art, polishing', isChecked: true},
      {step: 'Q3', description: 'Public Beta launch, preparation to IDO', isChecked: true},
      {step: 'Q4', description: 'IDO, Listings on DEX/CEX, support for BSC, FANTOM, AVALANCHE'},
    ]
  },
  {
    year: '2022',
    items: [
      {step: 'Q1', description: 'Upgrade in-game gameplay, finish Beta, lock KL for in-game advantages. Job system'},
      {step: 'Q2', description: 'NFTs, pet system, use KL to breed and purchase pets, create NFTs'},
      {step: 'Q3', description: 'Auction house launch, KL is a currency of the market'},
      {step: 'Q4', description: 'PvP, more PvE content, vote with KL to decide PvP, PvE rules'},
    ]
  },
  {
    year: '2023',
    items: [
      {step: 'Q1', description: 'Expand to Google play, and other platforms. Guilds - cooperate with other players'},
      {step: 'Q2', description: 'Guild wars. Compete with other guilds, and win huge prizes'},
      {step: 'Q3', description: 'Kingdom wars, phase 1. Initial world map, land sale. guilds able to capture territories'},
      {step: 'Q4', description: 'Kingdom wars, phase 2. Expand content of the map, captured territories can generate tokenized assets'},
    ]
  }
]

const Roadmap = () => {
  return (
    <div className="flex flex-col justify-center w-full my-24 px-4 md:pl-0" id={HeaderLink.ROADMAP}>
      <Text type="h2" className="text-center">Roadmap</Text>
      <div className={styles.container + " flex mt-10 w-full"}>
        {road.map(({year, items}, i) => (
          <div key={i} className="mb-14 flex flex-col items-start self-start w-full md:w-auto">
            <div className="flex items-center">
              <div className={styles.line} style={{transform: 'rotate(180deg)'}}/>
              <Text type="h4" className="mx-4">{year}</Text>
              <div className={styles.line}/>
            </div>
            {items.map((item, j) => (
              <div key={j} className="flex items-center my-2 lg:mx-2">
                <div className="flex justify-center items-center h-full">
                  <div className={item.isChecked ? styles.checked : styles.notChecked}>
                    {item.isChecked && <img src={'/common/check.svg'} />}
                  </div>
                </div>
                <div className="flex items-baseline">
                  <Text type="h5" fontWeight={700} color="#8A978C" className="mr-1">{item.step}</Text>
                  <Text type="h5" className="max-w-full lg:max-w-sm xl:max-w-md" height="100%">— {item.description}</Text>
                </div>
              </div>
            ))}
          </div>
          )
        )}
      </div>
    </div>
  )
}

export default Roadmap;
