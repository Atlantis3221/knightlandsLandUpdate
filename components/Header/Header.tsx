import React from "react";

import styles from "./Header.module.css";
import PlayNow from "../common/PlayNow";

const contacts = [
  {href: 'discord', src: '/contact/discord.svg'},
  {href: 'medium', src: '/contact/medium.svg'},
  {href: 'telegram', src: '/contact/telegram.svg'},
  {href: 'twitter', src: '/contact/twitter.svg'},
];

const Header = () => {
  return (
    <div className="flex w-full justify-between flex-row">
      <div className="flex justify-center items-center">
        <div className={styles.logo}>
          <img src="/logo.svg" />
        </div>
        <div className={styles.links + ' flex'}>
          <a href="/">Gameplay</a>
          <a href="/">Play to earn</a>
          <a href="/">Updates</a>
        </div>
      </div>
      <div className={styles.contact + ' flex items-center'}>
        {contacts.map((contact, i) => (
          <a key={i} href={contact.href}>
            <img src={contact.src} />
          </a>
        ))}
      <PlayNow/>
        </div>
    </div>
  );
}

export default Header;