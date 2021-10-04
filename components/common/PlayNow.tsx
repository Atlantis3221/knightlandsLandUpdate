import React from 'react';
import Link from 'next/link'
import styles from "./styles.module.css";

const PlayNow = () => {
  return (
    <Link href="/">
      <div className={styles.container + ' w-28 h-14 cursor-pointer flex justify-center items-center self-center'}>Play now</div>
    </Link>
  )
}

export default PlayNow;