import React from "react";
import styles from "./styles.module.css";

const PlayNow = () => {
  return (
    <a href="https://play.knightlands.com" target="_blank">
      <div className={styles.container + ' w-28 h-14 cursor-pointer flex justify-center items-center self-center'}>Play now</div>
    </a>
  )
}

export default PlayNow;