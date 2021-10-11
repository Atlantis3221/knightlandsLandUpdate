import React from "react";
import styles from "./styles.module.css";

import Text from "components/common/Text/Text";

const activities = [
  {src: '/activities/activity1.png', title: 'Champion tourney', text: 'Be one of the TOP-100 players to win a lot of FLESH'},
  {src: '/activities/activity2.png', title: 'Daily Tasks', text: 'Find useful resources and items that will help you in a game'},
  {src: '/activities/activity3.png', title: 'Onyx Tower', text: 'Earn USDC prizes in a frequent gaming events'},
  {src: '/activities/activity4.png', title: 'Trials', text: 'Go through difficult stages for unique resources in the game'},
];

const Activities = () => {
  return (
    <div className="flex flex-col xl:mb-12">
      <Text type="h2" className="text-center lg:mb-9">
        Take part in everyday activities
      </Text>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {activities.map((activity, i) => (
          <div key={i} className={styles.image + ' flex flex-col mx-2 mt-10 mb-20 lg:my-0'}>
            <img src={activity.src} />
            <Text fontWeight="bold" type="h4" className="w-full text-center uppercase mt-6">{activity.title}</Text>
            <Text type="h5" className="w-full text-center mt-2">{activity.text}</Text>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Activities;