import {FC} from 'react';
import classNames from 'classnames/bind';

import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

enum ratingLevel {
  success = 'success',
  alert = 'alert',
  danger = 'danger',
}

const getRatingLevel = (rating: number): ratingLevel => {
  if (rating <= 2) {
    return ratingLevel.danger;
  }

  if (rating === 3) {
    return ratingLevel.alert;
  }

  return ratingLevel.success;
};

const Review: FC<IProps> = ({review, className}) => {
  const {id, user, rating, text} = review;
  const ratingLevel = getRatingLevel(rating);

  return (
    <div className={cx('review', className)} id={id}>
      <h4>Пользователь: {user}</h4>
      <p>
        Рейтинг: <span className={cx('rating', `${ratingLevel}`)}>{rating}</span>
      </p>
      {Boolean(text?.length) && <p>Отзыв: {text}</p>}
    </div>
  );
};

export default Review;
