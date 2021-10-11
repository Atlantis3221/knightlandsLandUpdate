import React from 'react';
import styles from './styles.module.css'

interface IProps {
  disableVerticalPadding?: boolean;
}

const Container = ({disableVerticalPadding, children}: React.PropsWithChildren<IProps>) => {
  return (
    <div className={styles.root + " flex w-full flex-col self-center sm:max-w-8xl"} style={disableVerticalPadding && {paddingTop: 0, paddingBottom: 0}}>
      {children}
    </div>
  )
}

export default Container;