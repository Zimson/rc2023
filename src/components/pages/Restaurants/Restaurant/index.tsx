import {FC} from 'react';

import IRestaurant from './IRestaurant.ts';
import UnorderedList from '../../../common/UnorderedList';
import Dish from '../Dish';
import IDish from '../Dish/IDish.ts';
import Review from '../Review';
import IReview from '../Review/IReview.ts';

interface IRestaurantProps {
  restaurant: IRestaurant;
  className?: string;
}

const Restaurant: FC<IRestaurantProps> = ({restaurant, className}) => (
  <div className={className}>
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

export default Restaurant;
