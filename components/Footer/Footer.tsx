import React from 'react';
import styles from './Footer.module.css'
import Header from "../../components/Header/Header";
import BaseLayout from "../../components/BaseLayout/BaseLayout";

const Footer = () => {
  return (
    <div className={styles.footer + ' flex-col md:pt-20'}>
      <BaseLayout disableVerticalPadding={true}>
        {/*<Header/>*/}
      </BaseLayout>
    </div>
  )

}

export default Footer;