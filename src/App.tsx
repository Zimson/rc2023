import Layout from './components/Layout';
import Restaurants from './pages/Restaurants';
import IRestaurant from './pages/Restaurants/interfaces/IRestaurant.ts';
import ThemeProvider from './providers/ThemeProvider';

import IAppProps from './appProps.ts';

import './styles/common.css';

const App = <T extends object>({pageData}: IAppProps<T>) => (
  <ThemeProvider>
    <Layout>
      <Restaurants restaurants={pageData as IRestaurant[]} />
    </Layout>
  </ThemeProvider>
);

export default App;
