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
      <div data-aos="fade-up" className="flex flex-col lg:-mt-24 xl:-mt-52 items-center lg:flex-row w-full text-center md:items-start lg:items-center md:text-left overflow-x-hidden lg:overflow-x-visible">
        <div className={styles.text + " flex flex-col justify-center max-w-xl"}>
          <Text className="mb-2 uppercase mx-auto sm:mx-0" fontSize={18} lineHeight="24px" fontWeight="bold" maxWidth="90%" letterSpacing="0.18em" color="#8A978C">Realtime online Action RPG</Text>
          <Text type="h1" className="mb-4">Win group raids, craft items and earn crypto</Text>
          <div className='flex flex-col md:flex-row'>
            <div
              className='h-12 ml-auto mr-auto mb-2.5 md:mb-0 md:ml-0 md:mr-2.5'>
              <img
                style={{ maxWidth: '3.2rem' }}
                src='/main/terra.png' />
            </div>
            <Text type="h4" className="">Online browser role-playing game on Terra Blockchain</Text>

          </div>
        </div>
        <div className={styles.image + " flex h-full relative justify-center self-center items-center lg:pt-20 xl:pt-32"}>
          <div className="relative mt-16 z-1 -top-12 -right-20">
            <img src="/main/sagittarius.png" className="animate-levitate absolute" />
            <img src="/main/sagittarius-back.png" />
          </div>
          <div className="relative mt-16" style={{ zIndex: 2 }}>
            <img src="/main/magma.png" className="animate-levitate3 absolute -top-16" />
            <img src="/main/magma-back.png" />
          </div>
          <div className="relative  mt-16 z-1 -top-10 -left-20">
            <img src="/main/father.png" className="animate-levitate2 absolute -top-24 left-4" style={{ maxHeight: 250 }} />
            <img src="/main/father-back.png" />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-col items-center lg:items-start w-full lg:-mt-12 xl:-mt-28 mb-16">
        <div className="flex flex-col md:flex-row  -mt-2">
          <a href="https://play.knightlands.com" className="relative ml-4 flex md:-ml-2" target="_blank">
            <div style={{ height: "84px", width: "295px" }} className="relative">
              <div className={styles.buttonText + " top-0 absolute w-full uppercase h-full flex items-center"}>
                Release in December 2022
              </div>
              <AngleButton /></div>
          </a>
          <div className="flex flex-col">
            <Button type={ButtonType.SECONDARY} className="flex justify-center uppercase items-center h-14 md:mt-4" onClick={() => smoothAutoScroll(HeaderLink.GAMEPLAY)}>Play now in knightlands: prologue</Button>
            <div data-aos="fade-up" className="mx-auto flex flex-row items-center mt-4">
              <Dot color="#FFEB3D" />
              <Text type="h5" color="#8A978C">No wallet needed</Text>
            </div>
          </div>
        </div>
      </div>
      <FreeToPlay />
      <Features />
    </div>
  );
}

export default MainInfo;
