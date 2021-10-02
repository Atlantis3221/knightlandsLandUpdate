import React from 'react';
import Link from 'next/link'
import styles from "./styles.module.css";

const PlayNow = () => {
  return (
    <div>
      <Link href="/">
        <div className={styles.container + ' flex justify-center items-center self-center'}>Play now</div>
      </Link>
    </div>
  )
}

export default PlayNow;