import React, { useCallback, useState } from "react";

import styles from "./Header.module.css";
import PlayNow from "../common/PlayNow";
import { HeaderLinks } from "../../common/constants/HeaderLinks";
import UserMenu from "./UserMenu/UserMenu";

const contacts = [
  {href: 'discord', src: '/contact/discord.svg'},
  {href: 'medium', src: '/contact/medium.svg'},
  {href: 'telegram', src: '/contact/telegram.svg'},
  {href: 'twitter', src: '/contact/twitter.svg'},
];

const Header = () => {
  const [isActiveUserMenu, setIsActiveUserMenu] = useState(false);

  const openUserMenu = useCallback(() => {
    if(typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    setIsActiveUserMenu(true);
  }, [setIsActiveUserMenu])

  const closeUserMenu = useCallback(() => setIsActiveUserMenu(false), [setIsActiveUserMenu]);

  const toggleUserMenu = useCallback(() => {
    isActiveUserMenu ? closeUserMenu() : openUserMenu();
  }, [isActiveUserMenu, openUserMenu, closeUserMenu]);

  const onClickToLink = useCallback((id) => {
    closeUserMenu();
    return document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }, [closeUserMenu]);

  return (
    <>
      {isActiveUserMenu && <UserMenu onClickToLink={onClickToLink}/>}

      <div className="flex w-full justify-between flex-row pb-14 px-8 md:px-0 lg:pb-0">
        <div className="flex items-center">
          <div className="w-28 md:w-48 mr-7">
            <img src="/logo.svg" className="mr-0"/>
          </div>
          <div className={styles.links + ' hidden lg:flex'}>
            {HeaderLinks.map((item, i) => (
              <a key={i} href="/">{item.title}</a>
            ))}
          </div>
        </div>
        <div className={styles.contact + ' flex items-center'}>
          <div className="hidden md:flex">
            {contacts.map((contact, i) => (
              <a className="w-10" key={i} href={contact.href}>
                <img src={contact.src} />
              </a>
            ))}
          </div>
          <PlayNow />
          <div className="flex cursor-pointer lg:hidden ml-7 w-5 z-1" onClick={toggleUserMenu}>
            <img src={isActiveUserMenu ? '/cross.svg' : '/menu.svg'}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;