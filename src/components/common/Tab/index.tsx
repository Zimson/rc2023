import {FC, MouseEventHandler} from 'react';

interface ITabProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Tab: FC<ITabProps> = ({text, onClick, className}) => (
  <button onClick={onClick} className={className}>
    {text}
  </button>
);

export default Tab;
