import {FC, useState} from 'react';
import classNames from 'classnames/bind';

import IDishProps from './IDishProps.ts';
import styles from './styles.module.css';
import Counter from '../../../components/Counter';

const cx = classNames.bind(styles);

const MIN_COUNT = 0;
const MAX_COUNT = 5;

const Dish: FC<IDishProps> = ({dish}) => {
  const {id, name, price, ingredients} = dish;

  const [count, setCount] = useState(0);

  return (
    <div id={id}>
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
