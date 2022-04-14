import React from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";
import { HeaderLink } from "common/constants/HeaderLinks";

const FreeToPlay = () => {
  return (
    <div
      data-aos="fade-up"
      id={HeaderLink.PLAY_TO_EARN}
      data-aos-delay={500}
      className="w-full flex flex-col justify-center z-10 relative md:pb-24 pt-0 md:pt-20 lg:pt-36 pb-16"
    >
      <div className=" w-full md:w-1/2 flex flex-col">
        <Text type="h2" className=" text-center md:text-left" font="stoke">
          Free to play — <br />
          play to earn
        </Text>
        <Text type="h4" color="white" className="mt-5 text-center md:text-left">
          Knight Lands is perfect for casual,
          <br className="hidden md:block" /> competitive and business-minded
          gamers <br className="hidden md:block" />- everyone earns crypto by
          playing
        </Text>
      </div>
    </div>
  );
};
export default FreeToPlay;
