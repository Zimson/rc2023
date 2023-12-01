import ITab from '../../interfaces/ITab.ts';
import ITheme from '../../interfaces/ITheme.ts';

interface IProps<T> extends ITheme {
  items: T[];
  onTabClick: (item: ITab) => void;
  className?: string;
}

export default IProps;
