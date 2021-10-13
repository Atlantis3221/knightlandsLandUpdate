import React, { useCallback, useEffect, useState } from "react";
import { HeaderLinks } from "common/constants/HeaderLinks";
import { disableScrolling, enableScrolling } from "common/helpers/operateWithScroll";
import Dot from "components/common/Dot/Dot";
import Text from "components/common/Text/Text";
import ContactMenu from "components/common/ContactMenu";
import styles from "./styles.module.css";
import { useHover } from "common/helpers/hooks/useHover";

interface IProps {
  onClickToLink(id: string): void;
  onClose(): void;
  isShow?: boolean;
}

const UserMenu = (props: IProps) => {
  const {isShow, onClickToLink, onClose} = props;

  const {disableHover, enableHover, currentHoverItem} = useHover();

  useEffect(() => {
    if (isShow) {
      disableScrolling();
      return;
    }

    enableScrolling();
  }, [isShow, disableScrolling, enableScrolling]);

  const onClickToLinkHandler = useCallback((id) => {
    enableScrolling();
    onClickToLink(id);
  }, [enableScrolling]);

  return (
    <div className={(isShow ? styles.visible : styles.hidden) + ' flex z-1 fixed top-0 bottom-0 right-0 overflow-hidden bg-white pt-32 pb-3 px-8'}>
      <div className="flex absolute cursor-pointer lg:hidden top-16 right-9 md:right-12" onClick={onClose}>
        <img src="/common/cross.svg"/>
      </div>
      <div className="flex justify-start flex-col w-100 h-100">
        {HeaderLinks.map((item, i) => {
          if(!item.isVisible) return;
          return (
            <div key={i} className="flex items-center p-3 cursor-pointer" onMouseEnter={() => enableHover(i)} onMouseLeave={disableHover}>
              {currentHoverItem === i && <Dot color="#A2921D"/>}
              <Text type="h5" color={currentHoverItem === i ? "#A2921D" : '#000'} onClick={() => onClickToLinkHandler(item.id)}>
                {item.title}
              </Text>
            </div>
          )
        })}
        <div className="flex w-full h-full justify-center items-end">
          <ContactMenu mobileMenu={true}/>
        </div>
      </div>
    </div>
  )
};

export default UserMenu;