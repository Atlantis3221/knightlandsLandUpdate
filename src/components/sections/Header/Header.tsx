import React, { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.css";
import PlayNow from "components/common/PlayNow";
import { HeaderLink, HeaderLinks } from "common/constants/HeaderLinks";
import UserMenu from "components/sections/Header/UserMenu/UserMenu";
import { useMediaQuery } from "common/helpers/useMediaQuery";
import { smoothAutoScroll } from "common/helpers/smoothAutoScroll";
import ContactMenu from "components/common/ContactMenu";
import Text from "components/common/Text/Text";
import Dot from "components/common/Dot/Dot";
import { useVisibleSection } from "common/helpers/hooks/useVisibleSection";

const Header = () => {
  const [isActiveUserMenu, setIsActiveUserMenu] = useState(false);

  const {currentSectionId} = useVisibleSection();
  const {isDesktop} = useMediaQuery();

  const openUserMenu = useCallback(() => {
    setIsActiveUserMenu(true);
  }, [setIsActiveUserMenu])

  const closeUserMenu = useCallback(() => setIsActiveUserMenu(false), [setIsActiveUserMenu]);

  const onClickToLink = useCallback((id) => {
    closeUserMenu();
    smoothAutoScroll(id);
  }, [closeUserMenu]);

  const [scrollYPosition, setScrollYPosition] = useState(0);
  useEffect(() => {
    if(typeof window !== 'undefined') {
      window.addEventListener('scroll', function(e) {
        setScrollYPosition(window.scrollY);
      })
    }
  }, []);

  const showUserMenu = isActiveUserMenu && !isDesktop
  return (
    <div className={(scrollYPosition === 0 ? styles.noBackground : styles.background) + ' flex z-1 justify-center fixed w-full py-5 px-4 md:px-12 lg:px-16'}>
      <UserMenu onClickToLink={onClickToLink} onClose={closeUserMenu} isShow={showUserMenu}/>

      <div className="flex w-full justify-between max-w-6xl">
        <div className="flex items-center">
          <div className="w-28 md:w-48 mr-10 cursor-pointer" onClick={() => onClickToLink(HeaderLink.MAIN)}>
            <img src="/common/logo.svg" className="mr-0"/>
          </div>
          {HeaderLinks.map((item, i) => {
            if(!item.isVisible) return;
            const isCurrentSection = currentSectionId === item.id;
            return (
              <div className="mr-5 hidden lg:flex cursor-pointer items-baseline text-center" key={i}>
                {isCurrentSection && <Dot color="#A2921D"/>}
                <Text type="h5" isLink={true} color={isCurrentSection && '#A2921D'} onClick={() => onClickToLink(item.id)}>
                  {item.title}
                </Text>
              </div>
            )
          })}
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex mr-5">
            <ContactMenu/>
          </div>
          <PlayNow />
          <div className="flex cursor-pointer lg:hidden ml-7 w-5" onClick={openUserMenu}>
            <img src="/common/menu.svg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;