import React from "react";
import styles from "./styles.module.css";

import BaseLayout from "components/common/BaseLayout/BaseLayout";
import { HeaderLinks } from "common/constants/HeaderLinks";
import PlayNow from "components/common/PlayNow";
import { smoothAutoScroll } from "common/helpers/smoothAutoScroll";
import ContactMenu from "components/common/ContactMenu";

const Footer = () => {
  return (
    <div className={styles.footer + ' flex w-full h-full flex-col self-center md:pt-20'}>
      <BaseLayout disableVerticalPadding={true}>
        <div className="flex w-full justify-between flex-col items-center sm:flex-row pb-14 px-8 md:px-0 lg:pb-0">
          <div className="flex items-center mb-10 sm:mb-0">
            <div className="w-48 sm:mr-7">
              <img src="/logo.svg" className="mr-0"/>
            </div>
            {HeaderLinks.map((item, i) => (
              <div key={i} className={styles.links + ' mr-3 hidden lg:flex'} onClick={() => smoothAutoScroll(item.id)}>
                <div>{item.title}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <div className="flex mx-4 sm:mx-0">
             <ContactMenu/>
            </div>
            <PlayNow />
          </div>
        </div>
      </BaseLayout>
    </div>
  )

}

export default Footer;