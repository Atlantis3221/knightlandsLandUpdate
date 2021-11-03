import React from "react";
import styles from "./styles.module.css";
import Timer from "components/common/Timer/Timer";
import Text from "components/common/Text/Text";

const Features = () => {
  return (
    <div data-aos="fade-up" data-aos-delay={500} className="grid grid-cols-1 lg:grid-cols-3 w-full mb-8 gap-x-4 gap-y-8 w-full ">
      <div className={styles.feature + " h-full py-8 flex flex-row-reverse lg:flex-col relative overflow-hidden sm:overflow-visible "}>
        <div className="absolute bottom-0 -right-4 w-56 sm:w-1/2 lg:w-full my-auto lg:my-0 h-32 sm:relative">
          <img src="/main/map.png" className="absolute bottom-0 w-full xl:w-96" />
        </div>
        <div className="sm:w-1/2 lg:w-full px-8">
          <Text type="h2">Strategy Game</Text>
          <Text type="h5" color="#8A978C">
            Craft items on limited resources, deploy forces with low casualties, and maneuver with allies to win battles
          </Text>
        </div>
      </div>
      <div className={styles.feature + " h-full py-8 flex flex-row-reverse lg:flex-col relative overflow-hidden sm:overflow-visible "}>
        <div className="flex justify-center absolute bottom-0 right-0 w-56 sm:w-1/2 lg:w-full my-auto lg:my-0 h-32 sm:relative ">
          <img src="/main/battle.png" className="absolute bottom-0 w-full xl:w-80" />
        </div>
        <div className="sm:w-1/2 lg:w-full px-8">
          <Text type="h2">Multiplayer</Text>
          <Text type="h5" color="#8A978C">
            Strengthen your forces to withstand PvP attacks, and join hands to defend against or conduct with powerful raids
          </Text>
        </div>
      </div>
      <div className={styles.feature + " h-full py-8 flex flex-row-reverse lg:flex-col relative overflow-hidden sm:overflow-visible "}>
        <div className="absolute bottom-0 -right-4 w-56 sm:w-1/2 lg:w-full my-auto lg:my-0 h-32 sm:relative">
          <img src="/main/map.png" className="absolute bottom-0 w-full xl:w-96" />
        </div>
        <div className="sm:w-1/2 lg:w-full px-8">
          <Text type="h2">Role Playing</Text>
          <Text type="h5" color="#8A978C">
            Specialize on different elements of warfare to maximize your value in an allied force
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Features;
