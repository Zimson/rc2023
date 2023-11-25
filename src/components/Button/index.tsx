import {FC} from 'react';

import IButtonProps from './IButtonProps.ts';

const Button: FC<IButtonProps> = ({text, onClick, className, disabled}) => (
  <button onClick={onClick} className={className} disabled={disabled}>
    {text}
  </button>
);

export default Button;
