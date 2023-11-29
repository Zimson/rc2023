import {MouseEventHandler} from 'react';

export enum colors {
  primary= 'primary',
  warning = 'warning',
  danger = 'danger',
}

export interface IStaticFields {
  colors: typeof colors;
}

export interface IProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  contentClassName?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  color?: colors;
}
