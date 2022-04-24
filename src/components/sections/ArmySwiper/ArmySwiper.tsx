import { Swiper, SwiperSlide } from "swiper/react";
import Text from "components/common/Text/Text";
import { Navigation } from "swiper";
import ModalProvider, {
  useModalContext,
} from "components/context/ModalContext";

import styles from "./styles.module.css";
import "swiper/css";

interface IArmy {
  src: string;
  title: string;
}

const army: IArmy[] = [
  { src: "/army/mushroom_knight.png", title: "Mushroom Knight" },
  { src: "/army/forest_creature.png", title: "Forest Creature" },
  { src: "/army/crocodile_e.png", title: "Crocodile" },
  { src: "/army/archer_r.png", title: "Archer" },
  { src: "/army/drowned_d.png", title: "Drowned" },
  { src: "/army/ice_creature.png", title: "Ice Creature" },
];

const ArmySwiper = () => {
  const { isModalOpen, handleClose, handleOpen } = useModalContext();
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
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 2,
              centeredSlides: true,
              initialSlide: 2,
            },
            768: {
              slidesPerView: 6,
            },
          }}
          className={styles.swiper + " max-w-full max-h-full"}
        >
          {army.map((monster, i) => (
            <SwiperSlide className={styles.slide + " w-1/6"} >
              <div className={styles.monster_card} >
                <div
                  key={i}
                  className={
                    styles.card_inner +
                    " flex flex-col items-center justify-center"
                  }
                >
                  <div className={styles.img_frame}>
                    <img
                      className={styles.img + " absolute "}
                      src={monster.src}
                    />
                    <img
                      className={styles.play_icon + " absolute + left-1/2"}
                      onClick={handleOpen}
                      src="/army/play.svg"
                    />
                  </div>
                  <Text type="h5" font="stoke" className="text-center ">
                    {monster.title}
                  </Text>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {isModalOpen && (
          <div
            className={
              styles.absolute_wrapper + " absolute + top-0 + w-full + h-full z-40"
            }
          >
            <div className="flex flex-col w-full items-end">
              <div className="flex">
                <img src="/army/close.svg" className="mr-2"/>
                <Text color="#35CFD5" font="stoke">Close</Text>
              </div>
            <video className="w-full h-full z-50" autoPlay muted>
              <source src="/army/video1.mp4" type="video/mp4" />
            </video>
            </div>
          </div>
        )}
        {isModalOpen && (<div className={styles.overlay} onClick={handleClose}/>)}
      </div>
  );
};

export default ArmySwiper;
