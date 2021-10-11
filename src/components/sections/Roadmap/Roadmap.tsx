import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";

import { useMediaQuery } from "common/helpers/useMediaQuery";
import Text from "components/common/Text/Text";
import Button, { ButtonType } from "components/common/Button/Button";
import { ROADMAP } from "common/constants/HeaderLinks";

interface IRoad {
  title: string;
  description: string;
  date: string;
  isChecked?: boolean;
}

const road: IRoad[] = [
  {title: 'Beta', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke', isChecked: true},
  {title: 'Soft Launch', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke', isChecked: true},
  {title: 'NFTS', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Better Classes', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Guilds', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Kingdom Lands', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Guilds', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Kingdom Lands', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Guilds', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Kingdom Lands', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Guilds', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Kingdom Lands', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Guilds', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Kingdom Lands', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Guilds', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
  {title: 'Kingdom Lands', date: 'May 2019', description: 'Mint items as NFTs. HODL or sell on the marke'},
]

const Roadmap = () => {
  const {isMobile, isDesktop, isTablet} = useMediaQuery();

  const [showAllElements, setShowAllElements] = useState(false);
  const [countPerRow, setCountPerRow] = useState(0);

  useEffect(() => {
    if(!isMobile && !isTablet && !isDesktop) {
      return;
    }

    const count = isMobile ? 2 : isDesktop ? 4 : isTablet ? 3 : 0;
    setCountPerRow(count);
  }, [isMobile, isDesktop, isTablet]);

  const onClickHandler = useCallback(() => setShowAllElements(true), []);

  return (
    <div className="flex flex-col justify-center w-full my-24" id={ROADMAP}>
      <Text type="h2" className="text-center">Roadmap</Text>
      <div className="flex justify-center items-baseline self-center flex-wrap">
        {road.map((item, i) => {
          const moreThanLastShownElement = i >= ((countPerRow) * 2);
          if(!isDesktop && !showAllElements && moreThanLastShownElement) {
            return;
          }

          const first = i === 0;
          const last = i === road.length - 1;

          const isAlone = last && isTablet;
          const noLeftLine = isAlone || first || i % countPerRow === 0;
          const noRightLine = last || (i + 1) % countPerRow === 0;

          const justifyClassName = isAlone ? 'justify-center' : noRightLine ? 'justify-start' : 'justify-end';

          return (
            <div key={i} className={styles.container + " flex flex-col justify-center items-center"}>
              <Text type="h5" fontWeight="bold" className="text-justify uppercase" color="#8A978C">{item.date}</Text>
              <div className={`flex w-full items-baseline ${justifyClassName}`}>
                {!noLeftLine && <div className={styles.line}/>}
                <div className={item.isChecked ? styles.checked : styles.notChecked}>
                  <img src={item.isChecked && '/common/check.svg'} />
                </div>
                {!noRightLine && <div className={styles.line}/>}
              </div>
              <Text type="h3" className="text-center">{item.title}</Text>
              <Text type="h4" className="text-center px-2" maxWidth={276}>{item.description}</Text>
            </div>
          )
        })}
      </div>

      {!isDesktop && !showAllElements && (
        <Button type={ButtonType.SECONDARY} className="flex w-48 justify-center items-center self-center" onClick={onClickHandler}>
          SHOW ALL ROADMAP
        </Button>
      )}
    </div>
  )
}

export default Roadmap;
