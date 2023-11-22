import {FC} from 'react';
import IRestaurant from '../models/IRestaurant.ts';
import UnorderedList, {IItem} from '../../../common/UnorderedList';

interface IRestaurantProps {
  restaurant: IRestaurant;
  className?: string;
}

const Restaurant: FC<IRestaurantProps> = ({restaurant, className}) => (
  <div className={className}>
    <h2>{restaurant.name}</h2>
    <h3>Меню:</h3>
    <UnorderedList
      items={restaurant.menu as unknown as IItem[]}
      renderItem={({name}) => name as string}
    />
    <h3>Отзывы:</h3>
    <UnorderedList
      items={restaurant.reviews as unknown as IItem[]}
      renderItem={({text}) => text as string}
    />
  </div>
);

export default Restaurant;
