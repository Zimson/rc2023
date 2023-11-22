import {FC} from 'react';

import IReview from './IReview.ts';

interface IReviewProps {
  review: IReview;
}

const Review: FC<IReviewProps> = ({review}) => {
  const {id,user, rating, text} = review;

  return (
    <div id={id}>
      <h4>Пользователь: {user}</h4>
      <p>Рейтинг: {rating}</p>
      {Boolean(text?.length) && (
        <p>Отзыв: {text}</p>
      )}
    </div>
  );
};

export default Review;
