import {FC} from 'react';
import classNames from 'classnames/bind';

import Button from '../Button';

import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Tab: FC<IProps> = ({text, onClick, className}) => (
  <Button
    text={text}
    onClick={onClick}
    className={cx('tab', className)}
    color={Button.colors.warning}
  />
);

export default Tab;
