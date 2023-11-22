import ITabItem from './ITabItem.ts';

interface ITabsProps<T> {
  items: T[];
  onTabClick: (item: ITabItem) => void;
  className?: string;
}

export default ITabsProps;
