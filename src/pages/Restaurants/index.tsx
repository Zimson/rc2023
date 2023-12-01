import {FC, useState} from 'react';
import classNames from 'classnames/bind';

import Tabs from '../../components/Tabs';
import Restaurant from './Restaurant';

import ITab from '../../components/interfaces/ITab.ts';
import IRestaurant from './interfaces/IRestaurant.ts';
import IProps from './props.ts';

import styles from './styles.module.css';
import useTheme from '../../providers/ThemeProvider/useTheme.tsx';

const cx = classNames.bind(styles);

const Restaurants: FC<IProps> = ({restaurants}: IProps) => {
  const [theme] = useTheme();

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
      <Tabs
        items={tabs}
        onTabClick={handleTabClick}
        className={cx('tabs')}
        theme={theme}
      />
      {Boolean(restaurant?.id) && (
        <div className={cx('restaurant')}>
          <Restaurant restaurant={restaurant} />
        </div>
      )}
    </div>
  );
};

export default Restaurants;
