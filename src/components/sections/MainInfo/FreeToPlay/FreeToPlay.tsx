import React from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";

const FreeToPlay = () => {
    return (
        <div data-aos="fade-up" data-aos-delay={500} className="w-full flex flex-col justify-center relative pt-0 md:pt-20 lg:pt-36 pb-16">
            <div className={styles.background + " w-full p-8 md:p-12 flex items-center"}>
                <div className=" w-full md:w-1/2 flex flex-col">
                    <div className="mx-auto mb-4 h-80 block md:hidden">
                        <img className="max-h-full w-auto" src="/main/cards.png" />
                    </div>
                    <Text type="h2" className=" text-center md:text-left">Free to play <br />and Play to earn</Text>
                    <Text type="h4" color="white" className="mt-5 text-center md:text-left">
                        Knightlands isn't only a fun game — <br />it lets you earn crypto just by playing
                    </Text>
                </div>
            </div>
            <div className="md:w-1/2 absolute md:bottom-20 z-10 right-0 hidden md:block pl-16 pt-10">
                <img src="/main/cards.png" />
            </div>
            <div className="w-full h-80 md:w-1/2 absolute top-0 md:h-full right-0">
                <div className="relative w-full h-full">
                    <img src="/sequel/coin1.png" className="absolute z-20 h-16 lg:h-24 bottom-0 md:bottom-24 lg:bottom-44 " />
                    <img src="/sequel/coin2.png" className="absolute z-20 h-24 lg:h-32 top-32 -left-8 lg:-left-32 lg:top-24" />
                    <img src="/sequel/coin4.png" className="absolute z-20 h-12 left-12 lg:h-16 top-16 lg:top-2 lg:top-8 " />
                    <img src="/sequel/coinGroup.png" className="absolute z-20 top-44 md:top-24 w-96 -right-56" />
                    <img src="/sequel/coin8.png" className="absolute z-0 h-12 lg:h-20 right-0 top-16 lg:right-0 lg:-top-12" />
                    {/* 
                    <img src="/sequel/coin9.png" className="hidden lg:block absolute -right-44 md:-right-32 -top-6" /> */}
                </div>
            </div>
        </div>
    )
}
export default FreeToPlay;
