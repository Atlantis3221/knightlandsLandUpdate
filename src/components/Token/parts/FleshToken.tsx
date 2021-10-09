import React, { useEffect, useMemo } from "react";
import styles from "./styles.module.css";
import Text from "components/common/Text/Text";
import Supported from "components/Supported/Supported";
import Button from "components/common/Button/Button";
import { useMatchMediaQuery } from "common/helpers/useMediaQuery";
import { Breakpoints } from "common/constants/Breakpoints";
import { isElement } from "react-dom/test-utils";

const colStartBase = 8;

const data = [
  {src: '/flesh/1.png', text: 'Champion Tourney', columnStart: '', width: 295, height: 76, left: true},
  {src: '/flesh/2.png', text: 'Group Raids', columnStart: '', width: 260, height: 76, left: true},
  {src: '/flesh/3.png', text: 'Enchant', columnStart: `col-start-${colStartBase+1}`, mobileWidth: 204},
  {src: '/flesh/4.png', text: 'Evolve', columnStart: `col-start-${colStartBase+2}`, mobileWidth: 187},
  {src: '/flesh/5.png', text: 'Charms', columnStart: `col-start-${colStartBase+3}`, mobileWidth: 197},
  {src: '/flesh/6.png', text: 'Accessories', columnStart: `col-start-${colStartBase+3}`, mobileWidth: 237},
  {src: '/flesh/7.png', text: 'Weapons', columnStart: `col-start-${colStartBase+2}`, mobileWidth: 208},
  {src: '/flesh/8.png', text: 'Unique items', columnStart: `col-start-${colStartBase+1}`, mobileWidth: 238},
  {src: '/flesh/9.png', text: 'Promote soldiers', columnStart: `col-start-${colStartBase}`, mobileWidth: 284},
]

const FleshToken = () => {
  const isXl = useMatchMediaQuery(`(min-width: ${Breakpoints.xl}px)`)

  const infoSection = useMemo(() => {
    return (
      <div className="flex flex-col mb-8 xl:mb-0 col-start-5 row-start-1 col-span-4 self-center justify-center items-center">
        <Text type="h2">FLESH TOKEN</Text>
        <Text type="h5" color="#8A978C">FLESH is a play-to-earn inflationary token</Text>
      </div>
    )
  }, []);

  const leftSection = useMemo(() => {
    return (
      <>
        {data.map((item, i) => {
          if(!item.left) {
            return;
          }

          const width = isXl ? 300 : item.mobileWidth || item.width;
          return (
            <div key={i} className={`col-start-1 row-start-${i+3} flex xl:justify-end`} style={{width}}>
              <div className={styles.container + ' m-2 xl:m-0'} style={{width: item.width, height: item.height}}>
                <img src={item.src} style={{width: 50, height: 50, marginRight: 10}}/>
                <Text type="h5">
                  {item.text}
                </Text>
              </div>
            </div>
          )
        })}
      </>
    )
  }, [isXl]);

  const imageSection = useMemo(() => {
    return (
      <div className="col-start-3 col-span-7 row-start-1 row-span-6 flex relative justify-center xl:ml-16">
        <img src="/earn-spend.svg" alt="" />
        <Button className="absolute bottom-16">Buy KL on dex</Button>
      </div>
    )
  }, []);

  const rightSection = useMemo(() => {
    return (
      <>
        {data.map((item, i) => {
          if(item.left) {
            return;
          }

          const className = ` m-2 xl:m-0 self-center row-start-${i-1} ${item.columnStart} row-span-1`;
          const width = !isXl ? item.mobileWidth : item.width || 240;
          return (
            <div key={i} className={styles.container + className} style={{width}}>
              <img src={item.src} style={{width: 50, height: 50, marginRight: 10}}/>
              <Text type="h5">
                {item.text}
              </Text>
            </div>
          )
        })}
      </>
    )
  }, [isXl]);

  if(isXl) {
    return (
     <>
        <div className="grid grid-cols-12 gap-2">
          {infoSection}
          {leftSection}
          {imageSection}
          {rightSection}
        </div>
        <Supported/>
     </>
    )
  }

  return (
     <>
        {infoSection}
        <div className="flex justify-center flex-wrap">
          {leftSection}
        </div>

        {imageSection}

        <div className="flex flex-wrap justify-center">
          {rightSection}
        </div>
     </>
  )
}

export default FleshToken;
