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
      <div data-aos="fade-up" className={styles.screen + " flex flex-col lg:-mt-24 xl:-mt-36 items-center w-full text-center md:items-start  md:text-left overflow-x-hidden md:overflow-x-visible relative"}>
        <div className={styles.text + " mb-6 sm:mb-20 flex flex-col justify-center right-0 left-0 mx-auto relative"}>
          <img src="/main/shadowT.png" className={styles.textShadow + " z-0 hidden lg:block absolute -top-16 right-0 left-0 mx-auto"} />
          <Text type="h1" className="text-center z-30">Own Land, Craft Weapons,</Text>
          <Text type="h1" className="mb-4 text-center z-30">Earn Crypto</Text>
          <div className='flex flex-col md:flex-row mx-auto items-center z-30 relative'>
            <div
              className='h-12 ml-auto mr-auto mb-2.5 md:mb-0 md:ml-0 md:mr-2.5'>
              <img
                style={{ maxWidth: '3.2rem' }}
                className="-mt-1"
                src='/main/terra.png' />
            </div>
            <div className="flex flex-col col-start-5 row-start-2 col-span-4 self-center justify-center items-center">
              <Text type="h4" className="">Get Ready For The Worlds First <br />MMORPG On Terra</Text>
            </div>
          </div>
        </div>
        <div className={styles.image + " w-full h-full px-0 md:px-6 lg:px-4 mb-6 h-full flex justify-end relative pointer-events-none flex-col"}>
          <div className={styles.imageContainer + " flex relative justify-center self-center items-center h-auto mt-0"}>
            <div className="relative z-10 -mr-20  sm:-mr-24 md:-mr-36 -mt-4 sm:-mt-14 md:-mt-8 lg:-mt-4 flex justify-center">
              <picture  >
                <source media="(max-width: 768px)" srcSet="/main/character2M.png" />
                <source media="(max-width: 1921px)" srcSet="/main/character2.png" />
                <source media="(min-width: 1921px)" srcSet="/main/character2B.png" />
                <img src="/main/character2.png" className="animate-levitate mx-auto right-0 left-0 my-auto -top-2 bottom-0" />
              </picture>
            </div>
            <div className="relative z-20 -mt-2 sm:-mt-20 flex justify-center">
              <picture >
                <source media="(max-width: 768px)" srcSet="/main/character1M.png" />
                <source media="(max-width: 1921px)" srcSet="/main/character1.png" />
                <source media="(min-width: 1921px)" srcSet="/main/character1B.png" />
                <img src="/main/character1.png"
                  className="animate-levitate3 mx-auto right-0 left-0 my-auto -top-2 sm:-top-4 bottom-0" />
              </picture>
            </div>
            <div className="relative -ml-20 sm:-ml-24 md:-ml-28 z-10 -mt-10 sm:-mt-16 md:-mt-20 flex justify-center">
              <picture  >
                <source media="(max-width: 768px)" srcSet="/main/character3M.png" />
                <source media="(max-width: 1921px)" srcSet="/main/character3.png" />
                <source media="(min-width: 1921px)" srcSet="/main/character3B.png" />
                <img src="/main/character3.png" className="animate-levitate2 mx-auto right-0 left-0 my-auto -top-6 sm:top-0 bottom-0" />
              </picture>
            </div>
            <img src="/main/shadowH.png" className={" w-full absolute -bottom-4 z-0"} />
            <img src="/main/shadowM.png" className={styles.heroShadow + " w-full absolute bottom-0 sm:-bottom-4 z-0"} />
          </div>
        </div>
      </div>
      <FreeToPlay />
      <div className="grid w-full">
        <Features />
      </div>
    </div>
  );
}

export default MainInfo;
