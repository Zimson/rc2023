import {FC} from 'react';

import Button from '../Button';
import ITabProps from './ITabProps.ts';

const Tab: FC<ITabProps> = ({text, onClick, className}) => (
  <Button onClick={onClick} className={className} text={text}/>
);

export default Tab;
