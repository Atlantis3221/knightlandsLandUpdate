import React from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";
import Button from "components/common/Button/Button";
import SequelIcon from "components/svg/Sequel/Sequel";

const Sequel = () => {
    return (
        <div data-aos="fade-up" className={styles.sequelWrapper + ` relative flex justify-center w-full`}>
            <div className="absolute z-20 -top-28">
                <SequelIcon />
            </div>
            <div className={styles.sequelBackground + ' flex w-full flex-col h-full z-10 relative items-center px-4 sm:px-16 py-10 overflow-x-hidden md:overflow-x-visible'}>

                <img src="/sequel/coin1.png" className="absolute -left-12 h-24 md:h-32 md:-left-24 xl:-left-16 top-24 lg:h-auto" />
                <img src="/sequel/coin2.png" className="hidden lg:block  absolute -left-16 -top-24" />
                <img src="/sequel/coin3.png" className="absolute left-0 top-0 h-16 lg:h-auto md:-top-16 md:left-12 lg:left-32 lg:top-20" />
                <img src="/sequel/coin4.png" className="absolute h-12 top-16 lg:h-auto left-16 md:left-44 lg:left-56 md:-top-6" />
                <img src="/sequel/coin5.png" className="absolute left-32 top-12 xl:left-80 xl:top-16" />
                <img src="/sequel/coin6.png" className="absolute right-4 top-0 md:right-12 md:top-32 lg:right-80 lg:top-16" />
                <img src="/sequel/coin7.png" className="absolute right-8 top-16  md:right-32 md:top-12 lg:right-48 lg:top-24" />
                <img src="/sequel/coin8.png" className="absolute -right-16 top-16 lg:right-24 lg:-top-16" />
                <img src="/sequel/coin9.png" className="hidden lg:block absolute -right-44 md:-right-32 -top-6" />


                <div className='h-40'></div>
                <div className="w-full text-center ">
                    <Text type="h2" className="text-center mb-4">
                        Meet Knightland 2: big event with free gifts!
                    </Text>
                    <Text type="h4" className="mx-auto text-center max-w-2xl mb-4">Better gameplay, wider audience, more in line with the traditional mobile market and more P2E capabilities</Text>
                </div>
                <div className='flex items-center'>
                    <a href="https://play.knightlands.com" target="_blank">
                        <Button className="w-full h-14 cursor-pointer flex justify-center items-center self-center">Participate in IDO</Button>
                    </a>
                    <Text type="h5" className='ml-6'>
                        20 november
                    </Text>
                </div>
            </div>
        </div>
    )
}

export default Sequel;
