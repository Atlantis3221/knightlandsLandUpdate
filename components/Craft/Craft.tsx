import React from 'react';
import Image from 'next/image';

import styles from './Craft.module.css';
import commonStyles from '/styles/common.module.css';
import craft1 from '/public/craft/craft1.png';
import craft2 from '/public/craft/craft2.png';
import craft3 from '/public/craft/craft3.png';
import CraftBoard from "./Board/CraftBoard";

const Craft = () => {
  return (
    <div className={commonStyles.board + ' flex items-center pl-12 pr-12'}>
      <div className="pl-12 max-w-sm ml-2">
        <div className={styles.title}>Gather and craft hundreds of items</div>
      </div>

      <div className="flex w-full justify-between">
        <div className="relative -top-12">
          <div className={styles.image}>
            <Image src={craft1} />
          </div>
          <div className="relative -top-16">
            <CraftBoard bigText="300+ soldiers" smallText="to collect and combine"/>
          </div>
        </div>

        <div className="relative -top-12">
          <div className={styles.image}>
            <Image src={craft2}/>
          </div>
          <div className="relative -top-16">
            <CraftBoard bigText="1000+ items" smallText="to gather and craft"/>
          </div>
        </div>

        <div className="relative -top-12">
          <div className={styles.image}>
            <Image src={craft3}/>
          </div>
          <div className="relative -top-16">
            <CraftBoard bigText="10 ways" smallText="of crafting items"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Craft;
