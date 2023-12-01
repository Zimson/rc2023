import Layout from './components/Layout';
import Restaurants from './pages/Restaurants';
import IRestaurant from './pages/Restaurants/interfaces/IRestaurant.ts';

import IAppProps from './appProps.ts';

import './styles/common.css';

const App = <T extends object>({pageData}: IAppProps<T>) => (
  <Layout>
    <Restaurants restaurants={pageData as IRestaurant[]} />
  </Layout>
);

export default App;
