import {FC} from 'react';
import classNames from 'classnames/bind';

import IRestaurant from './IRestaurant.ts';
import UnorderedList from '../../../common/UnorderedList';
import Dish from '../Dish';
import IDish from '../Dish/IDish.ts';
import Review from '../Review';
import IReview from '../Review/IReview.ts';
import styles from './styles.module.css';

interface IRestaurantProps {
  restaurant: IRestaurant | null;
  className?: string;
}

const cx = classNames.bind(styles);

const Restaurant: FC<IRestaurantProps> = ({restaurant, className}) => {
  if (!restaurant) {
    return null;
  }


  return (
    <div className={cx(className)}>
      <h2>{restaurant.name}</h2>
      <h3>Меню:</h3>
      <UnorderedList
        items={restaurant.menu}
        renderItem={(dish: IDish) => <Dish dish={dish} />}
      />
      <h3>Отзывы:</h3>
      <UnorderedList
        items={restaurant.reviews}
        renderItem={(review: IReview) => <Review review={review} />}
      />
    </div>
  );
}

export default Restaurant;
