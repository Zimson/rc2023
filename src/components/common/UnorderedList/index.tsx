import {FC, ReactNode} from 'react';

export interface IItem {
  id: string;
  [key: string]: unknown;
}

export interface IListProps {
  items: IItem[];
  renderItem: (item: IItem) => ReactNode;
  className?: string;
}

const UnorderedList: FC<IListProps> = ({items, className, renderItem}) => (
  <ul className={className}>
    {items.map(item => (
      <li key={item.id}>{renderItem(item)}</li>
    ))}
  </ul>
);

export default UnorderedList;
