import React from 'react';
import styles from './styles.module.css'

export enum ButtonType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

interface IProps {
  type?: ButtonType;
}

type AllProps = IProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Button = (props: AllProps) => {
  const {type = ButtonType.PRIMARY, ...rest} = props;

  const buttonTypeClass = type === ButtonType.PRIMARY ? 'primary' : 'secondary'

  return (
    <div
      {...rest}
      className={`${styles.root} ${styles[buttonTypeClass]} ${rest.className}`}
    />
  )
}

export default Button;