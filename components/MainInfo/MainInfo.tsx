import React from "react";

import styles from "./MainInfo.module.css";
import PlayNow from "../common/PlayNow";
import Dot from "../../components/common/Dot";
import { smoothAutoScroll } from "../../common/helpers/smoothAutoScroll";
import { GAMEPLAY } from "../../common/constants/HeaderLinks";

const MainInfo = () => {
  return (
    <div className="flex flex-col items-center mb-36">
      <div className="flex flex-col lg:flex-row w-full text-center sm:text-left">
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

      <div className="flex flex-col lg:flex-row w-full xl:max-w-screen-xxl">
        <div className={styles.usdc + ' w-full lg:w-3/5 mr-5 mb-8'}>
          <div className={styles.h2}>30 000 USDC</div>
          <div className={styles.text2}>
            Become one of a Top 100 Knights in Grand Royale and win prize pool on 1st December!
            <span className={styles.text2 + ' ' + styles.yellow}>
              Read Terms
            </span>
          </div>
        </div>

        <div className={styles.usdc + ' w-full lg:w-2/5'}>
          <div>Earn FLESH token</div>
          <div className={styles.text2}>
            Daily prize for participate in Raids, even for free-to-pay users
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInfo;