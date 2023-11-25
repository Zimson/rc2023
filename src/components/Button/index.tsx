import {FC} from 'react';

import IProps from './props.ts';

const Button: FC<IProps> = ({text, onClick, className, disabled}) => (
  <button onClick={onClick} className={className} disabled={disabled}>
    {text}
  </button>
);

export default Button;
