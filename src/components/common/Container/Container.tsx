import React from 'react';
import styles from './styles.module.css'

interface IProps {
  disableVerticalPadding?: boolean;
}

const Container = ({disableVerticalPadding, children, ...rest}: React.PropsWithChildren<IProps>) => {
  const paddings = disableVerticalPadding ? {paddingTop: 0, paddingBottom: 0} : {};
  return (
    <div
      {...rest}
      style={{...paddings}}
      className={styles.root + " flex w-full relative flex-col  mx-auto xl:max-w-6xl z-10"}
    >
      {children}
    </div>
  )
}

export default Container;