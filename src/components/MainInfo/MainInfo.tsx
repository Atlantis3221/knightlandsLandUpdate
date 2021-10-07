import React from "react";

import styles from "src/components/MainInfo/MainInfo.module.css";
import PlayNow from "src/components/common/PlayNow";
import Dot from "src/components/common/Dot";
import { smoothAutoScroll } from "src/common/helpers/smoothAutoScroll";
import { GAMEPLAY } from "src/common/constants/HeaderLinks";
import Prizes from "src/components/MainInfo/Prizes";

const MainInfo = () => {
  return (
    <div className="flex flex-col items-center mb-36">
      <div className="flex flex-col lg:flex-row w-full text-center md:text-left">
        <div className="flex flex-col justify-center max-w-xl">
          <div className={styles.titleSmall}>IDLE ONLINE RPG</div>
          <div className={styles.titleBig}>Win group raids, craft items and earn crypto</div>
          <div className={styles.text}>Online browser role-playing game with integrated blockchain technology</div>
        </div>
        <div className="flex w-full h-full justify-center self-center items-center lg:-mt-8">
          <img src="/heroes.png"/>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start w-full md:-mt-0 xl:-mt-24 mb-16">
        <div className="flex flex-row">
          <PlayNow/>
          <div className={styles.learnMoreButton + ' flex justify-center items-center'} onClick={() => smoothAutoScroll(GAMEPLAY)}>
            LEARN MORE
          </div>
        </div>
        <div className={styles.notWalletContainer + ' flex flex-row items-center'}>
          <Dot color="#FFEB3D"/>
          <div className={styles.noWallet}>No wallet needed</div>
        </div>
      </div>

      <Prizes/>
    </div>
  );
}

export default MainInfo;