import React, { useMemo } from "react";
import styles from "./styles.module.css";

import Container from "components/common/Container/Container";
import PlayNow from "components/common/PlayNow";
import ContactMenu from "components/common/ContactMenu";
import Text from "components/common/Text/Text";
import { useMediaQuery } from "common/helpers/useMediaQuery";

const Footer = () => {
  const {isMobile} = useMediaQuery();
  const whitepaperLink = useMemo(() => (
    <a href="https://silverblock-studios.gitbook.io/knightlands-whitepaper" target="_blank">
      <Text type="h5" isLink={true} className="mr-5 mt-5 md:mt-0 flex text-center">
        Whitepaper
      </Text>
    </a>
  ),[]);

  return (
    <div className={styles.footer + ' flex w-full flex-col self-center md:pt-20 lg:pb-6'}>
      <Container disableVerticalPadding={true}>
        <div className="flex w-full justify-between flex-col items-center md:flex-row pt-28 pb-14 px-8 md:px-0 lg:pb-0">
          <div className="flex items-center mb-10 md:mb-0">
            <div className="w-48 md:mr-7">
              <img src="/common/logo.svg" className="mr-0"/>
            </div>
            {!isMobile && whitepaperLink}
          </div>
          <div className="flex items-center">
            <div className="flex mx-6">
             <ContactMenu/>
            </div>
            <PlayNow />
          </div>
          {isMobile && whitepaperLink}
        </div>
      </Container>
    </div>
  )

}

export default Footer;
