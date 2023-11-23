import {ReactNode} from 'react';

export interface IListItem {
  id: string;
}

interface IListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  className?: string;
}

const UnorderedList = <T extends {id: string}>({
  items,
  className,
  renderItem,
}: IListProps<T>) => (
  <ul className={className}>
    {items.map(item => (
      <li key={item.id}>{renderItem(item)}</li>
    ))}
  </ul>
);

export default UnorderedList;
