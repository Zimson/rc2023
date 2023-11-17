import {FC} from 'react';

import UnorderedList, {IItem} from '../UnorderedList';
import Tab from '../Tab';

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
