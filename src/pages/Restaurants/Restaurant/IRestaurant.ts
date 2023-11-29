import IDish from '../Dish/IDish.ts';
import IReview from '../Review/IReview.ts';

interface IRestaurant {
  id: string;
  name: string;
  menu: IDish[];
  reviews: IReview[];
}

export default IRestaurant;
