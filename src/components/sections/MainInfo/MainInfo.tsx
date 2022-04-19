import React from "react";
import Text from "components/common/Text/Text";
import FreeToPlay from "../MainInfo/FreeToPlay/FreeToPlay";
import { HeaderLink } from "common/constants/HeaderLinks";
import styles from "./styles.module.css";

const NewMainInfo = () => {
    return(
        <div className={styles.backgroundfree}>
        <div className={styles.backgroundmain + " flex items-center"} id={HeaderLink.MAIN}>
        <div data-aos="fade-up" className={ "h-full flex items-center"}>
          <div>
            <Text type="h1" className="text-left z-30" font="stoke">Own Land,</Text>
            <Text type="h1" className="text-center z-30" font="stoke">Craft Weapons,</Text>
            <Text type="h1" className="mb-4 text-left z-30" font="stoke">Earn Crypto</Text>
            <div className='flex z-30 justify-center'>
              <div
                className='h-12 ml-auto mr-auto mb-2.5 md:mb-0 md:ml-0 md:mr-2.5'>
                <img
                  style={{ maxWidth: '3.2rem' }}
                  className="-mt-1"
                  src='/main/terra.png' />
              </div>
              <div className="flex flex-col col-start-5 row-start-2 col-span-4 self-center justify-center items-center">
                <Text type="h4" className="text-left">Get Ready For The Worlds First <br />MMORPG On Terra</Text>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <FreeToPlay />
        
    
        </div>
    );
}

export default NewMainInfo;