import {FC} from 'react';

import Restaurants from './components/pages/Restaurants';
import IRestaurant from './components/pages/Restaurants/models/IRestaurant.ts';

const App: FC<{pageData: IRestaurant[]}> = ({pageData}) => (
  <Restaurants restaurants={pageData} />
);

export default App;
