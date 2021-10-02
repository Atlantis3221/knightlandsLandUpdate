import React from 'react';
import Image from 'next/image';

import styles from './Activities.module.css'
import activity1 from '/public/acitvities/activity1.png';
import activity2 from '/public/acitvities/activity2.png';
import activity3 from '/public/acitvities/activity3.png';
import activity4 from '/public/acitvities/activity4.png';

const activities = [activity1, activity2, activity3, activity4];

const Activities = () => {
  return (
    <div className="flex flex-col">
      <div className={styles.header + ' flex justify-center'}>
        Take part in everyday activities
      </div>
      <div className="flex justify-between">
        {activities.map(activity => (
          <div className={styles.image}>
            <Image src={activity}/>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Activities;