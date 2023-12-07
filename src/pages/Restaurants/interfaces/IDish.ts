import IListItem from '../../../interfaces/IListItem.ts';

interface IDish extends IListItem {
  name: string;
  price: string;
  ingredients?: string[];
}

export default IDish;
