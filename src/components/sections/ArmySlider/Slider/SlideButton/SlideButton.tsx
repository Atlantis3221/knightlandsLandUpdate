import React from 'react';
import IconArrowDown from '../Icons/IconArrowDown'
import styles from './styles.module.css'

const SlideButton: React.FC<any> = ({ onClick, type }) => (
<button className={`${styles['slide-button']} ${styles[`slide-button--${type}`]}`} onClick={onClick}>
    <span>
      <IconArrowDown />
    </span>
  </button>
);

export default SlideButton;

