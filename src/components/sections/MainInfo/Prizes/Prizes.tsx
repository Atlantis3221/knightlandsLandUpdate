import React from "react";
import styles from "./styles.module.css";

import Timer from "components/common/Timer/Timer";
import Text from "components/common/Text/Text";

const Prizes = () => {
  return (
    <div data-aos="fade-up" className="flex mx-auto flex-col lg:flex-row w-full xl:max-w-screen-xxl mt-12 z-40">
      <div className={styles.usdc + " grid grid-cols-3 lg:w-1/2 lg:mr-5 mb-8"}>
        <div className="col-span-2">
          <Text type="h2">Win NFT and Knightland tokens</Text>
        </div>
        <div className="row-span-3 self-center relative md:h-full">
          <div className="mx-2 xl:mx-0 xl:absolute xl:-top-12 flex justify-center">
            <picture>
              <source media="(min-width: 769px)" srcSet="/main/nft.png" />
              <img src="/main/nft.png" className="" />
            </picture>
          </div>
        </div>
        <div className="col-span-2">
          <Text type="h5" color="#8A978C" maxWidth={332}>
            text
          </Text>
        </div>
      </div>

      <div className={styles.usdc + " grid grid-cols-3 w-full lg:w-1/2 mb-8"}>
        <div className="col-span-2">
          <Text type="h2">Earn FLESH token</Text>
        </div>
        <div className="self-end row-span-3 md:self-center relative md:h-full">
          <div className="lg:absolute lg:-top-4 xl:-top-12">
            <picture>
              <source media="(max-width: 768px)" srcSet="/main/prizeM.png" />
              <source media="(min-width: 769px)" srcSet="/main/prize.png" />
              <img src="/main/prize.png" className="" />
            </picture>
          </div>
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
