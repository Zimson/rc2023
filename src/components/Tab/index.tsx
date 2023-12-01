import {FC} from 'react';
import classNames from 'classnames/bind';

import Button from '../Button';

import IProps from './props.ts';

import styles from './styles.module.css';
import {Color as ButtonColor} from '../Button/props.ts';

const cx = classNames.bind(styles);

const Tab: FC<IProps> = ({text, onClick, className, theme}) => (
  <Button
    text={text}
    onClick={onClick}
    className={cx('tab', className)}
    color={ButtonColor.warning}
    theme={theme}
  />
);

export default Tab;
