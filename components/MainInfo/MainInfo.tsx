import React, { useCallback } from "react";

import styles from "./MainInfo.module.css";
import PlayNow from "../common/PlayNow";

const MainInfo = () => {
  const smoothAutoScroll = useCallback(() => {
    return document.getElementById('autoScrollDestination')?.scrollIntoView({behavior: 'smooth'});
  }, []);

  return (
    <div className="flex w-full">
      <div className="flex flex-col justify-center">
        <div className={styles.titleSmall}>IDLE ONLINE RPG</div>
        <div className={styles.titleBig}>Win group raids, craft items and earn crypto</div>
        <div className={styles.text}>Online browser role-playing game with integrated blockchain technology</div>
        <div className="flex flex-row">
          <PlayNow/>
          <div className={styles.learnMoreButton + ' flex justify-center items-center'} onClick={smoothAutoScroll}>
            LEARN MORE
          </div>
        </div>
        <div className={styles.notWalletContainer + ' flex flex-row items-center'}>
          <div className={styles.dot}/>
          <div className={styles.noWallet}>No wallet needed</div>
        </div>
      </div>
      <div className="flex w-full h-full justify-center self-center items-center relative -top-8">
        <img src="/heroes.png"/>
      </div>
    </div>
  );
}

export default MainInfo;