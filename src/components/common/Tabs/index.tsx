import {FC} from 'react';

import UnorderedList, {IItem} from '../UnorderedList';
import Tab from '../Tab';
import styles from './styles.module.css';

interface ITabsProps {
  items: IItem[];
  onTabClick: (item: IItem) => void;
}

const Tabs: FC<ITabsProps> = ({items, onTabClick}) => {
  const onChange = (item: IItem) => () => {
    onTabClick(item);
  };

  return (
    <UnorderedList
      items={items}
      className={styles.tabs}
      renderItem={(item: IItem) => (
        <Tab
          text={item.text as string}
          onClick={onChange(item)}
        />
      )}
    />
  );
};

export default Tabs;
