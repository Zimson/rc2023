import {FC} from 'react';
import classNames from 'classnames/bind';

import ITheme, {Theme} from '../interfaces/ITheme.ts';
import {IProps, Color} from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Button: FC<IProps & ITheme> = ({
  text,
  onClick,
  className,
  contentClassName,
  disabled,
  type = 'button',
  color = Color.primary,
  theme = Theme.md,
}: IProps) => (
  <button
    onClick={onClick}
    className={cx('button', color, `${theme}-theme`, className, {disabled})}
    disabled={disabled}
    type={type}
  >
    <span className={cx('content', contentClassName)}>{text}</span>
  </button>
);

export default Button;
