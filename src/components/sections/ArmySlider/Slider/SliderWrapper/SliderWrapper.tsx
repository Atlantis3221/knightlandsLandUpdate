import React from 'react'
import styles from './styles.module.css'

const SliderWrapper = ({ children }) => (
  <div className={styles.slider__wrapper}>
    {children}
  </div>
);

export default SliderWrapper;
