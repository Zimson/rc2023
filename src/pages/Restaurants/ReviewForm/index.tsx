import {useReducer, FC, ChangeEvent, FormEvent, useId} from 'react';
import classNames from 'classnames/bind';

import Counter from '../../../components/Counter';
import Button from '../../../components/Button';

import IProps from './props.ts';
import IReview from '../interfaces/IReview.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const MIN_RATING = 1;
const MAX_RATING = 5;
const SCORING_STEP = 0.5;

enum ACTION_TYPE {
  CHANGE_NAME = 'CHANGE_NAME',
  DECREMENT_RATING = 'DECREMENT_RATING',
  INCREMENT_RATING = 'INCREMENT_RATING',
  CHANGE_REVIEW = 'CHANGE_REVIEW',
}

interface IAction {
  type: ACTION_TYPE;
  payload: unknown;
}

type IState = Omit<IReview, 'id'>;
const initialState: IState = {
  user: '',
  rating: MIN_RATING,
  text: '',
};

const reducer = (state: IState, action: IAction): IState => {
  const {type, payload} = action;

  switch (type) {
    case ACTION_TYPE.CHANGE_NAME:
      return {...state, user: payload as string};

    case ACTION_TYPE.DECREMENT_RATING:
      return {...state, rating: payload as number};

    case ACTION_TYPE.INCREMENT_RATING:
      return {...state, rating: payload as number};

    case ACTION_TYPE.CHANGE_REVIEW:
      return {...state, text: payload as string};

    default:
      return state;
  }
};

const ReviewForm: FC<IProps> = ({
  title = 'Форма отзыва',
  onSubmit,
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const userId = `${state.user}-${useId()}`;

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: ACTION_TYPE.CHANGE_NAME, payload: event.target.value});
  }

  const handleDecrementScoring = (rating: number) => {
    dispatch({type: ACTION_TYPE.DECREMENT_RATING, payload: rating});
  }

  const handleIncrementScoring = (rating: number) => {
    dispatch({type: ACTION_TYPE.INCREMENT_RATING, payload: rating});
  }

  const handleChangeReview = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({type: ACTION_TYPE.CHANGE_REVIEW, payload: event.target.value});
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({id: userId, ...state});
  };

  return (
    <div className={cx('review-form', className)}>
      <h3 className={cx('title')}>{title}</h3>
      <form className={cx('form')} onSubmit={handleSubmit}>
        <div className={cx('form-group')}>
          <label htmlFor="user">Ваше имя:</label>
          <input
            id="user"
            value={state.user}
            onChange={handleChangeName}
            type="text"
            placeholder="Введите своё имя"
            required
          />
        </div>
        <div className={cx('form-group')}>
          <span>Ваша оценка:</span>
          <Counter
            min={MIN_RATING}
            max={MAX_RATING}
            step={SCORING_STEP}
            count={state.rating}
            onDecrement={handleDecrementScoring}
            onIncrement={handleIncrementScoring}
          />
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="text">Ваш отзыв</label>
          <textarea
            id="text"
            value={state.text}
            onChange={handleChangeReview}
            placeholder="Введите свой отзыв"
          />
        </div>
        <Button
          text="Оставить отзыв"
          type="submit"
          className={cx('submit-button')}
        />
      </form>
    </div>
  );
};

export default ReviewForm;
