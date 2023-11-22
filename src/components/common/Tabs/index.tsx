import UnorderedList from '../UnorderedList';
import Tab from '../Tab';
import styles from './styles.module.css';

export interface ITabItem {
  id: string;
  text: string;
}

interface ITabsProps<T> {
  items: T[];
  onTabClick: (item: T) => void;
}

const Tabs = <T extends ITabItem>({items, onTabClick}: ITabsProps<T>) => {
  const handleClick = (item: T) => () => {
    onTabClick(item);
  };

  return (
    <UnorderedList
      items={items}
      className={styles.tabs}
      renderItem={(item: T) => (
        <Tab text={item.text} onClick={handleClick(item)} />
      )}
    />
  );
};

export default Tabs;
