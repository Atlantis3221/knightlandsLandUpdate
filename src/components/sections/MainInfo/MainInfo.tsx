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
          <Text className="mb-2 uppercase mx-auto sm:mx-0" fontSize={18} lineHeight="24px" fontWeight="bold" maxWidth="90%" letterSpacing="0.18em" color="#8A978C">Open world PVP game</Text>
          <Text type="h1" className="mb-4">Conquer lands, mine token and fight for resourses</Text>
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
        <div className={styles.image + "px-28 md:px-0 flex mb-14 h-full relative justify-center self-center items-center pointer-events-none"}>
          <div className="relative z-1 -mr-20 sm:-mr-28 -mt-12 md:-mt-24 flex justify-center">
            <picture  >
              <source media="(max-width: 768px)" srcSet="/main/character2M.png" />
              <source media="(min-width: 769px)" srcSet="/main/character2.png" />
              <img src="/main/character2.png" className="animate-levitate absolute mx-auto right-0 left-0 my-auto -top-2 bottom-0" />
            </picture>
            <picture  >
              <source media="(max-width: 768px)" srcSet="/main/secondaryBackM.png" />
              <source media="(min-width: 769px)" srcSet="/main/secondaryBack.png" />
              <img src="/main/secondaryBack.png" />
            </picture>
          </div>
          <div className="relative -mt-2 sm:-mt-14 flex justify-center" style={{ zIndex: 2 }}>
            <picture >
              <source media="(max-width: 768px)" srcSet="/main/character1M.png" />
              <source media="(min-width: 769px)" srcSet="/main/character1.png" />
              <img src="/main/character1.png"
                className="animate-levitate3 absolute mx-auto right-0 left-0 my-auto -top-2 sm:-top-4 bottom-0" />
            </picture>
            <picture>
              <source media="(max-width: 768px)" srcSet="/main/primaryBackM.png" />
              <source media="(min-width: 769px)" srcSet="/main/primaryBack.png" />
              <img src="/main/primaryBack.png" />
            </picture>
          </div>
          <div className="relative -ml-20 sm:-ml-28 z-1 -mt-12 md:-mt-24 flex justify-center">
            <picture  >
              <source media="(max-width: 768px)" srcSet="/main/character3M.png" />
              <source media="(min-width: 769px)" srcSet="/main/character3.png" />
              <img src="/main/character3.png" className="animate-levitate2 absolute mx-auto right-0 left-0 my-auto -top-6 sm:top-0 bottom-0" style={{ maxHeight: 250 }} />
            </picture>
            <picture  >
              <source media="(max-width: 768px)" srcSet="/main/secondaryBackM.png" />
              <source media="(min-width: 769px)" srcSet="/main/secondaryBack.png" />
              <img src="/main/secondaryBack.png" />
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
