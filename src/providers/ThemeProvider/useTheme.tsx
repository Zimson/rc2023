import {useContext} from 'react';

import ThemeContext from './context.tsx';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
