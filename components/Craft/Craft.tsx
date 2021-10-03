import React from "react";

import styles from "./Craft.module.css";
import commonStyles from "/styles/common.module.css";
import CraftBoard from "./Board/CraftBoard";

const crafts = [
  {src: '/craft/craft1.png', bigText: '"300+ soldiers', smallText: 'to collect and combine'},
  {src: '/craft/craft2.png', bigText: '1000+ items', smallText: 'to gather and craft'},
  {src: '/craft/craft3.png', bigText: '10 ways', smallText: 'of crafting items'},
];

const Craft = () => {
  return (
    <div className={commonStyles.board + ' flex items-center pl-12 pr-12'}>
      <div className="pl-12 max-w-sm ml-2">
        <div className={styles.title}>Gather and craft hundreds of items</div>
      </div>

      <div className="flex w-full justify-between">
        {crafts.map((craft, i) => (
          <div key={i} className="relative -top-12">
            <div className={styles.image}>
              <img src={craft.src} />
            </div>
            <div className="relative -top-16">
              <CraftBoard bigText={craft.bigText} smallText={craft.smallText}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Craft;
