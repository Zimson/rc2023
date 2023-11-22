import {FC, useState} from 'react';
import classNames from 'classnames/bind';

import Button from '../../../common/Button';
import IDishProps from './IDishProps.ts';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

const MIN_COUNT = 0;
const MAX_COUNT = 5;

const Dish: FC<IDishProps> = ({dish}) => {
  const {id, name, price, ingredients} = dish;

  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count === MIN_COUNT) {
      return;
    }

    setCount(count - 1);
  };

  const handleIncrement = () => {
    if (count === MAX_COUNT) {
      return;
    }

    setCount(count + 1);
  };

  return (
    <div id={id}>
      <div className={cx('title-container')}>
        <h4 className={cx('title')}>{name}</h4>
        <div className={cx('counter-buttons')}>
          <Button
            text="-"
            onClick={handleDecrement}
            className={cx('decrement')}
          />
          {count}
          <Button
            text="+"
            onClick={handleIncrement}
            className={cx('increment')}
          />
        </div>
        {count === MAX_COUNT && (
          <span className={cx('warning')}>только {MAX_COUNT} в одни руки</span>
        )}
      </div>

      <p>Цена: {price} &#36;</p>
      {Boolean(ingredients?.length) && (
        <p>Состав блюда: {ingredients?.join(', ')}</p>
      )}
    </div>
  );
};

export default Dish;
