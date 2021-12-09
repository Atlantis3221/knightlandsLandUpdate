import React from "react";
import styles from "./styles.module.css";
import Timer from "components/common/Timer/Timer";
import Text from "components/common/Text/Text";

const Features = () => {
  return (
    <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-4 w-full mb-8 gap-x-4 gap-y-8 w-full pt-10">
      <div className={styles.feature + " h-full pt-8 pb-8 lg:pt-0 flex flex-row-reverse lg:flex-col relative overflow-hidden lg:overflow-visible lg:items-center"}>
        <div className="absolute bottom-0 -right-4 sm:right-0 w-56 sm:w-2/5 lg:w-120p my-auto lg:my-0 h-48 flex items-center justify-end lg:justify-center md:h-full lg:h-32 sm:relative">
          <img src="/main/map.png" className="absolute z-20 bottom-0 lg:-bottom-4 xl:-bottom-2 w-full sm:w-auto h-auto sm:h-full lg:h-auto lg:w-auto" />
          <img src="/main/fog.png" className="absolute z-10 bottom-0 lg:-bottom-4 xl:-bottom-2 w-full sm:w-auto h-auto sm:h-full lg:h-auto lg:w-auto" />
        </div>
        <div className="w-full sm:h-auto sm:w-3/5 lg:w-full pl-12 pr-12 sm:pr-0 lg:pl-8 lg:pr-8">
          <Text type="h3" className='text-left mb-2'>Vast open world, owned by players</Text>
          <Text type="h5" color="#8A978C" className='text-left'>
            text
          </Text>
        </div>
      </div>
      <div className={styles.feature + " h-full pt-8 pb-8 lg:pt-0 flex flex-row-reverse lg:flex-col relative overflow-hidden lg:overflow-visible lg:items-center"}>
        <div className="absolute bottom-0 -right-4 sm:right-0 w-56 sm:w-2/5 lg:w-120p my-auto lg:my-0 h-48 flex items-center justify-end lg:justify-center md:h-full lg:h-32 sm:relative">
          <img src="/main/fog.png" className="absolute z-10 bottom-0 lg:-bottom-4 xl:-bottom-2 w-full sm:w-auto h-auto sm:h-full lg:h-auto lg:w-auto" />
        </div>
        <div className="w-full sm:h-auto sm:w-3/5 lg:w-full pl-12 pr-12 sm:pr-0 lg:pl-8 lg:pr-8">
          <Text type="h3" className='text-left mb-2'>Player-driven economy</Text>
          <Text type="h5" color="#8A978C" className='text-left'>
            text
          </Text>
        </div>
      </div>
      <div className={styles.feature + " h-full pt-8 pb-8 lg:pt-0 flex flex-row-reverse lg:flex-col relative overflow-hidden lg:overflow-visible lg:items-center"}>
        <div className="flex absolute bottom-0 right-0 sm:right-0 w-56 sm:w-2/5 lg:w-110p my-auto lg:my-0 h-48 flex items-center justify-end lg:justify-center md:h-full lg:h-32 sm:relative ">
          <img src="/main/battle.png" className="absolute z-20 bottom-0 lg:-bottom-2 xl:-bottom-2 w-full sm:w-auto h-auto sm:h-full lg:h-auto lg::w-auto" />
          <img src="/main/fog.png" className="absolute z-10 bottom-0 lg:-bottom-4 xl:-bottom-2 w-full sm:w-auto h-auto sm:h-full lg:h-auto lg:w-auto" />
        </div>
        <div className="w-full h-72 sm:h-auto sm:w-3/5 lg:w-full pl-12 pr-12 sm:pr-0 lg:pl-8 lg:pr-8">
          <Text type="h3" className='text-left mb-2'>Real-time, skill-based gameplay</Text>
          <Text type="h5" color="#8A978C" className='text-left'>
            text
          </Text>
        </div>
      </div>
      <div className={styles.feature + " h-full pt-8 pb-8 lg:pt-0 flex flex-row-reverse lg:flex-col relative overflow-hidden lg:overflow-visible lg:items-center"}>
        <div className="absolute bottom-0 -right-4 sm:right-0 w-56 sm:w-2/5 lg:w-120p my-auto lg:my-0 h-48 flex items-center justify-end lg:justify-center md:h-full lg:h-32 sm:relative">
          <img src="/main/fog.png" className="absolute z-10 bottom-0 lg:-bottom-4 xl:-bottom-2 w-full sm:w-auto h-auto sm:h-full lg:h-auto lg:w-auto" />
        </div>
        <div className="w-full sm:h-auto sm:w-3/5 lg:w-full pl-12 pr-12 sm:pr-0 lg:pl-8 lg:pr-8">
          <Text type="h3" className='text-left mb-2'>Earn tokens and NFTs for free</Text>
          <Text type="h5" color="#8A978C" className='text-left'>
            text
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Features;
