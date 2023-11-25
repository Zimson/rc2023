import IProps from './props.ts';

import IListItem from '../interfaces/IListItem.ts';

const UnorderedList = <T extends IListItem>({
  items,
  className,
  renderItem,
}: IProps<T>) => (
  <ul className={className}>
    {items.map(item => (
      <li key={item.id}>{renderItem(item)}</li>
    ))}
  </ul>
);

export default UnorderedList;
