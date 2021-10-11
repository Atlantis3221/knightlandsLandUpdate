import React from "react";
import PlayNow from "components/common/PlayNow";
import Dot from "components/common/Dot/Dot";
import { smoothAutoScroll } from "common/helpers/smoothAutoScroll";
import { GAMEPLAY } from "common/constants/HeaderLinks";
import Prizes from "components/sections/MainInfo/Prizes/Prizes";
import Text from "components/common/Text/Text";
import Button, { ButtonType } from "components/common/Button/Button";

const MainInfo = () => {
  return (
    <div className="flex flex-col items-center mb-36">
      <div className="flex flex-col lg:flex-row w-full text-center md:text-left">
        <div className="flex flex-col justify-center max-w-xl">
          <Text className="mb-2" fontSize={18} lineHeight="24px" fontWeight="bold" letterSpacing="0.18em" color="#8A978C">IDLE ONLINE RPG</Text>
          <Text type="h1" className="mb-4">Win group raids, craft items and earn crypto</Text>
          <Text type="h4" className="mb-12">Online browser role-playing game with integrated blockchain technology</Text>
        </div>
        <div className="flex w-full h-full justify-center self-center items-center lg:-mt-8">
          <img src="/common/heroes.png"/>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start w-full md:-mt-0 xl:-mt-24 mb-16">
        <div className="flex flex-row">
          <PlayNow/>
          <Button type={ButtonType.SECONDARY} className="flex justify-center items-center ml-4" onClick={() => smoothAutoScroll(GAMEPLAY)}>LEARN MORE</Button>
        </div>
        <div className="flex flex-row items-center mt-4">
          <Dot color="#FFEB3D"/>
          <Text type="h5" color="#8A978C">No wallet needed</Text>
        </div>
      </div>

      <Prizes/>
    </div>
  );
}

export default MainInfo;