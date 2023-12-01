import {FC} from 'react';
import classNames from 'classnames/bind';

import Footer from '../Footer';
import Header from '../Header';

import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Layout: FC<IProps> = ({children}) => {
  return (
    <div className={cx('layout')}>
      <Header className={cx('header')} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
