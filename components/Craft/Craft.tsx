import React from 'react';
import styles from './Craft.module.css';
import commonStyles from '/styles/common.module.css';
import Image from 'next/image';
import craft1 from '/public/craft1.png';
import craft2 from '/public/craft2.png';
import craft3 from '/public/craft3.png';
import Craft1 from "/svg/Craft1";
import Craft2 from "/svg/Craft2";
import Craft3 from "/svg/Craft3";

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
            <Craft1/>
          </div>
        </div>

        <div className="relative -top-12">
          <div className={styles.image}>
            <Image src={craft2}/>
          </div>
          <div className="relative -top-16">
            <Craft2/>
          </div>
        </div>

        <div className="relative -top-12">
          <div className={styles.image}>
            <Image src={craft3}/>
          </div>
          <div className="relative -top-16">
            <Craft3/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Craft;
