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
    <div className={cx(className)}>
      <Button
        text="-"
        onClick={handleDecrement}
        className={cx('decrement')}
        disabled={hasMinLimit}
      />
      {count}
      <Button
        text="+"
        onClick={handleIncrement}
        className={cx('increment')}
        disabled={hasMaxLimit}
      />
    </div>
  );
};

export default Counter;
