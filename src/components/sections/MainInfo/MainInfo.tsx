import React from "react";
import Dot from "components/common/Dot/Dot";
import { smoothAutoScroll } from "common/helpers/smoothAutoScroll";
import Prizes from "components/sections/MainInfo/Prizes/Prizes";
import Features from "components/sections/MainInfo/Features/Features";
import FreeToPlay from "components/sections/MainInfo/FreeToPlay/FreeToPlay";
import AngleButton from "components/svg/Main/angleButton";
import Text from "components/common/Text/Text";
import Button, { ButtonType } from "components/common/Button/Button";
import { HeaderLink } from "common/constants/HeaderLinks";
import styles from "./styles.module.css";

const MainInfo = () => {
  return (
    <div className="flex flex-col items-center lg:pt-20 xl:pt-32 " id={HeaderLink.MAIN}>
      <div data-aos="fade-up" className="flex flex-col lg:-mt-24 xl:-mt-36 items-center lg:flex-row w-full text-center md:items-start  md:text-left overflow-x-hidden lg:overflow-x-visible">
        <div className={styles.text + " flex flex-col justify-center max-w-xl lg:mt-8 xl:mt-16"}>
          <Text className="mb-2 uppercase mx-auto sm:mx-0" fontSize={18} lineHeight="24px" fontWeight="bold" maxWidth="90%" letterSpacing="0.18em" color="#8A978C">Open world MMORPG</Text>
          <Text type="h1" className="mb-4">Own land, explore, craft and earn crypto</Text>
          <div className='flex flex-col md:flex-row'>
            <div
              className='h-12 ml-auto mr-auto mb-2.5 md:mb-0 md:ml-0 md:mr-2.5'>
              <img
                style={{ maxWidth: '3.2rem' }}
                src='/main/terra.png' />
            </div>
            <div className="flex flex-col col-start-5 row-start-2 col-span-4 self-center justify-center items-center">
              <Text type="h4" className="">The Worlds First MMORPG on Terra</Text>
            </div>
          </div>
        </div>
        <div className={styles.image + " flex h-full relative justify-center self-center items-center pointer-events-none"}>
          {/* <div className="relative mt-16 z-1 -top-12 -right-20">
            <picture  >
              <source media="(max-width: 768px)" srcSet="/main/sagittariusM.png" />
              <source media="(min-width: 769px)" srcSet="/main/sagittarius.png" />
              <img src="/main/sagittarius.png" className="animate-levitate absolute" />
            </picture>
            <picture  >
              <source media="(max-width: 768px)" srcSet="/main/sagittarius-backM.png" />
              <source media="(min-width: 769px)" srcSet="/main/sagittarius-back.png" />
              <img src="/main/sagittarius-back.png" />
            </picture>
          </div> */}
          <div className="relative ml-12 mt-16" style={{ zIndex: 2 }}>
            <picture  >
              <source media="(max-width: 768px)" srcSet="/main/magmaM.png" />
              <source media="(min-width: 769px)" srcSet="/main/magma.png" />
              <img src="/main/magma.png"
                className="animate-levitate3 absolute -top-8 sm:-top-16" />
            </picture>
            <picture>
              <source media="(max-width: 768px)" srcSet="/main/magma-backM.png" />
              <source media="(min-width: 769px)" srcSet="/main/magma-back.png" />
              <img src="/main/magma-back.png" />
            </picture>
          </div>
          <div className="relative  mt-16 z-1 -top-10 -left-12 sm:-left-20">
            <picture  >
              <source media="(max-width: 768px)" srcSet="/main/fatherM.png" />
              <source media="(min-width: 769px)" srcSet="/main/father.png" />
              <img src="/main/father.png" className="animate-levitate2 absolute -top-16 left-2 sm:-top-12 sm:left-12 lg:-top-20 lg:left-2 xl:-top-16 xl:left-6" style={{ maxHeight: 250 }} />
            </picture>
            <picture  >
              <source media="(max-width: 768px)" srcSet="/main/sagittarius-backM.png" />
              <source media="(min-width: 769px)" srcSet="/main/sagittarius-back.png" />
              <img src="/main/sagittarius-back.png" />
            </picture>
          </div>
        </div>
      </div>
      <FreeToPlay />
      <Features />
    </div>
  );
}

export default MainInfo;
