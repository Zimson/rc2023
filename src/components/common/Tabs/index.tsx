import classNames from 'classnames/bind';

import UnorderedList from '../UnorderedList';
import Tab from '../Tab';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

export interface ITabItem {
  id: string;
  text: string;
}

interface ITabsProps<T> {
  items: T[];
  onTabClick: (item: T) => void;
  className?: string;
}

const Tabs = <T extends ITabItem>({items, onTabClick, className}: ITabsProps<T>) => {
  const handleClick = (item: T) => () => {
    onTabClick(item);
  };

  return (
    <UnorderedList
      items={items}
      className={cx('tabs', className)}
      renderItem={(item: T) => (
        <Tab text={item.text} onClick={handleClick(item)} />
      )}
    />
  );
};

export default Tabs;
