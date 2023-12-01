import {FC} from 'react';
import classNames from 'classnames/bind';

import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Header: FC<IProps> = ({className}) => {
  return <header className={cx('header', className)}>Header</header>;
};

export default Header;
