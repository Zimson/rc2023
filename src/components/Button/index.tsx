import {FC} from 'react';

import IButtonProps from './IButtonProps.ts';

const Button: FC<IButtonProps> = ({text, onClick, className}) => (
  <button onClick={onClick} className={className}>
    {text}
  </button>
);

export default Button;
