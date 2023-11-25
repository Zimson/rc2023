import {FC} from 'react';

import Button from '../Button';

import IProps from './props.ts';

const Tab: FC<IProps> = ({text, onClick, className}) => (
  <Button onClick={onClick} className={className} text={text}/>
);

export default Tab;
