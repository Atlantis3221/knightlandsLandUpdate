import React from "react";
import styles from "./styles.module.css";

import Container from "components/common/Container/Container";
import { HeaderLinks } from "common/constants/HeaderLinks";
import PlayNow from "components/common/PlayNow";
import { smoothAutoScroll } from "common/helpers/smoothAutoScroll";
import ContactMenu from "components/common/ContactMenu";
import Text from "components/common/Text/Text";

const Footer = () => {
  return (
    <div className={styles.footer + ' flex w-full h-full flex-col self-center md:pt-20 lg:pb-6'}>
      <Container disableVerticalPadding={true}>
        <div className="flex w-full justify-between flex-col items-center sm:flex-row pb-14 px-8 md:px-0 lg:pb-0">
          <div className="flex items-center mb-10 sm:mb-0">
            <div className="w-48 sm:mr-7">
              <img src="/common/logo.svg" className="mr-0"/>
            </div>
            {HeaderLinks.map((item, i) => {
                if(!item.isVisible) return;
                return (
                <Text key={i} type="h5" isLink={true} className="mr-5 hidden lg:flex cursor-pointer text-center" onClick={() => smoothAutoScroll(item.id)}>
                  {item.title}
                </Text>
              )
            })}
          </div>
          <div className="flex items-center">
            <div className="flex mx-6">
             <ContactMenu/>
            </div>
            <PlayNow />
          </div>
        </div>
      </Container>
    </div>
  )

}

export default Footer;