import React from "react";
import styles from "./styles.module.css";

import Timer from "components/common/Timer/Timer";
import Text from "components/common/Text/Text";

const Prizes = () => {
  return (
    <div data-aos="fade-up" data-aos-delay={500} className="flex flex-col lg:flex-row w-full xl:max-w-screen-xxl">
      <div className={styles.usdc + " grid grid-cols-3 lg:w-3/5 lg:mr-5 mb-8"}>
        <div className="col-span-2">
          <Text type="h2" className={styles.h2}>30 000 USDC</Text>
        </div>
        <div className="self-end row-span-3 md:-mt-20 md:self-center">
          <img src="/main/box.png" className=""/>
        </div>
        <div className="col-span-2">
          <Text type="h5" color="#8A978C" maxWidth={332}>
            Become one of a Top 100 Knights in Grand Royale and win prize pool on 1st December!
            <span className="ml-1.5" style={{color: '#FFEB3D'}}>
                Read Terms
            </span>
            <Timer/>
          </Text>
        </div>
      </div>

      <div className={styles.usdc + " grid grid-cols-3 w-full lg:w-2/5 mb-8"}>
        <div className="col-span-2">
          <Text type="h2">Earn FLESH token</Text>
        </div>
        <div className="self-end row-span-3 md:-mt-20 md:self-center">
          <img src="/main/prize.png" className=""/>
        </div>
        <div className="col-span-2">
          <Text type="h5" color="#8A978C" maxWidth={332}>
            Daily prize for participate in Raids, even for free-to-pay users
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Prizes;