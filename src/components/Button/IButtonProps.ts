import {MouseEventHandler} from 'react';

interface IButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default IButtonProps;
