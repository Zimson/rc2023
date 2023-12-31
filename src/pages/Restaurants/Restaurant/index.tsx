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

  const handleReviewSubmit = (review: IReview, callback: () => void) => {
    console.log(review);

    setTimeout(callback, 2000);
  };

  return (
    <div className={cx(className)}>
      <h2>{restaurant.name}</h2>
      <h3>Меню:</h3>
      <UnorderedList
        className={cx('dishes')}
        items={restaurant.menu}
        renderItem={(dish: IDish) => <Dish dish={dish} />}
      />
      <h3>Отзывы:</h3>
      <UnorderedList
        className={cx('reviews')}
        items={restaurant.reviews}
        renderItem={(review: IReview) => <Review review={review} />}
      />
      <hr/>
      <ReviewForm className={cx('review-form')} onSubmit={handleReviewSubmit} />
    </div>
  );
};

export default Restaurant;
