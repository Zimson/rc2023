import {FC} from 'react';
import classNames from 'classnames/bind';

import Button from '../Button';
import useTheme from '../../providers/ThemeProvider/useTheme.tsx';

import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Header: FC<IProps> = ({className}) => {
  const [, toggleTheme] = useTheme();

  return (
    <header className={cx('header', className)}>
      <div className={cx('content')}>
        <h1>Рестораны</h1>
        <Button
          text="Сменить тему"
          className={cx('theme-toggle')}
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;
