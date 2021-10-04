import React, { useCallback } from "react";

import styles from "./MainInfo.module.css";
import PlayNow from "../common/PlayNow";
import Dot from "../../components/common/Dot";

const MainInfo = () => {
  const smoothAutoScroll = useCallback(() => {
    return document.getElementById('autoScrollDestination')?.scrollIntoView({behavior: 'smooth'});
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full text-center sm:text-left">
        <div className="flex flex-col justify-center" style={{maxWidth: 500}}>
          <div className={styles.titleSmall}>IDLE ONLINE RPG</div>
          <div className={styles.titleBig}>Win group raids, craft items and earn crypto</div>
          <div className={styles.text}>Online browser role-playing game with integrated blockchain technology</div>
        </div>
        <div className="flex w-full h-full justify-center self-center items-center lg:-mt-8">
          <img src="/heroes.png"/>
        </div>
      </div>
      <div className="flex flex-col items-center sm:items-start md:-mt-0 lg:-mt-30 xl:-mt-32">
        <div className="flex flex-row">
          <PlayNow/>
          <div className={styles.learnMoreButton + ' flex justify-center items-center'} onClick={smoothAutoScroll}>
            LEARN MORE
          </div>
        </div>
        <div className={styles.notWalletContainer + ' flex flex-row items-center'}>
          <Dot color="#FFEB3D"/>
          <div className={styles.noWallet}>No wallet needed</div>
        </div>
      </div>
    </>
  );
}

export default MainInfo;