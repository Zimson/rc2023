import {FC} from 'react';
import classNames from 'classnames/bind';

import Button from '../../Button';

import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Footer: FC<IProps> = ({className}) => {
  return (
    <footer className={cx('footer', className)}>
      <div className={cx('content')}>
        <Button text="Контакты" className={cx('contacts')} />
      </div>
    </footer>
  );
};

export default Footer;
