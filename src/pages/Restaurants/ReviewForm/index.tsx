import {useReducer, FC, ChangeEvent, FormEvent, useId} from 'react';
import classNames from 'classnames/bind';

import Counter from '../../../components/Counter';
import Button from '../../../components/Button';

import IProps from './props.ts';
import IReview from '../interfaces/IReview.ts';
import {Color as ButtonColor} from '../../../components/Button/props.ts';

import styles from './styles.module.css';
import useTheme from '../../../providers/ThemeProvider/useTheme.tsx';

const cx = classNames.bind(styles);

const MIN_RATING = 1;
const MAX_RATING = 5;
const SCORING_STEP = 0.5;

enum ACTION_TYPE {
  CHANGE_NAME = 'CHANGE_NAME',
  DECREMENT_RATING = 'DECREMENT_RATING',
  INCREMENT_RATING = 'INCREMENT_RATING',
  CHANGE_REVIEW = 'CHANGE_REVIEW',
  SUBMIT_START = 'SUBMIT_START',
  SUBMIT_FINISH = 'SUBMIT_FINISH',
  RESET = 'RESET',
}

interface IAction {
  type: ACTION_TYPE;
  payload?: unknown;
}

type IState = Omit<IReview, 'id'> & {
  isSubmitting: boolean;
};

const initialState: IState = {
  user: '',
  rating: MIN_RATING,
  text: '',
  isSubmitting: false,
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

    case ACTION_TYPE.SUBMIT_START:
      return {...state, isSubmitting: true};

    case ACTION_TYPE.SUBMIT_FINISH:
      return {...state, isSubmitting: false};

    case ACTION_TYPE.RESET:
      return initialState;

    default:
      return state;
  }
};

const ReviewForm: FC<IProps> = ({
  title = 'Форма отзыва',
  onSubmit,
  className,
}) => {
  const {theme} = useTheme();

  const [state, dispatch] = useReducer(reducer, initialState);
  const userId = `${state.user}-${useId()}`;

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: ACTION_TYPE.CHANGE_NAME, payload: event.target.value});
  };

  const handleDecrementScoring = (rating: number) => {
    dispatch({type: ACTION_TYPE.DECREMENT_RATING, payload: rating});
  };

  const handleIncrementScoring = (rating: number) => {
    dispatch({type: ACTION_TYPE.INCREMENT_RATING, payload: rating});
  };

  const handleChangeReview = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({type: ACTION_TYPE.CHANGE_REVIEW, payload: event.target.value});
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({type: ACTION_TYPE.SUBMIT_START});

    onSubmit(
      {
        id: userId,
        user: state.user,
        rating: state.rating,
        text: state.text,
      },
      () => {
        dispatch({type: ACTION_TYPE.SUBMIT_FINISH});
        dispatch({type: ACTION_TYPE.RESET});
      },
    );
  };

  return (
    <div className={cx('review-form', className)}>
      <h3 className={cx('title')}>{title}</h3>
      <form
        className={cx('form', {'is-submitting': state.isSubmitting})}
        onSubmit={handleSubmit}
      >
        <div className={cx('form-group')}>
          <span>Ваша оценка:</span>
          <Counter
            min={MIN_RATING}
            max={MAX_RATING}
            step={SCORING_STEP}
            count={state.rating}
            onDecrement={handleDecrementScoring}
            onIncrement={handleIncrementScoring}
            theme={theme}
          />
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="user" className={cx('label')}>
            Ваше имя:
          </label>
          <input
            id="user"
            value={state.user}
            onChange={handleChangeName}
            className={cx('input')}
            type="text"
            placeholder="Введите своё имя"
            required
          />
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="text" className={cx('label')}>
            Ваш отзыв
          </label>
          <textarea
            id="text"
            value={state.text}
            onChange={handleChangeReview}
            className={cx('input', 'review-input')}
            placeholder="Введите свой отзыв"
          />
        </div>
        <Button
          text="Оставить отзыв"
          type="submit"
          className={cx('submit-button')}
          color={ButtonColor.danger}
          theme={theme}
        />
      </form>
    </div>
  );
};

export default ReviewForm;
