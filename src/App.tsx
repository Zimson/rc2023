import Restaurants from './pages/Restaurants';
import IRestaurant from './pages/Restaurants/interfaces/IRestaurant.ts';

import IAppProps from './appProps.ts';

const App = <T extends object>({pageData}: IAppProps<T>) => (
  <Restaurants restaurants={pageData as IRestaurant[]} />
);

export default App;
