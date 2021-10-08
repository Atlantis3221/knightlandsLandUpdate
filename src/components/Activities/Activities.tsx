import React from "react";

import styles from "components/Activities/styles.module.css";
import Text from "components/common/Text/Text";

const activities = [
  {src: '/activities/activity1.png', title: 'Champion tourney'},
  {src: '/activities/activity2.png', title: 'Daily Tasks'},
  {src: '/activities/activity3.png', title: 'Onyx Tower'},
  {src: '/activities/activity4.png', title: 'Trials'},
];

const Activities = () => {
  return (
    <div className="flex flex-col">
      <Text type="h2" className="text-center mb-9">
        Take part in everyday activities
      </Text>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {activities.map((activity, i) => (
          <div key={i} className={styles.image + ' flex flex-col mx-2 my-12 lg:my-0'}>
            <img src={activity.src} />
            <Text fontWeight="bold" type="h4" className="w-full text-center uppercase mt-6">{activity.title}</Text>
            <Text type="h5" className="w-full text-center mt-2">Text</Text>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Activities;