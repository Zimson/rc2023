import {MouseEventHandler} from 'react';

interface Props {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  disabled?: boolean;
}

export default Props;
