import { Swiper, SwiperSlide } from "swiper/react";
import Text from "components/common/Text/Text";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import styles from "./styles.module.css";
import "swiper/css";

interface IArmy {
  src: string;
  title: string;
}

const army: IArmy[] = [
  { src: "/army/mushroom_knight.png", title: "Mushroom knight" },
  { src: "/army/forest_creature.png", title: "Forest creature" },
  { src: "/army/crocodile_e.png", title: "Crocodile" },
  { src: "/army/archer_r.png", title: "Archer" },
  { src: "/army/drowned_d.png", title: "Drowned" },
  { src: "/army/ice_creature.png", title: "Ice creature" },
];

const ArmySwiper = () => {
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
    <Swiper
      spaceBetween={12}
      slidesPerView={1}
      breakpoints={{
        320: {
          slidesPerView: 2,
          centeredSlides: true,
          initialSlide:2
        },
        768: {
          slidesPerView: 6,
        },
      }}
      className={styles.swiper + " max-w-full max-h-full"}
    >
      {army.map((monster, i) => (
        <SwiperSlide className={styles.slide + " w-1/6"}>
          <div className={styles.monster_card}>
            <div key={i} className= {styles.card_inner + " flex flex-col items-center justify-center"}>
              <div className={styles.img_frame}>
                <img className={styles.img + " absolute "} src={monster.src} />
              </div>
              <Text type="h5" font="stoke" className="text-center uppercase">
                {monster.title}
              </Text>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default ArmySwiper;
