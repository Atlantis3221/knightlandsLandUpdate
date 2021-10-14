import React from 'react';
import styles from './styles.module.css'

interface IProps {
  disableVerticalPadding?: boolean;
}

const Container = ({disableVerticalPadding, children, ...rest}: React.PropsWithChildren<IProps> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div
      className={styles.root + " flex w-full flex-col self-center mx-auto sm:max-w-6xl"}
      style={disableVerticalPadding && {paddingTop: 0, paddingBottom: 0}}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Container;