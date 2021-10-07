import React from "react";
import styles from "components/Footer/Footer.module.css";
import BaseLayout from "components/BaseLayout/BaseLayout";
import { HeaderLinks } from "common/constants/HeaderLinks";
import PlayNow from "components/common/PlayNow";
import { Contacts } from "common/constants/Contacts";

const Footer = () => {
  return (
    <div className={styles.footer + ' flex-col md:pt-20'}>
      <BaseLayout disableVerticalPadding={true}>
        <div className="flex w-full justify-between flex-col items-center sm:flex-row pb-14 px-8 md:px-0 lg:pb-0">
          <div className="flex items-center mb-10 sm:mb-0">
            <div className="w-48 sm:mr-7">
              <img src="/logo.svg" className="mr-0"/>
            </div>
            <div className={styles.links + ' hidden lg:flex'}>
              {HeaderLinks.map((item, i) => (
                <a key={i} href="/">{item.title}</a>
              ))}
            </div>
          </div>
          <div className={styles.contact + ' flex items-center'}>
            <div className="flex mx-4 sm:mx-0">
              {Contacts.map((contact, i) => (
                <a className="w-10 mx-1" key={i} href={contact.href}>
                  <img src={contact.src} />
                </a>
              ))}
            </div>
            <PlayNow />
          </div>
        </div>
      </BaseLayout>
    </div>
  )

}

export default Footer;