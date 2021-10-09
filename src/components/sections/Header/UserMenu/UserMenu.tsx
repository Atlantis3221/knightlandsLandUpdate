import React, { useCallback, useEffect, useState } from "react";
import { HeaderLinks } from "common/constants/HeaderLinks";
import { disableScrolling, enableScrolling } from "common/helpers/operateWithScroll";
import Dot from "components/common/Dot/Dot";
import Text from "components/common/Text/Text";
import { Contacts } from "common/constants/Contacts";
import ContactMenu from "components/common/ContactMenu";

const UserMenu = ({onClickToLink}) => {

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
    <div className="flex fixed top-0 left-0 z-1 bg-white w-full h-full overflow-hidden pt-32 pb-7 pr-8 pl-8">
      <div className="flex justify-start flex-col w-100 h-100">
        {HeaderLinks.map((item, i) => (
          <div key={i} className="flex items-center p-3 cursor-pointer" onMouseEnter={() => enableHover(i)} onMouseLeave={disableHover}>
            {currentHoverItem === i && <Dot color="#A2921D"/>}
            <Text type="h5" color="#A2921D" onClick={() => onClickToLinkHandler(item.id)}>
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