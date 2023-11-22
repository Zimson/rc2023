import IMenu from './IMenu.ts';
import IReview from './IReview.ts';

interface IRestaurant {
  id: string;
  name: string;
  menu: IMenu[];
  reviews: IReview[];
}

export default IRestaurant;
