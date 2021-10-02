import React from 'react';
import Image from "next/image";

import CraftBoardSvg from '/public/craft/craftBoard.svg';
import styles from './CraftBoard.module.css'

interface IProps {
  bigText: string;
  smallText: string;
}

const CraftBoard = (props: IProps) => {
  const {bigText, smallText} = props;

  return (
    <div className="relative">
      <Image src={CraftBoardSvg} />
      <div className="flex flex-col items-center justify-center absolute top-0 w-full h-4/5">
        <div className={styles.title}>{bigText}</div>
        <div className={styles.text}>{smallText}</div>
      </div>
    </div>
  )
}

export default CraftBoard;