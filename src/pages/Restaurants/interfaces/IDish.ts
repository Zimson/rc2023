import IListItem from '../../../components/interfaces/IListItem.ts';

interface IDish extends IListItem {
  name: string;
  price: string;
  ingredients?: string[];
}

export default IDish;
