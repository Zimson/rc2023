import {FC} from 'react';

import IProps from './props.ts';

const Button: FC<IProps> = ({
  text,
  onClick,
  className,
  disabled,
  type = 'button',
}) => (
  <button
    onClick={onClick}
    className={className}
    disabled={disabled}
    type={type}
  >
    {text}
  </button>
);

export default Button;
