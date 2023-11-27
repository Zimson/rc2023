import IDish from './IDish.ts';
import IReview from './IReview.ts';

interface IRestaurant {
  id: string;
  name: string;
  menu: IDish[];
  reviews: IReview[];
}

export default IRestaurant;
