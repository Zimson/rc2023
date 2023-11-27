import ITab from '../interfaces/ITab.ts';

interface IProps<T> {
  items: T[];
  onTabClick: (item: ITab) => void;
  className?: string;
}

export default IProps;
