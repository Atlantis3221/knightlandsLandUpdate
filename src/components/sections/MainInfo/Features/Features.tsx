import React from "react";
import styles from "./styles.module.css";
import Timer from "components/common/Timer/Timer";
import Text from "components/common/Text/Text";

const Features = () => {
  return (
    <div data-aos="fade-up" data-aos-delay={500} className="grid grid-cols-1 lg:grid-cols-3 w-full mb-8 gap-x-4 gap-y-8 w-full ">
      <div className={styles.feature + " h-full pt-8 pb-8 lg:pt-0 flex flex-row-reverse lg:flex-col relative overflow-hidden lg:overflow-visible "}>
        <div className="absolute bottom-0 -right-4 sm:right-0 w-56 sm:w-1/2 lg:w-full my-auto lg:my-0 h-48 flex items-center justify-end lg:justify-center md:h-full lg:h-48 sm:relative">
          <img src="/main/map.png" className="absolute bottom-0 lg:-bottom-2 xl:-bottom-6 w-full sm:w-auto h-auto sm:h-full lg:h-auto lg:w-auto" />
        </div>
        <div className="sm:w-1/2 lg:w-full pl-12 pr-12 sm:pr-0 lg:pl-8 lg:pr-8">
          <Text type="h2" className='text-left mb-2'>Strategy Game</Text>
          <Text type="h5" color="#8A978C" className='text-left'>
            Craft items on limited resources, deploy forces with low casualties, and maneuver with allies to win battles
          </Text>
        </div>
      </div>
      <div className={styles.feature + " h-full pt-8 pb-8 lg:pt-0 flex flex-row-reverse lg:flex-col relative overflow-hidden lg:overflow-visible "}>
        <div className="flex absolute bottom-0 right-0 sm:right-0 w-56 sm:w-1/2 lg:w-full my-auto lg:my-0 h-48 flex items-center justify-end lg:justify-center md:h-full lg:h-48 sm:relative ">
          <img src="/main/battle.png" className="absolute bottom-0 xl:-bottom-6 w-full sm:w-auto h-auto sm:h-full lg:h-auto lg::w-auto" />
        </div>
        <div className="sm:w-1/2 lg:w-full pl-12 pr-12 sm:pr-0 lg:pl-8 lg:pr-8">
          <Text type="h2" className='text-left mb-2'>Multiplayer</Text>
          <Text type="h5" color="#8A978C" className='text-left'>
            Strengthen your forces to withstand PvP attacks, and join hands to defend against or conduct with powerful raids
          </Text>
        </div>
      </div>
      <div className={styles.feature + " h-full pt-8 pb-8 lg:pt-0 flex flex-row-reverse lg:flex-col relative overflow-hidden lg:overflow-visible "}>
        <div className="absolute bottom-0 -right-4 sm:right-0 w-56 sm:w-1/2 lg:w-full my-auto lg:my-0 h-48 flex items-center justify-end lg:justify-center md:h-full lg:h-48 sm:relative">
          <img src="/main/roleplaying.png" className="absolute bottom-0 xl:-bottom-6 w-full sm:w-auto xl:w-full h-auto sm:h-full lg:h-auto" />
        </div>
        <div className="sm:w-1/2 lg:w-full pl-12 pr-12 sm:pr-0 lg:pl-8 lg:pr-8">
          <Text type="h2" className='text-left mb-2'>Role Playing</Text>
          <Text type="h5" color="#8A978C" className='text-left'>
            Specialize on different elements of warfare to maximize your value in an allied force
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Features;
