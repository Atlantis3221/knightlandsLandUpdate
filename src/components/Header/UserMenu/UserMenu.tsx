import React, { useCallback, useEffect } from "react";
import { HeaderLinks } from "common/constants/HeaderLinks";
import { disableScrolling, enableScrolling } from "common/helpers/operateWithScroll";
import Dot from "components/common/Dot";
import styles from "components/Header/UserMenu/UserMenu.module.css";

const UserMenu = ({onClickToLink}) => {

  useEffect(() => {
    disableScrolling();

    return () => enableScrolling();
  }, [disableScrolling, enableScrolling]);

  const onClickToLinkHandler = useCallback((id) => {
    enableScrolling();
    onClickToLink(id);
  }, [enableScrolling]);

  return (
    <div className="flex fixed top-0 left-0 z-1 bg-white w-full h-full overflow-hidden pt-32 pb-7 pr-8 pl-8">
      <div className="flex justify-start flex-col w-100 h-100">
        {HeaderLinks.map((item, i) => (
          <div key={i} className="flex items-center p-3 cursor-pointer">
            <Dot color="#A2921D"/>
            <div className={styles.link} onClick={() => onClickToLinkHandler(item.id)}>
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default UserMenu;