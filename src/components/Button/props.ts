import {MouseEventHandler} from 'react';

import ITheme from '../../interfaces/ITheme.ts';

export enum Color {
  primary = 'primary',
  warning = 'warning',
  danger = 'danger',
}

export interface IProps extends ITheme {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  contentClassName?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
  color?: Color;
}
