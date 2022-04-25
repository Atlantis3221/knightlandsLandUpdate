
import Text from "components/common/Text/Text";
import ModalProvider, {
  useModalContext,
} from "components/context/ModalContext";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import { ArmySlide } from "./ArmySwiperSlide";

export interface IArmy {
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
  const elemCount = army.length
  const { isModalOpen, handleClose, handleOpen } = useModalContext();
  const [ hoverState, setHoverState ] = useState(0)
  const [ elemWidth, setElemWidth ] = useState(100)
  const [ videoSurplus, setVideoSurplus ] = useState(0)
  const [ defaultWidth, setDefaultWidth ] = useState(0)
  const mainRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const {width} = mainRef.current.getBoundingClientRect()
    setElemWidth(((width - 16*(elemCount - 1))/(elemCount)))
    setDefaultWidth(width)
  }, [])

  useEffect(() => {
    if (hoverState) {
      mainRef.current.style.width = `${defaultWidth + videoSurplus}px`
    }
    else {
      mainRef.current.style.width = `${defaultWidth}px`
      mainRef.current.style.marginLeft = "0px"
      mainRef.current.style.marginRight = "0px"
    }
  }, [hoverState, videoSurplus, defaultWidth])

  useEffect(() => {
    console.log(videoSurplus)
  }, [videoSurplus])
  
  return (
      <>
      <div className="flex items-center justify-center">
        <Text type="h1" font="stoke">
          Diverse World
        </Text>
      </div>

      <div
        className="flex w-full flex-col items-center justify-center max-w-6xl"
        data-aos="fade-up"
      >
        <div className="flex flex-col text-center max-w-3xl mx-2 mb-20">

        </div>

        <div ref={mainRef} className="flex w-full justify-between transition-all duration-300">
        {army.map((monster, _i) => (
            <ArmySlide 
            setHoverState={setHoverState} 
            index={_i} 
            monster={monster} 
            width={elemWidth} 
            key={`armyslide${_i}`}
            setVideoSurplus={setVideoSurplus}
            />
            ))}
        </div>
      </div>
      </>
  );
};

export default ArmySwiper;
