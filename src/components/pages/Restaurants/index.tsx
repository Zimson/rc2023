import {FC} from 'react';

import Tabs from '../../common/Tabs';
import IRestaurant from './Restaurant/IRestaurant.ts';
import Restaurant from './Restaurant';
import styles from './styles.module.css';

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
      <div className={styles.restaurants}>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            className={styles.restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
