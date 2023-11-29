import ITab from '../Tab/ITab.ts';

interface ITabsProps<T> {
  items: T[];
  onTabClick: (item: ITab) => void;
  className?: string;
}

export default ITabsProps;
