import {FC} from 'react';
import classNames from 'classnames/bind';

import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Footer: FC<IProps> = ({className}) => {
  return <footer className={cx('root', className)}>footer</footer>;
};

export default Footer;
