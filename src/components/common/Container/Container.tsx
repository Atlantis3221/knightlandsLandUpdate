import React from 'react';
import styles from './styles.module.css'

interface IProps {
  disableVerticalPadding?: boolean;
}

const Container = ({disableVerticalPadding, children, ...rest}: React.PropsWithChildren<IProps> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const paddings = disableVerticalPadding ? {paddingTop: 0, paddingBottom: 0} : {};
  return (
    <div
      className={styles.root + " flex w-full flex-col self-center mx-auto sm:max-w-6xl relative z-30"}
      {...rest}
      style={{...rest.style, ...paddings}}
    >
      {children}
    </div>
  )
}

export default Container;