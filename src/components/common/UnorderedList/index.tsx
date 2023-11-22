import IListProps from './IListProps.ts';


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
