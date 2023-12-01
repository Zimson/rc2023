import {FC} from 'react';
import classNames from 'classnames/bind';

import Button from '../Button';

import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Counter: FC<IProps> = ({
  count,
  onDecrement,
  onIncrement,
  min,
  max,
  step = 1,
  className,
}) => {
  const hasMinLimit = min !== undefined ? count <= min : false;
  const hasMaxLimit = max !== undefined ? count >= max : false;

  const handleDecrement = () => {
    if (hasMinLimit) {
      return;
    }

    onDecrement(count - step);
  };

  const handleIncrement = () => {
    if (hasMaxLimit) {
      return;
    }

    onIncrement(count + step);
  };

  return (
    <div className={cx('counter', className)}>
      <Button
        text="&#8211;"
        onClick={handleDecrement}
        className={cx('button', 'decrement')}
        contentClassName={cx('decrement-dash')}
        disabled={hasMinLimit}
      />
      <span className={cx('count')}>{count}</span>
      <Button
        text="+"
        onClick={handleIncrement}
        className={cx('button', 'increment')}
        disabled={hasMaxLimit}
      />
    </div>
  );
};

export default Counter;
