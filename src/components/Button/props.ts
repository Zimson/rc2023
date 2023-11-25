import {MouseEventHandler} from 'react';

interface Props {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export default Props;
