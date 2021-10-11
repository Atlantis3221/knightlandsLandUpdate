import React from 'react';
import styles from './styles.module.css'

interface IProps {
  className?: string;
  type?: "h1" | 'h2' | 'h3' | 'h4' | 'h5' ;
  onClick?(): void;
  isLink?: boolean;
}

const Text = (props: React.PropsWithChildren<IProps & React.CSSProperties>) => {
  const {type, className, onClick, isLink, children, ...rest} = props;

  const classNames = (type ? styles[type] : '') + (className ? ` ${className}` : '');

  return (
    <div className={classNames + (isLink ? ` ${styles.link}` : '')} onClick={onClick} style={{...rest}}>
      {children}
    </div>
  )
}

export default Text;
