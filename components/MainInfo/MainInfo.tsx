import React from 'react';
import Image from 'next/image'

import styles from './MainInfo.module.css'
import Heroes from '/public/heroes.png'
import PlayNow from "../common/PlayNow";

const MainInfo = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col justify-center">
        <div className={styles.titleSmall}>IDLE ONLINE RPG</div>
        <div className={styles.titleBig}>Win group raids, craft items and earn crypto</div>
        <div className={styles.text}>Online browser role-playing game with integrated blockchain technology</div>
        <div className="flex flex-row">
          <PlayNow/>
          <PlayNow/>
        </div>
        <div className={styles.notWalletContainer + ' flex flex-row items-center'}>
          <div className={styles.dot}/>
          <div className={styles.noWallet}>No wallet needed</div>
        </div>
      </div>
      <div className="flex w-full h-full justify-center self-center items-center relative -top-8">
        <Image src={Heroes}/>
      </div>
    </div>
  );
}

export default MainInfo;