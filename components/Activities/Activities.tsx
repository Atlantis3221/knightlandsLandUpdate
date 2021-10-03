import React from "react";

import styles from "./Activities.module.css";

const activities = [
  '/acitvities/activity1.png',
  '/acitvities/activity2.png',
  '/acitvities/activity3.png',
  '/acitvities/activity4.png',
];

const Activities = () => {
  return (
    <div className="flex flex-col">
      <div className={styles.header + ' flex justify-center'}>
        Take part in everyday activities
      </div>
      <div className="flex justify-between">
        {activities.map((activity, i) => (
          <div key={i} className={styles.image}>
            <img src={activity}/>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Activities;