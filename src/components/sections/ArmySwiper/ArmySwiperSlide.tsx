import Text from "components/common/Text/Text";
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { IArmy } from "./ArmySwiper";

interface IArmySlideProps {
    monster: IArmy
    width: number
    setHoverState: Dispatch<SetStateAction<number>>
    index: number
    setVideoSurplus:  Dispatch<SetStateAction<number>>
}

export const ArmySlide: FC<IArmySlideProps> = ({monster, width, setHoverState, index, setVideoSurplus}) => {

    const videoRef = useRef<HTMLVideoElement>()
    const [rectWidth, setRectWidth] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const videoRect = videoRef.current.getBoundingClientRect()
        setVideoSurplus(videoRect.width - width)
        setRectWidth(videoRect.width*1.67)
    }, [])

    useEffect(() => {
        if (isHovered) {
            videoRef.current.play()
        }
        else {
            videoRef.current.pause()
        }

    }, [isHovered])

    return (

        <div 
        style={{
            ...(isHovered && rectWidth ? {width: rectWidth} : {width})
        }}
        className={"transition-all duration-300 hover:scale-150 hover:z-30 origin-bottom transform "} >
          <div

            className={
              "w-full h-32  md:h-44 lg:h-52 transform relative origin-bottom overflow-hidden rounded-xl"
            }
            onMouseEnter={() => {
                setHoverState(index + 1)
                setIsHovered(true)
            }}
            onMouseLeave={() => {
                setHoverState(0)
                setIsHovered(false)
            }}
          >
            <div 
            style={{
              background: "linear-gradient(180deg, rgba(34, 95, 104, 0.08) 0%, #05161C 98.83%)"
            }}
            className={""}>
              <video ref={videoRef} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full`} 
              src="/army/video1.mp4" muted/>
              {/* <img
                className={styles.img + " absolute "}
                src={monster.src}
              /> */}
              {/* <img
                className={styles.play_icon + " absolute + left-1/2"}
                onClick={handleOpen}
                src="/army/play.svg"
              /> */}
            </div>
          </div>
              <div className={`h-16`}>
                <Text type="h5" font="stoke" className="text-center ">
                {monster.title}
                </Text>
              </div>


        </div>
    )
}