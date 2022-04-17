import React from "react";
import styles from "./styles.module.css";
import Timer from "components/common/Timer/Timer";
import Text from "components/common/Text/Text";
import { HeaderLink } from "common/constants/HeaderLinks";

const Features = () => {
  return (
    <div data-aos="fade-up" id={HeaderLink.FEATURES}>
    <Text type="h2" font="stoke" className="text-center">Game Features</Text>
    <div
      
      className="grid grid-cols-1 w-full mb-8 gap-x-4 -gap-y-16 pt-10"
    >
      <div data-aos="fade-up" className="flex items-center justify-between lg:-ml-16 lg:-mb-16 lg:flex-row sm:flex-col-reverse sm:m-0">
        <div className="">
          <img src="/main/feature1.png" className="max-w-none" />
        </div>

        <div className="w-full sm:h-auto sm:w-3/5 lg:w-full sm:pr-0">
          <div className="flex items-center justify-center mb-3">
            <div
              className={styles.line + " mr-5"}
              style={{ transform: "rotate(180deg)" }}
            />
            <div className={styles.line} />
          </div>
          <Text type="h4" className="text-center mb-2" font="stoke">
            COMPETITIVE COMBAT
          </Text>
          <Text type="h5" color="#8A978C" className="text-center">
            Players can use various types of dragons in battles <br /> and
            complete the quests in story mode. By playing, players will be
            rewarded with SB tokens and NFT
          </Text>
        </div>
      </div>

      <div data-aos="fade-up" className="flex items-center justify-between lg:-mr-16 lg:-my-16 lg:flex-row sm:flex-col sm:m-0">
        <div className="w-full sm:h-auto sm:w-3/5 lg:w-full sm:pr-0 flex flex-col">
          <div className="flex items-center justify-center mb-3">
            <div
              className={styles.line + " mr-5"}
              style={{ transform: "rotate(180deg)" }}
            />
            <div className={styles.line} />
          </div>
          <Text type="h4" className="text-center mb-2" font="stoke">
            PLAYER DRIVEN ECONOMY
          </Text>
          <Text type="h5" color="#8A978C" className="text-center">
            Players can use various types of dragons in battles <br /> and
            complete the quests in story mode. By playing, players will be
            rewarded with SB tokens and NFT
          </Text>
        </div>

        <div className="">
          <img src="/main/feature2.png" className="max-w-none" />
        </div>
      </div>

      <div data-aos="fade-up" className="flex items-center justify-between lg:-ml-16 lg:-my-16 lg:flex-row sm:flex-col-reverse sm:m-0">
        <div className="">
          <img src="/main/feature3.png" className="max-w-none" />
        </div>

        <div className="w-full sm:h-auto sm:w-3/5 lg:w-full sm:pr-0">
          <div className="flex items-center justify-center mb-3">
            <div
              className={styles.line + " mr-5"}
              style={{ transform: "rotate(180deg)" }}
            />
            <div className={styles.line} />
          </div>
          <Text type="h4" className="text-center mb-2" font="stoke">
            OWN YOUR ASSETS
          </Text>
          <Text type="h5" color="#8A978C" className="text-center">
            Players can use various types of dragons in battles <br /> and
            complete the quests in story mode. By playing, players will be
            rewarded with SB tokens and NFT
          </Text>
        </div>
      </div>
      <div data-aos="fade-up" className="flex items-center justify-between lg:-mr-16 lg:-mt-16 lg:flex-row sm:flex-col sm:m-0">
        <div className="w-full sm:h-auto sm:w-3/5 lg:w-full sm:pr-0 flex flex-col">
          <div className="flex items-center justify-center mb-3">
            <div
              className={styles.line + " mr-5"}
              style={{ transform: "rotate(180deg)" }}
            />
            <div className={styles.line} />
          </div>
          <Text type="h4" className="text-center mb-2" font="stoke">
              LAND MANAGEMENT
          </Text>
          <Text type="h5" color="#8A978C" className="text-center">
            Players can use various types of dragons in battles <br /> and
            complete the quests in story mode. By playing, players will be
            rewarded with SB tokens and NFT
          </Text>
        </div>

        <div className="">
          <img src="/main/feature4.png" className="max-w-none" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Features;
