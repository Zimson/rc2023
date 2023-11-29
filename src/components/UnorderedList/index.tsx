import IListProps from './IListProps.ts';
import IListItem from './IListItem.ts';

const UnorderedList = <T extends IListItem>({
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
