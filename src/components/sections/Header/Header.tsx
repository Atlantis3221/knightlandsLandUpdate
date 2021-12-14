import React, { useCallback, useEffect, useState } from "react";

import styles from "./styles.module.css";
import { HeaderLink, HeaderLinks } from "common/constants/HeaderLinks";
import UserMenu from "components/sections/Header/UserMenu/UserMenu";
import { useMediaQuery } from "common/helpers/useMediaQuery";
import { smoothAutoScroll } from "common/helpers/smoothAutoScroll";
import ContactMenu from "components/common/ContactMenu";
import Text from "components/common/Text/Text";
import Dot from "components/common/Dot/Dot";
import { useVisibleSection } from "common/helpers/hooks/useVisibleSection";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isActiveUserMenu, setIsActiveUserMenu] = useState(false);

  const { currentSectionId } = useVisibleSection();
  const { isDesktop } = useMediaQuery();
  const openUserMenu = useCallback(() => {
    setIsActiveUserMenu(true);
  }, [setIsActiveUserMenu])

  const closeUserMenu = useCallback(() => setIsActiveUserMenu(false), [setIsActiveUserMenu]);

  const onClickToLink = useCallback((id) => {
    closeUserMenu();
    smoothAutoScroll(id);
  }, [closeUserMenu]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', function (e) {
        setScrollY(window.scrollY);
      })
    }
  }, []);

  const showUserMenu = isActiveUserMenu && !isDesktop
  const visibilityClassName = scrollY > 80 && scrollY < 500 ? `${styles.noBackground} fixed` : scrollY >= 500 ? ` ${styles.background} fixed` : ' relative -mb-20';
  return (
    <div className={visibilityClassName + ' top-0 left-0 flex z-20 justify-center w-full py-4 px-4 md:px-12 lg:px-16'}>
      <UserMenu onClickToLink={onClickToLink} onClose={closeUserMenu} isShow={showUserMenu} />

      <div className="flex w-full justify-between max-w-6xl">
        <div className="flex items-center">
          <div className="w-28 md:w-30 mr-10 cursor-pointer" onClick={() => onClickToLink(HeaderLink.MAIN)}>
            <img src="/common/klLogo.png" className="mr-0" />
          </div>
          {HeaderLinks.map((item, i) => {
            if (!item.isVisible) return;
            let isCurrentSection = currentSectionId === item.id;
            if (scrollY < 500) {
              isCurrentSection = currentSectionId === "0";
            }
            return (
              <div className="mr-5 hidden lg:flex cursor-pointer items-center text-center" key={i}>
                {isCurrentSection && <Dot color="#A2921D" />}
                <Text type="h5" isLink={true} color={isCurrentSection && '#A2921D'} onClick={() => onClickToLink(item.id)}>
                  {item.title}
                </Text>
              </div>
            )
          })}
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex mr-5">
            <ContactMenu />
          </div>
          <div className="flex cursor-pointer lg:hidden ml-7 w-5" onClick={openUserMenu}>
            <img src="/common/menu.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
