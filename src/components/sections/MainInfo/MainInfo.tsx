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
    <div className="flex flex-col items-center" id={HeaderLink.MAIN}>
      <div data-aos="fade-up" className={styles.screen + " flex flex-col lg:-mt-24 xl:-mt-36 items-start w-full text-center md:items-start md:text-left overflow-x-hidden md:overflow-x-visible relative"}>
        <div className={styles.text + " mb-6 sm:mb-20 flex xl:px-4 flex-col justify-start items-start right-0 left-0 mx-auto relative"}>
          <Text type="h1" className="text-center z-30" font="stoke">Own Land,</Text>
          <Text type="h1" className="text-center z-30" font="stoke">Craft Weapons,</Text>
          <Text type="h1" className="mb-4 text-center z-30" font="stoke">Earn Crypto</Text>
          <div className='flex flex-col md:flex-row z-30 relative'>
            <div
              className='h-12 ml-auto mr-auto mb-2.5 md:mb-0 md:ml-0 md:mr-2.5'>
              <img
                style={{ maxWidth: '3.2rem' }}
                className="-mt-1"
                src='/main/terra.png' />
            </div>
            <div className="flex flex-col col-start-5 row-start-2 col-span-4 self-center justify-center items-center">
              <Text type="h4" className="text-left">Get Ready For The Worlds First <br />MMORPG On Terra</Text>
            </div>
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
