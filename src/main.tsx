import ReactDOM from 'react-dom/client';

import {restaurants} from './constants/mock.ts';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(<App pageData={restaurants} />);
