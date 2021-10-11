import React, { useCallback, useState } from "react";

import PlayNow from "components/common/PlayNow";
import { HeaderLinks } from "common/constants/HeaderLinks";
import UserMenu from "components/sections/Header/UserMenu/UserMenu";
import { useMediaQuery } from "common/helpers/useMediaQuery";
import { smoothAutoScroll } from "common/helpers/smoothAutoScroll";
import ContactMenu from "components/common/ContactMenu";
import Text from "components/common/Text/Text";

const Header = () => {
  const [isActiveUserMenu, setIsActiveUserMenu] = useState(false);

  const {isDesktop} = useMediaQuery();

  const openUserMenu = useCallback(() => {
    if(typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    setIsActiveUserMenu(true);
  }, [setIsActiveUserMenu])

  const closeUserMenu = useCallback(() => setIsActiveUserMenu(false), [setIsActiveUserMenu]);

  const onClickToLink = useCallback((id) => {
    closeUserMenu();
    smoothAutoScroll(id);
  }, [closeUserMenu]);

  const showUserMenu = isActiveUserMenu && !isDesktop
  return (
    <>
      <UserMenu onClickToLink={onClickToLink} isShow={showUserMenu} onClose={closeUserMenu}/>

      <div className="flex w-full justify-between flex-row mb-4 pb-14 px-8 md:px-0 lg:pb-0">
        <div className="flex items-center">
          <div className="w-28 md:w-48 mr-10">
            <img src="/common/logo.svg" className="mr-0"/>
          </div>
          {HeaderLinks.map((item, i) => (
            <Text key={i} type="h5" isLink={true} className="mr-5 hidden lg:flex cursor-pointer text-center" onClick={() => onClickToLink(item.id)}>
              {item.title}
            </Text>
          ))}
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
    </>
  );
}

export default Header;