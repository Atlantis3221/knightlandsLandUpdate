import React from "react";
import styles from "./styles.module.css";
import Timer from "components/common/Timer/Timer";
import Text from "components/common/Text/Text";

const Classes = () => {
  return (
    <div
      data-aos="fade-up"
      className=" flex flex-col w-full items-center justify-between mb-24 relative"
    >
      <Text type="h1" font="stoke" className="">
        Player Classes
      </Text>

      {/* <img src="/common/class-frame.svg"> */}
      
      <div className={styles.ground + " bottom-52 flex justify-between"}>
        <div className="flex flex-col mr-4">
          <img src="/common/archer.png" />
          <div className="flex items-center justify-center mb-2">
            <div
              className={styles.line + " mr-4"}
              style={{ transform: "rotate(180deg)" }}
            />
            <Text type="h4" font="stoke" >
              ARCHER
            </Text>
            <div className={styles.line + " ml-4"} />
          </div>

          <Text type="h5" className="text-center opacity-60">
            Players can use variuos types of dragons in battles
            <br /> and complete the quests in story mode
          </Text>
        </div>

        <div className="flex flex-col mr-4">
        <img src="/common/mage.png" />
          <div className="flex items-center justify-center mb-2">
            <div
              className={styles.line + " mr-4"}
              style={{ transform: "rotate(180deg)" }}
            />
            <Text type="h4" font="stoke">
              MAGE
            </Text>
            <div className={styles.line + " ml-4"} />
          </div>

          <Text type="h5" className="text-center opacity-60">
            Players can use variuos types of dragons in battles
            <br /> and complete the quests in story mode. By playing, players
            will be rewarded with SB tokens and NFT
          </Text>
        </div>

        <div className="flex flex-col">
        <img src="/common/fighter.png"/>
        <div>
          <div className="flex items-center justify-center mb-2">
            <div
              className={styles.line + " mr-4"}
              style={{ transform: "rotate(180deg)" }}
            />
            <Text type="h4" font="stoke">
              FIGHTER
            </Text>
            <div className={styles.line + " ml-4"} />
          </div>

          <Text type="h5" className="text-center opacity-60">
            Players can use variuos types of dragons
          </Text>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Classes;
