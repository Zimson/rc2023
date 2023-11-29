import IListItem from '../../../components/UnorderedList/IListItem.ts';

interface IDish extends IListItem {
  name: string;
  price: string;
  ingredients?: string[];
}

export default IDish;