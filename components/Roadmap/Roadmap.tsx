import React, { useCallback, useEffect, useState } from "react";
import styles from "./Roadmap.module.css";
import { useMediaQuery } from "../../common/helpers/useMediaQuery";

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
    <div className="flex flex-col justify-center w-full my-24">
      <div className={styles.header}>Roadmap</div>
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
              <div className={styles.date}>{item.date}</div>
              <div className={`flex w-full items-baseline ${justifyClassName}`}>
                {!noLeftLine && <div className={styles.line}/>}
                <div className={item.isChecked ? styles.checked : styles.notChecked}>
                  <img src={item.isChecked && '/check.svg'} />
                </div>
                {!noRightLine && <div className={styles.line}/>}
              </div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.description}>{item.description}</div>
            </div>
          )
        })}
      </div>

      {!isDesktop && !showAllElements && (
        <div className={styles.button + " flex justify-center items-center self-center w-full"} onClick={onClickHandler}>
          SHOW ALL ROADMAP
        </div>
      )}
    </div>
  )
}

export default Roadmap;
