import React from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";
import { HeaderLink } from "common/constants/HeaderLinks";

const FreeToPlay = () => {
    return (
        <div data-aos="fade-up" id={HeaderLink.PLAY_TO_EARN} data-aos-delay={500} className="w-full flex flex-col justify-center z-10 relative md:pb-24 pt-0 md:pt-20 lg:pt-36 pb-16">
            <div className={styles.background + " w-full p-8 md:p-12 z-10 relative  flex items-center"}>
                <div className=" w-full md:w-1/2 flex flex-col">
                    <div className={styles.cardImage2 + " mx-auto mb-4 block md:hidden z-20 relative"}>
                        <img className="max-h-full w-auto" src="/main/cards.png" />
                    </div>
                    <Text type="h2" className=" text-center md:text-left">Free to play <br />and Play to earn</Text>
                    <Text type="h4" color="white" className="mt-5 text-center md:text-left">
                        Knight Lands is perfect for casual,<br className="hidden md:block" /> competitive and business-minded gamers <br className="hidden md:block" />- everyone earns crypto just by playing
                    </Text>
                </div>
            </div>
            <div className="absolute z-20 right-0 hidden md:block -mt-4 xl:mt-0 -right-24 lg:-right-36 xl:-right-56 xl:-bottom-20 w-5/6 xl:w-full pointer-events-none">
                <img className={styles.cardImage} src="/main/cards.png" />
            </div>
            <div className="w-full h-80 md:w-1/2 absolute top-0 md:h-full right-0">
                <div className="relative w-full h-full">
                    <img src="/sequel/coin1.png" className="absolute z-0 h-28 top-8 left-12 lg:h-44 md:-left-44 lg:top-4" />
                    <img src="/sequel/coin4.png" className="absolute z-10 h-16 left-0 top-0 lg:h-24 md:-left-24 lg:-left-64 md:top-24" />
                    <img src="/sequel/coin8.png" className="absolute z-0 h-36 top-0 right-0 md:top-0 md:right-36" />
                    <img src="/sequel/coin3.png" className="absolute z-10 h-12 lg:h-24 z-10 top-44 left-0 md:-left-10 lg:-left-32" />
                    <img src="/sequel/coin5.png" className="absolute z-20 h-16 z-10 -bottom-6 left-0 md:-left-24 md:bottom-24 lg:-left-44" />
                    <img src="/sequel/coin6.png" className="absolute z-20 h-20 -bottom-12 right-0 md:bottom-16 md:-right-10" />
                    <img src="/sequel/coinGroup.png" className="absolute z-10 w-44 -top-24 -right-24 md:top-0 md:w-72 md:-right-64" />
                </div>
            </div>
        </div>
    )
}
export default FreeToPlay;
