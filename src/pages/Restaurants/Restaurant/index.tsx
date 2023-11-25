import {FC} from 'react';
import classNames from 'classnames/bind';

import UnorderedList from '../../../components/UnorderedList';
import Dish from '../Dish';
import Review from '../Review';
import ReviewForm from '../ReviewForm';

import IDish from '../interfaces/IDish.ts';
import IReview from '../interfaces/IReview.ts';
import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Restaurant: FC<IProps> = ({restaurant, className}) => {
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
      <ReviewForm className={cx('review-form')}/>
    </div>
  );
};

export default Restaurant;
