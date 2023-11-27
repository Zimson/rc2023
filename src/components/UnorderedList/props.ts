import {ReactNode} from 'react';

interface IProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  className?: string;
}

export default IProps;
