import React from 'react';
import styles from './Army.module.css';
import commonStyles from '/styles/common.module.css';
import FatherTime from "./parts/FatherTime";
import Gigad from "./parts/Gigad";
import Scarlet from "./parts/Scarlet";
import { GAMEPLAY } from "../../common/constants/HeaderLinks";

const Army = () => {
  return (
    <div className={commonStyles.board + ' flex items-center'} id={GAMEPLAY}>
      <div className="pl-12 max-w-sm ml-2">
        <div className={styles.title}>Build your army</div>
        <div className={styles.description}>
          Unite soldiers to join forces against the boss.
          Make the raid public and invite friends from our community
          to joint it and defeat monsters
        </div>
      </div>
      <FatherTime/>
      <Gigad/>
      <Scarlet/>
    </div>
  )
}

export default Army;