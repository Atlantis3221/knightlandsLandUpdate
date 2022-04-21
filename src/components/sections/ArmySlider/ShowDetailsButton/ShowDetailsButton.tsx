import React from 'react';
import IconArrowDown from '../Slider/Icons/IconArrowDown'
import styles from './styles.module.css'

const ShowDetailsButton: React.FC<any> = ({ onClick }) => (
  <button onClick={onClick} className={styles.show_details_button}>
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default ShowDetailsButton;

