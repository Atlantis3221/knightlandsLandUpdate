import React from 'react';
import Image from 'next/image';
import styles from './Activities.module.css'
import activity1 from '/public/activity1.png';
import activity2 from '/public/activity2.png';
import activity3 from '/public/activity3.png';
import activity4 from '/public/activity4.png';

const Activities = () => {
  return (
    <div className="flex flex-col">
      <div className={styles.text + ' flex justify-center'}>
        Take part in everyday activities
      </div>
      <div className="flex justify-between">
        <div className={styles.image}>
          <Image src={activity1}/>
        </div>
        <div className={styles.image}>
          <Image src={activity2}/>
        </div>
        <div className={styles.image}>
          <Image src={activity3}/>
        </div>
        <div className={styles.image}>
          <Image src={activity4}/>
        </div>
      </div>
    </div>

  )
}

export default Activities;