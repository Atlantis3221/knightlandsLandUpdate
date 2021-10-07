import React from 'react';
import styles from "components/MainInfo/MainInfo.module.css";
import Timer from "components/Timer/Timer";

const Prizes = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full xl:max-w-screen-xxl">
      <div className={styles.usdc + " grid grid-cols-3 xl:w-3/5 mr-5 mb-8"}>
        <div className="col-span-2">
          <div className={styles.h2}>30 000 USDC</div>
        </div>
        <div className="self-end row-span-3 md:-mt-20 md:self-center">
          <img src="/box.png" className=""/>
        </div>
        <div className="col-span-2">
          <div className={styles.text2}>
            Become one of a Top 100 Knights in Grand Royale and win prize pool on 1st December!
            <span className={styles.text2 + ' ' + styles.yellow}>
                Read Terms
              </span>
            <Timer/>
          </div>
        </div>
      </div>

      <div className={styles.usdc + " grid grid-cols-3 w-full xl:w-2/5 mr-5 mb-8"}>
        <div className="col-span-2">
          <div className={styles.text3}>Earn FLESH token</div>
        </div>
        <div className="self-end row-span-3 md:-mt-20 md:self-center">
          <img src="/prize.png" className=""/>
        </div>
        <div className="col-span-2">
          <div className={styles.text2}>
            Daily prize for participate in Raids, even for free-to-pay users
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes;