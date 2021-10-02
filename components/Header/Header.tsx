import React from 'react';
import Image from 'next/image';
import Logo from '/svg/Logo';
import styles from './Header.module.css'
import PlayNow from '../common/PlayNow';
import discord from '/public/contact/discord.svg';
import medium from '/public/contact/medium.svg';
import telegram from '/public/contact/telegram.svg';
import twitter from '/public/contact/twitter.svg';

const Header = () => {
  return (
    <div className="flex w-full justify-between flex-row">
      <div className="flex justify-center items-center">
        <div className={styles.logo}>
          <Logo/>
        </div>
        <div className={styles.links + ' flex'}>
          <a href="/">Gameplay</a>
          <a href="/">Play to earn</a>
          <a href="/">Updates</a>
        </div>
      </div>
      <div className={styles.contact + ' flex items-center'}>
        <a href="/">
          <Image src={discord}/>
        </a>
        <a href="/">
          <Image src={medium}/>
        </a>
        <a href="/">
          <Image src={telegram}/>
        </a>
        <a href="/">
          <Image src={twitter}/>
        </a>
      <PlayNow/>
        </div>
    </div>
  );
}

export default Header;