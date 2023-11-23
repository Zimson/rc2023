import Restaurants from './pages/Restaurants';
import IRestaurant from './pages/Restaurants/Restaurant/IRestaurant.ts';
import IAppProps from './IAppProps.ts';


const App = <T extends object>({pageData}: IAppProps<T>) => (
  <Restaurants restaurants={pageData as IRestaurant[]} />
);

export default App;
