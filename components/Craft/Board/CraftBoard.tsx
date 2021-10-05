import React from "react";
import styles from "./CraftBoard.module.css";

interface IProps {
  bigText: string;
  smallText: string;
}

const CraftBoard = (props: IProps) => {
  const {bigText, smallText} = props;

  return (
    <div className="flex relative">
      <img src="/craft/craftBoard.svg" />
      <div className="flex flex-col items-center justify-center absolute w-full h-full md:h-4/5">
        <div className={styles.title}>{bigText}</div>
        <div className={styles.text}>{smallText}</div>
      </div>
    </div>
  )
}

export default CraftBoard;