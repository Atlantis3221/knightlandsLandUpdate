import React, { useCallback, useEffect, useState } from "react";
import { HeaderLinks } from "common/constants/HeaderLinks";
import { disableScrolling, enableScrolling } from "common/helpers/operateWithScroll";
import Dot from "components/common/Dot/Dot";
import Text from "components/common/Text/Text";
import ContactMenu from "components/common/ContactMenu";
import styles from './styles.module.css';

interface IProps {
  onClickToLink(id: string): void;
  isShow?: boolean;
}

const UserMenu = (props: IProps) => {
  const {isShow, onClickToLink} = props;

  const [currentHoverItem, setCurrentHoverItem] = useState<number | null>();
  const enableHover = useCallback((index: number) => setCurrentHoverItem(index), []);
  const disableHover = useCallback(() => setCurrentHoverItem(null), []);

  useEffect(() => {
    disableScrolling();

    return () => enableScrolling();
  }, [disableScrolling, enableScrolling]);

  const onClickToLinkHandler = useCallback((id) => {
    enableScrolling();
    onClickToLink(id);
  }, [enableScrolling]);

  return (
    <div className={(isShow ? styles.visible : styles.hidden) + ' flex z-1 fixed top-0 bottom-0 right-0 overflow-hidden bg-white pt-32 pb-3 px-8'}>
      <div className="flex justify-start flex-col w-100 h-100">
        {HeaderLinks.map((item, i) => (
          <div key={i} className="flex items-center p-3 cursor-pointer" onMouseEnter={() => enableHover(i)} onMouseLeave={disableHover}>
            {currentHoverItem === i && <Dot color="#A2921D"/>}
            <Text type="h5" color={currentHoverItem === i ? "#A2921D" : '#000'} onClick={() => onClickToLinkHandler(item.id)}>
              {item.title}
            </Text>
          </div>
        ))}
        <div className="flex w-full h-full justify-center items-end">
          <ContactMenu mobileMenu={true}/>
        </div>
      </div>
    </div>
  )
};

export default UserMenu;