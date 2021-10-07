import React from "react";

import styles from "src/components/Activities/Activities.module.css";

const activities = [
  {src: '/activities/activity1.png', title: 'Champion tourney'},
  {src: '/activities/activity2.png', title: 'Daily Tasks'},
  {src: '/activities/activity3.png', title: 'Onyx Tower'},
  {src: '/activities/activity4.png', title: 'Trials'},
];

const Activities = () => {
  return (
    <div className="flex flex-col">
      <div className={styles.header + ' text-center'}>
        Take part in everyday activities
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {activities.map((activity, i) => (
          <div key={i} className={styles.image + ' flex flex-col mx-2 my-12 lg:my-0'}>
            <img src={activity.src} />
            <div className={styles.text + ' w-full text-center uppercase mt-6'}>{activity.title}</div>
            <div className={styles.textSmall + ' w-full text-center mt-2'}>Text</div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Activities;