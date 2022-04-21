import React from 'react';
import IconCross from '../Icons/IconCross';
import styles from "./styles.module.css";

const Content:React.FC<any> = ({ movie, onClose }) => (
  <div className={styles.content}>
    <div className={styles.background}>
      <div className={styles.background__shadow}/>
      <div
        className={styles.background__image}
        style={{ backgroundImage: `url(${movie.imageBg})` }}
      />
    </div>
    <div className={styles.area}>
      <div className={styles.area__container}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
          eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
          quis quam congue, non fringilla orci placerat. Praesent sollicitudin
        </div>
      </div>
      <button className={styles.close} onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;