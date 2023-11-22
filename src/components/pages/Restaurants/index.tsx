import {FC} from 'react';

import Tabs from '../../common/Tabs';
import IRestaurant from './models/IRestaurant.ts';
import Restaurant from './Restaurant';

interface IRestaurantsProps {
  restaurants: IRestaurant[];
}

const Restaurants: FC<IRestaurantsProps> = ({
  restaurants,
}: IRestaurantsProps) => {
  const tabs = restaurants.map(restaurant => ({
    id: restaurant.id,
    text: restaurant.name,
  }));

  const handleTabClick = () => undefined;

  return (
    <div>
      <Tabs items={tabs} onTabClick={handleTabClick} />
      {restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;
