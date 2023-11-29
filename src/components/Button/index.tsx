import {FC} from 'react';
import classNames from 'classnames/bind';

import {IProps, IStaticFields, colors} from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Button: FC<IProps> & IStaticFields = ({
  text,
  onClick,
  className,
  contentClassName,
  disabled,
  type = 'button',
  color = colors.primary,
}: IProps) => (
  <button
    onClick={onClick}
    className={cx('button', color, className, {disabled})}
    disabled={disabled}
    type={type}
  >
    <span className={cx('content', contentClassName)}>{text}</span>
  </button>
);

Button.colors = colors;

export default Button;
