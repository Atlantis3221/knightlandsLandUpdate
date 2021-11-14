import React from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";

const FreeToPlay = () => {
    return (
        <div data-aos="fade-up" data-aos-delay={500} className="w-full flex flex-col justify-center z-10 relative md:pb-24 pt-0 md:pt-20 lg:pt-36 pb-16">
            <div className={styles.background + " w-full p-8 md:p-12 z-10 relative  flex items-center"}>
                <div className=" w-full md:w-1/2 flex flex-col">
                    <div className={styles.cardImage2 + " mx-auto mb-4 block md:hidden z-20 relative"}>
                        <img className="max-h-full w-auto" src="/main/cards.png" />
                    </div>
                    <Text type="h2" className=" text-center md:text-left">Free to play <br />and Play to earn</Text>
                    <Text type="h4" color="white" className="mt-5 text-center md:text-left">
                        Knightlands isn't only a fun<br className="hidden md:block" />  game — it lets you earn<br className="hidden md:block" />  crypto just by playing
                    </Text>
                </div>
            </div>
            <div className="absolute z-20 right-0 hidden md:block -mt-4 xl:mt-0 -right-24 lg:-right-36 xl:-right-56 xl:-bottom-20 w-5/6 xl:w-full">
                <img className={styles.cardImage} src="/main/cards.png" />
            </div>
            <div className="w-full h-80 md:w-1/2 absolute top-0 md:h-full right-0">
                <div className="relative w-full h-full">
                    <img src="/sequel/coin1.png" className="absolute z-0 h-24 top-8 left-12 lg:h-36 md:-left-36 lg:top-16" />
                    <img src="/sequel/coin4.png" className="absolute z-10 h-12 left-0 top-0 lg:h-16 md:-left-24 lg:-left-56 md:top-24" />
                    <img src="/sequel/coin8.png" className="absolute z-0 h-24 -top-8 right-0 md:top-8 md:right-44" />
                    <img src="/sequel/coin3.png" className="absolute z-10 h-12 lg:h-16 z-10 top-44 -left-6 lg:-left-28" />
                    <img src="/sequel/coin5.png" className="absolute z-20 h-12 z-10 -bottom-6 left-0 md:bottom-24 lg:-left-44" />
                    <img src="/sequel/coin6.png" className="absolute z-20 h-12 bottom-0 right-0 md:bottom-20 md:-right-8" />
                    <img src="/sequel/coinGroup.png" className="absolute z-10 w-72 top-44 md:top-24 md:w-96 -right-64" />
                </div>
            </div>
        </div>
    )
}
export default FreeToPlay;
