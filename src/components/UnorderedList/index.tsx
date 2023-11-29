import IProps from './props.ts';
import classNames from 'classnames/bind';

import IListItem from '../interfaces/IListItem.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const UnorderedList = <T extends IListItem>({
  items,
  className,
  renderItem,
}: IProps<T>) => (
  <ul className={cx(className)}>
    {items.map(item => (
      <li key={item.id}>{renderItem(item)}</li>
    ))}
  </ul>
);

export default UnorderedList;
