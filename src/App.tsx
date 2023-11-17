import {FC} from 'react';

interface IAppProps<T> {
  pageData: T[];
}

const App: FC<IAppProps<object>> = ({pageData}) => <div>{JSON.stringify(pageData)}</div>;

export default App;
