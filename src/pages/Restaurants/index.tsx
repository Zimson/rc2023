import {FC, useState} from 'react';
import classNames from 'classnames/bind';

import Tabs from '../../components/Tabs';
import ITab from '../../components/Tab/ITab.ts';
import IRestaurant from './Restaurant/IRestaurant.ts';
import Restaurant from './Restaurant';
import IRestaurantsProps from './IRestaurantsProps.ts';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Restaurants: FC<IRestaurantsProps> = ({
  restaurants,
}: IRestaurantsProps) => {
  const tabs = restaurants.map(restaurant => ({
    id: restaurant.id,
    text: restaurant.name,
  }));

  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null);

  const handleTabClick = (tab: ITab) => {
    const restaurant = restaurants.find(({id}) => id === tab.id) ?? null;

    setRestaurant(restaurant);
  };

  return (
    <div>
      <Tabs items={tabs} onTabClick={handleTabClick} />
      {Boolean(restaurant?.id) && (
        <div className={cx('restaurant')}>
          <Restaurant restaurant={restaurant} />
        </div>
      )}
    </div>
  );
};

export default Restaurants;
