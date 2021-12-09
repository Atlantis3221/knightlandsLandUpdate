import React, { useMemo } from "react";
import styles from "./styles.module.css";

import Container from "components/common/Container/Container";
import ContactMenu from "components/common/ContactMenu";
import Text from "components/common/Text/Text";
import { useMediaQuery } from "common/helpers/useMediaQuery";

const Footer = () => {
  return (
    <div className={styles.footer + ' flex w-full flex-col self-center md:pt-20 lg:pb-6'}>
      <Container disableVerticalPadding={true}>
        <div className="flex w-full justify-between flex-col items-center md:flex-row pt-28 pb-14 px-8 md:px-0 lg:pb-0">
          <div className="flex items-center mb-10 md:mb-0">
            <div className="w-48 md:mr-7">
              <img src="/common/logo.svg" className="mr-0" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex mx-6">
              <ContactMenu />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )

}

export default Footer;
