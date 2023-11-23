import {ReactNode} from 'react';

interface IListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  className?: string;
}

export default IListProps;
