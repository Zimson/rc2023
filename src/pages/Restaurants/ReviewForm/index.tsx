import {useReducer, FC, ChangeEvent, Dispatch} from 'react';
import classNames from 'classnames/bind';

import Counter from '../../../components/Counter';
import Button from '../../../components/Button';

import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const MIN_SCORE = 1;
const MAX_SCORE = 5;
const SCORING_STEP = 0.5;

enum ACTION_TYPE {
  CHANGE_NAME = 'CHANGE_NAME',
  DECREMENT_SCORE = 'DECREMENT_SCORE',
  INCREMENT_SCORE = 'INCREMENT_SCORE',
  CHANGE_REVIEW = 'CHANGE_REVIEW',
}

interface IAction {
  type: ACTION_TYPE;
  payload: unknown;
}

interface IState {
  name: string;
  score: number;
  review: string;
}

const initialState = {
  name: '',
  score: MIN_SCORE,
  review: '',
};

const reducer = (state: IState, action: IAction): IState => {
  const {type, payload} = action;

  switch (type) {
    case ACTION_TYPE.CHANGE_NAME:
      return {...state, name: payload as string};

    case ACTION_TYPE.DECREMENT_SCORE:
      return {...state, score: payload as number};

    case ACTION_TYPE.INCREMENT_SCORE:
      return {...state, score: payload as number};

    case ACTION_TYPE.CHANGE_REVIEW:
      return {...state, review: payload as string};

    default:
      return state;
  }
};

const createCtrlHandler =
  (actionType: ACTION_TYPE, dispatch: Dispatch<IAction>) =>
  (
    handlerPayload:
      | number
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    dispatch({
      type: actionType,
      payload:
        typeof handlerPayload === 'number'
          ? handlerPayload
          : handlerPayload.target.value,
    });
  };

const ReviewForm: FC<IProps> = ({title = 'Форма отзыва', className}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeName = createCtrlHandler(ACTION_TYPE.CHANGE_NAME, dispatch);

  const handleDecrementScoring = createCtrlHandler(
    ACTION_TYPE.DECREMENT_SCORE,
    dispatch,
  );

  const handleIncrementScoring = createCtrlHandler(
    ACTION_TYPE.INCREMENT_SCORE,
    dispatch,
  );

  const handleChangeReview = createCtrlHandler(
    ACTION_TYPE.CHANGE_REVIEW,
    dispatch,
  );

  const handleSubmit = () => ({});

  return (
    <div className={cx('review-form', className)}>
      <h3 className={cx('title')}>{title}</h3>
      <form className={cx('form')}>
        <div className={cx('form-group')}>
          <label htmlFor="name">Ваше имя:</label>
          <input
            id="name"
            value={state.name}
            onChange={handleChangeName}
            type="text"
            placeholder="Введите своё имя"
          />
        </div>
        <div className={cx('form-group')}>
          <span>Ваша оценка:</span>
          <Counter
            min={MIN_SCORE}
            max={MAX_SCORE}
            step={SCORING_STEP}
            count={state.score}
            onDecrement={handleDecrementScoring}
            onIncrement={handleIncrementScoring}
          />
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="review">Ваш отзыв</label>
          <textarea
            id="review"
            value={state.review}
            onChange={handleChangeReview}
            placeholder="Введите свой отзыв"
          />
        </div>
        <Button
          text="Оставить отзыв"
          type="submit"
          onClick={handleSubmit}
          className={cx('submit-button')}
        />
      </form>
    </div>
  );
};

export default ReviewForm;
