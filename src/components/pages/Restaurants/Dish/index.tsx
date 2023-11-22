import {FC} from 'react';

import IDish from './IDish.ts';

interface IDishProps {
  dish: IDish;
}

const Dish: FC<IDishProps> = ({dish}) => {
  const {id, name, price, ingredients} = dish;

  return (
    <div id={id}>
      <h4>{name}</h4>
      <p>Цена: {price} &#36;</p>
      {Boolean(ingredients?.length) && (
        <p>Состав блюда: {ingredients?.join(', ')}</p>
      )}
    </div>
  );
};

export default Dish;
