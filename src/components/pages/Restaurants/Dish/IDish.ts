import {IListItem} from '../../../common/UnorderedList';

interface IDish extends IListItem {
  name: string;
  price: string;
  ingredients?: string[];
}

export default IDish;
