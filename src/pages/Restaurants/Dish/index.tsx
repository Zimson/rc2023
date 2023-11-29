import {FC, useState} from 'react';
import classNames from 'classnames/bind';

import Counter from '../../../components/Counter';

import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const MIN_COUNT = 0;
const MAX_COUNT = 5;

const Dish: FC<IProps> = ({dish, className}) => {
  const {id, name, price, ingredients} = dish;

  const [count, setCount] = useState(0);

  return (
    <div className={cx('dish', className)} id={id}>
      <div className={cx('title-container')}>
        <h4 className={cx('title')}>{name}</h4>
        <Counter
          className={cx('counter-buttons')}
          count={count}
          onDecrement={setCount}
          onIncrement={setCount}
          min={MIN_COUNT}
          max={MAX_COUNT}
        />
      </div>

      <p>Цена: {price} &#36;</p>
      {Boolean(ingredients?.length) && (
        <p>Состав блюда: {ingredients?.join(', ')}</p>
      )}
    </div>
  );
};

export default Dish;
