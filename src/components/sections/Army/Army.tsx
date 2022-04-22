import React from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";


interface IArmy {
  src: string;
  title: string;
}

const army: IArmy[] = [
  { src: "/army/mushroomKnight.png", title: "Mushroom knight" },
  { src: "/army/forestCreature.png", title: "Forest creature" },
  { src: "/army/crocodile.png", title: "Crocodile" },
  { src: "/army/archer.png", title: "Archer" },
  { src: "/army/drowned.png", title: "Drowned" },
  { src: "/army/iceCreature.png", title: "Ice creature" },
];

const Army = () => {
  return (
    <div
      className="flex w-full flex-col justify-center items-center self-center max-w-6xl mx-auto"
      data-aos="fade-up"
    >
      <div className="flex flex-col text-center max-w-3xl mx-2 mb-20">
        <Text type="h1" font="stoke">
          Diverse World
        </Text>
      </div>
      <div
        className={
          styles.removeScrollbar +
          " flex w-full justify-start overflow-scroll max-w-8xl"
        }
      >
        {army.map((monster, i) => (
          <div key={i} className={styles.cardWrapper + " px-1 lg:mx-0"}>
            <div
              className={
                styles.monsterCard + " flex justify-center items-center"
              }
            >
              <div className={styles.monsterCardInner}>
                <div
                  className={
                    styles.imgInner + " flex justify-center items-center"
                  }
                >
                  <img className={styles.img} src={monster.src} />
                </div>
              </div>
            </div>
            <Text
              type="h5"
              font="stoke"
              className="flex items-center justify-center text-center mt-6 mb-4 uppercase"
            >
              {monster.title}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Army;
