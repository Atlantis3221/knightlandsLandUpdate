import React from "react";
import PlayNow from "components/common/PlayNow";
import Dot from "components/common/Dot/Dot";
import { smoothAutoScroll } from "common/helpers/smoothAutoScroll";
import Prizes from "components/sections/MainInfo/Prizes/Prizes";
import Text from "components/common/Text/Text";
import Button, { ButtonType } from "components/common/Button/Button";
import { HeaderLink } from "common/constants/HeaderLinks";
import styles from "./styles.module.css";

const MainInfo = () => {
  return (
    <div className="flex flex-col items-center mb-36" id={HeaderLink.MAIN}>
      <div data-aos="fade-up" className="flex flex-col lg:-mt-24 xl:-mt-52 items-center lg:flex-row w-full text-center md:items-start lg:items-center md:text-left overflow-x-hidden lg:overflow-x-visible">
        <div className={styles.text + " flex flex-col justify-center max-w-xl"}>
          <Text className="mb-2" fontSize={18} lineHeight="24px" fontWeight="bold" letterSpacing="0.18em" color="#8A978C">IDLE ONLINE RPG</Text>
          <Text type="h1" className="mb-4">Win group raids, craft items and earn crypto</Text>
          <Text type="h4" className="">Online browser role-playing game with integrated blockchain technology</Text>
        </div>
        <div className={styles.image + " flex h-full relative justify-center self-center items-center lg:pt-20 xl:pt-32"}>
          <div className="relative mt-16 z-1 -top-12 -right-20">
            <img src="/main/sagittarius.png" className="animate-levitate absolute"/>
            <img src="/main/sagittarius-back.png"/>
          </div>
          <div className="relative mt-16" style={{zIndex: 2}}>
            <img src="/main/magma.png" className="animate-levitate absolute -top-16"/>
            <img src="/main/magma-back.png"/>
          </div>
          <div className="relative  mt-16 z-1 -top-10 -left-20">
            <img src="/main/father.png" className="animate-levitate absolute -top-24 left-4" style={{maxHeight: 250}}/>
            <img src="/main/father-back.png"/>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="flex flex-col items-center lg:items-start w-full lg:-mt-12 xl:-mt-40 mb-16">
        <div className="flex flex-row">
          <PlayNow/>
          <Button type={ButtonType.SECONDARY} className="flex justify-center items-center ml-4" onClick={() => smoothAutoScroll(HeaderLink.GAMEPLAY)}>LEARN MORE</Button>
        </div>
        <div data-aos="fade-up" className="flex flex-row items-center mt-4">
          <Dot color="#FFEB3D"/>
          <Text type="h5" color="#8A978C">No wallet needed</Text>
        </div>
      </div>

      <Prizes/>
    </div>
  );
}

export default MainInfo;