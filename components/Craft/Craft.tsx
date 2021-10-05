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
    <div className={commonStyles.board + ' flex w-full flex-col items-center py-16 xl:flex-row xl:px-4 xxl:px-12 xl:py-0'}>
      <div className="w-full text-center xl:text-left lg:mr-4">
        <div className={styles.title + " xl:w-40"}>Gather and craft hundreds of items</div>
      </div>


      <div className="flex w-full flex-wrap pt-3 sm:pt-10 sm:flex-nowrap justify-around xl:pt-0 xl:-mt-16">
        {crafts.map((craft, i) => (
          <div key={i} className={`${styles.img} flex flex-col relative md:mx-1.5`}>
            <img src={craft.src} />
            <div className="relative flex justify-center w-full -top-6 md:-top-8">
              <CraftBoard bigText={craft.bigText} smallText={craft.smallText}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Craft;
